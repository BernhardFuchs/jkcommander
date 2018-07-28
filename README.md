### JKCommander CLI tool

#### Installation
1) Clone the Repository and run `npm install`
2) The init.js script sets up a sym-link in your OS. Run it with `npm run init`
3) For autocompletion of the custom commands you have to adapt either the .bash_profile or .bashrc. Either way you have to create the shell-script with `./jkcommander --completion >> ~/jkcommander.completion.sh`. Of course you can specify any path you like.
-- If you are using a bash_profile run:
`echo 'source ~/jkcommander.completion.sh' >> .bash_profile`
-- If you are using the bashrc only run:
`echo 'source ~/jkcommander.completion.sh' >> .bashrc`