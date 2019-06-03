import {NGXMethodDecorator} from '../core/types';

export function timer(): NGXMethodDecorator {
    return (target, key, descriptor) => {
        const origin = descriptor.value;
        descriptor.value = function(...args) {
            const t1 = new Date().getTime();
            const results = origin.apply(this, args);
            const t2 = new Date().getTime();
            console.log(`Time execution for method ${key.toString()} is ${t2 - t1}`);
            return results;
        };
    };
}
