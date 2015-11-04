var proxyquire = require('proxyquire');

var mockModule = {
    hello : mockHello
};

function mockHello() {
    return 'test hello';
}

/*Redefine console.log*/
var actualConsoleLog = console.log;

function mockLog(text) {
    actualConsoleLog('logged: text');
}

console.log = mockLog;

var main = proxyquire('./main.js', {
    './module.js' : mockModule
});
