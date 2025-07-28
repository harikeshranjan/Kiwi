import chalk from "chalk";
import fs from "fs";
import path from "path";

export async function createJavaProject(projectPath, projectName) {
  const isCurrentDir = projectName === ".";

  if (!isCurrentDir) {
    fs.mkdirSync(projectPath, { recursive: true });
  }

  console.log(chalk.green(`Creating Java project: ${isCurrentDir ? "current directory" : projectName}`));

  // Create Main.java
  const mainFileContent = `package ${isCurrentDir ? "myproject" : projectName};

public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World!");
  }
}
`;

  fs.writeFileSync(path.join(projectPath, "Main.java"), mainFileContent);

  console.log(chalk.blue(`\n✅ Java project created successfully!`));
  console.log(chalk.gray(`\n👉 To start:`));
  if (!isCurrentDir) {
    console.log(`   cd ${projectName}`)
  }
  console.log(`   Open and edit 'Main.java'`);
}

