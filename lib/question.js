'use strict';
const promptStr = 'npm-begin > ';

exports.gitignore = `😈  Choose Your Combination of .gitignore:
    1. osx + vim + node
${promptStr}`;


exports.jshintrc = `😈  Choose Your .jshintrc:
    1. plusmancn/.node.jshintrc
${promptStr}`;

exports.mkdir = `😈  Do you want to create the following folders and files? y/n
    * README.md
    * ./lib
    * ./test
${promptStr}`;

exports.license = `😈  Choose a license
    1. ISC (npm default)
    2. MIT
${promptStr}`;
