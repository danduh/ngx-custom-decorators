import {MemoizedSelector, State, Store} from '@ngrx/store';
import {INJECTOR, ɵɵdirectiveInject} from '@angular/core';

/**
 *
 * @param config
 */
export const storeSelector = (config: { [k: string]: MemoizedSelector<State<any>, any> }) => {
    return (clazz: any) => {
        const originalFactory = clazz.ngComponentDef.factory;
        clazz.ngComponentDef.factory = () => {
            const injector = ɵɵdirectiveInject(INJECTOR);
            const store = injector.get(Store);
            const cmp = originalFactory(clazz.ngComponentDef.type);
            Object.keys(config).forEach((key: string) => {
                cmp[key] = store.select(config[key]);
            });
            return cmp;
        };
    };
};
