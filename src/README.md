# ngx-custom-decorators
*Betta version not yet ready for production use.* 

## Targets
 * Create set of framework agnostic decorators supported by JS and TS
 * Set of TS dedicated decorators, mainly "method's params decorators"
 * Create subset of specific framework based decorators
    * Angular
    * React
    * Vue.Js


## Get It

```
npm i ngx-custom-decorators -S
``` 


## Use It 
```JavaScript
import { timer } from 'ngx-custom-decorators';

class MyClass{
    constructor(...){...}
    
    @timer('my message to see in logs') 
    someLongRunMethod(){
        // ....//
    }
    
    @timer() // param is optional 
    someLongRunMethod(){
        // ....//
    }
    
}

```
