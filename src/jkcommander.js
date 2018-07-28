#! /usr/bin/env node

require('./autocompletion')();

// Commander part
const jkcommander = require('commander');

const initUpstreamRepository = require('./commands/init-upstream-repository');
jkcommander
  .command('initRepo')
  .description('initialize an upstream repository')
  .action(initUpstreamRepository);

const createBranchRemote = require('./commands/create-branch-remote');
jkcommander
  .command('createBranchRemote')
  .description('create and push branch')
  .action(createBranchRemote);

const dummyScript = require('./commands/dummy-script');
jkcommander
  .command('dummyScript')
  .description('script for testing jkcommander')
  .action(dummyScript);

jkcommander.parse(process.argv);

if (!process.argv.slice(2).length) {
  jkcommander.help();
}