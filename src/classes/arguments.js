import Argument from "./argument";

/* TODO Update the function so it could work like .find(['-p', '-pages', '-c-', '-componet']) ouput: {

 } */

class Arguments {
  constructor() {
    this.arguments = null;
  }

  get(name) {
    for (let arg of this.arguments) {
      console.log(`looking for ${arg.name} against ${name}`);
      if (arg.name.toLowerCase() === name.toLowerCase()) return arg;
    }
    return null;
  }

  getAll(args) {
    const params = [];

    for (let i = 0; i < args.length; i++) {
      if (args[i].startsWith("-")) {
        params.push({
          name: args[i].slice(1),
          value: args[i + 1],
        });
      }
    }

    this.arguments = params;

    return this;
  }
}

export default Arguments;
