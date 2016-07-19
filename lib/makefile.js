'use strict';
/**
 * <plusmancn@gmail.com> created at 2016.07.18 20:54:28
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */

const fs = require('fs');
const path = require('path');

module.exports = function(makefile) {
    if(makefile === 'default'){
        let source = path.join(__dirname, '../makefiles/default');
        let sourceCtx = fs.readFileSync(source,'utf8');
        fs.writeFileSync('./Makefile', sourceCtx);
        console.info('🎉  ' + '>>> '.green + 'Makefile has been generated under current folder successfully!'.grey);
    }
};
