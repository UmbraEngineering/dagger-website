
var templates   = require('templates');
var View        = require('cloak/view');

require('./_highlight');

var GettingStartedView = module.exports = View.extend({

	className: 'getting-started',
	template: templates['getting-started'],

	events: {
		// 
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render());
		this.afterDraw();
	},

	afterDraw: function() {
		this.highlight();
	}

});
