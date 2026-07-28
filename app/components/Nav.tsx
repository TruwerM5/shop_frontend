import type { NavItem } from '../../types/nav';
import { Link } from 'react-router';

export default function Nav({ 
    links,
}: { 
    links: NavItem[]
}) {    
    return (
        <nav className="nav">
            <ul className="nav-list flex justify-center items-center gap-6">
                {links.map(link => (
                    <li key={link.id} className="nav-item text-primary hover:text-primary-hover">
                        {link.type === 'link' ? (
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
        </nav>
    )
}