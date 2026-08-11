import { useState } from "react"
import clsx from "clsx";
import "./description.css";

export default function Desciption({
    description
}: {
    description?: string
}) {
    if(!description) {
        return null;
    }

    const [isOpened, setIsOpened] = useState(false);

    function handleClick() {
        setIsOpened(!isOpened);
    }

    const descriptionInnerClass = clsx("description__inner", {
        "description__inner_opened": isOpened,
    });

    return (
        <div className="description">
            <div className={descriptionInnerClass}>
                <p className="description__text">
                    {description}
                </p>
            </div>
            <button className="description__toggle-button" onClick={handleClick}>
                {isOpened ? 'Hide' : 'Show more'}
            </button>
        </div>
    )
}