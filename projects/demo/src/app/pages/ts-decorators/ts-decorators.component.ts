import {Component, OnInit} from '@angular/core';
import {tValidate, validateTypes} from 'decorators/params';
import {debounce} from 'decorators/method';

@Component({
    selector: 'app-ts-decorators',
    templateUrl: './ts-decorators.component.html',
    styleUrls: ['./ts-decorators.component.scss']
})
export class TsDecoratorsComponent implements OnInit {
    public importSyntax = 'import {tValidate, validateTypes} from \'decorators/params\';';

    constructor() {
    }

    ngOnInit() {
    }

    @validateTypes
    sumTwoNumbers(
        @tValidate('number') a,
        @tValidate('number') b) {
        return a + b;
    }

    @debounce(300)
    getSum() {
        try {
            console.log(this.sumTwoNumbers(10, '5'));
        } catch (e) {
            console.error(e);
        }
    }

}
