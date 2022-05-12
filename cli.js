// 1. Take and input
// nodejs cli.js help -> print help command executed
// nodejs cli.js tree -> print tree command executed
// nodejs cli.js organize -> print tree command executed

let helpFnObj = require("./commands/help");
let treeFnObj = require("./commands/organize");
let treeFnObj = require("./commands/tree");
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let dirPath = inputArr[1];
switch (command) {
    case "help" :
        helpFnObj.helpFn();
        break;
    case "tree" :
        console.log("Tree command Executed with the path ", dirPath != undefiend ? dirPath : process.cwd());
        break;
    case "organize" :
        console.log("Organize command executed ", dirPath != undefiend ? dirPath : process.cwd());
        break;
    default:
        console.log("Wrong command . Type help to see the list of all the commands");
}


















