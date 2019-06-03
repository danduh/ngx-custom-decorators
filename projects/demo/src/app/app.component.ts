import {Component} from '@angular/core';
import {timer} from '../../../../src/lib/method/timer';
import {readonly} from '../../../../src/lib/method/readonly';
import {deprecate} from '../../../../src/lib/method/deprecate';

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

}
