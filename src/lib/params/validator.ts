import 'reflect-metadata';
/**
 * TODO:
 * Should support following conditions:
 * string / number / defined / notNil / (json\object)
 */

export type Validators = 'string' | 'number' | 'json';
export const PARAM_TYPE_VALIDATOR_KEY = Symbol('paramTypeValidator');

export function tValidate(type: Validators) {
    return (target: any, propertyKey: string | symbol, parameterIndex: number) => {
        // Pull existing metadata (if any)
        const requiredTypes: { type: Validators } = (
            Reflect.getMetadata(PARAM_TYPE_VALIDATOR_KEY, target, propertyKey) || {}
        );

        console.log(requiredTypes);
        // Add new value
        requiredTypes[parameterIndex] = type;
        // Store metadata
        Reflect.defineMetadata(PARAM_TYPE_VALIDATOR_KEY, requiredTypes, target, propertyKey);
    };
}

export function validateTypes(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {

    // Store the original value
    const savedValue = descriptor.value;
    // Attach validation logic
    descriptor.value = (...args: any[]) => {
        // Pull the active ranges (if any)
        const requiredTypes: { type: Validators } = (
            Reflect.getOwnMetadata(PARAM_TYPE_VALIDATOR_KEY, target, propertyKey) || {}
        );

        // Check all monitored ranges
        // tslint:disable-next-line:forin
        for (const key in Reflect.ownKeys(requiredTypes)) {
            const requiredType = requiredTypes[key];
            const value = args[key];
            console.log(value, requiredType);

            if (typeof value !== requiredType) {
                throw new Error(`Wrong Type! expecting type ${requiredType}, but got ${typeof value}`);
            }
        }
        // Actually call the function
        return Reflect.apply(savedValue, target, args);
    };
}
