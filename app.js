
var fs       = require('fs');
var express  = require('express');

var app = express();

// Serve via the router
app.use(app.router);

// Serve public files
app.use(express.static(__dirname + '/public', {
	maxAge: 86400000
}));

// All of these pages respond with index.html
app.get('/',             loadIndex);
app.get('/welcome',      loadIndex);
app.get('/get-started',  loadIndex);
app.get('/example',      loadIndex);
app.get('/docs/:page?',  loadIndex)

var index = __dirname + '/index.html';
function loadIndex(req, res) {
	fs.readFile(index, 'utf8', function(err, content) {
		if (err) {
			res.send(500, 'Could not read index.html');
			return;
		}

		res.contentType('text/html');
		res.send(200, content);
	});
}

app.listen(process.env.PORT || 5000, function() {
	console.log('Express listening on port ' + (process.env.PORT || 5000));
});
