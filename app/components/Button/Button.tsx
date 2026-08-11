import React, { useState } from "react";
import clsx from "clsx";
import "./button.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Button({
    text,
    isPrimary = true,
    isDisabled,
    onClick,
    type = 'button',
    customClass,
    icon
}: {
    text: string;
    isPrimary?: boolean;
    isDisabled?: boolean;
    onClick: (event?: React.SubmitEvent) => Promise<void>;
    type?: 'button' | 'submit';
    customClass?: string;
    icon?: React.ReactElement;
}) {

    const [isPending, setIsPending] = useState(false);

    async function handleSubmit(e: React.MouseEvent) {
        e.preventDefault();
        try {
            setIsPending(true);
            await onClick();
        } finally {
            setIsPending(false);
        }
        
    }

    const buttonClassName = clsx(`button ${customClass}`, {
        "button_primary": isPrimary,
        "button_pending": isPending,
        "button_disbled": isDisabled,
    })
    return (
        <button type={type} onClick={handleSubmit} className={buttonClassName}>
            {icon && !isPending && <span className="button__icon">{icon}</span>}
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