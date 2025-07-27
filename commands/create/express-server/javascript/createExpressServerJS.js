import fs from "fs";
import path from "path";
import chalk from "chalk";
import { execa } from "execa";

export async function createExpressServerJS(projectName, projectPath, isCurrentDir) {
  fs.mkdirSync(projectPath, { recursive: true });

  console.log(chalk.green(`\n📁 Creating JavaScript project in: ${projectPath}\n`));

  await execa("npm", ["init", "-y"], { cwd: projectPath, stdio: "inherit" });
  await execa("npm", ["install", "express", "dotenv", "mongoose", "nodemon", "cors", "rimraf", "pre-commit"], {
    cwd: projectPath,
    stdio: "inherit",
  });
  await execa("git", ["init"], { cwd: projectPath, stdio: "inherit" });

  // Writing .env file
  const envContent = `
PORT=5000
MONGODB_URI=
`;
  fs.writeFileSync(path.join(projectPath, '.env'), envContent);

  // Writing .gitignore file
  const gitIgnoreContent = `
node_modules
.env
`;
  fs.writeFileSync(path.join(projectPath, '.gitignore'), gitIgnoreContent); // ✅ FIXED LINE


  fs.writeFileSync(
    path.join(projectPath, "vercel.json"),
    `{
  "version": 1,
  "builds": [
    {
      "src": "src/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/index.js"
    }
  ]
}`
  );

  const srcDir = path.join(projectPath, "src");
  fs.mkdirSync(srcDir, { recursive: true });
  fs.writeFileSync(
    path.join(srcDir, "index.js"),
    `import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from JavaScript Express server!');
});

app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});`
  );

  console.log(chalk.blue(`\n✅ JavaScript Express server created successfully!`));
  console.log(chalk.gray(`\n👉 To start:`));
  console.log(`   cd ${isCurrentDir ? "." : projectName}`);
  console.log(`   node src/index.js`);
}

