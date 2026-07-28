import { useState } from "react"
import { Link } from "react-router";
import { useUserStore } from "~/stores/user.store";
import type { SignUpUserDto } from '../../types/user';
import AuthForm from '~/components/AuthForm';

export default function SignUpPage() {
    const signUp = useUserStore((state) => state.signUp);

    const [signUpData, setSignUpData] = useState<SignUpUserDto>({
        email: '',
        name: '',
        password: '',
    });

    function handleChange(key: keyof SignUpUserDto, value: string) {
            setSignUpData({
                ...signUpData,
                [key]: value,
            });
        }

    async function submit() {
        await signUp(signUpData);
    }

    return (
        <div className="page auth-page w-full h-full">
            <AuthForm 
                head={<SignUpFormHeader />}
                body={<SignUpFormBody signUpData={signUpData} onChange={handleChange} />}
                onSubmit={submit}
                action='Sign Up'
            />
        </div>
    )
}

function SignUpFormHeader() {
    return (
        <>
            <h5 className="auth-form__title">Sign Up</h5>
            <Link to="/login" className="auth-form__link">Sign In</Link>
        </>
    )
}

function SignUpFormBody({ 
    signUpData,
    onChange,
}: {
    signUpData: SignUpUserDto;
    onChange: (key: keyof SignUpUserDto, value: string) => void;
}) {
    return (
        <>
            <input
                type="text"
                name="user_name"
                id="user_name"
                value={signUpData.name}
                onChange={(e) => onChange('name', e.target.value)}
                className="auth-form__input"
                placeholder="Name"
            />
            <input
                type="email"
                name="user_email"
                id="user_email"
                value={signUpData.email}
                onChange={(e) => onChange('email', e.target.value)}
                className="auth-form__input"
                placeholder="Email"
            />
            <input
                type="password"
                name="user_password"
                id="user_password"
                value={signUpData.password}
                onChange={(e) => onChange('password', e.target.value)}
                className="auth-form__input"
                placeholder="Password"
            />
        </>
    )
}