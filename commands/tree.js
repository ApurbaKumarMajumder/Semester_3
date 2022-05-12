function treeFn(){
    console.log("Tree command Executed with the path ", dirPath != undefiend ? dirPath : process.cwd());
}

module.exports = {
    treeFn : treeFn
}