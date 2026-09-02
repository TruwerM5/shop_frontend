import clsx from "clsx";
import "./slider-item.css";

interface SliderItemProps {
    imagePath: string;
    name: string;
    onClick?: () => void;
}

export default function SliderItem({
    imagePath,
    name,
    onClick,
}: SliderItemProps) {
    return (
        <li className="slider-item" onClick={onClick}>
            <img
                src={imagePath}
                alt={name}
                className="slider-item__image"
            />
        </li>
    )
}