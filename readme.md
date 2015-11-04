== mocking CommonJS modules 

=== To recreate 
* command prompt in new folder 
* git init
* npm init ,answer questions
* npm install proxyquire --save
* define module(s) javascript   
* define a main file javascript as entry point to start app  
* Use proxyquire instead of require to inject mocks into a component

=== To run : 
* npm start 

=== Use of package.json -> scripts 
* Simple alternative to grunt / gulp / other script runners 
* scripts run with 'node_modules/bin/' automatically in search path
* local npm packages place hooks to any command-line scripts under node_modules/bin
* use of scripts easy way to use local npm package scripts in cross-OS way without any %PATH% setup required by user 