const { readFile, writeFile } = require('fs').promises;

writeFile('./temp.txt', 'This is the first line.\n')
  .then(() => writeFile('./temp.txt', 'This is the second line.\n', {flag: 'a'}))
  .then(() => writeFile('./temp.txt', 'This is the third line.\n',  {flag: 'a'}))
  .then(() => readFile('./temp.txt', 'utf-8'))
  .then((result) => console.log(`\n${result}`))
  .catch((err) => {
    console.log(err);
  })
;