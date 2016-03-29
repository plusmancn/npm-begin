'use strict';
const fs   = require('fs');
const rq   = require('request');
const URL = {
    'plusmancn/.node.jshintrc': 'https://gist.githubusercontent.com/plusmancn/baf6f0c015fa970c4fdb/raw/5001d579519bf6ba29e2352683ea6cad9a38595b/.node.jshintrc#'
};

module.exports = function(key){
    return new Promise(function(resolve, reject){
        rq
         .get(URL[key])
         .on('error', function(err){
             console.error('npm-begin error: ', err);
             reject(err);
         })
         .on('end', function(){
             console.info('🎉 .jshintrc has been generated successfully!');
             resolve('success');
         })
         .pipe(fs.createWriteStream('.jshintrc'));
    });
};
