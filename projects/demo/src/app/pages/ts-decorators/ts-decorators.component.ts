import {Component, OnInit} from '@angular/core';
import {tValidate, validateTypes} from 'decorators/params';
import {debounce} from 'decorators/method';

@Component({
    selector: 'app-ts-decorators',
    templateUrl: './ts-decorators.component.html',
    styleUrls: ['./ts-decorators.component.css']
})
export class TsDecoratorsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    @validateTypes
    summTwoNumbers(@tValidate('number') a, @tValidate('number') b) {
        return a + b;
    }


    @debounce(300)
    getSum() {
        try {
            console.log(this.summTwoNumbers(10, '5'));
        } catch (e) {
            console.error(e);
        }
    }


}
