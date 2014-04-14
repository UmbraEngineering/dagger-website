;require._modules["/views/intro.js"] = (function() { var __filename = "/views/intro.js"; var __dirname = "/views"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/intro.js  == */ var __module__ = function() { 
 
var templates  = require('templates');
var View       = require('cloak/view');

require('./_highlight');

var IntroView = module.exports = View.extend({

	className: 'intro',
	template: templates['intro'],

	events: {
		// 
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render());

		this.bindEvents();
		this.highlight();
	}

});
 
 }; /* ==  End source for module /views/intro.js  == */ return module; }());;