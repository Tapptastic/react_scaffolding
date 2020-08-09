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
  hasProperty,
} from "./utility";

import File from "./file";
import Importer from "./importer";

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
      const f = new File(file.name, filePath);

      if (!hasProperty(file, "imports")) return null;

      for (let import_ of file.imports) {
        const mod = {
          name: "",
          path: "",
        };

        const i = new Importer(import_);

        f.imports.push(i);
      }

      console.log(f);
    }
  }

  isSimpleImport(import_) {
    return typeof import_ === "string";
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
