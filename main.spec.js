var proxyquire = require('proxyquire');

describe('main', function() {

    var console,
        module,
        main;

    beforeEach(function() {

        console = jasmine.createSpyObj('console',
        [
           'log'
        ]);

        module = jasmine.createSpyObj('module',
        [
            'hello'
        ]);

        module.hello.and.returnValue('test hello');

        var main = proxyquire('./main.js', {
            'console' : console,
            './module.js' : module
        });

    });

    it('calls hello', function() {
       expect(module.hello).toHaveBeenCalled();
    });

    it('logs to the console', function() {
       expect(console.log).toHaveBeenCalledWith('test hello world');
    });
});