;require._modules["/vendor/prism/folders.js"] = (function() { var __filename = "/vendor/prism/folders.js"; var __dirname = "/vendor/prism"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /vendor/prism/folders.js  == */ var __module__ = function() { 
 
Prism.languages.folders = {
    // Highlight symbols used to denote folder structure
    'punctuation': /^([-|+`\s]+)/gm,

    // Highlight the individual file names
    'keyword':  /([a-zA-Z0-9._].+)/g
};

Prism.hooks.add('wrap', function(env) {
    // Add classnames for file extensions
    if (env.language === 'folders' && env.type === 'keyword') {
        var parts = env.content.split('.');
        while (parts.length > 1) {
            parts.shift();
            // Ex. 'foo.min.js' would become '<span class="token keyword ext-min-js ext-js">foo.min.js</span>'
            env.classes.push('ext-' + parts.join('-'));
        }
    }
});
 
 }; /* ==  End source for module /vendor/prism/folders.js  == */ return module; }());;