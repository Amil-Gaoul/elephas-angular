import {Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation} from '@angular/core';
import {DropdownItem} from './models';

@Component({
    selector: 'e-dropdown-item',
    templateUrl: './dropdown-item.html',
    encapsulation: ViewEncapsulation.None
})
export class EDropdownItem {

    /**
     * Dropdown item value.
     */
    @Input() public value: string;

    /**
     * Dropdown item hint message.
     */
    @Input() public hint: string;

    /**
     * Whether dropdown item is selected.
     */
    @Input() public selected: boolean;

    /**
     * Event emitted when the dropdown item is selected.
     */
    @Output() public onSelectionChange: EventEmitter<DropdownItem> = new EventEmitter<DropdownItem>();
    @HostBinding('tabindex') public tabindex: number = -1;

    /**
     * @internal
     */
    public active: boolean = false;

    /**
     * @internal
     */
    public onSetItemActive(): void {
        this.onSelectionChange.emit({ source: this });
    }

    /**
     * @internal
     */
    public setActiveStyles(): void {
        this.active = true;
    }

    /**
     * @internal
     */
    public setInactiveStyles(): void {
        this.active = false;
    }

}
