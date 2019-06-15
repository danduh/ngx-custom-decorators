import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {timer} from '../../../../../../src/lib/method';

import {WwThread} from '../../../../../../src/lib/ww-thread/ww-thread';
import {Observable} from 'rxjs';
import {drawCanvas} from '../../shared/components/canvas/animation';


@Component({
    selector: 'app-webworkers',
    templateUrl: './webworkers.component.html',
    styleUrls: ['./webworkers.component.css']
})
export class WebworkersComponent implements OnInit {
    @ViewChild('canvas', {static: true}) canvas: ElementRef;
    maxPrime: number;

    constructor() {
    }

    ngOnInit() {
        drawCanvas(this.canvas);
    }

    @timer()
    async getAllPrimeNumber(num) {

        (this.primesPromise(num) as unknown as Promise<any>)
            .then(console.log);

        (this.primesObs(num) as unknown as Observable<any>)
            .subscribe(console.log);

    }


    getAllPrimeNumberReg(num) {
        console.log(this.primes(num));
    }

    @timer()
    primes(num) {
        const sieve = [];
        const primes = [];
        let i;
        let j;

        for (i = 2; i <= num; ++i) {
            if (!sieve[i]) {
                primes.push(i);
                for (j = i << 1; j <= num; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primes.length;
    }

    @WwThread.promise()
    primesPromise(num) {
        const sieve = [];
        const primes = [];
        let i;
        let j;

        for (i = 2; i <= num; ++i) {
            if (!sieve[i]) {
                primes.push(i);
                for (j = i << 1; j <= num; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primes.length;
    }

    @WwThread.observe()
    primesObs(num) {
        const sieve = [];
        const primes = [];
        let i;
        let j;

        for (i = 2; i <= num; ++i) {
            if (!sieve[i]) {
                primes.push(i);
                for (j = i << 1; j <= num; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primes.length;
    }
}
