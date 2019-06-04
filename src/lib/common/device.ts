import {Breakpoints, MediaMatcher} from '@angular/cdk/layout';
import {NGXClassPropertyDecorator} from '../core/types';
import {combineLatest, fromEvent, Observable} from 'rxjs';
import {map, startWith, tap,} from 'rxjs/operators';
import {mediaInjector} from '../utils/dep-injectors';

export interface DeviceBPState {
    XSmall: boolean;
    Small: boolean;
    Medium: boolean;
    Large: boolean;
    XLarge: boolean;
    Handset: boolean;
    Tablet: boolean;
    Web: boolean;
    HandsetPortrait: boolean;
    TabletPortrait: boolean;
    WebPortrait: boolean;
    HandsetLandscape: boolean;
    TabletLandscape: boolean;
    WebLandscape: boolean;
}


/**
 * Simple based on single media query
 */
export function deviceDetect(mediaQuery = '(max-width: 600px)'): NGXClassPropertyDecorator {
    return (target, property) => {
        const mediaMatcher = mediaInjector.get(MediaMatcher);
        const mobileQuery = mediaMatcher.matchMedia(mediaQuery);
        target[property] = !mobileQuery.matches ? 'desktop' : 'mobile';
    };
}


const buildBreakPointMatcher = (target, property, dynamic): DeviceBPState | Observable<DeviceBPState> => {
    const breakPointMatcher = {};
    const result = {};
    const mediaMatcher = mediaInjector.get(MediaMatcher);

    const changes = [];
    for (const key of Reflect.ownKeys(Breakpoints)) {
        breakPointMatcher[Breakpoints[key]] = mediaMatcher.matchMedia(Breakpoints[key]);
        result[key] = breakPointMatcher[Breakpoints[key]].matches;
        changes.push(
            fromEvent(breakPointMatcher[Breakpoints[key]], 'change')
                .pipe(
                    tap(() => result[key] = breakPointMatcher[Breakpoints[key]].matches),
                    startWith(false),
                    map(() => ({[key]: breakPointMatcher[Breakpoints[key]].matches}))
                ));

    }

    if (dynamic) {
        target[property] = combineLatest(...changes)
            .pipe(
                map((arr) => Object.assign({}, ...arr)),
            ) as Observable<DeviceBPState>;
    } else {
        target[property] = result as DeviceBPState;
    }
    return target[property];
};

/**
 * based on breake points
 * @param dynamic {boolean} default = false, if true will return Observable<DeviceBPState>
 */
export function deviceBP(dynamic = false): NGXClassPropertyDecorator {
    return (target, property) => {
        return buildBreakPointMatcher(target, property, dynamic);
    };
}

