import "./description.css";
import { useState } from "react";
import clsx from "clsx";

export default function ShortDesciption({
    description,
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
            <h5 className="title-sm">Description</h5>
            <div className={descriptionInnerClass}>
                <p className="description__text">
                    {description}
                </p>
            </div>
            <button 
                onClick={handleClick} 
                className="description__toggle-button"
            >
                {isOpened ? 'Hide' : 'Show more'}
            </button>
        </div>
    )
}