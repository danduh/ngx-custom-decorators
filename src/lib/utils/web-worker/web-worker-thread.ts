import {WORKER_JS_EMBED} from './embeded';

class JSONfn {
    static stringify(obj) {
        return JSON.stringify(obj, (key, value) => {
            let fnBody;
            if (value instanceof Function || typeof value === 'function') {

                fnBody = value.toString();
                console.log(fnBody);
                if (typeof value === 'function' && value.name.length > 0) {
                    return '_ClsMtd_' + fnBody; // class method
                }

                if (fnBody.length < 8 || fnBody.substring(0, 8) !== 'function') { // this is ES6 Arrow Function
                    return '_NuFrRa_' + fnBody;
                }
                return fnBody;
            }
            if (value instanceof RegExp) {
                return '_PxEgEr_' + value;
            }
            return value;
        });
    }
}

const workerBlob = new Blob([WORKER_JS_EMBED], {type: 'application/javascript'});

export class WebWorkerThread {
    /**
     *   Execute function in a thread.
     *
     * @return -- promise object;
     * @param param -- object;
     *
     * param {object} has following attributes
     *   @fn          - function to execute                (mandatory)
     *   @args        - array of arguments for @fn          (optional)
     *   @context     - object which will be 'this' for @fn (optional)
     *   @importFiles - array of strings                    (optional)
     *                  each string is a path to a file, which @fn depends on.
     */
    static exec(param) {
        const worker = new Worker(window.URL.createObjectURL(workerBlob));
        let promise;

        if (param.cb && typeof param.cb === 'function') {
            worker.onmessage = (oEvent) => {

                param.cb(oEvent.data);
                worker.terminate();
            };

            worker.onerror = (error) => {
                param.cb(null, error.message);
                worker.terminate();
            };

            worker.postMessage(JSONfn.stringify(param));

        } else {
            if (typeof Promise !== 'undefined') {
                promise = new Promise((resolve, reject) => {
                        worker.onmessage = (oEvent) => {
                            resolve(oEvent.data);
                            worker.terminate();
                        };
                        worker.onerror = (error) => {
                            reject(error.message);
                            worker.terminate();
                        };
                    }
                );
                worker.postMessage(JSONfn.stringify(param));
                return promise;
            }
        }
    }

    /**
     *  Execute multiple functions in multiple threads
     *
     *  @return -- promise object;
     *  @args -- array of param objects (see above)
     *
     *  example: vkthread.execAll([param1, param2 ])
     */
    static execAll(args) {
        const promises = [];
        for (let ix = 0; ix < args.length; ix++) {
            promises.push(this.exec(args[ix]));
        }
        return Promise.all(promises).then((values) => values);
    }
}
