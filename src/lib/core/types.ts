export interface NGXTypedPropertyDescriptor<T> {
    enumerable?: boolean;
    configurable?: boolean;
    writable?: boolean;
    value?: any;
    get?: () => T;
    set?: (value: T) => void;
}

export declare type NGXMethodDecorator =
    <T>(target: object, propertyKey: string | symbol, descriptor: NGXTypedPropertyDescriptor<T>) => NGXTypedPropertyDescriptor<T> | void;

export declare type NGXClassPropertyDecorator = (target: object, propertyKey: string ) => void;
