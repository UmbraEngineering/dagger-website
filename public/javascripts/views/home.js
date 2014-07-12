
var templates   = require('templates');
var View        = require('cloak/view');

require('./_highlight');

var HomeView = module.exports = View.extend({

	className: 'home',
	template: templates['home'],

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
