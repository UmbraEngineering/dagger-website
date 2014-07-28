;require._modules["/routers/main.js"] = (function() { var __filename = "/routers/main.js"; var __dirname = "/routers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /routers/main.js  == */ var __module__ = function() { 
 
var $                    = require('jquery');
var _                    = require('cloak/underscore');
var cloak                = require('cloak');
var Router               = require('cloak/router');

var HomeView             = require('views/home');
var GuideListView        = require('views/guides/list');
var GuideView            = require('views/guides/guide');

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

		// Handle local links with the router
		$('#wrapper').on('click', 'a[data-local]', this.handleAnchor);
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
		this.drawPage(GuideView, { guide: params.page });
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
	drawPage: function(PageView, params, callback) {
		if (typeof params === 'function') {
			callback = params;
			params = null;
		}
		params = params || { };

		// If this is an initial page load, it will have been rendered server-side, so we need
		// to pull the content already rendered to initialize the page view
		if (! this.currentView) {
			var view = this.currentView = new PageView();
			view.$elem = this.$content.children('section');
			_.extend(view, params);

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
			var next = this.currentView = new PageView();
			_.extend(next, params);
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
 
 }; /* ==  End source for module /routers/main.js  == */ return module; }());;