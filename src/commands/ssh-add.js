require('colors');
const shell = require('shelljs');

const sshAdd = () => {
  shell.exec('ssh-agent bash');
  shell.exec('ssh-add ~/.ssh/id_rsa');
}

module.exports = sshAdd;