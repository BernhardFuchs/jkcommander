const aliases = [
  'initRepo',
  'createBranchRemote',
  'dummyScript',
  'sshAdd'
]

const setup = () => {
  const omelette = require('omelette');

  // Write your CLI template.
  const completion = omelette(`jkcommander|jk <action>`);

  // Bind events for every template part.
  completion.on('action', ({ reply }) => {
    reply(aliases);
  });

  // Initialize the omelette.
  completion.init();
}

module.exports = setup;
