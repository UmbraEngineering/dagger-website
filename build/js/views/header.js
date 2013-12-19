;require._modules["/views/header.js"] = (function() { var __filename = "/views/header.js"; var __dirname = "/views"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/header.js  == */ var __module__ = function() { 
 
var $              = require('jquery');
var templates      = require('templates');
var View           = require('cloak/view');

var HeaderView = module.exports = View.extend({

	template: templates['header'],

	initialize: function() {
		this.$elem = $('#header');
	},

	draw: function() {
		this.$elem.html(this.render());
	}

});
 
 }; /* ==  End source for module /views/header.js  == */ return module; }());;