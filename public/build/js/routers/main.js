;require._modules["/routers/main.js"] = (function() { var __filename = "/routers/main.js"; var __dirname = "/routers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /routers/main.js  == */ var __module__ = function() { 
 
var $                    = require('jquery');
var _                    = require('cloak/underscore');
var cloak                = require('cloak');
var Router               = require('cloak/router');

var HomeView             = require('views/home');
var GuideListView        = require('views/guides/list');

// --------------------------------------------------------

var MainRouter = module.exports = Router.extend({

	routes: {
		'':                     'index',
		'/':                    'index',
		'/guides':              'guides',
		'/guides/:page':        'showGuide',
		'/docs':                'docs',
		'/docs/:page':          'showDocPage'
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

// --------------------------------------------------------

	// 
	// "/guides"
	// 
	guides: function() {
		this.drawPage(GuideListView);
	},

	// 
	// "/guides/:page"
	// 
	showGuide: function(params) {
		// 
	},

// --------------------------------------------------------

	// 
	// "/docs"
	// 
	docs: function() {
		this.drawPage(/* ... */);
	},

	// 
	// "/docs/:page"
	// 
	showDocPage: function(params) {
		// 
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

			this.currentView = next;

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
 
 }; /* ==  End source for module /routers/main.js  == */ return module; }());;