import {NGXMethodDecorator} from '../core/types';

const DEFAULT_MSG = 'This function will be removed in future versions.';

/**
 *
 * @param msg
 * @param options
 */
export interface DeprecateOption {
    url?: string;
    defaultMsg?: string;
    onInitOnly?: boolean;
}

export function deprecate(options: DeprecateOption = {}): NGXMethodDecorator {
    let msg = options.defaultMsg || '';

    return (target, key, descriptor) => {
        if (typeof descriptor.value !== 'function') {
            throw new SyntaxError('Only functions can be marked as deprecated');
        }

        const methodSignature = `${target.constructor.name}#${key.toString()}`;

        if (options.url) {
            msg += `\n\n    See ${options.url} for more details.\n\n`;
        }

        if (options.onInitOnly) {
            console.warn(`DEPRECATION ${methodSignature}: ${msg}`);
            return descriptor;
        }

        return {
            ...descriptor,
            value: function deprecationWrapper() {
                console.warn(`DEPRECATION ${methodSignature}: ${msg}`);
                return descriptor.value.apply(this, arguments);
            }
        };
    };
}
