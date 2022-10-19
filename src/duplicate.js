/* eslint-disable */
const fs = require('fs');
const path = require('path')

const type = process.argv[2] === '-t' ? 'tokens' : 'protocols';
const name = process.argv[3] ? process.argv[3] : process.argv[2];

const source = path.join(__dirname, type, 'TEMPLATE.ts');
const destination = path.join(__dirname, type, `${name}.ts`);

fs.copyFile(source, destination, (err) => {
  if (err) {
    console.log('Something went wrong, please duplicate file manually')
    throw err;
  }
  console.log(`\n🎉  Created file src/${type}/${name}.ts\n`);
});
