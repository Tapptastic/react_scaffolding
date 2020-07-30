class Importer {
  constructor(imports) {
    this.name = imports.name || imports;
    this.modules = imports.modules || [];
    this.self = true;
    this.isSimple = typeof imports === "string";
  }
}

export default Importer;
