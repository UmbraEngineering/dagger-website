
var fs        = require('fs');
var commonjs  = require('common.js');

var publicPath = './public';
var buildPath = publicPath + '/build';

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-myth');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		jshint: {
			files: [
				publicPath + '/javascripts/views/**/*.js',
				publicPath + '/javascripts/models/**/*.js',
				publicPath + '/javascripts/routers/**/*.js'
			],
			options: {
				sub: true,
				browser: true,
				bitwise: false,
				camelcase: false,
				eqnull: true,
				latedef: false,
				plusplus: false,
				shadow: true,
				smarttabs: true,
				loopfunc: true,
				boss: true,
				globals: {
					console: true,
					module: true,
					exports: true,
					require: true
				}
			}
		},

		mkdir: {
			build: {
				options: {
					mode: 0777,
					create: [buildPath]
				}
			}
		},
		
		commonjs: {
			all: {
				src: publicPath + '/javascripts',
				dest: buildPath + '/js',
				keepFiles: ['templates.js']
			}
		},
		
		concat: {
			lib: {
				src: [buildPath + '/js/lib/**/*.js'],
				dest: buildPath + '/js/lib.js'
			},
			app: {
				src: [
					buildPath + '/js/templates.js',
					buildPath + '/js/models/**/*.js',
					buildPath + '/js/views/**/*.js',
					buildPath + '/js/routers/**/*.js'
				],
				dest: buildPath + '/js/app.js'
			},
			appCss: {
				src: publicPath + '/stylesheets/views/**/*.css',
				dest: buildPath + '/css/app.css3'
			},
			css: {
				src: [
					publicPath + '/stylesheets/normalize.css',
					publicPath + '/stylesheets/foundation.css',
					publicPath + '/stylesheets/prism-twilight.css',
					buildPath + '/css/app.css'
				],
				dest: buildPath + '/css/styles.css'
			}
		},
		
		uglify: {
			lib: {
				src: buildPath + '/js/lib.js',
				dest: buildPath + '/js/lib.min.js',
				options: {
					banner: '/*! Todo Demo App - JavaScript lib file */'
				}
			},
			app: {
				src: buildPath + '/js/app.js',
				dest: buildPath + '/js/app.min.js',
				options: {
					banner: '/*! Todo Demo App - JavaScript app file */'
				}
			},
			templates: {
				src: buildPath + '/js/templates.js',
				dest: buildPath + '/js/templates.min.js',
				options: {
					banner: '/*! Todo Demo App - Pre-compiled handlebars template file */'
				}
			}
		},

		myth: {
			all: {
				src: buildPath + '/css/app.css3',
				dest: buildPath + '/css/app.css'
			}
		},

		cssmin: {
			all: {
				src: buildPath + '/css/styles.css',
				dest: buildPath + '/css/styles.min.css'
			}
		},

		handlebars: {
			all: {
				src: publicPath + '/templates/**/*.hbs',
				dest: buildPath + '/js/templates.js',
				options: {
					node: true,
					namespace: 'exports',
					processName: function(filename) {
						return filename.replace(/\.hbs$/, '').split('/').slice(2).join('.');
					}
				}
			}
		}

	});

// --------------------------------------------------------

	grunt.registerMultiTask('commonjs', 'Compiles the JavaScript in CommonJS format', function() {
		var data = this.data;
		var done = this.async();
		var opts = {
			output: 2,
			src: data.src,
			dest: data.dest,
			keepFiles: data.keepFiles
		};
		commonjs.build(opts, function() {
			commonjs.outputClientTo(data.dest + '/common.js', done);
		});
	});

// --------------------------------------------------------

	grunt.registerTask('js', ['jshint', 'templates', 'commonjs', 'concat:lib', 'concat:app']);//, 'uglify:lib', 'uglify:app']);
	grunt.registerTask('css', ['concat:appCss', 'myth', 'concat:css', 'cssmin']);
	grunt.registerTask('templates', ['handlebars']);
	grunt.registerTask('default', ['mkdir:build', 'js', 'css']);

};
