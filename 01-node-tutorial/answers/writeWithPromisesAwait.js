const { readFile, writeFile } = require('fs').promises;

// Write
const writer = async () => {
  try {
    await writeFile('./temp.txt', 'This is line 1.\n' );
    await writeFile('./temp.txt', 'This is line 2.\n', {flag: 'a'} );
    await writeFile('./temp.txt', 'This is line 3.\n', {flag: 'a'} );

  } catch(err) {
    console.log(`Write Error:\n${err}`);
  }
};

// Read
const reader = async() => {
  try {
    const result = await readFile('./temp.txt', 'utf-8');
    console.log(`\n${result}`);
  } catch(err) {
    console.log(`Read Error:\n${err}`);
  }
};

const readWrite = async() => {
  await writer();                 // Is a try catch needed here?
  await reader();
};

readWrite();