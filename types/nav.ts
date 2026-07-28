export interface NavLink {
    id: number;
    title: string;
    href: string;
    type: 'link';
};

export interface NavButton {
    id: number;
    title: string;
    action: () => void;
    type: 'button';
}

export type NavItem = NavLink | NavButton;