
exports.init = function(app) {
	
	app.get('/', function(req, res) {
		res.render('home', data('home'));
	});
	
	app.get('/getting-started', function(req, res) {
		res.render('getting-started', data('getting-started'));
	});

	app.get('/guides', function(req, res) {
		res.render('guides/list', data('guide-list'));
	});

	app.get('/guides/:page', function(req, res) {
		res.render('guides/' + req.params.page);
	});

	app.get('/docs', function(req, res) {
		res.render('docs/index');
	});

	app.get('/docs/:page', function(req, res) {
		res.render('docs/' + req.params.page);
	});

};

function data(sectionClass, obj) {
	obj = obj || { };

	obj.year = (new Date()).getFullYear();
	obj.wrapper = [ '<section class="' + sectionClass + '">', '</section>' ];

	return obj;
}
