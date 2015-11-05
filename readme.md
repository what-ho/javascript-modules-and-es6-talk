## Dynamically loading script 

* Example of how client-script loaders can transpile javascript code
* instead of a script tag on the webpage, an ajax call is made to retrieve text of the script
* text can then be parsed, modified 
* script tag dynamically created and injected onto page3 to output transformed script 
* (eval-ing the transformed script is another option)

SystemJs uses this technique to transpile javascript on the fly, in the browser 