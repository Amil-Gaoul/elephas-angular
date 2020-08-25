import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ESidebarBadgeDirective} from './sidebar-badge.directive';
import {ESidebarDividerDirective} from './sidebar-divider.directive';
import {ESidebarIconDirective} from './sidebar-icon.directive';
import {ESidebarItemDirective} from './sidebar-item.directive';
import {ESidebarTextDirective} from './sidebar-text.directive';
import {ESidebarComponent} from './sidebar.component';

@NgModule({
    declarations: [
        ESidebarBadgeDirective,
        ESidebarComponent,
        ESidebarDividerDirective,
        ESidebarIconDirective,
        ESidebarItemDirective,
        ESidebarTextDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ESidebarBadgeDirective,
        ESidebarComponent,
        ESidebarDividerDirective,
        ESidebarIconDirective,
        ESidebarItemDirective,
        ESidebarTextDirective
    ]
})
export class ESidebarModule {
}
