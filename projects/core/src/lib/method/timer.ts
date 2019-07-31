import {NGXMethodDecorator} from '../utils/types';

/**
 * @param log a log function if not provided, console.log() will be used;
 */
export function timer(log?: (...args) => void): NGXMethodDecorator {
    return (target, key, descriptor) => {
        const origin = descriptor.value;
        descriptor.value = function(...args) {
            const t1 = new Date().getTime();
            const results = origin.apply(this, args);
            const t2 = new Date().getTime();
            const msg = `Time execution for method ${key.toString()} is ${t2 - t1}`;
            if (typeof log === 'function') {
                log(msg);
            } else {
                console.log(msg);
            }
            return results;
        };
    };
}
