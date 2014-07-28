
var templates   = require('templates');
var View        = require('cloak/view');

require('../_highlight');

var GuideListView = module.exports = View.extend({

	className: 'guide',
	template: null,

	events: {
		// 
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.template = this.template || templates['guides.' + this.guide];
		
		this.$elem.html(this.render());
		this.afterDraw();
	},

	afterDraw: function() {
		this.highlight();
	}

});
