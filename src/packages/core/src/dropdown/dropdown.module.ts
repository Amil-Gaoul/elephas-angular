import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EDropdown} from './dropdown';
import {EDropdownItem} from './dropdown-item';
import {EDropdownTriggers} from './dropdown-triggers';

@NgModule({
    declarations: [EDropdown, EDropdownItem, EDropdownTriggers],
    imports: [
        CommonModule
    ],
    exports: [EDropdown, EDropdownItem, EDropdownTriggers]
})
export class EDropdownModule { }
