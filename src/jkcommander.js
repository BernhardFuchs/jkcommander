#! /usr/bin/env node

const jkcommander = require('commander');

const initUpstreamRepository = require('./commands/init-upstream-repository');

jkcommander
  .command('initRepo')
  .description('initialize an upstream repository')
  .action(initUpstreamRepository);

jkcommander.parse(process.argv);

if (!process.argv.slice(2).length) {
  jkcommander.help();
}