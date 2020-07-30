/* 
    Want this class to reflect a File

    File / Component
        - Name
        - Path
        - Imports
        - Content
        - Export
        - Write(): this would write the file to the filePath (this.path + this.name) 
*/

class File {
  constructor(name, path) {
    this.name = name;
    this.path = path;
    this.imports = [];
    this.tempImports = [];
    this.export = "";
    this.content = "";
  }

  write() {
    /* 
    
      FOR EACH IMPORT 
        IF SIMPLE 
          THEN WRITE
        ELSE FOR EACH MODULE
          THEN WRITE
    
    */
  }
}

export default File;
