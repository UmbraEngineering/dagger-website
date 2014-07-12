
var $               = require('jquery');
var _               = require('cloak/underscore');
var cloak           = require('cloak');
var Router          = require('cloak/router');

// --------------------------------------------------------

var DocsRouter = module.exports = Router.extend({

	routes: {
		'/docs':   'index'
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
		// 
	}

});
