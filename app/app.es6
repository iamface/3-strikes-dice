/*jshint esversion: 6 */

// Include CSS to be compiled
require('./assets/css/app.scss');

/*************************************/

// Return .env variable
export function env(v) {
    return process.env[v];
}

console.log(env('MY_VARIABLE'));