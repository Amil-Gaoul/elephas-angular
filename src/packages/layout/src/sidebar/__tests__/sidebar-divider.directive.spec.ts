import {ESidebarDividerDirective} from '../sidebar-divider.directive';

describe('SidebarDividerDirective', (): void => {
    it('should create an instance', (): void => {
        const directive: ESidebarDividerDirective = new ESidebarDividerDirective();
        expect(directive).toBeTruthy();
    });
});
