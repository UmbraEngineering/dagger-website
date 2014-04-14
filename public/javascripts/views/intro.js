
var templates  = require('templates');
var View       = require('cloak/view');

require('./_highlight');

var IntroView = module.exports = View.extend({

	className: 'intro',
	template: templates['intro'],

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
