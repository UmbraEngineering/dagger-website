
var handlebars = require('express3-handlebars/node_modules/handlebars');

var startingIndent = /^(\s*)/;

// 
// Renders a <pre> tag with additional whitespace removed, for easier and cleaner
// formatting of files
// 
handlebars.registerHelper('pre', function(lang, options) {
	if (typeof lang !== 'string') {
		options = lang; lang = null;
	}

	var content = options.fn(this);
	var lines = content.split('\n').slice(1);

	var indent = new RegExp('^' + startingIndent.exec(lines[0])[0]);

	return '<pre>' + (lang ? '<code class="language-' + lang + '">' : '') + lines.map(function(line) {
		return line.replace(indent, '');
	}).join('\n') + (lang ? '</code>' : '') + '</pre>';
});
