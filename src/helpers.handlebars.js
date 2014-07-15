
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

	// Remove any empty lines from the end
	while (isEmpty(lines[lines.length - 1])) {
		lines.pop();
	}

	return '<pre>' + (lang ? '<code class="language-' + lang + '">' : '') + lines.map(function(line) {
		return line.replace(indent, '');
	}).join('\n') + (lang ? '</code>' : '') + '</pre>';
});

var whitespace = /\s*/g;
function isEmpty(str) {
	return ! str.replace(whitespace, '');
}
