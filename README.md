# ngx-custom-decorators
*Betta version not yet ready for production use.* 
Any ideas for decorators would be appreciated :) 

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


## Develop
```
git clone https://github.com/danduh/ngx-custom-decorators.git
cd  ngx-custom-decorators
npm i
```

File structure:

### Library

`src/lib/` actual library of all decorators

`ng build` will build the library


### Demo

`projects/demo/` demo app for use, test and examples

`ng serve demo` will run demo app .

