import { Link } from "react-router";
import type { NavItem } from "../../../types/nav";
import "./nav-button.css";
import { useCartStore } from "~/stores/cart.store";
import { useCallback } from "react";

export default function NavButton(props: NavItem) {
    const { title, type, icon: Icon } = props;
    const className = "nav-button";
    const cartStore = useCartStore();
    const getCartSize = useCallback(() => cartStore.getCartSize(), [
        cartStore.cart
    ]);
    const cartSize = getCartSize();
    if(type === "link") {
        return (
            <Link
                to={props.href}
                className={className}
            >
                {Icon && <Icon />}
                <span className="nav-button__title">
                    {title}
                </span>
                {props.href === '/cart' && cartSize > 0 &&
                    <span className="nav-button__cart-size">
                        {cartSize}
                    </span>
                }
            </Link>
        )
    }

    return  (
        <button
            type="button"
            className={className}
            onClick={props.action}
        >
            {Icon && <Icon />}
            <span className="nav-button__title">
                {title}
            </span>
        </button>
    )
}