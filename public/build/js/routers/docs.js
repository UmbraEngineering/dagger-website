;require._modules["/routers/docs.js"] = (function() { var __filename = "/routers/docs.js"; var __dirname = "/routers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /routers/docs.js  == */ var __module__ = function() { 
 
var $               = require('jquery');
var _               = require('cloak/underscore');
var cloak           = require('cloak');
var Router          = require('cloak/router');

// --------------------------------------------------------

var DocsRouter = module.exports = Router.extend({

	routes: {
		'/docs':   'index'
	},

	initialize: function() {
		this.$content = $('#content');

		// Handle internal anchors with the router
		$('#wrapper').on('click', 'a[href^="#"]:not([href="#"]), a[href^="/#"]', this.handleAnchor);
	},

// --------------------------------------------------------
	
	// 
	// "/"
	// 
	index: function() {
		// 
	}

});
 
 }; /* ==  End source for module /routers/docs.js  == */ return module; }());;