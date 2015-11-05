From: http://www.2ality.com/2014/09/es6-modules-final.html

The following are all variations on importing:

// Importing a module as an object, methods as properties on the object
import * as mylib from 'src/mylib';
mylib.foo();

// Importing named methods from a module
import { named1, named2 } from 'src/mylib';

// Renaming: import named1 as myNamed1
import { named1 as myNamed1, named2 } from 'src/mylib';

// Only load the module, don’t import anything
import 'src/mylib';

