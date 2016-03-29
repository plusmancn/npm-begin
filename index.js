'use strict';
const co = require('co');
const question = require('./lib/question.js');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
      rl.setPrompt('npm-begin > ');

// libs
var libGitignore = require('./lib/gitignore.js');
var libJshintrc  = require('./lib/jshintrc.js');


// Choose .gitignore
function gitignore(){
    rl.question(question.gitignore, (answer) => {
        switch(answer.trim()){
            case '1':
                co(function *(){
                    return libGitignore(['osx', 'node', 'vim']);
                }).then(function(){
                    jshintrc();
                }).catch(function(err){
                    console.error(err);
                    rl.close();
                });
                break;
            default:
                console.log('Not Support');
                break;
        }
    });
}


// Choose .jshintrc
function jshintrc(){
    rl.question(question.jshintrc, (answer) => {
        switch(answer.trim()){
            case '1':
                co(function *(){
                    return libJshintrc('plusmancn/.node.jshintrc');
                }).then(function(){
                    rl.close();
                }).catch(function(err){
                    console.error(err);
                    rl.close();
                });
                break;
            default:
                console.log('Not Support');
                break;
        }
    });
}



rl.on('line', (line) => {
  switch(line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log('Say what? I might have heard `' + line.trim() + '`');
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('🙂  Well begun is half done!');
  process.exit(0);
});

// rl.prompt();
// rl.close();


// init
gitignore();
