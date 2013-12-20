;require._modules["/views/_highlight.js"] = (function() { var __filename = "/views/_highlight.js"; var __dirname = "/views"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/_highlight.js  == */ var __module__ = function() { 
 
var $           = require('jquery');
var prism       = require('prism');
var View        = require('cloak/view');
var handlebars  = require('handlebars');

// 
// Add a highlight method to all Views that highlights source code using
// the Prism.js highlighter.
// 
View.prototype.highlight = function(elem) {
	if (elem) {
		return highlight(elem);
	}

	elem = this.$elem.find('code[class*=language-]');
	return $.when.apply($, elem.map(highlight));
};

function highlight(elem, second) {
	var deferred = $.Deferred();

	if (second) {
		elem = second;
	}

	elem.innerHTML = elem.innerHTML.replace(/^\s+/, '').replace(/\s+$/, '');
	
	prism.highlightElement(elem, false, function() {
		deferred.resolve();
	});

	return deferred;
}

// 
// Add a handlebars helper for easily embedding source code
// 
handlebars.registerHelper('highlight', function(lang, opts) {
	var source = opts.fn(this);
	while (source.indexOf('<') >= 0) {
		source = source.replace('<', '&lt;');
	}
	return '<pre><code class="language-' + lang + '">' + source + '</code></pre>';
});
 
 }; /* ==  End source for module /views/_highlight.js  == */ return module; }());;