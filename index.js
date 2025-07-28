#!/usr/bin/env node
import { Command } from "commander";
import { createExpressServer } from "./commands/create/express-server/createExpressServer.js";

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
    if (template == 'express-server') {
      createExpressServer(projectName)
    } else {
      console.log(`❌ Unknown template: ${template}`);
    }
  })

program
  .command("version")
  .description("Show the current version")
  .action(() => {
    console.log("v1.0.0")
  })

program.parse(process.argv)
