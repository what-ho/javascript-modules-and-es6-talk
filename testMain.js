var proxyquire = require('proxyquire');

var mockModule = {
    hello : mockHello
};

function mockHello() {
    return 'test hello';
}

var main = proxyquire('./main.js', {
    './module.js' : mockModule
});