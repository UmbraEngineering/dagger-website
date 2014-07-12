
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