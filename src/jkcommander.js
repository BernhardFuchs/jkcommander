#! /usr/bin/env node

const omelette = require('omelette');

// Write your CLI template.
const completion = omelette(`jkcommander|jk <action> <user> <repo>`);

// Bind events for every template part.
completion.on('action', ({ reply }) => {
  reply([ 'initRepo', 'createBranchRemote', 'dummyScript' ])
})

completion.on('user', ({ reply }) => {
  reply(fs.readdirSync('/Users/'))
})

completion.on('repo', ({ before, reply }) => {
  reply([
    `http://github.com/${before}/helloworld`,
    `http://github.com/${before}/blabla`
  ])
})

// Initialize the omelette.
completion.init()

// If you want to have a setup feature, you can use `omeletteInstance.setupShellInitFile()` function.
if (~process.argv.indexOf('--setup')) {
  completion.setupShellInitFile()
}

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