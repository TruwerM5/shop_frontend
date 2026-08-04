import { useRef, useState, useCallback } from "react";
import type { NavItem } from "../../../types/nav"
import "./dropdown.css";
import clsx from "clsx";
import NavButton from '~/components/NavButton/NavButton';
import useOutsideClick from "~/hooks/useOutsideClick";

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
    const dropdownRef = useRef<HTMLUListElement>(null);
    const closeDropdown = useCallback(() => {
        setIsOpened(false);
    }, []);

    useOutsideClick(dropdownRef, closeDropdown);

    const dropdownClassName = `dropdown ${className}`;
    function handleClick() {
        setIsOpened(!isOpened);
    }

    const dropdownButtonClassName = clsx('dropdown__button', {
        'opened': isOpened,
    });

    return (
        <div className={dropdownClassName}>
            <button className={dropdownButtonClassName} onClick={handleClick}>{title}</button>
            {isOpened && 
            <ul className="dropdown__list" ref={dropdownRef}>
                    {items.map(item => (
                    <li key={item.id} onClick={handleClick} className="dropdown__item">
                        <NavButton {...item} />
                    </li>
                ))}
            </ul>
            }
        </div>
    )
}