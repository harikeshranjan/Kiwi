#!/usr/bin/env node
import { Command } from "commander";
import path from "path"
import fs from 'fs'
import { createExpressServer } from "./commands/create/express-server/createExpressServer.js";
import { createJavaProject } from "./commands/create/java-project/createJavaProject.js";
import { createNewFile } from "./commands/new/file.js";

const program = new Command();

program
  .name("kiwi")
  .description("Kiwi CLI Tool")
  .version("1.0.0")

program
  .command("create")
  .argument('<template>', 'template type, e.g., express-server')
  .argument('<project_name', 'name of the project (or "." for current directory)')
  .action((template, projectName) => {
    const isCurrentDir = projectName === ".";
    const projectPath = isCurrentDir
      ? process.cwd()
      : path.join(process.cwd(), projectName);

    if (template == 'express-server') {
      createExpressServer(projectName)
    } else if (template == 'java-project') {
      createJavaProject(projectPath, projectName, isCurrentDir);
    } else {
      console.log(`❌ Unknown template: ${template}`);
    }
  })

program
  .command("new")
  .description("Create a new file with a specific extension")
  .action((extension) => {
    console.log(`Creating a new .${extension} file...`);

    createNewFile()
      .then(fileData => {
        if (fileData) {
          const filePath = path.join(process.cwd(), fileData.fileName);

          if (fs.existsSync(filePath)) {
            console.log(`⚠️ File already exists: ${filePath}`);
            return;
          }

          fs.writeFileSync(filePath, fileData.content.trimStart());

          console.log(`✅ Created file: ${fileData.fileName}`);
        }
      })
      .catch(err => {
        console.error(`❌ Error creating file: ${err.message}`);
      });
  });

program
  .command("version")
  .description("Show the current version")
  .action(() => {
    console.log("v1.2.1")
  })

program.parse(process.argv)
