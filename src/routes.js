
exports.init = function(app) {
	
	app.get('/', function(req, res) {
		res.render('home', {
			wrapper: [ '<section class="home">', '</section>' ]
		});
	});
	
	app.get('/getting-started', function(req, res) {
		res.render('getting-started', {
			wrapper: [ '<section class="getting-started">', '</section>' ]
		});
	});

	app.get('/docs/:page?', function(req, res) {
		res.render('docs');
	});

};
