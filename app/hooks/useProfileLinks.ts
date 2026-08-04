
import type { NavItem } from "../../types/nav";
import { FaRegUser } from "react-icons/fa6";
import { BsBoxSeam } from "react-icons/bs";
import { useUserStore } from "~/stores/user.store";
import { MdOutlinePowerSettingsNew } from "react-icons/md";

export function useProfileLinks(): NavItem[] {
    const logout = useUserStore((state) => state.logout);

    const links: NavItem[] = [{
        id: 1,
        title: 'Profile',
        href: '/profile',
        type: 'link',
        icon: FaRegUser,
    },{
        id: 2,
        title: 'Orders',
        href: '/orders',
        type: 'link',
        icon: BsBoxSeam,
    },{
        id: 3,
        title: 'Sign out',
        type: 'button',
        action: logout,
        icon: MdOutlinePowerSettingsNew,
    }];

    return links;
}