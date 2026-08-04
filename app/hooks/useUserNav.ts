import type { NavItem } from '../../types/nav';
import { baseHeaderLinks } from '~/common/nav-links';

export function useUserNav(): NavItem[] {
    return baseHeaderLinks;
} 

