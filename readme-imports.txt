From: http://www.2ality.com/2014/09/es6-modules-final.html



// Importing the module as an object
// (with one property per named export)
import * as mylib from 'src/mylib';






// Default exports and named exports
import theDefault, { named1, named2 } from 'src/mylib';
import theDefault from 'src/mylib';
import { named1, named2 } from 'src/mylib';

// Renaming: import named1 as myNamed1
import { named1 as myNamed1, named2 } from 'src/mylib';


// Only load the module, don’t import anything
import 'src/mylib';

