require('colors');
const shell = require('shelljs');

const dummyScript = () => {
  console.log('Dummy script starts!!!'.green);
  console.log('List current directory:'.yellow);
  shell.exec('ls -a');
  console.log('Yay, a rainbow'.rainbow);
  console.log(`I'm a zebra!!!`.zebra);
  console.log('Dummy script end!!!'.bgRed);
}

module.exports = dummyScript;