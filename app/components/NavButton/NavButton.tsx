import { Link } from "react-router";
import type { NavItem } from "../../../types/nav";
import "./nav-button.css";

export default function NavButton(props: NavItem) {
    const { title, type, icon: Icon } = props;
    const className = "nav-button";

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