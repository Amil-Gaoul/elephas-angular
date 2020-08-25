import {ESidebarItemDirective} from '../sidebar-item.directive';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, ElementRef, NO_ERRORS_SCHEMA, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';

@Component({template: `<div *eSidebarItem="let activeClass = activeClass; tooltip: 'tooltip'"></div>`})
class TestSidebarItemComponent {
}

describe('SidebarItemDirective', (): void => {
    let fixture: ComponentFixture<TestSidebarItemComponent>;

    // tslint:disable-next-line:prefer-const
    let el: jasmine.SpyObj<ElementRef>;
    // tslint:disable-next-line:prefer-const
    let renderer: jasmine.SpyObj<Renderer2>;
    // tslint:disable-next-line:prefer-const
    let templateRef: jasmine.SpyObj<TemplateRef<any>>;
    // tslint:disable-next-line:prefer-const
    let vcRef: jasmine.SpyObj<ViewContainerRef>;

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ESidebarItemDirective, ESidebarItemDirective],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();

        fixture = TestBed.createComponent(TestSidebarItemComponent);
    }));

    it('should create an instance', (): void => {
        const directive: ESidebarItemDirective = new ESidebarItemDirective(
            el,
            renderer,
            templateRef,
            vcRef
        );

        fixture.detectChanges();

        expect(directive).toBeTruthy();
    });
});
