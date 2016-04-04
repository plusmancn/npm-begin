'use strict';
const fs = require('fs');
const util = require('util');
const licenseTemplate = require('../lib-license/licenses.js');

module.exports = function(key){
    try{
        if( !fs.statSync('./LICENSE').isFile() ){
            throw new Error('bug');
        }
    }catch(e){
        console.log('create LICENSE file depend on ' + key);
        let licenseStr = licenseTemplate[key];
        let pkgInfo = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
        let year = new Date().getFullYear();
        licenseStr = util.format(licenseStr, year, pkgInfo.author);
        fs.writeFileSync('./LICENSE', licenseStr);
    }

    console.info('🎉  License create successfully');
};
