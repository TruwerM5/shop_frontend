import { useState } from "react";
import clsx from "clsx";
import "./button.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Button({
    text,
    onClick,
    isPrimary = true,
    isDisabled,
}: {
    text: string;
    onClick: () => Promise<void> | void;
    isPrimary?: boolean;
    isDisabled?: boolean;
}) {

    const [isPending, setIsPending] = useState(false);

    async function handleClick() {
        setIsPending(true);
        try {
            await onClick();
        } finally {
            setIsPending(false);
        }
    } 

    const buttonClassName = clsx("button", {
        "button_primary": isPrimary,
        "button_pending": isPending,
        "button_disbled": isDisabled,
    })
    return (
        <button type="button" onClick={handleClick} className={buttonClassName}>
            <span className="button__text">
                { isPending &&
                    <span className="button__pending-icon">
                        <AiOutlineLoading3Quarters />
                    </span>
                }
                {text}
            </span>
        </button>
    )
}