import {ESidebarTextDirective} from '../sidebar-text.directive';

describe('SidebarTextDirective', (): void => {
    it('should create an instance', (): void => {
        const directive: ESidebarTextDirective = new ESidebarTextDirective();
        expect(directive).toBeTruthy();
    });
});
