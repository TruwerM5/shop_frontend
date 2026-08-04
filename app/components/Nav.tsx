 import type { NavItem } from "../../types/nav";
import { Link } from "react-router";
import { useUserStore } from "~/stores/user.store";
import Dropdown from "./Dropdown/Dropdown";
import NavButton from "./NavButton/NavButton";
import { useProfileLinks } from "~/hooks/useProfileLinks";
import "@styles/nav.css";

export default function Nav({ 
    links,
}: { 
    links: NavItem[]
}) {
    const user = useUserStore((state) => state.user);
    const profileLinks = useProfileLinks();
    return (
        <nav className="nav">
            <ul className="nav__list">
                {links.map(link => (
                    <li key={link.id} className="nav__item">
                        <NavButton {...link} />
                    </li>
                ))}
            </ul>
            {!user ? (
                <Link to="/login" className="nav__item">
                    Sign in
                </Link>
            ) : (
                <Dropdown title={user?.name} items={profileLinks} className="nav__item nav__item_no-hover" />
            )} 
        </nav>
    )
}