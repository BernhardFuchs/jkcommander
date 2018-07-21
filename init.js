require('colors');
const shell = require('shelljs');

shell.exec('npm link');
console.log('init script successful'.green);