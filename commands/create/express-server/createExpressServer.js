import path from "path";
import inquirer from "inquirer";
import { createExpressServerTS } from "./typescript/createExpressServerTS.js";
import { createExpressServerJS } from "./javascript/createExpressServerJS.js";

export async function createExpressServer(projectName) {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "language",
      message: "Select project language",
      choices: ["JavaScript", "TypeScript"],
    },
    {
      type: "list",
      name: "dbName",
      message: "Select the database you will work in",
      choices: ["No database", "MongoDB"]
    }
  ]);

  const { language, dbName } = answers;

  const isCurrentDir = projectName === ".";
  const projectPath = isCurrentDir
    ? process.cwd()
    : path.join(process.cwd(), projectName);

  if (language === "TypeScript") {
    await createExpressServerTS(projectName, projectPath, isCurrentDir, dbName);
  } else {
    await createExpressServerJS(projectName, projectPath, isCurrentDir, dbName);
  }
}

