import {AfterViewInit, Directive, ElementRef, HostListener, Input, OnDestroy} from '@angular/core';
import {merge, Observable, Subscription} from 'rxjs';
import {delay} from 'rxjs/operators';
import {DOWN_ARROW, ENTER, ESCAPE, UP_ARROW} from '@angular/cdk/keycodes';
import {EDropdown} from './dropdown';
import {EDropdownItem} from './dropdown-item';
import {DropdownItem} from './models';

@Directive({
    selector: '[eDropdownTriggers]'
})
export class EDropdownTriggers implements AfterViewInit, OnDestroy {

    /**
     * The dropdown list to be attached to this trigger.
     */
    @Input('eDropdownTriggers') public dropdown: EDropdown;

    private subs: Subscription = new Subscription();

    constructor(private elementRef: ElementRef<HTMLInputElement>) {
    }

    @HostListener('focusin')
    public handleFocus(): void {
        this.dropdown.opened = true;
    }

    @HostListener('document:click', ['$event'])
    public documentClick(event: Event): void {
        const target: HTMLElement = <HTMLElement>event.target;
        this.dropdown.opened = this.elementRef.nativeElement.parentElement.contains(target);
    }

    @HostListener('document:keydown', ['$event'])
    public handleKeydown(event: KeyboardEvent): void {
        if (this.dropdown.opened) {
            const keyCode: number = event.keyCode;
            if (keyCode === ESCAPE) {
                this.dropdown.opened = false;
                return;
            }
            if (keyCode === ENTER) {
                const item: EDropdownItem = this.dropdown.items.toArray().find((it: EDropdownItem): boolean => it.active);
                item.onSelectionChange.emit({ source: item });
                return;
            }
            if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
                this.dropdown.keyManager.onKeydown(event);
            }
        }
    }

    public ngAfterViewInit(): void {
        this.subscribeItemsSelectionChange();
    }

    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    private subscribeItemsSelectionChange(): void {
        this.subs.add(merge(...this.dropdown.items.map((item: EDropdownItem): Observable<DropdownItem> => item.onSelectionChange))
            .pipe(delay(0))
            .subscribe((item: DropdownItem): void => {
                this.elementRef.nativeElement.value = item.source.value;
                this.elementRef.nativeElement.blur();
                this.dropdown.opened = false;
        }));
    }

}
