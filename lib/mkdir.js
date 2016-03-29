'use strict';

var fs = require('fs');

// bug x 3
module.exports = function(){
    try{
        if( !fs.statSync('./README.md').isFile() ){
            throw new Error('bug');
        }
    } catch(e) {
        console.info('create file 📜  ./README.md');
        fs.openSync('./README.md', 'w');
    }

    try{
        if( !fs.statSync('./lib/').isDirectory() ){
            throw new Error('bug');
        }
    } catch(e) {
        console.info('create folder 📂  ./lib');
        fs.mkdirSync('./lib/');
    }

    try{
        if( !fs.statSync('./test/').isDirectory() ){
            throw new Error('bug');
        }
    } catch(e) {
        console.info('create folder 📂  ./test');
        fs.mkdirSync('./test/');
    }

    console.info('🎉 folders and files have been created successfully!');
};

