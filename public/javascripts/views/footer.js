
var $              = require('jquery');
var templates      = require('templates');
var View           = require('cloak/view');

var FooterView = module.exports = View.extend({

	template: templates['footer'],

	initialize: function() {
		this.$elem = $('#footer');
	},

	draw: function() {
		this.$elem.html(this.render({
			year: (new Date()).getFullYear()
		}));
	}

});
