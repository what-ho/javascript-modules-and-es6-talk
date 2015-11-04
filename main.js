'use strict';

var module = angular.module('myApp');
module.run(['$window','myHelloComponent', main]);

function main($window, myHelloComponent) {
    var str = myHelloComponent.hello();
    $window.alert(str + ' world');
}