import type { NavItem } from "../../types/nav";
import { Link } from "react-router";
import { useUserStore } from "~/stores/user.store";
import Dropdown from "./Dropdown/Dropdown";
import "@styles/nav.css";
import { useEffect, useState } from 'react';

export default function Nav({ 
    links,
}: { 
    links: NavItem[]
}) {    

    const profileLinks: NavItem[] = [
        {
            id: 1,
            title: 'Profile',
            href: '/profile',
            type: 'link',
        },{
            id: 2,
            title: 'Orders',
            href: '/orders',
            type: 'link',
        },{
            id: 3,
            title: 'Logout',
            type: 'button',
            async action() {
                console.log('logout');
            },
        },
    ]

    const storeUser = useUserStore((state) => state.user);
    const [user, setUser] = useState<typeof storeUser | null>(null);
    useEffect(() => {
        setUser(storeUser);
    }, [storeUser])

    return (
        <nav className="nav">
            <ul className="nav__list">
                {links.map(link => (
                    <li key={link.id} className="nav__item">
                        {link.type === "link" ? (
                            <Link to={link.href}>
                                {link.title}
                            </Link>
                        ) : (
                            <button onClick={() => link.action()}>
                                {link.title}
                            </button>
                        )}
                    </li>
                ))}
            </ul>
            {!user ? (
                <Link to="/login" className="nav__item">
                    Sign in
                </Link>
            ) : (
                <Dropdown title={user?.name} items={profileLinks} className="nav__item" />
            )} 
        </nav>
    )
}