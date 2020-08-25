import {AfterViewInit, Component, ElementRef, HostBinding, Input, Renderer2, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'nav[e-sidebar]',
    template: `
        <ng-content select="[sidebar-top]"></ng-content>
        <ng-content select="[sidebar-bottom]"></ng-content>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ESidebarComponent implements AfterViewInit {

    @HostBinding('class._e_sidebar') public sidebar: boolean = true;

    @Input()
    @HostBinding('class._e_sidebar_collapsed')
    public isCollapse: boolean;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {
    }

    public ngAfterViewInit(): void {
        // add class to top section
        const sidebarTopNode: HTMLElement = this.el.nativeElement.childNodes[0];
        if (sidebarTopNode) {
            this.renderer.addClass(sidebarTopNode, '_e_sidebar__top');
        }
        // add class to bottom section
        const sidebarBottomNode: HTMLElement = this.el.nativeElement.childNodes[1];
        if (sidebarBottomNode) {
            this.renderer.addClass(sidebarBottomNode, '_e_sidebar__bottom');
        }
    }
}
