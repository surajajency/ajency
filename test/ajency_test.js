/*global describe,it*/
'use strict';
var assert = require('assert'),
  ajencyNode = require('../lib/ajency.js');

describe('ajency node module.', function() {
  it('must be awesome', function() {
    assert( ajencyNode.awesome(), 'awesome');
  });
});
