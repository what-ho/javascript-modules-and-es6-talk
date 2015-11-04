== mocking by redefinition 

* Can switch out globals like console etc. at runtime to mock them. 
* Need to keep a reference to original javasript object to restore it later on 
* Fragile; last resort if dependency is not imported / required and therefore cannot be mocked