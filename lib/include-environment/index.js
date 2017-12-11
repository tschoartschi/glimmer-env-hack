/*jshint node:true*/
const environment = require('../../config/environment');
const Builder = require('./builder');
const MergeTrees = require('broccoli-merge-trees');

let CONFIG = {};

function IncludeEnv() {
    this.config = null;
    this.name = 'include-environment';
}

IncludeEnv.prototype.toTree = function (tree, inputPath, outputPath, inputOptions) {

    const config = this.getConfig();
    const envTree = new Builder([tree], {
        srcDir: 'src',
        config: config,
        defaultModulePrefix: this.name
    });
    return new MergeTrees([tree, envTree], {overwrite: true});
};

IncludeEnv.prototype.getConfig = function (config) {
    return CONFIG;
};

module.exports = {
    name: 'include-environment',

    includers: [],

    setupPreprocessorRegistry: function (type, registry) {
        const includer = new IncludeEnv();
        this.includers.push(includer);
        registry.add('js', includer);
    },

    isDevelopingAddon: function () {
        return true;
    },

    included(app) {
        const actualConfig = environment(app.env);
        if (!actualConfig) {
            return;
        }
        CONFIG = actualConfig;
    }

};
