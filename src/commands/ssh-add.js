require('colors');
const exec = require('child_process').exec;
const pathToKey = '~/.ssh/id_rsa';

const sshAdd = () => {
  console.log(`Adding ${pathToKey}`.bgGreen);
  exec(`ssh-add ${pathToKey}`,
    (error, stdout, stderr) => {
      if (error !== null) {
        console.log(`${error}`.red);
        process.exit(1);
      }
      console.log(`${stdout}`.green);
      console.log(`${stderr}`.bgRed);
    });
  
}

module.exports = sshAdd;