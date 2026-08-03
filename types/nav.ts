import type { IconType } from 'react-icons';

export interface NavLink {
    id: number;
    title: string;
    href: string;
    icon?: IconType;
    type: 'link';
};

export interface NavButton {
    id: number;
    title: string;
    action: () => void;
    icon?: IconType;
    type: 'button';
}

export type NavItem = NavLink | NavButton;