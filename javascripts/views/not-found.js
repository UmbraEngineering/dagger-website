
var templates  = require('templates');
var View       = require('cloak/view');

var NotFoundView = module.exports = View.extend({

	className: '404 center-panel',
	template: templates['not-found'],

	draw: function() {
		this.$elem.html(this.render({
			isLoggedIn: !! cloak.auth.user
		}));
	}

});
