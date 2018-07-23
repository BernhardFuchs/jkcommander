require('colors');
const shell = require('shelljs');

const initUpstreamRepository = () => {
  const remoteRepositoryUrl = process.argv.slice(3);
  
  if (!remoteRepositoryUrl) {
    console.log('No remoteRepositoryUrl provided!'.red);
    process.exit(0);
  }

  console.log(`Uploading to Repository: ${remoteRepositoryUrl}`.green);

  shell.exec(`git add .`);
  shell.exec(`git commit -m "Init Upstream Repository script"`);
  shell.exec(`git remote add origin ${remoteRepositoryUrl}`);
  shell.exec(`git remote -v`);
  shell.exec(`git push --set-upstream origin master`);
};

module.exports = initUpstreamRepository;