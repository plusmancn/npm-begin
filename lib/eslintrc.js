'use strict';
const fs   = require('fs');
const rq   = require('request');

module.exports = function(url){
    return new Promise(function(resolve, reject){
        rq
         .get(url)
         .on('error', function(err){
             console.error('npm-begin error: ', err);
             reject(err);
         })
         .on('end', function(){
             console.info('🎉  ' + '>>> '.green + '.eslintrc has been generated under current folder successfully!'.grey);
             resolve('success');
         })
         .pipe(fs.createWriteStream('.eslintrc'));
    });
};
