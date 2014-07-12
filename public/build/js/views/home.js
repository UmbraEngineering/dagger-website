;require._modules["/views/home.js"] = (function() { var __filename = "/views/home.js"; var __dirname = "/views"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/home.js  == */ var __module__ = function() { 
 
var templates   = require('templates');
var View        = require('cloak/view');

require('./_highlight');

var HomeView = module.exports = View.extend({

	className: 'home',
	template: templates['home'],

	events: {
		// 
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render());
		this.afterDraw();
	},

	afterDraw: function() {
		this.highlight();
	}

});
 
 }; /* ==  End source for module /views/home.js  == */ return module; }());;