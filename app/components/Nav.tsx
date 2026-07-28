import type { NavItem } from '../../types/nav';
import { Link } from 'react-router';
import { useUserStore } from '~/stores/user.store';

export default function Nav({ 
    links,
}: { 
    links: NavItem[]
}) {    

    const isAuthenticated = useUserStore((state) => state.isAuthenticated);

    return (
        <nav className="nav flex">
            <ul className="nav-list flex justify-center items-center gap-6 mx-auto">
                {links.map(link => (
                    <li key={link.id} className="nav-item text-white">
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
            {!isAuthenticated && 
            <Link to="/login" className="text-white">
                Sign In
            </Link>
            } 
        </nav>
    )
}