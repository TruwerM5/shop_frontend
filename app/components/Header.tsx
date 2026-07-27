
import { useUserStore } from "~/stores/user.store";


const headerLinks = [
    {
        title: 'Catalog',
        href: '/',
    },
    {
        title: 'Cart',
        href: '/cart',
    }
];

const authenticatedUserHeaderLinks = [
    {
        title: 'Orders',
        href: '/orders',
    },
    {
        title: 'Profile',
        href: '/profile',
    }
];



export default function Header() {
    const checkIsAuthenticated = useUserStore((state) => state.checkIsAuthenticated);
    async function getUserData() {
       await checkIsAuthenticated();
    }

    getUserData();

    return (
        <header className="header">
            <p>Auth</p>
        </header>
    )
}