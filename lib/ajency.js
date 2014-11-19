#! /usr/bin/env node

/*
 * http://ajency.in/node
 *
 * Copyright (c) 2014 Suraj Air <suraj@ajency.in>
 * Licensed under the MIT license.
 */

'use strict';

var userArgs = process.argv;
var action = userArgs[2];
var subAction = userArgs[3];

if (userArgs.indexOf('-h') !== -1 || userArgs.indexOf('--help') !== -1 || action === undefined) {
    return console.log('ajency --help');
}

if (userArgs.indexOf('-v') !== -1 || userArgs.indexOf('--version') !== -1) {
    return console.log(require('../package.json').version);
}

var notifier = require('node-notifier');

switch(action){

	case 'notify':
		notifier.notify({
		  'title': 'My notification',
		  'message': 'Hello, there!'
		});
		break;
	case 'todo':
		if(subAction === undefined){
			console.log("Invalid format: ajency task add 'task details' ");
			return;
		}
		var taskAction = userArgs[4];
		notifier.notify({
		  'title': 'Task added',
		  'message': 'Your task "' + taskAction  + '" was successfully added to queue'
		});
		break;
	default:
		break;
}

