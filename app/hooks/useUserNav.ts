import type { NavItem } from '../../types/nav';
import { baseHeaderLinks } from '~/common/nav-links';
import { useUserStore } from '~/stores/user.store';
import { UserRole } from '../../types/user';


export function useUserNav(): NavItem[] {
    const user = useUserStore((state) => state.user);

    if(!user) {
        return baseHeaderLinks;
    }

    if(user.role === UserRole.user) {
        return getUserNav();
    }

    return [];
} 

function getUserNav(): NavItem[] {
    return [
        ...baseHeaderLinks,
        {
            id: 3,
            title: 'Orders',
            href: '/orders',
            type: 'link',
        },
        {
            id: 4,
            title: 'Profile',
            href: '/profile',
            type: 'link',
        },
    ]
}