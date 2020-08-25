import {Directive, HostBinding} from '@angular/core';

@Directive({
    selector: '[eSidebarIcon]'
})
export class ESidebarIconDirective {

    @HostBinding('class._e_sidebar-item__icon') public sidebarItemIcon: boolean = true;

    constructor() {
    }
}
