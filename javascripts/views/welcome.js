
var templates  = require('templates');
var View       = require('cloak/view');

require('./_highlight');

var WelcomeView = module.exports = View.extend({

	className: 'welcome',
	template: templates['welcome'],

	events: {
		// 
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render());

		this.bindEvents();
		this.highlight();
	}

});
