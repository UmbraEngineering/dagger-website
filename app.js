
var express  = require('express');
var render   = require('./lib/render');

var app = express();

// Serve via the router
app.use(app.router);

// Serve public files
app.use(express.static(__dirname + '/public', {
	maxAge: 86400000
}));

// All of these pages respond with index.html
app.get('/',             loadIndex);
app.get('/intro',        loadIndex);
app.get('/get-started',  loadIndex);
app.get('/example',      loadIndex);
app.get('/docs/:page?',  loadIndex);

global.ENV = process.env.NODE_ENV;

function loadIndex(req, res) {
	try {
		var rendered = render({
			env: ENV,
			production: (ENV === 'production'),
			development: (ENV === 'development')
		});
		res.contentType('text/html');
		res.send(200, rendered);
	}

	// Catch-all case for errors
	catch (err) {
		console.error(err.stack || err);
		var stack = '';
		if (env === 'development') {
			stack = ': ' + (err.stack || err.message || err);
		}
		res.send(500, 'Internal server error' + stack);
	}
}

app.listen(process.env.PORT || 5000, function() {
	console.log('Express listening on port ' + (process.env.PORT || 5000));
});
