
var $                    = require('jquery');
var _                    = require('cloak/underscore');
var cloak                = require('cloak');
var Router               = require('cloak/router');

var HomeView             = require('views/home');
var GettingStartedView   = require('views/getting-started');

// --------------------------------------------------------

var MainRouter = module.exports = Router.extend({

	routes: {
		'':                     'index',
		'/':                    'index',
		'/getting-started':     'gettingStarted'
	},

	initialize: function() {
		this.$content = $('#content');

		// Handle internal anchors with the router
		$('#wrapper').on('click', 'a[href^="#"]:not([href="#"]), a[href^="/#"]', this.handleAnchor);
	},

// --------------------------------------------------------
	
	// 
	// "/"
	// 
	index: function() {
		this.drawPage(HomeView);
	},

	// 
	// "/getting-started"
	// 
	gettingStarted: function() {
		this.drawPage(GettingStartedView);
	},

// --------------------------------------------------------
	
	// 
	// Draws a page with the given page view class
	// 
	drawPage: function(PageView, callback) {
		// If this is an initial page load, it will have been rendered server-side, so we need
		// to pull the content already rendered to initialize the page view
		if (! this.currentView) {
			var view = this.currentView = new PageView();
			view.$elem = this.$content.children('section');

			if (view.afterDraw) {
				view.afterDraw();
			}

			if (typeof callback === 'function') {
				callback();
			}
		}

		// Otherwise, we need to transition the content using a quick fade animation
		else {
			var $content = this.$content;
			var current = this.currentView;
			var next = new PageView();
			next.draw();

			$content.animate({ opacity: 'hide' }, 300, function() {
				current.remove();
				$content.append(next.$elem);
				$content.animate({ opacity: 'show' }, 300, function() {
					if (typeof callback === 'function') {
						callback();
					}
				});
			});
		}
	}

});
