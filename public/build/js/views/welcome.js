;require._modules["/views/welcome.js"] = (function() { var __filename = "/views/welcome.js"; var __dirname = "/views"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/welcome.js  == */ var __module__ = function() { 
 
var templates  = require('templates');
var View       = require('cloak/view');

require('./_highlight');

var WelcomeView = module.exports = View.extend({

	className: 'welcome',
	template: templates['welcome'],

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
 
 }; /* ==  End source for module /views/welcome.js  == */ return module; }());;