# ngx-custom-decorators
*Betta version not yet ready for production use.* 

Set of libraries of decorators for JavaScript, TypeScript (frameworks agnostic) and framework dedicated (Angular, React). 
For better understanding of concept please read following articles: 
- [MetaProgramming JavaScript](https://medium.com/@danduh/metaprogramming-javascript-typescript-part-1-descriptors-bc443d048fe9)



## Targets
 * Create set of framework agnostic decorators supported by JS and TS
 * Set of TS dedicated decorators, mainly "method's params decorators"
 * Create subset of specific framework decorators
    * Angular
    * React
    * Vue.Js


|                           |    JavaScript    |     TypeScript   | Angular | VueJs | React |
|:-------------------------:|:----------------:|:----------------:|:----------------:|-----------------|:-----------------:|
|   @timer()                |:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|  @debounce()              |:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
| @deprecate()              |:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
| @readonly()               |:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
| @@WwThread.asObservable() |:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
| @@WwThread.toPromise()    |:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
| @@WwThread.toPromise()    |:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|


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

