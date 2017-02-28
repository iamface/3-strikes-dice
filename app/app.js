/*jshint esversion: 6 */

// Include CSS to be compiled
require('./assets/css/app.scss');

// Include ES6 class
let ES6 = require('./assets/js/ES6');

// Call method in custom class
ES6.test();

// Return .env variable
env = function(v) {
    return process.env[v];
};

console.log(env('MY_VARIABLE'));