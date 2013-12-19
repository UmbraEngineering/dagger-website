
var templates  = require('templates');
var View       = require('cloak/view');

require('./_highlight');

var GetStartedView = module.exports = View.extend({

	className: 'get-started',
	template: templates['get-started'],

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
