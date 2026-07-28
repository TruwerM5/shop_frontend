import type { NavItem } from '../../types/nav';

export const baseHeaderLinks: NavItem[] =  [
    {
        id: 1,
        title: 'Catalog',
        href: '/',
        type: 'link',
    },
    {
        id: 2,
        title: 'Cart',
        href: '/cart',
        type: 'link',
    },
    {
        id: 3,
        title: 'Sign In',
        href: '/login',
        type: 'link',
    },
    {
        id: 4,
        title: 'Sign Up',
        href: '/signup',
        type: 'link',
    },
];