From: http://www.2ality.com/2014/09/es6-modules-final.html



export { foo, bar } from 'src/other_module';







export var myVar1 = ...;
export let myVar2 = ...;
export const MY_CONST = ...;

export function myFunc() {
    ...
}
export class MyClass {
    ...
}

export { MY_CONST, myFunc };

export { MY_CONST as THE_CONST, myFunc as theFunc };

export * from 'src/other_module';

// Export other_module’s foo as myFoo
export { foo as myFoo, bar } from 'src/other_module';

Also generator functions:
export function* myGeneratorFunc() {
    ...
}
