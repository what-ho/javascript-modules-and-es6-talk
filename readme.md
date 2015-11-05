## systemJs setup

### To run: 

* npm install http-server -g (if required)
* http-server
* open localhost:8080

### To recreate:

* git init
* npm init
* npm install --save-dev jspm  
* jspm install 
* jspm init , answer questions, let it create systemjs-config file 
* write main.js startup module in ES6
* write other javascript modules that main.js can import 
* add boilerplate index.html, refer to systemsjs-config
* add one inline <script></script> tag to index.html to System.import('./main.js'); and start the program

I recommend referring to local javascript files in imports in the format: 

./<file>.js 

This distinguishes local application files from any 3rd party modules that are imported. 
The relative path helps IDEs like webstorm provide intellisense for modules when writing code. 
