import { useState } from "react";
import clsx from "clsx";
import "./button.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Button({
    text,
    isPrimary = true,
    isDisabled,
    onClick,
    type = 'button',
}: {
    text: string;
    isPrimary?: boolean;
    isDisabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit';
}) {

    const [isPending, setIsPending] = useState(false);

    async function handleClick() {
        setIsPending(true);
    } 

    const buttonClassName = clsx("button", {
        "button_primary": isPrimary,
        "button_pending": isPending,
        "button_disbled": isDisabled,
    })
    return (
        <button type={type} onClick={handleClick} className={buttonClassName}>
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