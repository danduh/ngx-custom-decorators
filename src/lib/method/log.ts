import {NGXMethodDecorator} from '../core';

export type CustomLogger = (...args) => void;

export function log(logResult: boolean): void;
export function log(logResult: boolean, logger: boolean | CustomLogger): void;
export function log(logResult: boolean, logArguments: boolean, logger: CustomLogger): void;

/**
 *
 * @param logR to log function results or not
 * @param logA to log 'arguments' results or not
 * @param logL a log function if not provided, console.log() will be used;
 */
export function log(logR: any, logA?: boolean | CustomLogger, logL?: CustomLogger): NGXMethodDecorator {
    return (target, key, descriptor) => {
        const origin = descriptor.value;
        descriptor.value = function(...args) {
            logL = typeof logL === 'function' ? logL : console.log;
            const firedMsg = `Method ${key.toString()} was fired`;
            logL(firedMsg);
            const results = origin.apply(this, args);
            const completedMsg = `Method ${key.toString()} was completed`;
            logL(completedMsg);
            return results;
        };
    };
}


log(false, true);
