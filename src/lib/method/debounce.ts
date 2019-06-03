import {metaFor} from '../utils/utils';
import {NGXMethodDecorator} from '../core/types';

const DEFAULT_TIMEOUT = 300;

export function debounce(wait = DEFAULT_TIMEOUT, immediate?): NGXMethodDecorator {

    return (target, key, descriptor) => {
        const callback = descriptor.value;

        if (typeof callback !== 'function') {
            throw new SyntaxError('Only functions can be debounced');
        }

        return {
            ...descriptor,
            value() {
                const {debounceTimeoutIds} = metaFor(this);
                const timeout = debounceTimeoutIds[key];
                const callNow = immediate && !timeout;
                const args = arguments;

                clearTimeout(timeout);

                debounceTimeoutIds[key] = setTimeout(() => {
                    delete debounceTimeoutIds[key];
                    if (!immediate) {
                        callback.apply(this, args);
                    }
                }, wait);

                if (callNow) {
                    callback.apply(this, args);
                }
            }
        };
    };
}
