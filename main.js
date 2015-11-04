import * as console from 'console';

function run() {

    System.import('module.js').then(onModuleLoaded).catch(function(e){
        setTimeout(function(){ throw e},1)
    });

    function onModuleLoaded(module) {
        console.log(module.hello() + ' world');
    }
}

run();

