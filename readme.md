## unit testing with jasmine 

### to recreate 
* git init
* npm init
* npm install jasmine --save 
* npm install proxyquire --save 
* create jasmine.json, define unit test files to run (http://jasmine.github.io/edge/node.html)
* add script "test": "jasmine JASMINE_CONFIG_PATH=./jasmine.json" to package.json 
   
### to run 
* npm test

### to debug 
* webstorm -> run/debug configurations -> + -> node.js -> select javascript file node_modules/jasmine/bin/jasmine.js. Set application parameters to JASMINE_CONFIG_PATH=./jasmine.json
 

