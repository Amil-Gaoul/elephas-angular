import {AfterViewInit, Directive, ElementRef, EmbeddedViewRef, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';
import {SidebarItemContext} from './models';

@Directive({
    selector: '[eSidebarItem]'
})
export class ESidebarItemDirective implements OnInit, AfterViewInit {

    @Input('eSidebarItemTooltip') public tooltip: string;

    private context: SidebarItemContext = null;
    private sidebarViewRef: EmbeddedViewRef<any>;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {
    }

    public ngOnInit(): void {
        this.context = {activeClass: '_e_sidebar-item_active'};
        this.sidebarViewRef = this.viewContainer.createEmbeddedView(this.templateRef, this.context);
    }

    public ngAfterViewInit(): void {
        const sidebarNode: HTMLElement = this.sidebarViewRef.rootNodes[0];
        this.renderer.addClass(sidebarNode, '_e_sidebar-item');
        // add tooltip
        if (this.tooltip) {
            const tooltipNode: HTMLElement = this.renderer.createElement('div');
            tooltipNode.innerText = this.tooltip;
            this.renderer.addClass(tooltipNode, '_e_sidebar-item__tooltip');
            this.renderer.addClass(tooltipNode, '_e_tooltip');
            this.renderer.addClass(tooltipNode, '_e_tooltip_right');
            this.renderer.appendChild(sidebarNode, tooltipNode);
        }
    }
}
