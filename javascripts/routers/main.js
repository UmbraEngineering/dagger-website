
var $               = require('jquery');
var cloak           = require('cloak');
var Router          = require('cloak/router');
var HeaderView      = require('views/header');
var FooterView      = require('views/footer');
var WelcomeView     = require('views/welcome');
var GetStartedView  = require('views/get-started');

var MainRouter = module.exports = Router.extend({

	routes: {
		'/':             'welcome',
		'/welcome':      'welcome',
		'/get-started':  'getStarted',
		'/example':      'example',
		'/docs':         'docs'
	},

	initialize: function() {
		this.$content = $('#content');

		// Handle 404 errors
		this.bind('notfound');
		this.on('notfound', this.notfound);

		// Handle internal anchors with the router
		$('#wrapper').on('click', 'a[href^="#"], a[href^="/#"]', this.handleAnchor);

		// Draw the header/footer
		(new HeaderView()).draw();
		(new FooterView()).draw();
	},

// --------------------------------------------------------
	
	// 
	// "/" and "/welcome"
	// 
	welcome: function() {
		this.drawViewToContent(new WelcomeView());
	},

// --------------------------------------------------------
	
	// 
	// "/get-started"
	// 
	getStarted: function() {
		this.drawViewToContent(new GetStartedView());
	},

// --------------------------------------------------------
	
	// 
	// "/example"
	// 
	example: function() {
		this.drawViewToContent(new ExampleView());
	},

// --------------------------------------------------------
	
	// 
	// "/docs"
	// 
	docs: function() {
		this.drawViewToContent(new DocsView());
	},

// --------------------------------------------------------
	
	// 
	// Handles all unknown routes
	// 
	notfound: function(state) {
		this.drawViewToContent(new NotFoundView());
	},

// --------------------------------------------------------

	// 
	// Draws a simple view instance to the content area with a small animation
	// 
	drawViewToContent: function(view, callback) {
		var $content = this.$content;

		// Fade out the current content
		$content.animate({ opacity: 0 }, 600, function() {
			// Remove the current content
			$content.html('');

			// Draw the new view
			view.draw();
			view.$elem.appendTo($content);

			// Fade in the new content
			$content.animate({ opacity: 100 }, 600, function() {
				// Call any callback that was given
				if (callback) {
					callback();
				}
			});
		});
	}

});
