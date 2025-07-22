const { readFileSync, writeFileSync }  = require('fs');

// Write 1st line
writeFileSync(
    './temporary/fileA.txt', 
    '\nThis is the 1st line.\n',
);

// Append 2nd line
writeFileSync(
    './temporary/fileA.txt', 
    'This is the 2nd line.\n',
    { flag: 'a' }
);

// Append 2nd line
writeFileSync(
    './temporary/fileA.txt', 
    'This is the 3rd line.\n',
    { flag: 'a' }
);

const result = readFileSync('./temporary/fileA.txt', 'utf8');

console.log(result);
