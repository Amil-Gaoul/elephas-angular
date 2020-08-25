import {ESidebarComponent} from '../sidebar.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

describe('SidebarDirective', (): void => {
    let component: ESidebarComponent;
    let fixture: ComponentFixture<ESidebarComponent>;

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ ESidebarComponent ]
        }).compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ESidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create an instance', (): void => {
        expect(component).toBeTruthy();
    });
});
