
var $              = require('jquery');
var templates      = require('templates');
var View           = require('cloak/view');

var HeaderView = module.exports = View.extend({

	template: templates['header'],

	initialize: function() {
		this.$elem = $('#header');
	},

	draw: function() {
		this.$elem.html(this.render());
	}

});
