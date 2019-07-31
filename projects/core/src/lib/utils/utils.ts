const {
    defineProperty, getOwnPropertyDescriptor,
    getOwnPropertyNames, getOwnPropertySymbols
} = Object;


const META_KEY = (typeof Symbol === 'function')
    ? Symbol('__core_decorators__')
    : '__core_decorators__';

class MetaTiming {
    debounceTimeoutIds = {};

    // @lazyInitialize
    // throttleTimeoutIds = {};
    //
    // @lazyInitialize
    // throttlePreviousTimestamps = {};
    //
    // @lazyInitialize
    // throttleTrailingArgs = null;
    //
    // @lazyInitialize
    // profileLastRan = null;
}


export function metaFor(obj) {
    if (obj.hasOwnProperty(META_KEY) === false) {
        defineProperty(obj, META_KEY, {
            // Defaults: NOT enumerable, configurable, or writable
            value: new MetaTiming()
        });
    }

    return obj[META_KEY];
}
