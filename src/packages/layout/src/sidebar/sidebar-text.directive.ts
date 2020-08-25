import {Directive, HostBinding} from '@angular/core';

@Directive({
    selector: '[eSidebarText]'
})
export class ESidebarTextDirective {

    @HostBinding('class._e_sidebar-item__text') public sidebarItemText: boolean = true;

    constructor() {
    }
}
