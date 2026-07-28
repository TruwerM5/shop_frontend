import clsx from "clsx";
import "@styles/button.css";

export default function Button({
    text,
    isPrimary = true,
    onClick
}: {
    text: string;
    isPrimary?: boolean;
    onClick: () => Promise<void> | void;
}) {
    const buttonClassName = clsx("button", {
        "button_primary": isPrimary,
    })
    return (
        <button onClick={onClick} className={buttonClassName}>
            {text}
        </button>
    )
}