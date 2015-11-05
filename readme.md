== Dynamic imports using 'require' in es6 code

Main.js example shows had modules can be loaded dynamically using commonJs 'require' method.
Import occurs at point where program flow reaches the 'require' line in code. 
Differs to 'import' syntax where import always guaranteed to be resolved before any other part of script evaluated

It works, not recommended mixing import syntax within one file - not as readable code, also makes assumptions that runtime environment can support both syntaxes
