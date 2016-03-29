'use strict';
const fs   = require('fs');
const rq   = require('request');
const URL  = 'https://www.gitignore.io/api/';


module.exports = function(arr){
    return new Promise(function(resolve, reject){
        let url = URL + arr.join('%2C');
        rq
         .get(url)
         .on('error', function(err){
             console.error(err);
             reject(err);
         })
         .on('end', function(){
             console.info('🎉 .gitignore has been generated successfully!');
             resolve('success');
         })
         .pipe(fs.createWriteStream('.gitignore'));
    });
};
