;require._modules["/templates.js"] = (function() { var __filename = "/templates.js"; var __dirname = "/"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /templates.js  == */ var __module__ = function() { 
 var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["exports"] = this["exports"] || {};

this["exports"]["guides.bootstrappers"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row content\">\n	<h2>Bootstrappers</h2>\n</div>";
  });

this["exports"]["guides.cli"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n				$ dagger init [--deps]\n			";
  }

function program3(depth0,data) {
  
  
  return "\n				$ dagger create model &lt;modelName> [--fields &lt;fieldList>]\n			";
  }

function program5(depth0,data) {
  
  
  return "\n				$ dagger create model person --fields name,email,age\n			";
  }

function program7(depth0,data) {
  
  
  return "\n					var models = require('dagger.js/lib/models');\n\n\n					// \n					// Define the Person schema\n					// \n					// There is no need to create the actual model here (eg. `mongoose.model('Person', PersonSchema)`)\n					// as that is handled automatically by dagger's model module.\n					// \n					var PersonSchema = module.exports = new models.Schema({\n						name: { type: String },\n						email: { type: String },\n						age: { type: String }\n					});\n				";
  }

function program9(depth0,data) {
  
  
  return "\n				$ dagger create model person --fields name,email,age:Number\n			";
  }

function program11(depth0,data) {
  
  
  return "\n				$ dagger create model person --template &lt;templateName>\n			";
  }

function program13(depth0,data) {
  
  
  return "\n				$ dagger create endpoint &lt;endpointName> [for &lt;model>]\n			";
  }

function program15(depth0,data) {
  
  
  return "\n					var Endpoint   = require('dagger.js/lib/endpoint');\n					var HttpError  = require('dagger.js/lib/http-meta').HttpError;\n\n					var FooEndpoint = module.exports = new Endpoint({\n\n						route: '/foo',\n						\n						//\n						// GET /foo\n						//\n						\"get\": function(req) {\n							(new HttpError(405, 'Endpoint not configured')).send(req);\n						},\n						\n						//\n						// POST /foo\n						//\n						\"post\": function(req) {\n							(new HttpError(405, 'Endpoint not configured')).send(req);\n						},\n						\n						//\n						// PUT|PATCH /foo\n						//\n						\"put|patch\": function(req) {\n							(new HttpError(405, 'Endpoint not configured')).send(req);\n						},\n						\n						//\n						// DELETE /foo\n						//\n						\"delete\": function(req) {\n							(new HttpError(405, 'Endpoint not configured')).send(req);\n						}\n						\n					});\n				";
  }

function program17(depth0,data) {
  
  
  return "\n				$ dagger create endpoint foo --template &lt;templateName>\n			";
  }

function program19(depth0,data) {
  
  
  return "\n				$ dagger create middleware &lt;middlewareName>\n			";
  }

function program21(depth0,data) {
  
  
  return "\n				$ dagger create bootstrap &lt;bootstrapperName>\n			";
  }

function program23(depth0,data) {
  
  
  return "\n					exports = module.exports = function(req, next) {\n						// \n						// Define your middleware functionality here\n						// \n					};\n				";
  }

function program25(depth0,data) {
  
  
  return "\n					exports = module.exports = function() {\n						// \n						// Do your bootstrapping here\n						// \n					};\n				";
  }

function program27(depth0,data) {
  
  
  return "\n				$ dagger destroy &lt;componentType> &lt;componentName>\n			";
  }

function program29(depth0,data) {
  
  var buffer = "";
  buffer += "\n					var Endpoint   = require('dagger.js/lib/endpoint');\n					var HttpError  = require('dagger.js/lib/http-meta').HttpError;\n\n					var {{ endpointName.class }}Endpoint = module.exports = new Endpoint({\n\n						route: '/{{ endpointName.hyphen }}',\n						{{#each methods}}\n						//\n						// {{upper this}} /{{ ../endpointName.hyphen }}\n						//\n						\"{{ this }}\": function(req) {\n							(new HttpError(405, 'Endpoint not configured')).send(req);\n						}{{#unless @last}},{{/unless}}\n						{{/each}}\n					});\n				";
  return buffer;
  }

function program31(depth0,data) {
  
  
  return "\n				$ dagger config template &lt;componentType>\n			";
  }

function program33(depth0,data) {
  
  
  return "\n				# Create a new endpoint template called \"foo\", copying from the base template\n				$ dagger config template endpoint --name foo --from base\n			";
  }

  buffer += "<div class=\"row content\">\n	<h2>Guides: The <code>dagger</code> Command</h2>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				The <code>dagger</code> command provides scaffolding utilities to help you build your app more efficiently. This guide\n				will walk you through the basics of using the scaffolding tool to build your application. The first thing you will do\n				with the scaffold is creating new projects. This is done with the <code>dagger init</code> command. This command\n				creates all of the basic directories and files needed for a dagger app. You can also add a <code>--deps</code> flag to\n				the command which will install all of Dagger's dependencies as well.\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, "bash", options) : helperMissing.call(depth0, "pre", "bash", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				From there, you can use the scaffold to create your app's components.\n			</p>\n		</div>\n	</div>\n\n\n\n	<h3 id=\"models\">Models</h3>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-6 medium-push-6 columns\">\n			<p>\n				Using the <code>dagger create model</code> command you can create a new model. The file will be saved to your app's\n				<code>models</code> directory.\n			</p>\n		</div>\n		<div class=\"small-12 medium-6 medium-pull-6 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, "bash", options) : helperMissing.call(depth0, "pre", "bash", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				For example, if you're going to create a person model, you can define the fields like this:\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, "bash", options) : helperMissing.call(depth0, "pre", "bash", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				This would create the following model file:\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-10 medium-offset-1 columns\">\n			<div class=\"file\">\n				<h3>models/person.js</h3>\n				";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, "javascript", options) : helperMissing.call(depth0, "pre", "javascript", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				By default, all the fields you define with the <code>--fields</code> flag are defined as simple <code>String</code>\n				fields. It probably makes more sense to make the <code>age</code> field a <code>Number</code>. You can define the\n				type of a field when creating the model by giving the type with the field name:\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, "bash", options) : helperMissing.call(depth0, "pre", "bash", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				You can <a href=\"#templates\">modify the template model or create new templates</a> using the <code>dagger config\n				template</code> command. From there, you can choose what template to use when creating new models using the\n				<code>--template</code> option.\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, "bash", options) : helperMissing.call(depth0, "pre", "bash", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n\n\n	<h3 id=\"endpoints\">Endpoints</h3>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-6 medium-push-6 columns\">\n			<p>\n				You can create new endpoints for your application using the <code>dagger create endpoint</code> command.\n			</p>\n		</div>\n		<div class=\"small-12 medium-6 medium-pull-6 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, "bash", options) : helperMissing.call(depth0, "pre", "bash", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				Using the command in the simplest form (without the <code>for</code> clause) will create a new\n				endpoint file containing a bare-bones endpoint instance with empty functions for each of the four\n				<abbr title=\"Create, Read, Update, Destroy\">CRUD</abbr> operations.\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-10 medium-offset-1 columns\">\n			<div class=\"file\">\n				<h3>endpoints/foo.js</h3>\n				";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, "javascript", options) : helperMissing.call(depth0, "pre", "javascript", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				The <code>for</code> clause changes the default <a href=\"#templates\">template</a> for the endpoint\n				from <code>base</code> to <code>model</code>. That template contains functions for all the basic\n				RESTful operations, including the following:\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<dl>\n				<dt><code>GET /foo</code></dt>\n				<dd>\n					Bulk read operations with support for many querying functionalities\n				</dd>\n\n				<dt><code>GET /foo/:id</code></dt>\n				<dd>\n					Reads a single document from the database by <code>ObjectId</code>\n				</dd>\n\n				<dt><code>POST /foo</code></dt>\n				<dd>\n					Creates a new document\n				</dd>\n\n				<dt><code>PUT /foo</code></dt>\n				<dt><code>PATCH /foo</code></dt>\n				<dd>\n					Bulk update operations, allows sending multiple documents with updates\n				</dd>\n				\n				<dt><code>PUT /foo/:id</code></dt>\n				<dt><code>PATCH /foo/:id</code></dt>\n				<dd>\n					Updates a single document by <code>ObjectId</code>\n				</dd>\n				\n				<dt><code>DELETE /foo</code></dt>\n				<dd>\n					Bulk delete operations, allows deleting multiple documents\n				</dd>\n				\n				<dt><code>DELETE /foo/:id</code></dt>\n				<dd>\n					Deletes a single document by <code>ObjectId</code>\n				</dd>\n			</dl>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				Like with <a href=\"#models\">models</a>, you can use the CLI's <a href=\"#templates\">templating system</a> to\n				modify the templates used for generating your endpoint files, and to choose which template to use when creating\n				one.\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data},helper ? helper.call(depth0, "bash", options) : helperMissing.call(depth0, "pre", "bash", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n\n\n	<h3 id=\"middlewares-bootstrappers\">Middleware and Bootstrapping</h3>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-6 medium-push-6 columns\">\n			<p>\n				Middleware and bootstrapping components can also be created by the scaffolding tool. The generated files\n				have only a very basic template to them by default, as these components are usually fairly basic in\n				structure anyway.\n			</p>\n		</div>\n		<div class=\"small-12 medium-6 medium-pull-6 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data},helper ? helper.call(depth0, "bash", options) : helperMissing.call(depth0, "pre", "bash", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data},helper ? helper.call(depth0, "bash", options) : helperMissing.call(depth0, "pre", "bash", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-10 medium-offset-1 columns\">\n			<div class=\"file\">\n				<h3>middleware/foo.js</h3>\n				";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data},helper ? helper.call(depth0, "javascript", options) : helperMissing.call(depth0, "pre", "javascript", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-10 medium-offset-1 columns\">\n			<div class=\"file\">\n				<h3>bootstrap/foo.js</h3>\n				";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data},helper ? helper.call(depth0, "javascript", options) : helperMissing.call(depth0, "pre", "javascript", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				For more info about creating and using middlewares and bootstrappers, check out the respective guides\n				<a href=\"/guides/middleware\" data-local=\"true\">Middleware</a> and <a href=\"/guides/bootstrappers\"\n				data-local=\"true\">Bootstrappers</a>, as well as the <a href=\"/docs\">documentation</a>.\n			</p>\n		</div>\n	</div>\n\n\n\n	<h3 id=\"destroy\">Destroying Components</h3>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-6 medium-push-6 columns\">\n			<p>\n				All the basic component types (<a href=\"#models\">models</a>, <a href=\"#endpoints\">endpoints</a>,\n				<a href=\"#middlewares-bootstrappers\">middlewares, and bootstrappers</a>) can be destroyed using the CLI\n				as easily as they can be created.\n			</p>\n		</div>\n		<div class=\"small-12 medium-6 medium-pull-6 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data},helper ? helper.call(depth0, "bash", options) : helperMissing.call(depth0, "pre", "bash", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				The command will prompt you to confirm before deleting anything. To skip the confirmation, you can add a\n				<code>--force</code> flag to the command.\n			</p>\n		</div>\n	</div>\n\n\n\n	<h3 id=\"templates\">Templating</h3>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				Each component type (<a href=\"#models\">models</a>, <a href=\"#endpoints\">endpoints</a>, <a\n				href=\"#middlewares-bootstrappers\">middlewares, and bootstrappers</a>) has its own set of templates defined gloabally\n				within the <code>dagger</code> command that are used when generating new components with the <code>dagger create</code>\n				command. The content of these templates can be modified to better suit your own development practices and patterns,\n				or you can even create new templates for different tasks. You can also create templates that are contained locally\n				inside a single project. These templates are <a href=\"http://handlebarsjs.com/\">Handlebars</a> templates containing\n				JavaScript. For example, here is the contents of the base endpoint template.\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-10 medium-offset-1 columns\">\n			<div class=\"file\">\n				<h3>template/endpoint/base.js</h3>\n				";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(29, program29, data),data:data},helper ? helper.call(depth0, "javascript", options) : helperMissing.call(depth0, "pre", "javascript", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				And this template generates endpoint files like this:\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-10 medium-offset-1 columns\">\n			<div class=\"file\">\n				<h3>endpoints/foo.js</h3>\n				";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, "javascript", options) : helperMissing.call(depth0, "pre", "javascript", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				By default, <code>dagger</code> ships with a <code>base</code> template for each component type. There is also\n				the <code>model</code> template for endpoints which contains all of the built-in RESTful goodness, as well as\n				a basic <code>uncaught</code> bootstrapper which adds logging of uncaught exceptions.\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-6 medium-push-6 columns\">\n			<p>\n				You can open up a template for editing with a single, simple command. In this form, it will open the\n				<code>base</code> template for the given component type using your default editor.\n			</p>\n		</div>\n		<div class=\"small-12 medium-6 medium-pull-6 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(31, program31, data),data:data},helper ? helper.call(depth0, "bash", options) : helperMissing.call(depth0, "pre", "bash", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				To edit a template other than the base, you can add the <code>--name &lt;templateName></code> option. Creating\n				new templates is also done in this way, you just give a template name that does not exist and a new template\n				file will be created. When you create a new template in this way, you can copy over another existing template\n				into the new file using the <code>--from &lt;templateName></code> option.\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data},helper ? helper.call(depth0, "bash", options) : helperMissing.call(depth0, "pre", "bash", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				To make a change to a template only effect your current project, or to create a new template in your current\n				project, you can add the <code>--edit-local</code> flag. Local templates are always given precedence when\n				creating new components unless a <code>--use-global</code> flag is given during creation.\n			</p>\n		</div>\n	</div>\n\n	<hr />\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				That concludes the guide about the scaffold CLI. For more specific detail about the individual commands and their\n				options / flags check out the CLI <a href=\"/docs/cli\" data-local=\"true\">documentation</a>.\n			</p>\n		</div>\n	</div>\n</div>";
  return buffer;
  });

this["exports"]["guides.config"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n					module.exports = {\n						//\n					};\n				";
  }

function program3(depth0,data) {
  
  
  return "\n				$ NODE_ENV=development node app.js\n			";
  }

function program5(depth0,data) {
  
  
  return "\n				module.exports = {\n					\n					foo: {\n						bar: \"some value\"\n					}\n\n				};\n			";
  }

function program7(depth0,data) {
  
  
  return "\n				var config = require('dagger.js/lib/config');\n\n				// \"some value\"\n				var fooBar = config.foo.bar;\n			";
  }

  buffer += "<div class=\"row content\">\n	<h2>Configuring Your App</h2>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				When you create a new dagger project, you have a <code>config</code> directory pre-populated with a single file,\n				<code>master.js</code>. This file contains all of the configurable setting for a dagger app with their default\n				values. To use dagger in its simplest form, you can modify the values in this file. However, it will likely be\n				more useful to set up multiple environments for your app to run in. Every file you create in the <code>config</code>\n				directory (other than the <code>master.js</code> file) will automatically create a new environment for your app.\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				Let's say you want to set up two environments: one for development\n				and one for production. First, you would create two new files in <code>config</code>: <code>development.js</code>\n				and <code>production.js</code>. To start, they should look like this:\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-10 medium-offset-1 columns\">\n			<div class=\"file\">\n				<h3>config/development.js</h3>\n				";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, "javascript", options) : helperMissing.call(depth0, "pre", "javascript", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				Pretty simple. All environments inherit from the <code>master.js</code> file, so any values that are shared between\n				environments can be defined there without worrying about the individual environment files. All that needs to be in\n				those files are the config values that are specific to that one environment.\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-6 medium-push-6 columns\">\n			<p>\n				You can change which environment you app is running in by setting the <code>NODE_ENV</code> environment variable\n				when starting your application.\n			</p>\n		</div>\n		<div class=\"small-12 medium-6 medium-pull-6 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, "bash", options) : helperMissing.call(depth0, "pre", "bash", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n	<h3>Custom Config</h3>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				In addition to the built-in dagger configuration values, you can define and reference your own config values as well.\n				For example, let's say you define a value in your config file like this:\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-10 medium-offset-1 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, "javascript", options) : helperMissing.call(depth0, "pre", "javascript", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				You can then reference the config value in your application code by loading the dagger config module:\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 medium-10 medium-offset-1 columns\">\n			";
  stack1 = (helper = helpers.pre || (depth0 && depth0.pre),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, "javascript", options) : helperMissing.call(depth0, "pre", "javascript", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n\n	<hr />\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				That's about all there is to it; Configuration is very simple with dagger so that you can just get to work and not have\n				to fuss with setting up environments. For more info on the individual configuration values that go in your files, you\n				can look at the <a href=\"/docs/config\">configuration docs</a>.\n			</p>\n		</div>\n	</div>\n</div>";
  return buffer;
  });

this["exports"]["guides.endpoints"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row content\">\n	<h2>Endpoints</h2>\n</div>";
  });

this["exports"]["guides.list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row content\">\n	<h2>Guides</h2>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<ul>\n				<li><a href=\"/guides/cli\" data-local=\"true\">The <code>dagger</code> Command</a></li>\n				<li><a href=\"/guides/config\" data-local=\"true\">Configuring Your App</a></li>\n				<li><a href=\"/guides/endpoints\" data-local=\"true\">Endpoints</a></li>\n				<li><a href=\"/guides/models\" data-local=\"true\">Models</a></li>\n				<li><a href=\"/guides/middleware\" data-local=\"true\">Middleware</a></li>\n				<li><a href=\"/guides/bootstrapers\" data-local=\"true\">Bootstrappers</a></li>\n				<li><a href=\"/guides/websockets\" data-local=\"true\">Websockets (via socket.io)</a></li>\n			</ul>\n		</div>\n	</div>\n</div>\n";
  });

this["exports"]["guides.middleware"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row content\">\n	<h2>Middleware</h2>\n</div>";
  });

this["exports"]["guides.models"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row content\">\n	<h2>Models</h2>\n</div>";
  });

this["exports"]["guides.websockets"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row content\">\n	<h2>Websockets (via socket.io)</h2>\n</div>";
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
  buffer += "\n			</div>\n		</div>\n	</div>\n\n	<div class=\"row\">\n		<div class=\"small-12 columns\">\n			<p>\n				For more help getting started, you can take a look at the <a href=\"/guides\" data-local=\"true\">guides</a> or\n				the <a href=\"/docs\" data-local=\"true\">documentation</a>.\n			</p>\n		</div>\n	</div>\n</div>\n";
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

  buffer += "<!doctype html>\n<html>\n<head>\n	\n	<meta charset=\"utf-8\" />\n	<title>Dagger.js</title>\n\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"/fonts/district-thin/stylesheet.css\" />\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"/build/css/styles.min.css\" />\n\n</head>\n<body>\n\n	<div id=\"wrapper\">\n		<div id=\"header\">\n			<h1><a href=\"/\" data-local=\"true\">Dagger.js</a></h1>\n			<nav>\n				<ul>\n					<li><a href=\"/guides\" data-local=\"true\">Guides</a></li>\n					<li><a href=\"/docs\" data-local=\"true\">Documentation</a></li>\n					<li><a href=\"https://github.com/UmbraEngineering/dagger\">GitHub</a></li>\n					<li><a href=\"https://github.com/UmbraEngineering/dagger/issues\">Issues</a></li>\n				</ul>\n			</nav>\n		</div>\n		<div id=\"content\">\n			";
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