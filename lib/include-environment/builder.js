const Plugin = require('broccoli-plugin');
const fs = require('fs');
const path = require('path');

function EnvironmentBuilder(inputNodes, options) {
    this.config = options.config;
    options = options || {};
    Plugin.call(this, inputNodes, {
        annotation: options.annotation
    });
    this.options = options;
}

EnvironmentBuilder.prototype = Object.create(Plugin.prototype);

EnvironmentBuilder.prototype.constructor = EnvironmentBuilder;

EnvironmentBuilder.prototype.build = function () {

    let destPath = path.posix.join(this.outputPath, 'config');
    if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath);
    }

    fs.writeFileSync(path.posix.join(destPath, 'user-env.js'), 'export default ' + JSON.stringify(this.config), {encoding: 'utf8'});
};

module.exports = EnvironmentBuilder;
