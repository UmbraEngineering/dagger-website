
// Temporarily expose jquery so stupidtable can get a reference to it
window.jQuery = require('jquery');

require('./stupidtable');

window.jQuery = void(0);
