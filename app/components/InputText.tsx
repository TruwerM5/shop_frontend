import type { ChangeEvent } from "react";
import "@styles/input.css";
import clsx from "clsx";
interface InputTextProps {
    name: string;
    id: string;
    value: string;
    label: string;
    onChange: (value: string) => void;
    errorMessage: string;
    type?: 'text' | 'email' | 'password',
}

export default function InputText<T>({
    type = "text",
    name,
    id,
    value,
    label,
    onChange,
    errorMessage,
}: InputTextProps) {

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        onChange(event.target.value);
    }

    const inputFieldClassName = clsx("input-text__field", {
        "filled": !!value,
    })

    return (
        <label htmlFor={id} className="input-text">
            <input
                type={type} 
                name={name} 
                id={id} 
                value={value}
                onChange={handleChange}
                className={inputFieldClassName}
            />
            <span className="input-text__label">{label}</span>
            {errorMessage && <span className="input-text__error-message">{errorMessage}</span>}
        </label>
    )

}