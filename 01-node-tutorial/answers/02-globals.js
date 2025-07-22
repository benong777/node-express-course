// __dirname  - path to current directory                                                                             
// __filename - file name 
// require    - function to use modules (CommonJS)                                                                    
// module     - info about current module (file)                                                                      
// process    - info about env where the program is being executed  


console.log(`\nCurrent directory:\n${__dirname}`);
console.log(`\nFilename:\n${__filename}`);
console.log(`\nShell:\n${process.env.SHELL}\n`);
