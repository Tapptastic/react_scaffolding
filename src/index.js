#!/usr/bin/env node
import Arguments from "./classes/arguments";
import Config from "./classes/config";
import Debug from "./classes/debug";

const args = new Arguments().getAll(process.argv);
const config = new Config().read();

// TODO add more debug messages
// TODO add a -help function
// TODO see about getting more configs for things like: Content, non default imports {name: useState, module: react} this might require something like a parser to check the files to see if we already have that or a smarter way of handing imports

for (let a of args.arguments) {
  if (config.hasNode(a.name)) {
    config.build(a);
  } else {
    Debug.info(
      `You have no config for ${a.name}, if you wish to use this then create an entry in rsconfig.json`
    );
  }
}
