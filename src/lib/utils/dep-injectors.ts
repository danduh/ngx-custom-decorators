import {ApplicationRef, Injector, isDevMode, NgZone, StaticProvider} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {Platform} from '@angular/cdk/platform';

export const mediaInjector = Injector.create({
    providers: [{provide: MediaMatcher, deps: [Platform]}, {provide: Platform, deps: []}]
});


const ngZone = new NgZone({enableLongStackTrace: isDevMode()});
const ngZoneStaticProvider: StaticProvider[] = [{provide: NgZone, useValue: ngZone}];

const changeDetectorInjector = Injector.create({
    providers: [
        {
            provide: ApplicationRef,
            deps: [NgZone]
        },
        ngZoneStaticProvider
    ]
});

function test() {
    const changeDetector = changeDetectorInjector.get(ApplicationRef);
}

