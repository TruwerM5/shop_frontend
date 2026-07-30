import type { ChangeEvent } from 'react';

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
    type = 'text',
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

    return (
        <label htmlFor={id}>
            <span>{label}</span>
            <input 
                type={type} 
                name={name} 
                id={id} 
                value={value}
                onChange={handleChange}
            />
            {errorMessage && <span>{errorMessage}</span>}
        </label>
    )

}