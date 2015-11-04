var proxyquire = require('proxyquire');

var mockModule = {
    hello : mockHello
};

function mockHello() {
    return 'test hello';
}

var mockConsole = {
    log : mockLog
};

function mockLog(text) {
    console.log('logged: ' + text);
}

var main = proxyquire('./main.js', {
    'console' : mockConsole,
    './module.js' : mockModule
});
