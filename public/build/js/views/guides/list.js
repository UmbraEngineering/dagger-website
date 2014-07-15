;require._modules["/views/guides/list.js"] = (function() { var __filename = "/views/guides/list.js"; var __dirname = "/views/guides"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/guides/list.js  == */ var __module__ = function() { 
 
var templates   = require('templates');
var View        = require('cloak/view');

require('../_highlight');

var GuideListView = module.exports = View.extend({

	className: 'guide-list',
	template: templates['guides.list'],

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
 
 }; /* ==  End source for module /views/guides/list.js  == */ return module; }());;