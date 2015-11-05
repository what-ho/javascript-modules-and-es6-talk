## unit testing ES6 server-side code with jasmine 

### To run tests

npm test 

### To run jshint

npm run jshint 

### To recreate 

* new folder
* git init
* npm init
* npm install --save-dev babel-core
* npm install --save-dev babel-preset-es2015
* npm install --save-dev jasmine 
* npm install --save-dev jshint 
* npm install --save-dev proxyquire 
* create jasmine.json file, define file filter for unit tests to run 
* add "./node_modules/babel-core/register.js" to jasmine.json helpers, to hook into 'require' in global scope, allow babel to intercept requires and transpile when necessary
* add .jshintrc for any jshint options 
* write javascript modules 
* write unit tests 
