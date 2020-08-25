import { ESidebarBadgeDirective } from '../sidebar-badge.directive';

describe('SidebarBadgeDirective', (): void => {
  it('should create an instance', (): void => {
    const directive: ESidebarBadgeDirective = new ESidebarBadgeDirective();
    expect(directive).toBeTruthy();
  });
});
