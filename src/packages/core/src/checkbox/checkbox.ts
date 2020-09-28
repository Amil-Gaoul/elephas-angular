import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

const noop: any = (): void => {};
let nextUniqueId: number = 0;

export const CHECKBOX_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef((): any => ECheckbox),
    multi: true
};

@Component({
    selector: 'e-checkbox',
    templateUrl: './checkbox.html',
    providers: [CHECKBOX_VALUE_ACCESSOR],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ECheckbox implements ControlValueAccessor {

    /**
     * Checkbox checked state.
     */
    @Input() public get checked(): boolean {
        return this._checked;
    }
    public set checked(checked: boolean) {
        this._checked = coerceBooleanProperty(checked);
        this.cdr.markForCheck();
    }
    /**
     * Checkbox indeterminate state.
     */
    @Input() public get indeterminate(): boolean {
        return this._indeterminate;
    }
    public set indeterminate(indeterminate: boolean) {
        if (indeterminate === this._indeterminate) {
            return;
        }

        this._indeterminate = coerceBooleanProperty(indeterminate);
        if (indeterminate && this._checked) {
            this._checked = false;
        }
        this.cdr.detectChanges();
    }
    /**
     * Additional CSS class.
     */
    @Input() public className: string;
    /**
     * Checkbox disabled state.
     */
    @Input() public get disabled(): boolean {
        return this._disabled;
    }
    public set disabled(disabled: boolean) {
        this._disabled = coerceBooleanProperty(disabled);
        this.cdr.detectChanges();
    }
    /**
     * Checkbox id.
     */
    @Input() public inputId: string = `el-checkbox-${++nextUniqueId}`;
    /**
     * Checkbox name.
     */
    @Input() public name: string = '';
    /**
     * Checkbox readonly state.
     */
    @Input() public get readonly(): boolean {
        return this._readonly;
    }
    public set readonly(readonly: boolean) {
        this._readonly = coerceBooleanProperty(readonly);
        this.cdr.detectChanges();
    }
    /**
     * Checkbox value.
     */
    @Input() public value: string = '';
    /**
     * Change handler.
     */
    @Output() public onCheckedChange: EventEmitter<HTMLInputElement> = new EventEmitter<HTMLInputElement>();
    /**
     * Indeterminate handler.
     */
    @Output() public onIndeterminateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;
    private _checked: boolean = false;
    private _indeterminate: boolean = false;
    private _readonly: boolean = false;
    private _disabled: boolean = false;

    constructor(private cdr: ChangeDetectorRef) {
    }

    /**
     * @internal
     */
    public onCheckedChanged(event: Event): void {
        const checkbox: HTMLInputElement = event.target as HTMLInputElement;
        this._checked = checkbox.checked;
        this._indeterminate = false;
        this.onCheckedChange.emit(checkbox);
        this.onIndeterminateChange.emit(this._indeterminate);
        this.cdr.markForCheck();
    }

    /**
     * @internal
     */
    public writeValue(value: any): void {
        if (value !== this.checked) {
            this.checked = value;
        }
    }

    /**
     * @internal
     */
    public registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    /**
     * @internal
     */
    public registerOnTouched(fn: any): void {
        this.onTouchedCallback = fn;
    }

}
