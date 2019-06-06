export function Component({selector, template}) {
    return (target) => {
        console.log(target);

        console.log(Object.getOwnPropertyNames(target));
        console.log(selector, template);
        document.getElementsByTagName(selector)[0].insertAdjacentHTML('beforeend', template);
        const inst = new target();
        console.log(Object.keys(inst));
        return target;


        // return inst
        // return new target();
    };
}

// @dynamic
@Component({
    selector: 'custom-root',
    template: '<h1>{{title}}!</h1>\n' +
        '<p>\n' +
        '  Start editing to see some magic happen :)\n' +
        '</p>'
})
export class SomeThing {
    public title: string = 'Fell in Love with Decorators';

    constructor() {

    }


    onClick() {
        alert('Btn Clicked');
    }
}

const myComp = new SomeThing();
