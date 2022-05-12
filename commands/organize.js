function organizeFn(){
    console.log("Organize command executed ", dirPath != undefiend ? dirPath : process.cwd());
}

module.exports = {
    organizeFn: organizeFn
}