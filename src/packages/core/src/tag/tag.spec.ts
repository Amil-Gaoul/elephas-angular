/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ETag } from './tag';

describe('ETag', (): void => {
    let component: ETag;
    let fixture: ComponentFixture<ETag>;

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ ETag ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ETag);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
