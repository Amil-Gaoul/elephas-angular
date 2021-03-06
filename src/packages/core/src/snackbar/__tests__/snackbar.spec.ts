import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';

import {ESnackbar} from '../snackbar';
import {SnackbarConfig} from '../models';

describe('ESnackbar', (): void => {
    let component: ESnackbar;
    let fixture: ComponentFixture<ESnackbar>;
    const snackbarConfig: SnackbarConfig = { text: 'Action completed...', buttonText: 'Cancel' };

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            imports: [ CommonModule, BrowserAnimationsModule ],
            schemas: [ NO_ERRORS_SCHEMA ],
            declarations: [ ESnackbar ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ESnackbar);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });

    it('should have a data', (): void => {
        component.config = snackbarConfig;
        fixture.detectChanges();

        const textElement: HTMLElement = fixture.debugElement.query(By.css('._e_snackbar__text')).nativeElement;
        expect(textElement.textContent).toContain(snackbarConfig.text);

        const buttonElement: HTMLButtonElement = fixture.debugElement.query(By.css('._e_snackbar__button')).nativeElement;
        expect(buttonElement.textContent).toContain(snackbarConfig.buttonText);
    });

    it('should as button click', (): void => {
        spyOn(component, 'onClose');

        const button: HTMLButtonElement = fixture.debugElement.query(By.css('._e_snackbar__button')).nativeElement;
        button.dispatchEvent(new MouseEvent('click'));
        fixture.detectChanges();

        expect(component.onClose).toHaveBeenCalled();
    });
});
