'use strict';
angular
    .module('myApp')
    .factory('myHelloComponent', myHelloComponent);

function myHelloComponent() {
    return {
        hello: hello
    }
}

function hello() {
    return 'hello';
}