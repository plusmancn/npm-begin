#!/usr/bin/env node

'use strict';
const co = require('co');
const question = require('./lib/question.js');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
      rl.setPrompt('npm-begin > ');

// libs
var libGitignore = require('./lib/gitignore.js');
var libJshintrc  = require('./lib/jshintrc.js');
var libMkdir = require('./lib/mkdir.js');
var libLicense = require('./lib/license.js');

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
                rl.close();
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
                    mkdir();
                }).catch(function(err){
                    console.error(err);
                    rl.close();
                });
                break;
            default:
                console.log('Not Support');
                rl.close();
                break;
        }
    });
}


// mkdir
function mkdir(){
    rl.question(question.mkdir, (answer) => {
        switch(answer.trim()){
            case 'y':
                libMkdir();
                license();
                break;
            default:
                console.info('Skipping create folders');
                rl.close();
                break;
        }
    });
}

// license
function license(){
    rl.question(question.license, (answer) => {
        switch(answer.trim()){
            case '1':
                libLicense('ISC');
                rl.close();
                break;
            case '2':
                libLicense('MIT');
                rl.close();
                break;
            default:
                console.info('Not Support');
                rl.close();
                break;

        }
    });
}

rl.on('close', () => {
  console.log('\n🙂  Well begun is half done!');
  process.exit(0);
});

// init
gitignore();
