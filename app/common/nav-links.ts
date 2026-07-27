import type { NavLink } from '../../types/nav';

export const baseHeaderLinks: NavLink[] =  [
    {
        id: 1,
        title: 'Catalog',
        href: '/',
    },
    {
        id: 2,
        title: 'Cart',
        href: '/cart',
    },
    {
        id: 3,
        title: 'Sign In',
        href: '/login'
    },
    {
        id: 4,
        title: 'Sign Up',
        href: '/signup'
    },
];

export const userHeaderLinks: NavLink[] = [
    {
        id: 1,
        title: 'Orders',
        href: '/orders',
    },
    {
        id: 2,
        title: 'Profile',
        href: '/profile',
    }
];