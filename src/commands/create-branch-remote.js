require('colors');
const shell = require('shelljs');

const createBranchRemote = () => {
  const branchName = process.argv[3];

  if (!branchName.match(/^(?!@$|build-|\/|.*([/.]\.|\/\/|@\{|\\))[^\000-\037\177 ~^:?*[]+\/[^\000-\037\177 ~^:?*[]+(?<!\.lock)$/g)){
    console.log('Not valid branch name'.bgRed);
    console.log('For more information check this page:'.magenta);
    console.log('https://stackoverflow.com/questions/12093748/how-do-i-check-for-valid-git-branch-names'.underline.bgBlue);
    process.exit(1);
  }

  shell.exec(`git pull`);
  shell.exec(`git checkout -b ${branchName}`);
  shell.exec(`git push --set-upstream origin ${branchName}`);
}

module.exports = createBranchRemote;