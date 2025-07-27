import path from "path";
import inquirer from "inquirer";
import { createExpressServerTS } from "./typescript/createExpressServerTS.js";
import { createExpressServerJS } from "./javascript/createExpressServerJS.js";

export async function createExpressServer(projectName) {
  const { language } = await inquirer.prompt([
    {
      type: "list",
      name: "language",
      message: "Select project language",
      choices: ["JavaScript", "TypeScript"],
    },
  ]);

  const isCurrentDir = projectName === ".";
  const projectPath = isCurrentDir
    ? process.cwd()
    : path.join(process.cwd(), projectName);

  if (language === "TypeScript") {
    await createExpressServerTS(projectName, projectPath, isCurrentDir);
  } else {
    await createExpressServerJS(projectName, projectPath, isCurrentDir);
  }
}

