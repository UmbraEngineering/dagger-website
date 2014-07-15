;require._modules["/vendor/helpers.handlebars.js"] = (function() { var __filename = "/vendor/helpers.handlebars.js"; var __dirname = "/vendor"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /vendor/helpers.handlebars.js  == */ var __module__ = function() { 
 
var handlebars  = require('handlebars');
var _           = require('cloak/underscore');
// var moment      = require('moment');

var dayNames = {
	's':  'Sunday',
	'm':  'Monday',
	't':  'Tuesday',
	'w':  'Wednesday',
	'th': 'Thursday',
	'f':  'Friday',
	'sa': 'Saturday'
};

// 
// Converts day shorthand codes (eg. th) into full day names (eg. Thursday)
// 
handlebars.registerHelper('dayName', function(day) {
	return dayNames[day.toLowerCase()];
});

// 
// Checks if the given array contains the given value, and only renders the block
// contents if it does
// 
handlebars.registerHelper('contains', function(arr, value, options) {
	return (arr.indexOf(value) >= 0) ? options.fn(this) : '';
});

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

	return '<pre>' + (lang ? '<code class="language-' + lang + '">' : '') + _.map(lines, function(line) {
		return line.replace(indent, '');
	}).join('\n') + (lang ? '</code>' : '') + '</pre>';
});

// 
// Renders a <select> element
// 
handlebars.registerHelper('select', function(attrs, options, selected) {
	var html = '<select';

	attrs = attrs.split(';');
	_.forEach(attrs, function(attr) {
		attr = attr.split('=');
		html += ' ' + attr[0];
		if (attr[1]) {
			html += '="' + attr[1] + '"';
		}
	});

	html += '>';

	_.forEach(_.keys(options), function(value) {
		html += '<option value="' + value + '"';
		if (selected === value) {
			html += ' selected';
		}
		html += '>' + options[value] + '</option>';
	});

	html += '</select>';

	return html;
});

// 
// Calculates a time-ago string from a timestamp
// 
handlebars.registerHelper('timeago', function(timestamp) {
	if (! timestamp) {
		return 'never';
	}
	return moment(timestamp).fromNow();
});

// 
// Outputs a page location value as a URI
// 
handlebars.registerHelper('pageLocation', function(loc) {
	return loc === 'home' ? '/home' : '/pages/' + loc;
});




var whitespace = /\s*/g;
function isEmpty(str) {
	return ! str.replace(whitespace, '');
}

 
 }; /* ==  End source for module /vendor/helpers.handlebars.js  == */ return module; }());;