import type { NavItem } from '../../types/nav';
import { baseHeaderLinks } from '~/common/nav-links';
import { useUserStore } from '~/stores/user.store';
import { UserRole } from '../../types/user';


export function useUserNav(): NavItem[] {
    const { user, logout } = useUserStore();

    if(!user) {
        return baseHeaderLinks;
    }

    if(user.role === UserRole.user) {
        return [
            {
                id: 1,
                title: 'Orders',
                href: '/orders',
                type: 'link',
            },
            {
                id: 2,
                title: 'Profile',
                href: '/profile',
                type: 'link',
            },
            {
                id: 3,
                title: 'Logout',
                type: 'button',
                action: logout,
            }
        ];
    }

    return [];
} 