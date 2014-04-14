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
  
  
  return "\n$ npm install -g dagger-cli\n# Optional, install the bash completion scripts\n$ dagger completion install\n";
  }

function program3(depth0,data) {
  
  
  return "\n$ npm install --save dagger.js\n";
  }

function program5(depth0,data) {
  
  
  return "\n$ mkdir my-project\n$ cd my-project\n";
  }

function program7(depth0,data) {
  
  
  return "\n$ dagger init --deps\n";
  }

function program9(depth0,data) {
  
  
  return "\n$ dagger create endpoint hello --method get\n";
  }

function program11(depth0,data) {
  
  
  return "\nvar Endpoint   = require('dagger.js/lib/endpoint');\nvar HttpError  = require('dagger.js/lib/http-meta').HttpError;\n\nvar HelloEndpoint = module.exports = new Endpoint({\n\n	route: '/hello',\n	\n	//\n	// GET /hello\n	//\n	\"get\": function(req) {\n		(new HttpError(405, 'Endpoint not configured')).send(req);\n	}\n	\n});\n";
  }

function program13(depth0,data) {
  
  
  return "\n$ dagger create model person --fields name,email\n";
  }

function program15(depth0,data) {
  
  
  return "\nvar models = require('dagger.js/lib/models');\n\n\n// \n// Define the Person schema\n// \n// There is no need to create the actual model here (eg. `mongoose.model('Person', PersonSchema)`)\n// as that is handled automatically by dagger's model module.\n// \nvar PersonSchema = module.exports = new models.Schema({\n	name: { type: String },\n	email: { type: String }\n});\n";
  }

  buffer += "<h2>Install</h2>\n<p>\n	Dagger has a <abbr title=\"Command Line Interface\">CLI</abbr> scaffolding tool to help you create and build\n	your projects which can be found in the <abbr title=\"Node Package Manager\">NPM</abbr> repository.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "bash", options) : helperMissing.call(depth0, "highlight", "bash", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<p>\n	If you don't want to use the scaffolding tool, you can also install Dagger directly in your project directory, but\n	it is highly recommended to use the scaffolding tool.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "bash", options) : helperMissing.call(depth0, "highlight", "bash", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<h3>Using The Scaffolding Tool</h3>\n<p>\n	Using the scaffolding tool is very easy and straight-forward. To begin with, you will need a directory to\n	work in.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "bash", options) : helperMissing.call(depth0, "highlight", "bash", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<p>\n	From here, we can use the scaffold to initialize all of the basics of a Dagger application.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "bash", options) : helperMissing.call(depth0, "highlight", "bash", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<p>\n	The <code>init</code> command tells the tool to create all the basic directories and files needed for\n	a Dagger application, such as the <code>package.json</code> file, the main <code>app.js</code> file,\n	and the <code>models</code> and <code>endpoints</code> directories. Adding the <code>--deps</code>\n	flag tells it to also call to npm to install the project dependencies. Now we can create our first endpoint.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "bash", options) : helperMissing.call(depth0, "highlight", "bash", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<p>\n	This will create a new file <code>endpoints/hello.js</code> with a basic endpoint that responds to the\n	<code>GET</code> method. It should look something like this:\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "javascript", options) : helperMissing.call(depth0, "highlight", "javascript", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<h4>Creating Models</h4>\n<p>\n	Now, let's create a model and an endpoint to access that model.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "bash", options) : helperMissing.call(depth0, "highlight", "bash", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<p>\n	This will result in the file <code>models/person.js</code> that looks something like this:\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "javascript", options) : helperMissing.call(depth0, "highlight", "javascript", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n\n\n\n\n\n\n\n\n\n";
  return buffer;
  });

this["exports"]["header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\n	<h1><a href=\"/#welcome\">Dagger.js</a></h1>\n	<p>\n		A Node.js REST API framework with built-in websocket support\n	</p>\n</header>\n<nav>\n	<a href=\"/#intro\">Intro</a>\n	<a href=\"/#get-started\">Getting Started</a>\n	<a href=\"/#examples\">Examples</a>\n	<a href=\"/#docs\">Documentation</a>\n</nav>";
  });

this["exports"]["intro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\nvar models = require('dagger.js/lib/models');\n\nvar ObjectId  = models.types.ObjectId;\n\n//\n// Define a new Person schema\n//\nvar PersonSchema = module.exports = new models.Schema({\n	name: String,\n	email: {type: String, index: {unique: true}},\n	gender: {type: String, enum: ['male', 'female', 'other', 'undisclosed']},\n	children: [{type: ObjectId, ref: 'person'}]\n});\n\n//\n// Add a new method to our model\n//\nPersonSchema.methods.sendEmail = function(opts) {\n	sendEmail(this.email, opts);\n};\n";
  }

function program3(depth0,data) {
  
  
  return "\nvar Endpoint = require('dagger.js/lib/endpoint');\n\n//\n// Define the new endpoint\n//\nvar PeopleEndpoint = module.exports = new Endpoint({\n\n	route: '/people',\n\n	//\n	// GET /people\n	//\n	'get': function(req) {\n		req.respond(200, 'Hello World!');\n	},\n\n	//\n	// GET /people/:id\n	//\n	'get /:id': function(req) {\n		req.respond(200, 'You attempted to fetch ' + req.params.id);\n	},\n\n	//\n	// POST /people\n	//\n	'post': function(req) {\n		req.respond(405, 'We don\\'t support POSTs on this endpoint');\n	},\n\n	//\n	// PUT /people/:id\n	// PATCH /people/:id\n	//\n	'put|patch /:id': function(req) {\n		req.respond(200, 'We handle PUT and PATCH requests with the same code');\n	},\n\n	//\n	// DELETE /people\n	//\n	'delete': function(req) {\n		req.respond(200, 'No! D: Don\\'t delete me! :(');\n	}\n\n});\n";
  }

function program5(depth0,data) {
  
  
  return "\n$ dagger create endpoint people for person\nCreating new endpoint \"people\" for model \"person\"... Done.\n";
  }

function program7(depth0,data) {
  
  
  return "\nGET http://example.com/people/schema HTTP/1.1\n";
  }

function program9(depth0,data) {
  
  
  return "\nHTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n	\"_id\": {\n		\"type\": \"ObjectId\",\n		\"auto\": true\n	},\n	\"name\": {\n		\"type\": \"String\"\n	},\n	\"email\": {\n		\"type\": \"Email\",\n		\"unique\": true\n	},\n	\"gender\": {\n		\"type\": \"String\",\n		\"enum\": [\"male\", \"female\", \"other\", \"undisclosed\"]\n	},\n	\"children\": {\n		\"type\": \"[ObjectId]\",\n		\"ref\": \"person\"\n	}\n}\n";
  }

function program11(depth0,data) {
  
  
  return "\nGET http://example.com/people?filter={\"gender\":\"male\"}&amp;populate=children HTTP/1.1\n";
  }

function program13(depth0,data) {
  
  
  return "\nHTTP/1.1 200 OK\nContent-Type: application/json\n\n[{\n	\"_id\": \"...\",\n	\"name\": \"Bob\",\n	\"email\": \"bob@example.com\",\n	\"gender\": \"male\",\n	\"children\": [{\n		\"_id\": \"...\"\n		\"name\": \"Sally\",\n		\"email\": \"sally@example.com\",\n		\"gender\": \"female\",\n		\"children\": []\n	}]\n}]\n";
  }

function program15(depth0,data) {
  
  
  return "\nPATCH http://example.com/people HTTP/1.1\nContent-Type: application/json\n\n[\n	{\"_id\":\"...\",\"name\":\"Bob\"},\n	{\"_id\":\"...\",\"name\":\"Sally\"}\n]\n";
  }

function program17(depth0,data) {
  
  
  return "\nHTTP/1.1 200 OK\nContent-Type: application/json\n\n[{\n	\"_id\": \"...\",\n	\"name\": \"Bob\",\n	\"email\": \"bob@example.com\",\n	\"gender\": \"Male\",\n	\"children\": [\"...\"]\n}, {\n	\"_id\": \"...\",\n	\"name\": \"Sally\",\n	\"email\": \"sally@example.com\",\n	\"gender\": \"Female\",\n	\"children\": []\n}]\n";
  }

function program19(depth0,data) {
  
  
  return "\nvar socket = io.connect('http://example.com');\n\nvar req = {\n	method: 'get',\n	url: '/people?filter={\"name\":\"Bob\"}'\n};\n\n// Using the socket.io client to make requests\nsocket.emit('request', req, function(res) {\n	var bob = res.body;\n});\n";
  }

function program21(depth0,data) {
  
  
  return "\nvar socket = io.connect('http://example.com');\n\nvar req = {\n	model: 'person',\n	event: 'create',\n	filter: {gender: 'female'}\n};\n\n// Set-up the listener on the server\nsocket.emit('listen', req, function(res) {\n	// Start listening for incoming events\n	socket.on(res.emits, function(person) {\n		console.log('A new person with gender \"female\" was created on the server.');\n	});\n});\n";
  }

  buffer += "<p>\n	Dagger.js is a new RESTful API framework for Node.js packed full of power, built on top of known\n	and trusted libraries like <a href=\"http://expressjs.com\">Express</a>, <a href=\"http://socket.io\">\n	Socket.IO</a>, and <a href=\"http://mongoosejs.com/\">Mongoose</a>.\n</p>\n\n\n\n<h2>Mongoose Models with Added Extras</h2>\n<p>\n	Dagger.js models use mongoose under the hood, but has extended it for ease of use and added\n	some extra features.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "javascript", options) : helperMissing.call(depth0, "highlight", "javascript", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n\n\n<h2>Easy-to-use Endpoints</h2>\n<p>\n	The built-in endpoint class is very easy to use. You just create a new endpoint instance with a base route\n	and define methods/sub-routes.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "javascript", options) : helperMissing.call(depth0, "highlight", "javascript", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<p>\n	For basic model endpoints, you don't have to write most of this yourself, you can use the <abbr\n	title=\"Command Line Interface\">CLI</abbr> scaffolding tool to create endpoints for your models\n	automatically. These auto-generated endpoints have a lot of built-in advantages.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "bash", options) : helperMissing.call(depth0, "highlight", "bash", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<h3>Schema Endpoints</h3>\n<p>\n	Auto-generated endpoints will automatically create schema endpoints for you models so your API will\n	document itself.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<h3>Filters and Populates</h3>\n<p>\n	You can pass in mongodb style filter queries to your model endpoints, as well as specifying fields to\n	be populated when querying.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<h3>Bulk Updates and Deletes</h3>\n<p>\n	Model endpoints also support bulk updates and deletes so you can design you code to be more efficient.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n\n\n<h2>Socket.IO Out of the Box</h2>\n<p>\n	Socket.IO is deeply integrated into Dagger.js; Any request that you can make with a REST endpoint\n	can also be done through a websocket.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "javascript", options) : helperMissing.call(depth0, "highlight", "javascript", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<p>\n	You can also use Socket.IO to create push-based applications in Dagger.js by having the client listen\n	for events on specific models:\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "javascript", options) : helperMissing.call(depth0, "highlight", "javascript", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
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
  
  
  return "\nvar models = require('dagger.js/lib/models');\n\nvar Email     = models.types.Email;\nvar ObjectId  = models.types.ObjectId;\n\n//\n// Define a new Person schema\n//\nvar PersonSchema = module.exports = {\n	name: String,\n	email: {type: Email, index: {unique: true}},\n	gender: {type: String, enum: ['male', 'female', 'other', 'undisclosed']},\n	children: [{type: ObjectId, ref: 'person'}]\n};\n";
  }

function program3(depth0,data) {
  
  
  return "\nvar Endpoint = require('dagger.js/lib/endpoint');\n\n//\n// Define the new endpoint\n//\nvar PeopleEndpoint = module.exports = Endpoint.create({\n\n	route: '/people',\n\n	'get': function(req) {\n		req.respond(200, 'Hello World!');\n	},\n\n	'get /:id': function(req) {\n		req.respond(200, You attempted to fetch ' + req.params.id);\n	},\n\n	'post': function(req) {\n		req.respond(405, 'We don't support POSTs on this endpoint');\n	},\n\n	'put|patch': function(req) {\n		req.respond(200, 'We handle PUT and PATCH requests with the same code');\n	},\n\n	'del': function(req) {\n		req.respond(200, 'No! D: Don't delete me! :(');\n	}\n\n});\n";
  }

function program5(depth0,data) {
  
  
  return "\nGET http://example.com/people/schema HTTP/1.1\n";
  }

function program7(depth0,data) {
  
  
  return "\nHTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n	\"_id\": {\n		\"type\": \"ObjectId\",\n		\"auto\": true\n	},\n	\"name\": {\n		\"type\": \"String\"\n	},\n	\"email\": {\n		\"type\": \"Email\",\n		\"unique\": true\n	},\n	\"gender\": {\n		\"type\": \"String\",\n		\"enum\": [\"Male\", \"Female\", \"Other\", \"Undisclosed\"]\n	},\n	\"children\": {\n		\"type\": \"[ObjectId]\",\n		\"ref\": \"Person\"\n	}\n}\n";
  }

function program9(depth0,data) {
  
  
  return "\nGET http://example.com/people?filter={\"gender\":\"Male\"}&amp;populate=children HTTP/1.1\n";
  }

function program11(depth0,data) {
  
  
  return "\nHTTP/1.1 200 OK\nContent-Type: application/json\n\n[{\n	\"_id\": \"...\",\n	\"name\": \"Bob\",\n	\"email\": \"bob@example.com\",\n	\"gender\": \"Male\",\n	\"children\": [{\n		\"_id\": \"...\"\n		\"name\": \"Sally\",\n		\"email\": \"sally@example.com\",\n		\"gender\": \"Female\",\n		\"children\": []\n	}]\n}]\n";
  }

function program13(depth0,data) {
  
  
  return "\nPATCH http://example.com/people HTTP/1.1\nContent-Type: application/json\n\n[\n	{\"_id\":\"...\",\"name\":\"Bob\"},\n	{\"_id\":\"...\",\"name\":\"Sally\"}\n]\n";
  }

function program15(depth0,data) {
  
  
  return "\nHTTP/1.1 200 OK\nContent-Type: application/json\n\n[{\n	\"_id\": \"...\",\n	\"name\": \"Bob\",\n	\"email\": \"bob@example.com\",\n	\"gender\": \"Male\",\n	\"children\": [\"...\"]\n}, {\n	\"_id\": \"...\",\n	\"name\": \"Sally\",\n	\"email\": \"sally@example.com\",\n	\"gender\": \"Female\",\n	\"children\": []\n}]\n";
  }

function program17(depth0,data) {
  
  
  return "\nvar socket = io.connect('http://example.com');\n\n// Using the socket.io client to make requests\nsocket.emit('request', {method: 'get', url: '/people?filter={\"name\":\"Bob\"}'}, function(res) {\n	var bob = res.body;\n});\n";
  }

function program19(depth0,data) {
  
  
  return "\nvar socket = io.connect('http://example.com');\n\n// Using socket.io client to listen for events on the server\nsocket.emit('listen', {model: 'person', event: 'create', filter: {gender: 'female'}}, function(res) {\n	socket.on(res.emits, function(person) {\n		console.log('A new person with gender \"female\" was created on the server.');\n	});\n});\n";
  }

  buffer += "<p>\n	Dagger.js is a new RESTful API framework for Node.js packed full of power, built on top of known\n	and trusted libraries like <a href=\"http://expressjs.com\">Express</a>, <a href=\"http://socket.io\">\n	Socket.IO</a>, and <a href=\"http://mongoosejs.com/\">Mongoose</a>.\n</p>\n\n\n\n<h2>Mongoose Models with Added Extras</h2>\n<p>\n	Dagger.js models use mongoose under the hood, but has extended it for ease of use and added\n	some extra features.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "javascript", options) : helperMissing.call(depth0, "highlight", "javascript", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n\n\n<h2>Easy-to-use Endpoints</h2>\n<p>\n	The built-in endpoint class is very easy to use.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "javascript", options) : helperMissing.call(depth0, "highlight", "javascript", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<h3>Schema Endpoints</h3>\n<p>\n	Auto-generated endpoints will automatically create schema endpoints for you models so your API will\n	document itself.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<h3>Filters and Populates</h3>\n<p>\n	You can pass in mongodb style filter queries to your model endpoints, as well as specifying fields to\n	be populated when querying.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<h3>Bulk Updates and Deletes</h3>\n<p>\n	Model endpoints also support bulk updates and deletes so you can design you code to be more efficient.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "http", options) : helperMissing.call(depth0, "highlight", "http", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n\n\n<h2>Socket.IO Out of the Box</h2>\n<p>\n	Socket.IO is deeply integrated into Dagger.js; Any request that you can make with a REST endpoint\n	can also be done through a websocket.\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "javascript", options) : helperMissing.call(depth0, "highlight", "javascript", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<p>\n	You can also use Socket.IO to create push-based applications in Dagger.js by having the client listen\n	for events on specific models:\n</p>\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data};
  stack2 = ((stack1 = helpers.highlight || (depth0 && depth0.highlight)),stack1 ? stack1.call(depth0, "javascript", options) : helperMissing.call(depth0, "highlight", "javascript", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  });

if (typeof exports === 'object' && exports) {module.exports = this["exports"];} 
 }; /* ==  End source for module /templates.js  == */ return module; }());;