
require('./prism');
require('./bash');
require('./http');
require('./folders');

module.exports = Prism;

try {
	window.Prism = void(0);
	delete window.Prism;
} catch (e) { }
