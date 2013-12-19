
var jQuery   = require('jquery');
var View     = require('cloak/view');

// Load the spin.js jQuery plugin
require('jquery.spin');

var SpinnerView = module.exports = View.extend({

	initialize: function(elem, preset, color) {
		// Override the default $elem with the given one, if one is given
		if (elem) {
			if (! (elem instanceof jQuery)) {
				elem = $(elem);
			}
			this.$elem = elem;
		}

		// Store the options to be used when creating a spinner
		if (typeof preset === 'object' && preset) {
			this.opts = preset;
		} else {
			this.preset = preset;
			this.color = color;
		}
	},

	drawn: false,

	draw: function(preset, color) {
		if (! this.drawn) {
			this.spinner = this.$elem.spin(preset || this.opts || this.preset, color || this.color);
			this.drawn = true;
		}
	},

	undraw: function() {
		if (this.spinner && this.drawn) {
			this.spinner.stop();
			this.drawn = false;
		}
	}

});
