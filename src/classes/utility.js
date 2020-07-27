import fs from "fs";

const upperCase = (word, position) =>
  word[position].toUpperCase() + word.slice(position + 1);
const writeLineToFile = (filePath, line) =>
  fs.appendFileSync(filePath, `${line}\n`, "utf-8");

export const upperCaseFirst = (word) => upperCase(word, 0);
export const writeFile = (filePath, fileData) =>
  fs.writeFileSync(filePath, fileData);
export const getCurrentPath = () => process.env.PWD;
export const getCurrentDirPath = () => __dirname;
export const hasProperties = (obj) => Object.keys(obj).length > 0;
export const createDirectoryRecur = (filePath) =>
  fs.mkdirSync(filePath, { recursive: true });

export const writeImport = (filePath, mod) =>
  writeLineToFile(filePath, `import ${mod.name} from '${mod.path}';`);
export const writeExport = (filePath, name) =>
  writeLineToFile(filePath, `export default ${name};`);
export const writeContent = (filePath, name) =>
  writeLineToFile(
    filePath,
    `const ${name} = ({children}) => <div>{children}</div>`
  );
