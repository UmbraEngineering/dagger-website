;require._modules["/lib/cloak/model-stores/local-storage.js"] = (function() { var __filename = "/lib/cloak/model-stores/local-storage.js"; var __dirname = "/lib/cloak/model-stores"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /lib/cloak/model-stores/local-storage.js  == */ var __module__ = function() { 
 
// 
// Local storage
// 

var uuid   = require('uuid-v4');
var _      = require('../underscore');
var Store  = require('../local-storage').Store;

var methods = exports.methods = { };
var statics = exports.statics = { };
var store   = exports.store   = new Store();

// 
// Load the document out of local storage
// 
// @return promise
// 
methods._load = function() {
	var deferred = $.Deferred();

	_.nextTick(this, function() {
		var value = store.read(this.url, this.id());

		if (! value) {
			return deferred.reject(new Error('Not found'));
		}
		
		deferred.resolve(value);
	});

	return deferred.promise();
};

// 
// Save the document into local storage
// 
// @param {data} the data to store
// @return promise
// 
methods._save = function(data) {
	var deferred = $.Deferred();

	_.nextTick(this, (this.id() ? update : create));

	function create() {
		this.id(store.create(this.url, data));
		deferred.resolve(store.read(this.url, this.id()));
	}

	function update() {
		store.update(this.url, this.id(), data);
		deferred.resolve(store.read(this.url, this.id()));
	}

	return deferred.promise();
};

// 
// Patch some attributes of the document into local storage
// 
// @param {data} the data to store
// @return promise
// 
methods._patch = function(data) {
	var deferred = $.Deferred();

	_.nextTick(this, function() {
		store.update(this.url, this.id(), data);
		deferred.resolve(store.read(this.url, this.id()));
	});

	return deferred.promise();
};

// 
// Delete the document from local storage
// 
// @return promise
// 
methods._del = function() {
	var deferred = $.Deferred();

	_.nextTick(this, function() {
		store.del(this.url, this.id());
		this.emit('deleted');
		this.destroy();
		deferred.resolve();
	});

	return deferred.promise();
};
 
 }; /* ==  End source for module /lib/cloak/model-stores/local-storage.js  == */ return module; }());;