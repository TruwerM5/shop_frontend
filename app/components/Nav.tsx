import type { NavItem } from "../../types/nav";
import { Link } from "react-router";
import { useUserStore } from "~/stores/user.store";
import "@styles/nav.css";

export default function Nav({ 
    links,
}: { 
    links: NavItem[]
}) {    

    const isAuthenticated = useUserStore((state) => state.isAuthenticated);

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
            {!isAuthenticated && 
            <Link to="/login" className="nav__item">
                Sign in
            </Link>
            } 
        </nav>
    )
}