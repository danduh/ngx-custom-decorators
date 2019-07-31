import {NGXMethodDecorator} from '../utils/types';

/**
 *
 * @param freeze param to freeze or not the method/property
 */
export function readonly(freeze?: boolean): NGXMethodDecorator {
    return (target, key, descriptor) => {
        descriptor.writable = false;
        descriptor.configurable = !freeze;
        return descriptor;
    };
}
