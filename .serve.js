
var fs = require('fs');

exports['/welcome'] = load;
exports['/get-started'] = load;
exports['/example'] = load;
exports['/docs'] = load;

function load(req, res, next) {
	fs.readFile(__dirname + '/index.html', 'utf8', function(err, content) {
		if (err) {
			res.writeHead(404, {
				'content-type': 'text/plain'
			});
			res.end('Could not load index.html');
			return;
		}

		res.writeHead(200, {
			'content-type': 'text/html'
		});
		res.end(content);
	});
}
