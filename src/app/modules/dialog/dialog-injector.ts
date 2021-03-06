import { InjectFlags, InjectionToken, Injector, Type } from '@angular/core';

export class DialogInjector implements Injector {
    // tslint:disable-next-line:variable-name
    constructor(private _parentInjector: Injector, private _additionalTokens: WeakMap<any, any>) { }

    get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags): T;
    get(token: any, notFoundValue?: any);
    get(token: any, notFoundValue?: any, flags?: any) {
        const value = this._additionalTokens.get(token);
        const val = this._parentInjector.get<any>(token, notFoundValue);
        return value ? value : val;
    }
}
