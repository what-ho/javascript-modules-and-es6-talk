## es6 modules, server-side javascript 

### To recreate 

* git init
* npm init
* npm install babel-core --save
* npm install babel-preset-es2015 --save
* npm install proxyquire --save 
* define default babel settings (in this example held in package.json)
* write main.js with program entry point
* write bootstrap.js, require babel-core/register to hook all subsequent requires, provide es6 transpiling 
* write module javascript(s) main.js calls upon


### To run 
* npm start

### To debug 
* run 'bootstrap.js' as the selected javascript file from Webstorm / IntelliJ node.js run/debug configuration 
* Webstorm / IntelliJ File->Settings->Languages->Javascript->Version, set version 6 to recognise ES6 syntax in IDE

## Notes

* imports / exports are declarative, not dynamic
* allows for static analysis of module dependencies 
* modules resolved before any other code in a javascript module is evaluated 
* modules do not need 'use strict'; in them or IIFEs (https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) common in ES5 javascript 
* 'babel' transpiler, version 6.x by default transpiles nothing. All ES6 features to detect and transpile must be explicitly opted in.
* babel preset setting 'es2015' pulls in a set of default transpilation options  (http://babeljs.io/docs/plugins/preset-es2015/) 
* babel settings usually held in .babelrc by default. Babel setttings held here in package.json, a supported alternative location (to keep all project settings in one place)
  