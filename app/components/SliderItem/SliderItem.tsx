import clsx from "clsx";
import "./slider-item.css";

interface SliderItemProps {
    imagePath: string;
    name: string;
    isLarge?: boolean;
    onClick?: () => void;
}

export default function SliderItem({
    imagePath,
    name,
    isLarge,
    onClick,
}: SliderItemProps) {
    const imageClass = clsx("slider-item__image", {
        "small": !isLarge,
        "large": isLarge,
    });
    return (
        <li className="slider-item" onClick={onClick}>
            <img
                src={imagePath}
                alt={name}
                className={imageClass}
            />
        </li>
    )
}