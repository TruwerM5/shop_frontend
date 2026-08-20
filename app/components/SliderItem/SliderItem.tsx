import clsx from "clsx";

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
    const imageClass = clsx("slider__image w-full h-full object-cover", {
        "sm:max-h-[300px] max-h-[300px]": !isLarge,
        "sm:h-[200px] lg:h-[500px]": isLarge,
    });
    return (
        <li className="slider__item min-w-full snap-center" onClick={onClick}>
            <img
                src={imagePath}
                alt={name}
                className={imageClass}
            />
        </li>
    )
}