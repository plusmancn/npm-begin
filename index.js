#!/usr/bin/env node
/**
 * <plusmancn@gmail.com> created at 2016.07.14 19:23:03
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */

'use strict';
const co = require('co');
const colors = require('colors');
const inquirer = require('inquirer');
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

// libs
var libGitignore = require('./lib/gitignore.js');
var libEslintrc  = require('./lib/eslintrc.js');

// Choose .gitignore
function gitignore(){
    let schema = [{
        type: 'autocomplete',
        name: 'gitignore',
        message: '.gitignore'.green + ' (多个配置用英文逗号分隔)',
        source: libGitignore.searcher
    }];

    co(function *(){
        let supportSystemList = yield libGitignore.getSupportSystem();
        let tips = '.gitignore Hosting '.blue + colors.green(supportSystemList.length) + ' Operating System, IDE, and Programming Language .gitignore templates'.blue;
        console.log(tips);

        let result = yield inquirer.prompt(schema);
        return yield libGitignore.generate(result.gitignore.split(' + '));
    })
    .then(function(){
        eslintrc();
    })
    .catch(function(err){
        console.error(err);
    });
}


// Choose .jshintrc
function eslintrc(){
    let schema = [{
        type: 'list',
        name: 'eslintrc',
        message: 'eslint 校验规则模板',
        choices: [
            {
                name: 'personal/plusman',
                value: 'https://raw.githubusercontent.com/plusmancn/eslint-template/master/template/personal-plusman.json'
            },
            {
                name: 'souche/standard',
                value: 'https://raw.githubusercontent.com/plusmancn/eslint-template/master/template/souche-standard.json'
            }
        ]
    }];

    co(function *(){
        let result = yield inquirer.prompt(schema);
        libEslintrc(result.eslintrc);
    }).then(function(){
        console.log('\n🙂 ' + ' >>> '.green + ' Well begun is half done!'.rainbow);
    }).catch(function(err){
        console.error(err);
    });
}


// main
gitignore();
