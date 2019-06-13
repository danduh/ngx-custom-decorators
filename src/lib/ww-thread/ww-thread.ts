import {WebWorkerThread} from '../utils/web-worker/web-worker-thread';
import {NGXMethodDecorator} from '../core';
import {from} from 'rxjs';

export class WwThread {
    static threadCaller(target, key, descriptor) {
        const origin = descriptor.value;
        descriptor.value = async (...args) => {
            const param = {
                fn: origin,
                args,
            };
            return await WebWorkerThread.exec(param);
        };
    };


    static promise(context?: (...args) => void): NGXMethodDecorator {
        return WwThread.threadCaller;
    }

    static observe(context?: (...args) => void) {
        return (target, key, descriptor) => {
            const origin = descriptor.value;
            descriptor.value = (...args) => {
                const param = {
                    fn: origin,
                    args,
                };
                return from(WebWorkerThread.exec(param));
            };
        };
    }

}

