;require._modules["/templates.js"] = (function() { var __filename = "/templates.js"; var __dirname = "/"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /templates.js  == */ var __module__ = function() { 
 var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["exports"] = this["exports"] || {};

this["exports"]["getting-started"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Dagger.js</h1>\n<div class=\"row content\">\n	\n</div>\n";
  });

this["exports"]["guides.list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row content\">\n	<h2>Guides</h2>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<ul>\n				<li><a href=\"/#guides/cli\">The <code>dagger</code> Command</a></li>\n				<li><a href=\"/#guides/config\">Configuring Your App</a></li>\n				<li><a href=\"/#guides/endpoints\">Endpoints</a></li>\n				<li><a href=\"/#guides/models\">Models</a></li>\n				<li><a href=\"/#guides/middleware\">Middleware</a></li>\n				<li><a href=\"/#guides/bootstrapers\">Bootstrappers</a></li>\n			</ul>\n		</div>\n	</div>\n</div>\n";
  });

this["exports"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n				$ [sudo] npm install -g dagger-cli\n			";
  }

function program3(depth0,data) {
  
  
  return "\n				$ mkdir your-project && cd your-project\n			";
  }

function program5(depth0,data) {
  
  
  return "\n				$ dagger init --deps\n			";
  }

function program7(depth0,data) {
  
  
  return "\n				$ dagger create endpoint test\n			";
  }

function program9(depth0,data) {
  
  
  return "\n					var Endpoint   = require('dagger.js/lib/endpoint');\n					var HttpError  = require('dagger.js/lib/http-meta').HttpError;\n\n					var TestEndpoint = module.exports = new Endpoint({\n\n						route: '/test',\n						\n						//\n						// GET /test\n						//\n						\"get\": function(req) {\n							(new HttpError(405, 'Endpoint not configured')).send(req);\n						},\n						\n						//\n						// POST /test\n						//\n						\"post\": function(req) {\n							(new HttpError(405, 'Endpoint not configured')).send(req);\n						},\n						\n						//\n						// PUT|PATCH /test\n						//\n						\"put|patch\": function(req) {\n							(new HttpError(405, 'Endpoint not configured')).send(req);\n						},\n						\n						//\n						// DELETE /test\n						//\n						\"delete\": function(req) {\n							(new HttpError(405, 'Endpoint not configured')).send(req);\n						}\n						\n					});\n				";
  }

function program11(depth0,data) {
  
  
  return "\n				$ node app.js\n			";
  }

function program13(depth0,data) {
  
  
  return "\n				$ dagger create model person --fields name,email,age:Number\n			";
  }

function program15(depth0,data) {
  
  
  return "\n					var models = require('dagger.js/lib/models');\n\n\n					// \n					// Define the Person schema\n					// \n					// There is no need to create the actual model here (eg. `mongoose.model('Person', PersonSchema)`)\n					// as that is handled automatically by dagger's model module.\n					// \n					var PersonSchema = module.exports = new models.Schema({\n						name: { type: String },\n						email: { type: String },\n						age: { type: Number }\n					});\n				";
  }

function program17(depth0,data) {
  
  
  return "\n					var models = require('dagger.js/lib/models');\n\n\n					// \n					// Define the Person schema\n					// \n					// There is no need to create the actual model here (eg. `mongoose.model('Person', PersonSchema)`)\n					// as that is handled automatically by dagger's model module.\n					// \n					var PersonSchema = module.exports = new models.Schema({\n						name: { type: String },\n						email: { type: String },\n						age: { type: Number }\n					});\n\n					//\n					// An example of defining a static function\n					//\n					PersonSchema.statics.findByEmail = function(email, callback) {\n						return this.find({ email: email }, callback);\n					};\n\n					//\n					// An example of defining a model method\n					//\n					PersonSchema.methods.makeOlder = function(callback) {\n						this.age++;\n						this.save(callback);\n					};\n				";
  }

  buffer += "<div class=\"row content\">\n	<p class=\"intro\">\n		Dagger is a <a href=\"http://nodejs.org\">Node.js</a> RESTful API framework with built-in websocket support, built on top of\n		well known and trusted tools like <a href=\"http://expressjs.com/\">Express.js</a>, <a href=\"http://socket.io/\">Socket.io</a>,\n		and <a href=\"http://www.mongodb.org/\">MongoDB</a> / <a href=\"http://mongoosejs.com/\">Mongoose</a>. Designed for rapid yet\n		versatile development, Dagger is a powerful new tool to add to your arsenal.\n	</p>\n\n	<h2>Getting Started</h2>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-6 medium-push-6 columns\">\n			<p>\n				First things first, install the Dagger CLI scaffolding tool from npm.\n			</p>\n		</div>\n		<div class=\"small-12 medium-6 medium-pull-6 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, "bash", options) : helperMissing.call(depth0, "pre", "bash", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-6 medium-push-6 columns\">\n			<p>\n				Once the tool is installed, create a directory for your new project\n			</p>\n		</div>\n		<div class=\"small-12 medium-6 medium-pull-6 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, "bash", options) : helperMissing.call(depth0, "pre", "bash", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-6 medium-push-6 columns\">\n			<p>\n				Next, initialize your new dagger project!\n			</p>\n		</div>\n		<div class=\"small-12 medium-6 medium-pull-6 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, "bash", options) : helperMissing.call(depth0, "pre", "bash", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n	<h2>Start Building</h2>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-6 medium-push-6 columns\">\n			<p>\n				Creating new models/endpoints in dagger in easy, as all new content creation can be done with the CLI tool.\n				This creates a new file <code>endpoints/test.js</code> with a barebones dagger endpoint instance in it.\n			</p>\n		</div>\n		<div class=\"small-12 medium-6 medium-pull-6 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, "bash", options) : helperMissing.call(depth0, "pre", "bash", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				Dagger endpoints are designed to be very simple to use. You just create a new instance of the endpoint\n				class, passing in a base <code>route</code> string (like <code>\"/test\"</code>) and then define how the route\n				should handle various HTTP verbs and sub-routes.\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-10 medium-offset-1 columns\">\n			<div class=\"file\">\n				<h3>endpoints/test.js</h3>\n				";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, "javascript", options) : helperMissing.call(depth0, "pre", "javascript", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				By default, creating a new endpoint results in a file like the one above, with a blank function\n				for each of the four <abbr title=\"Create, Read, Update, Destroy\">CRUD</abbr> operations. You can\n				remove any of these functions that you do not intend to use, or add new ones as needed (eg. to\n				handle references to individual documents, you might add a <code>\"get /:id\"</code> method).\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-6 medium-push-6 columns\">\n			<p>\n				You can start up your new application server by running the <code>app.js</code> file.\n			</p>\n		</div>\n		<div class=\"small-12 medium-6 medium-pull-6 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, "bash", options) : helperMissing.call(depth0, "pre", "bash", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n	<h2>Models</h2>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				Dagger models are just mongoose models that have been extended and made a little easier to set up.\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-6 medium-push-6 columns\">\n			<p>\n				You can create a new model using the CLI tool. The resulting model file from this command will contain\n				a mongoose schema with the fields <code>name</code>, <code>email</code>, and <code>age</code> defined.\n			</p>\n		</div>\n		<div class=\"small-12 medium-6 medium-pull-6 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, "bash", options) : helperMissing.call(depth0, "pre", "bash", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-10 medium-offset-1 columns\">\n			<div class=\"file\">\n				<h3>models/person.js</h3>\n				";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, "javascript", options) : helperMissing.call(depth0, "pre", "javascript", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				You can define methods and static functions on Dagger models the same way you would any mongoose model.\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-10 medium-offset-1 columns\">\n			<div class=\"file\">\n				<h3>models/person.js</h3>\n				";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data},helper ? helper.call(depth0, "javascript", options) : helperMissing.call(depth0, "pre", "javascript", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				For more help getting started, you can take a look at the <a href=\"/#guides\">guides</a> or\n				the <a href=\"/#docs\">documentation</a>.\n			</p>\n		</div>\n	</div>\n</div>\n";
  return buffer;
  });

this["exports"]["layouts.index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var stack1;
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.wrapper)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program3(depth0,data) {
  
  var stack1;
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.wrapper)),stack1 == null || stack1 === false ? stack1 : stack1[1])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program5(depth0,data) {
  
  
  return ".min";
  }

  buffer += "<!doctype html>\n<html>\n<head>\n	\n	<meta charset=\"utf-8\" />\n	<title>Dagger.js</title>\n\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"/fonts/district-thin/stylesheet.css\" />\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"/build/css/styles.min.css\" />\n\n</head>\n<body>\n\n	<div id=\"wrapper\">\n		<div id=\"header\">\n			<h1><a href=\"/#\">Dagger.js</a></h1>\n			<nav>\n				<ul>\n					<li><a href=\"/#guides\">Guides</a></li>\n					<li><a href=\"/#docs\">Documentation</a></li>\n					<li><a href=\"https://github.com/UmbraEngineering/dagger\">GitHub</a></li>\n					<li><a href=\"https://github.com/UmbraEngineering/dagger/issues\">Issues</a></li>\n				</ul>\n			</nav>\n		</div>\n		<div id=\"content\">\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.wrapper), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.wrapper), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n		<div id=\"footer\">\n			Copyright &copy; ";
  if (helper = helpers.year) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.year); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <a href=\"http://www.umbraengineering.com\">Umbra Engineering LLC</a><br />\n			Dagger.js code licensed under <a href=\"http://opensource.org/licenses/MIT\">MIT</a>. This site and documentation\n			licensed under <a href=\"http://creativecommons.org/licenses/by/3.0/\">CC BY 3.0</a>.\n		</div>\n	</div>\n	\n	<script src=\"/build/js/common";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.production), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".js\"></script>\n	<script src=\"/build/js/lib";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.production), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".js\"></script>\n	<script src=\"/build/js/app";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.production), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".js\"></script>\n\n	<script>\n\n		// Set the require paths\n		require.paths.push('/lib', '/vendor');\n\n		// Use <section> elements for views\n		require('cloak').config.viewTag = 'section';\n\n		// Load JSON polyfill if needed\n		JSON || require('json2');\n\n		// Load our handlebars helpers\n		require('helpers.handlebars');\n\n		// Load the router\n		var Router = require('routers/main');\n		var router = new Router({ autoStart: false }).start();\n\n	</script>\n\n</body>\n</html>";
  return buffer;
  });

if (typeof exports === 'object' && exports) {module.exports = this["exports"];} 
 }; /* ==  End source for module /templates.js  == */ return module; }());;