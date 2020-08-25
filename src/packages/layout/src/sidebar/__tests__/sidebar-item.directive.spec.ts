import {ESidebarItemDirective} from '../sidebar-item.directive';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

describe('SidebarItemDirective', (): void => {
    let directive: ESidebarItemDirective;
    let fixture: ComponentFixture<ESidebarItemDirective>;

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ESidebarItemDirective]
        }).compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ESidebarItemDirective);
        directive = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create an instance', (): void => {
        expect(directive).toBeTruthy();
    });
});
