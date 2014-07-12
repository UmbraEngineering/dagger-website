
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
