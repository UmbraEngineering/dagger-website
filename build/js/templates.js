;require._modules["/templates.js"] = (function() { var __filename = "/templates.js"; var __dirname = "/"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /templates.js  == */ var __module__ = function() { 
 var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["exports"] = this["exports"] || {};

this["exports"]["footer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<footer>\n	<p>\n		Copyright &copy; 2014 <a href=\"http://www.umbraengineering.com\">Umbra Engineering LLC</a>\n	</p>\n	<p>\n		Dagger.js is dual licensed under MIT and GPL\n	</p>\n</footer>";
  });

this["exports"]["get-started"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n$ npm install [--save] dagger.js\n";
  }

  buffer += "<h2>Install</h2>\n<p>\n	Dagger.js is in the NPM registry, so just call to NPM and it will install it for you.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "bash", options) : helperMissing.call(depth0, "highlight", "bash", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n\n";
  return buffer;
  });

this["exports"]["header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\n	<h1><a href=\"/#welcome\">Dagger.js</a></h1>\n	<p>\n		A Node.js REST API framework with built-in websocket support\n	</p>\n</header>\n<nav>\n	<a href=\"/#get-started\">Getting Started</a>\n	<a href=\"/#example\">Example App</a>\n	<a href=\"/#docs\">Documentation</a>\n</nav>";
  });

this["exports"]["not-found"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["exports"]["welcome"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\nvar Model = require('dagger.js').require('model');\n\n// Define a new Person model\nvar Person = module.exports = Model.create('Person', {\n	\n	route: 'people',\n\n	schema: {\n		name: String,\n		email: {type: Model.Types.Email, index: {unique: true}},\n		gender: {type: String, enum: ['Male', 'Female', 'Other', 'Undisclosed']},\n		children: [{type: Model.Types.ObjectId, ref: 'Person'}]\n	}\n\n});\n";
  }

function program3(depth0,data) {
  
  
  return "\nGET http://example.com/people/schema HTTP/1.1\n";
  }

function program5(depth0,data) {
  
  
  return "\nHTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n	\"_id\": {\n		\"type\": \"ObjectId\",\n		\"auto\": true\n	},\n	\"name\": {\n		\"type\": \"String\"\n	},\n	\"email\": {\n		\"type\": \"Email\",\n		\"unique\": true\n	},\n	\"gender\": {\n		\"type\": \"String\",\n		\"enum\": [\"Male\", \"Female\", \"Other\", \"Undisclosed\"]\n	},\n	\"children\": {\n		\"type\": \"[ObjectId]\",\n		\"ref\": \"Person\"\n	}\n}\n";
  }

function program7(depth0,data) {
  
  
  return "\nGET http://example.com/people?filter={\"gender\":\"Male\"}&amp;populate=children HTTP/1.1\n";
  }

function program9(depth0,data) {
  
  
  return "\nHTTP/1.1 200 OK\nContent-Type: application/json\n\n[{\n	\"_id\": \"...\",\n	\"name\": \"Bob\",\n	\"email\": \"bob@example.com\",\n	\"gender\": \"Male\",\n	\"children\": [{\n		\"_id\": \"...\"\n		\"name\": \"Sally\",\n		\"email\": \"sally@example.com\",\n		\"gender\": \"Female\",\n		\"children\": []\n	}]\n}]\n";
  }

function program11(depth0,data) {
  
  
  return "\nPATCH http://example.com/people HTTP/1.1\nContent-Type: application/json\n\n[\n	{\"_id\":\"...\",\"name\":\"Bob\"},\n	{\"_id\":\"...\",\"name\":\"Sally\"}\n]\n";
  }

function program13(depth0,data) {
  
  
  return "\nHTTP/1.1 200 OK\nContent-Type: application/json\n\n[{\n	\"_id\": \"...\",\n	\"name\": \"Bob\",\n	\"email\": \"bob@example.com\",\n	\"gender\": \"Male\",\n	\"children\": [\"...\"]\n}, {\n	\"_id\": \"...\",\n	\"name\": \"Sally\",\n	\"email\": \"sally@example.com\",\n	\"gender\": \"Female\",\n	\"children\": []\n}]\n";
  }

function program15(depth0,data) {
  
  
  return "\n// Using the socket.io client to make requests\nvar socket = io.connect('http://example.com');\nsocket.emit('get', {url: '/people?filter={\"name\":\"Bob\"}'}, function(res) {\n	var bob = res.body;\n});\n";
  }

function program17(depth0,data) {
  
  
  return "\nPOST http://example.com/auth-tokens HTTP/1.1\nContent-Type: application/json\n\n{\n	\"username\": \"bob\",\n	\"password\": \"bobsSecretPassword\"\n}\n";
  }

function program19(depth0,data) {
  
  
  return "\nHTTP/1.1 201 CREATED\nContent-Type: application/json\n\n{\n	\"token\": \"...\",\n	\"user\": \"...\",\n	\"expires\": 1387432837389\n}\n";
  }

function program21(depth0,data) {
  
  
  return "\nGET http://example.com/people HTTP/1.1\nAuth-Token: ...\n";
  }

  buffer += "<p>\n	Dagger.js is a new RESTful API framework for Node.js packed full of power, built on top of known\n	and trusted libraries like <a href=\"http://expressjs.com\">Express</a>, <a href=\"http://socket.io\">\n	Socket.IO</a>, and <a href=\"http://mongoosejs.com/\">Mongoose</a>.\n</p>\n\n\n\n<h2>Mongoose Models with Added Extras</h2>\n<p>\n	Dagger.js models use mongoose under the hood, but has extended it for ease of use and added\n	some extra features.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "javascript", options) : helperMissing.call(depth0, "highlight", "javascript", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n\n\n<h2>Auto-Generated Endpoints</h2>\n<p>\n	Dagger.js automatically creates REST endpoints for your models, so you don't have to. These\n	endpoints come with all of the basics expected of a REST API, as well as a few extras like\n	<code>/model/schema</code> endpoints that describe the model schema, built-in <code>filter</code>\n	and <code>populate</code> query params, and bulk <code>PUT</code>, <code>PATCH</code>, and\n	<code>DELETE</code> operations.\n</p>\n\n<h3>Schema Endpoints</h3>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<h3>Filters and Populates</h3>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<h3>Bulk Updates and Deletes</h3>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n\n\n<h2>Socket.IO Out of the Box</h2>\n<p>\n	Socket.IO is deeply integrated into Dagger.js; Any request that you can make with a REST endpoint\n	can also be done through a websocket.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "javascript", options) : helperMissing.call(depth0, "highlight", "javascript", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n\n\n<h2>Built-in Authentication and Authorization System</h2>\n<p>\n	Token based authentication comes built-in using the supplied <code>AuthToken</code> model and\n	<code>/auth-tokens</code> endpoint. Users authenticate by sending a <code>POST</code> request to\n	<code>/auth-tokens</code> with their authentication credentials.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<p>\n	The user then gets back an auth token.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<p>\n	This auth token can now be used to authenticate future requests by sending it in an\n	<code>Auth-Token</code> header.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<p>\n	Dagger.js also has built-in models for handling roles and permissions so that you can build\n	permission based authorization into your API.\n</p>\n";
  return buffer;
  });

if (typeof exports === 'object' && exports) {module.exports = this["exports"];} 
 }; /* ==  End source for module /templates.js  == */ return module; }());;