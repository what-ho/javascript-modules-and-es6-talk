import * as console from 'console';

function run() {

    //Dynamic import
    var module = require('./module.js');
    console.log(module.hello() + ' world');
}

run();

