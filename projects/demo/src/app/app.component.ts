import {Component} from '@angular/core';
import {timer} from '../../../../src/lib/method/timer';
import {readonly} from '../../../../src/lib/method/readonly';
import {deprecate} from '../../../../src/lib/method/deprecate';
import {validate} from '../../../../src/lib/params/validator';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Ngx-Custom-Decorators';

    @timer(console.error)
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

    summTwoNumbers(@validate('number') a, @validate('number') b) {
        return a + b;
    }


    getSum() {
        try {
            console.log(this.summTwoNumbers('10', 5));
        } catch (e) {
            console.error(e);
        }

    }

}
