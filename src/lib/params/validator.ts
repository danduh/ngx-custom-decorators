export const validate = (type: string) => {
    return (target, key, index) => {
        setTimeout(() => {
            const origin = target[key];
            target[key] = function(...args) {
                if (typeof args[index] !== type) {
                    throw new Error(`Wrong Type! expecting type ${type}, but got ${typeof args[index]}`);
                }
                return origin.apply(this, args);
            };
        });
    };
};
