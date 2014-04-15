
var fs  = require('fs');
var hb  = require('handlebars');

var raw;
var compiled;
var rendered = { };
var file = __dirname + '/../index.hbs';

module.exports = function(data) {
	// If in dev mode, do not cache anything
	if (ENV === 'development') {
		return hb.compile(fs.readFileSync(file, 'utf8'))(data);
	}

	var id = JSON.stringify(data);

	if (! raw) {
		loadFromFile();
	}

	if (! compiled) {
		compileTemplate();
	}

	if (! rendered[id]) {
		renderTemplate(id, data);
	}

	return rendered[id];
};

function loadFromFile() {
	raw = fs.readFileSync(file, 'utf8');
}

function compileTemplate() {
	compiled = hb.compile(raw);
}

function renderTemplate(id, data) {
	rendered[id] = compiled(data);
}
