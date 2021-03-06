// Load strip loader
const WebpackStripLoader = require('strip-loader');

// Babili plugin to compress production
const BabiliPlugin = require('babili-webpack-plugin');

// Include base config
const devConfig = require('./webpack.config.js');

// .env.development.production.example
const Dotenv = require('dotenv-webpack');

// Webpack
const webpack = require('webpack');

// Strip 'console.log' from files
const stripLoader = {
    test: [/\.js$/],
    exclude: /node_modules/,
    loader: WebpackStripLoader.loader('console.log')
};

// Babili plugin
const babili = new BabiliPlugin();

// Include stripped files
devConfig.module.rules.push(stripLoader);

// Use production .env.production
const env = new Dotenv({
    path: '.env.production'
});

// inject ES5 modules as global vars
const jquery = new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    Tether: 'tether'
});

devConfig.plugins.pop();
devConfig.plugins.push(env);
devConfig.plugins.push(jquery);

// Include Babili plugin
devConfig.plugins.push(babili);

// Use base config
module.exports = devConfig;