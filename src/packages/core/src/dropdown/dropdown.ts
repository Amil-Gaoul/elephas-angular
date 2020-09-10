import {Component, Input, ViewEncapsulation, ContentChildren, QueryList, AfterContentInit, OnDestroy, HostBinding} from '@angular/core';
import {ActiveDescendantKeyManager} from '@angular/cdk/a11y';
import {Subscription} from 'rxjs';
import {EDropdownItem} from './dropdown-item';

@Component({
    selector: 'e-dropdown',
    templateUrl: './dropdown.html',
    encapsulation: ViewEncapsulation.None
})
export class EDropdown implements AfterContentInit, OnDestroy {

    /**
     * Whether the dropdown is opened.
     */
    @Input() public opened: boolean = false;
    @HostBinding() public tabindex: number = 0;

    /**
     * @internal
     */
    @ContentChildren(EDropdownItem) public items: QueryList<EDropdownItem>;

    /**
     * @internal
     */
    public keyManager: ActiveDescendantKeyManager<EDropdownItem>;

    /**
     * @internal
     */
    public previousItemActive: number;

    private subs: Subscription = new Subscription();

    public ngAfterContentInit(): void {
        this.keyManager = new ActiveDescendantKeyManager<EDropdownItem>(this.items).withWrap();
        this.subs.add(this.keyManager.change.subscribe((index: number): void => {
            const items: EDropdownItem[] = this.items.toArray();
            if (items[this.previousItemActive]) {
                items[this.previousItemActive].setInactiveStyles();
            }
            this.items.toArray()[index].setActiveStyles();
            this.previousItemActive = index;
        }));
    }

    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

}
