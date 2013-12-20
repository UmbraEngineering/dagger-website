;require._modules["/views/not-found.js"] = (function() { var __filename = "/views/not-found.js"; var __dirname = "/views"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/not-found.js  == */ var __module__ = function() { 
 
var templates  = require('templates');
var View       = require('cloak/view');

var NotFoundView = module.exports = View.extend({

	className: '404 center-panel',
	template: templates['not-found'],

	draw: function() {
		this.$elem.html(this.render({
			isLoggedIn: !! cloak.auth.user
		}));
	}

});
 
 }; /* ==  End source for module /views/not-found.js  == */ return module; }());;