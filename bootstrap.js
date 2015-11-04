require('babel-core/register');
require('es6-module-loader');
System.transpiler = 'babel';
require('./main.js');