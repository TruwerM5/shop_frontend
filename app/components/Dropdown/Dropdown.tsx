import { Link } from "react-router";
import { useState } from "react";
import type { NavItem } from "../../../types/nav"
import "./dropdown.css";

interface DropdownProps {
    title: string;
    items: NavItem[];
    className?: string;
}

export default function Dropdown({
    title,
    items,
    className,
}: DropdownProps) {

    const [isOpened, setIsOpened] = useState(false);
    function handleClick(e: React.MouseEvent) {
        setIsOpened(!isOpened);
    }


    return (
        <div className="dropdown">
            <button className="dropdown__button" onClick={handleClick}>{title}</button>
            {isOpened && 
            <ul className="dropdown__list">
                {items.map(item => (
                    <li key={item.id} onClick={handleClick} className="dropdown__item">
                        {item.type === "link" ?
                        (
                            <Link to={item.href} className="dropdown__item-button">{item.title}</Link>
                        ) : (
                            <button type="button" className="dropdown__item-button">{item.title}</button>
                        )}
                    </li>
                ))}
            </ul>
            }
        </div>
    )
}