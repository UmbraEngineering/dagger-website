
var express     = require('express');
var expressHbs  = require('express3-handlebars');
var routes      = require('./routes');
var conf        = require('node-conf').load(process.env.NODE_ENV || 'development');

require('./helpers.handlebars');

var app = express();

app.engine('hbs', expressHbs({
	extname: 'hbs',
	layoutsDir: 'templates/layouts',
	partialsDir: 'templates/partials',
	defaultLayout: 'index.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/../templates');

app.use(express.static(__dirname + '/../public'));

routes.init(app);

app.listen(conf.http.port, function() {
	console.log('Express server listening on port ' + conf.http.port + '...');
});
