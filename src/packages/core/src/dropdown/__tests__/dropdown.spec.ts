import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {EDropdown} from '../dropdown';

describe('EDropdown', (): void => {
    let component: EDropdown;
    let fixture: ComponentFixture<EDropdown>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EDropdown ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(EDropdown);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });

    it('should test dropdown display styles', (): void => {
        const dropdown: HTMLDivElement = fixture.debugElement.query(By.css('._e_dropdown__card')).nativeElement;
        expect(dropdown.style.display).toBe('none');

        component.opened = true;
        fixture.detectChanges();
        expect(dropdown.style.display).toBe('block');
    });
});
