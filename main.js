import { create } from './myClass.js'

import { create as createWithArrow } from './myClassArrowFunction.js'


var myObj = create();

console.log('count at start:' + myObj.count);
myObj.iterate();
console.log('count at end:' + myObj.count);







var myObj2 = createWithArrow();

console.log('count at start:' + myObj2.count);
myObj2.iterate();
console.log('count at end:' + myObj2.count);


