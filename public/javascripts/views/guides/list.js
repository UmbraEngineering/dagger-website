
var templates   = require('templates');
var View        = require('cloak/view');

require('../_highlight');

var GuideListView = module.exports = View.extend({

	className: 'guide-list',
	template: templates['guides.list'],

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
