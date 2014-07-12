;require._modules["/vendor/stupidtable/index.js"] = (function() { var __filename = "/vendor/stupidtable/index.js"; var __dirname = "/vendor/stupidtable"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /vendor/stupidtable/index.js  == */ var __module__ = function() { 
 
// Temporarily expose jquery so stupidtable can get a reference to it
window.jQuery = require('jquery');

require('./stupidtable');

window.jQuery = void(0);
 
 }; /* ==  End source for module /vendor/stupidtable/index.js  == */ return module; }());;