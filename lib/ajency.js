#! /usr/bin/env node

/*
 * http://ajency.in/node
 *
 * Copyright (c) 2014 Suraj Air <suraj@ajency.in>
 * Licensed under the MIT license.
 */

'use strict';

var userArgs = process.argv;
var searchParam = userArgs[2];

if (userArgs.indexOf('-h') !== -1 || userArgs.indexOf('--help') !== -1 || searchParam === undefined) {
    return console.log('ajency --help');
}

if (userArgs.indexOf('-v') !== -1 || userArgs.indexOf('--version') !== -1) {
    return console.log(require('../package.json').version);
}
