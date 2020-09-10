import {AfterContentInit, Component, ContentChild, ElementRef, Input, OnDestroy, ViewChild, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {InputWidth} from './input-width.enum';
import {EBaseControl} from './base-control';
import {EDropdown} from '../dropdown';

@Component({
    selector: 'e-base-input',
    templateUrl: './base-input.html',
    encapsulation: ViewEncapsulation.None
})
export class EBaseInput implements AfterContentInit, OnDestroy {

    /**
     * Additional CSS class.
     */
    @Input() public className: string;
    /**
     * Hint message. Hidden when appearance is set to error.
     */
    @Input() public hint: string;
    /**
     * Field label.
     */
    @Input() public label: string;
    /**
     * Field width.
     */
    @Input() public width: InputWidth;
    /**
     * Error message. Must be set when appearance is set to error.
     */
    @Input() public error: string;

    /**
     * @internal
     */
    public hasError: boolean;
    /**
     * @internal
     */
    public disabled: boolean;
    /**
     * @internal
     */
    public readonly: boolean;
    /**
     * @internal
     */
    public inputWidth: typeof InputWidth = InputWidth;
    /**
     * @internal
     */
    public isSelect: boolean = false;
    /**
     * @internal
     */
    public isDropdown: boolean = false;

    @ContentChild(EBaseControl) private control: EBaseControl;
    @ContentChild(EDropdown) private dropdown: EDropdown;
    @ViewChild('icon') private iconElement: ElementRef<HTMLElement>;

    private subs: Subscription = new Subscription();

    public ngAfterContentInit(): void {
        if (this.control) {
            this.isSelect = this.control.isSelect;
            if (this.control.stateChanges) {
                this.subs.add(this.control.stateChanges.subscribe((): void => {
                    this.readonly = this.control.readonly;
                    this.disabled = this.control.disabled;
                }));
            }

            if (this.control.ngControl && this.control.ngControl.valueChanges) {
                this.subs.add(this.control.ngControl.statusChanges.subscribe((status: string): void  => {
                    this.hasError = status === 'INVALID';
                }));
            }
        }

        if (this.dropdown) {
            this.isDropdown = true;
        }
    }

    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

}
