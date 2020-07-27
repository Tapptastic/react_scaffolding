import fs, { write } from "fs";
import Debug from "./debug";
import {
  upperCaseFirst,
  writeFile,
  writeImport,
  writeExport,
  hasProperties,
  createDirectoryRecur,
  writeContent,
} from "./utility";

class Config {
  constructor() {
    this.data = "";
    this.directory = "./src/components";
  }

  hasNode(name) {
    return this.data[name] ? true : false;
  }

  build(node) {
    const configNode = this.data[node.name];

    if (!hasProperties(configNode)) return null;

    for (let file of configNode.files) {
      const filePath = `${this.directory}/${node.value}/${file.name}`;

      if (!fs.existsSync(filePath)) {
        createDirectoryRecur(`${this.directory}/${upperCaseFirst(node.value)}`);
      }

      for (let import_ of file.imports) {
        const mod = {
          name: "",
          path: "",
        };

        if (this.isLocalModule(import_)) {
          const splitName = import_.split("/");
          mod.name = upperCaseFirst(splitName[splitName.length - 1]);
          mod.path = import_;
        } else {
          mod.name = upperCaseFirst(import_);
          mod.path = import_;
        }

        console.log("Checking filePath" + filePath);

        writeImport(filePath, mod);
      }

      writeContent(filePath, upperCaseFirst(node.value));

      writeExport(filePath, upperCaseFirst(node.value));
    }
  }

  isLocalModule(mod) {
    return mod.startsWith(".");
  }

  createDefaultConfig() {
    writeFile(
      "./rsconfig.json",
      JSON.stringify({
        directory: "./src/components",
        hook: {
          files: [
            {
              name: "index.js",
              imports: [],
            },
            {
              name: "hooks.js",
              imports: [],
            },
          ],
        },
        component: {
          files: [
            {
              name: "index.js",
              imports: ["react", "./grant", "./Components/Person/Grant"],
            },
          ],
        },
      })
    );
  }

  read() {
    const filePath = `${process.env.PWD}/rsconfig.json`;

    const exists = fs.existsSync(filePath);

    if (!exists) {
      Debug.error(`Unable to find config file at ${filePath}`);
      Debug.info("Creating default profile");

      this.createDefaultConfig();
    }

    this.data = fs.readFileSync(filePath, "utf-8");

    if (!this.data) {
      return null;
    }

    this.data = JSON.parse(this.data);
    return this;
  }
}

export default Config;
