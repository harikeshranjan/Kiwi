import fs from "fs";
import path from "path";
import chalk from "chalk";
import { execa } from "execa";

export async function createExpressServerJS(projectName, projectPath, isCurrentDir, dbName) {
  fs.mkdirSync(projectPath, { recursive: true });

  console.log(chalk.green(`\n📁 Creating JavaScript project in: ${projectPath}\n`));

  await execa("npm", ["init", "-y"], { cwd: projectPath, stdio: "inherit" });
  await execa("npm", ["install", "express", "dotenv", "nodemon", "cors", "rimraf", "pre-commit"], {
    cwd: projectPath,
    stdio: "inherit",
  });
  await execa("git", ["init"], { cwd: projectPath, stdio: "inherit" });

  if (dbName === "MongoDB") {
    await execa("npm", ["install", "mongoose"], { cwd: projectPath, stdio: "inherit" });
  }

  // Writing .env file
  let dbEnv = "";

  if (dbName === "MongoDB") {
    dbEnv = "MONGODB_URI=";
  } else if (dbName === "PostgreSQL") {
    dbEnv = "POSTGRES_URI=";
  }

  fs.writeFileSync(
    path.join(projectPath, ".env"),
    `PORT=5000\n${dbEnv}\n`
  );


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

  const packageJsonPath = path.join(projectPath, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

  packageJson.scripts = {
    ...packageJson.scripts,
    start: "nodemon src/index.js",
    dev: "nodemon src/index.js",

  };

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));


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
  console.log(`   npm run dev`);
}

