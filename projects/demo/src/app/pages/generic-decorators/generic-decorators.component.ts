import {Component, OnInit} from '@angular/core';
import {deprecate, readonly, timer} from '../../../../../../src/lib/method';

@Component({
    selector: 'app-generic-decorators',
    templateUrl: './generic-decorators.component.html',
    styleUrls: ['./generic-decorators.component.css']
})
export class GenericDecoratorsComponent implements OnInit {
    title = 'Generic';

    constructor() {
    }

    ngOnInit() {
    }


    @timer(console.warn)
    checkTimer() {
        console.log(this.title);
    }


    @readonly()
    protectedFunction() {
        return 'origin response';
    }


    hackProtected() {
        try {
            this.protectedFunction = () => {
                return 'hacked';
            };
        } catch (e) {
            console.log(e);
        }
        console.log(this.protectedFunction());
    }


    @deprecate({onInitOnly: true})
    deprecatedFunction() {

    }

}
