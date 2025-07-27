// File: commands/create/express-server/typescript/index.js
import fs from "fs";
import path from "path";
import chalk from "chalk";
import { execa } from "execa";

export async function createExpressServerTS(projectName, projectPath, isCurrentDir) {
  fs.mkdirSync(projectPath, { recursive: true });

  console.log(chalk.green(`\n📁 Creating TypeScript project in: ${projectPath}\n`));

  await execa("npm", ["init", "-y"], { cwd: projectPath, stdio: "inherit" });
  await execa("npm", ["install", "express", "dotenv", "mongoose", "nodemon", "cors", "rimraf", "pre-commit"], {
    cwd: projectPath,
    stdio: "inherit",
  });
  await execa("npm", ["install", "-D", "typescript", "@types/node", "@types/express", "ts-node-dev"], {
    cwd: projectPath,
    stdio: "inherit",
  });
  await execa("git", ["init"], { cwd: projectPath, stdio: "inherit" });

  fs.writeFileSync(
    path.join(projectPath, "tsconfig.json"),
    JSON.stringify(
      {
        compilerOptions: {
          target: "es6",
          module: "commonjs",
          rootDir: "./src",
          outDir: "./dist",
          esModuleInterop: true,
          strict: true,
        },
        include: ["src/**/*.ts"],
        exclude: ["node_modules"],
      },
      null,
      2
    )
  );

  fs.writeFileSync(path.join(projectPath, ".env"), `PORT=5000\nMONGODB_URI=\n`);
  fs.writeFileSync(path.join(projectPath, ".gitignore"), `node_modules\n.env\n`);

  fs.writeFileSync(
    path.join(projectPath, "vercel.json"),
    `{
  "version": 1,
  "builds": [
    {
      "src": "dist/index.js",
      "use": "@vercel/node",
      "config": {
        "includeFiles": ["dist/**"]
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "dist/index.js"
    }
  ]
}`
  );

  const srcDir = path.join(projectPath, "src");
  fs.mkdirSync(srcDir, { recursive: true });
  fs.writeFileSync(
    path.join(srcDir, "index.ts"),
    `import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from TypeScript Express server!');
});

app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});`
  );

  console.log(chalk.blue(`\n✅ TypeScript Express server created successfully!`));
  console.log(chalk.gray(`\n👉 To start:`));
  console.log(`   cd ${isCurrentDir ? "." : projectName}`);
  console.log(`   npx ts-node-dev src/index.ts`);
}
