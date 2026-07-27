import type { NavLink } from '../../types/nav';
import { Link } from 'react-router';

export default function Nav({ links }: { links: NavLink[]}) {
    return (
        <nav className="nav">
            <ul className="nav-list flex justify-center items-center gap-6">
                {links.map(link => (
                    <li key={link.id} className="nav-item text-primary hover:text-primary-hover">
                        <Link to={link.href}>
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}