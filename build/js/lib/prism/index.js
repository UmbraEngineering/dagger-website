;require._modules["/lib/prism/index.js"] = (function() { var __filename = "/lib/prism/index.js"; var __dirname = "/lib/prism"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /lib/prism/index.js  == */ var __module__ = function() { 
 
require('./prism');
require('./bash');
require('./http');

module.exports = Prism;

try {
	window.Prism = void(0);
	delete window.Prism;
} catch (e) { }
 
 }; /* ==  End source for module /lib/prism/index.js  == */ return module; }());;