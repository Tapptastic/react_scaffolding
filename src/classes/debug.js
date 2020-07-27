import chalk from "chalk";

class Debug {
  static write(str) {
    console.log(chalk.whiteBright(str));
  }

  static error(str) {
    console.log(chalk.red(str));
  }

  static success(str) {
    console.log(chalk.green(str));
  }

  static info(str) {
    console.log(chalk.yellow(str));
  }
}

export default Debug;
