From: http://www.2ality.com/2014/09/es6-modules-final.html

The following are all variations on exporting:

//Export all methods from a module
export * from 'src/other_module';

//Declare variables/constants as exports at the point of declaration
export var myVar1 = ...;
export let myVar2 = ...;
export const MY_CONST = ...;


//Declare functions / classes as exports at the point of declaration
export function myFunc() {
    ...
}
export class MyClass {
    ...
}

//Declare exports in separate 'export' block:
export { MY_CONST, myFunc };

export { MY_CONST as THE_CONST, myFunc as theFunc };


//'Pass-through' export, re-export from another module
export { foo, bar } from 'src/other_module'

Also generator functions:
export function* myGeneratorFunc() {
    ...
}
