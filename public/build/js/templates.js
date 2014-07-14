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
  
  
  return "\n				var Endpoint = require('dagger.js/lib/endpoint');\n\n				//\n				// Create a new \"/test\" endpoint\n				//\n				var TestEndpoint = module.exports = new Endpoint({\n\n					route: '/test',\n\n					//\n					// Handles GET requests to the base route \"/test\"\n					//\n					'get': function(req) {\n						// ...\n					},\n\n					//\n					// Handles POST requests to the base route \"/test\"\n					//\n					'post': function(req) {\n						// ...\n					},\n\n					//\n					// Handles GET requests to the sub-route \"/test/foo\"\n					//\n					'get /foo': function(req) {\n						// ...\n					}\n\n				});\n			";
  }

  buffer += "<div class=\"row content\">\n	<p class=\"intro\">\n		Dagger is a <a href=\"http://nodejs.org\">Node.js</a> RESTful API framework with built-in websocket support, built on top of\n		well known and trusted tools like <a href=\"http://expressjs.com/\">Express.js</a>, <a href=\"http://socket.io/\">Socket.io</a>,\n		and <a href=\"http://www.mongodb.org/\">MongoDB</a> / <a href=\"http://mongoosejs.com/\">Mongoose</a>.\n	</p>\n\n	<h2>Getting Started</h2>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-6 medium-push-6 columns\">\n			<p>\n				First things first, install the Dagger CLI scaffolding tool from npm.\n			</p>\n		</div>\n		<div class=\"small-12 medium-6 medium-pull-6 columns\">\n			";
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
  buffer += "\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				Dagger endpoints are designed to be very simple to use. You just create a new instance of the endpoint\n				class, passing in a base <code>route</code> string (like <code>\"/test\"</code>) and then define how the route\n				should handle various HTTP verbs and sub-routes.\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, "javascript", options) : helperMissing.call(depth0, "pre", "javascript", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n	\n\n\n	\n\n	\n\n	\n</div>\n";
  return buffer;
  });

this["exports"]["layouts.index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", self=this;

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

  buffer += "<!doctype html>\n<html>\n<head>\n	\n	<meta charset=\"utf-8\" />\n	<title>Dagger.js</title>\n\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"/fonts/district-thin/stylesheet.css\" />\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"/build/css/styles.min.css\" />\n\n</head>\n<body>\n\n	<div id=\"wrapper\">\n		<div id=\"header\">\n			<h1><a href=\"/#\">Dagger.js</a></h1>\n			<nav>\n				<ul>\n					<li><a href=\"/#docs\">Documentation</a></li>\n					<li><a href=\"https://github.com/UmbraEngineering/dagger\">GitHub</a></li>\n					<li><a href=\"https://github.com/UmbraEngineering/dagger/issues\">Issues</a></li>\n				</ul>\n			</nav>\n		</div>\n		<div id=\"content\">\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.wrapper), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.wrapper), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n	\n	<script src=\"/build/js/common";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.production), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".js\"></script>\n	<script src=\"/build/js/lib";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.production), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".js\"></script>\n	<script src=\"/build/js/app";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.production), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".js\"></script>\n\n	<script>\n\n		// Set the require paths\n		require.paths.push('/lib', '/vendor');\n\n		// Use <section> elements for views\n		require('cloak').config.viewTag = 'section';\n\n		// Load JSON polyfill if needed\n		JSON || require('json2');\n\n		// Load our handlebars helpers\n		require('helpers.handlebars');\n\n		// Load the router\n		var Router = require('routers/main');\n		var router = new Router({ autoStart: false })\n			.use(require('routers/docs'))\n			.start();\n\n	</script>\n\n</body>\n</html>";
  return buffer;
  });

if (typeof exports === 'object' && exports) {module.exports = this["exports"];} 
 }; /* ==  End source for module /templates.js  == */ return module; }());;