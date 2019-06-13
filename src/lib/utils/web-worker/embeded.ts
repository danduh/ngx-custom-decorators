/**
 * vkThread - javascript plugin to execute javascript function(s) in a thread.
 * https://github.com/vkiryukhin/vkthread
 * @version: 2.5.0
 * @author: Vadim Kiryukhin ( vkiryukhin @ gmail.com )
 * Copyright (c) 2016 Vadim Kiryukhin
 * Licensed under the MIT License.
 */

export const WORKER_JS_EMBED = `(function() {
    var JSONfn = {
        parse: function(str, date2obj) {
            var iso8061 = date2obj ? /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/ : false;
            return JSON.parse(str, function(key, value) {
                var prefix, func, fnArgs, fnBody;
                if (typeof value !== 'string') {
                    return value;
                }
                if (value.length < 8) {
                    return value;
                }
                prefix = value.substring(0, 8);
                if (iso8061 && value.match(iso8061)) {
                    return new Date(value);
                }
                if (prefix === 'function') {
                    return eval('(' + value + ')');
                }
                if (prefix === '_ClsMtd_') {
                    return eval('(' + 'function ' + value + ')');
                }
                if (prefix === '_PxEgEr_') {
                    return eval(value.slice(8));
                }
                if (prefix === '_NuFrRa_') {
                debugger
                    func = value.slice(8).trim().split('=>');
                    fnArgs = func[0].trim();
                    fnBody = func[1].trim();
                    if (fnArgs.indexOf('(') < 0) {
                        fnArgs = '(' + fnArgs + ')';
                    }
                    if (fnBody.indexOf('{') < 0) {
                        fnBody = '{ return ' + fnBody + '}';
                    }
                    return eval('(' + 'function' + fnArgs + fnBody + ')');
                }
                return value;
            });
        }
    };
    onmessage = function(e) {
        var obj = JSONfn.parse(e.data, true), cntx = obj.context || self;
        if (obj.importFiles) {
            importScripts.apply(null, obj.importFiles);
        }
        if (typeof obj.fn === 'function') {
            if (typeof Promise !== 'undefined') {
                Promise.resolve(obj.fn.apply(cntx, obj.args)).then(function(data) {
                    postMessage(data);
                })['catch'](function(reason) {
                    postMessage(reason);
                });
            } else {
                postMessage(obj.fn.apply(cntx, obj.args));
            }
        } else {
            postMessage(self[obj.fn].apply(cntx, obj.args));
        }
    };

    function vkhttp(cfg) {
        var body = cfg.body ? JSON.stringify(cfg.body) : null, contentType = cfg.contentType || 'application/json',
            method = cfg.method ? cfg.method.toUpperCase() : 'GET', xhr = new XMLHttpRequest, ret;
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                ret = xhr.responseText;
            } else {
                ret = 'Error: ' + xhr.status + xhr.statusText;
            }
        };
        xhr.onerror = function(data) {
            ret = xhr.status + xhr.statusText;
        };
        xhr.open(method, cfg.url, false);
        if (method === 'POST') {
            xhr.setRequestHeader('Content-Type', contentType);
        }
        xhr.send(body);
        return ret;
    }
})();`;
