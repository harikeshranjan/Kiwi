import inquirer from "inquirer";
import { exnList, getContentUsingFilename } from "./extensionDataList.js";

export async function createNewFile() {
  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: "fileType",
      message: "Enter the file extension you want to create (e.g., js, ts, cpp): ",
    },
    {
      type: 'input',
      name: "fileName",
      message: "Enter the file name (without extension): ",
    }
  ])

  const { fileType, fileName } = answer;

  const template = exnList.find(e => e.extension === fileType);

  if (!template) {
    console.log(`❌ Unsupported file type: ${fileType}`);
    return;
  }

  const finalContent = getContentUsingFilename(template.content, fileName);

  return {
    fileName: `${fileName}.${fileType}`,
    content: finalContent
  };
}