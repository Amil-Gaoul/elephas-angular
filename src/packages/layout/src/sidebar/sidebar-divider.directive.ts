import {Directive, HostBinding} from '@angular/core';

@Directive({
    selector: '[eSidebarDivider]'
})
export class ESidebarDividerDirective {

    @HostBinding('class._e_sidebar__divider') public sidebarDivider: boolean = true;

    constructor() {
    }
}
