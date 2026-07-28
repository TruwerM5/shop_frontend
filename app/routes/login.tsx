import { useState } from "react"
import { Link } from "react-router";
import { useUserStore } from "~/stores/user.store";
import type { LogInUserDto } from '../../types/user';
import AuthForm from '~/components/AuthForm';

export default function LoginPage() {
    const login = useUserStore((state) => state.login);

    const [loginData, setLoginData] = useState<LogInUserDto>({
        email: '',
        password: '',
    });

    const [isSuccessSubmit, setIsSuccessSubmit] = useState(false);

    function handleChange(key: keyof LogInUserDto, value: string) {
        setLoginData({
            ...loginData,
            [key]: value,
        })
    }

    async function submit() {
        try {
            await login(loginData);
            setIsSuccessSubmit(true);
        } catch {
            return null
        }
    }

    return (
        <div className="page auth-page">
            <AuthForm
                head={<LoginFormHeader />}
                body={<LoginFormBody loginData={loginData} onChange={handleChange} onSubmit={submit} />}
                isSuccessSubmit={isSuccessSubmit}
                redirect='/'
            />
        </div>
    )
}

function LoginFormHeader() {
    return (
        <>
            <h5 className="auth-title text-2xl">Sign In</h5>
            <Link to="/signup" className="auth-form__link">Sign Up</Link>
        </>
    )
}

function LoginFormBody({ 
    loginData,
    onChange,
    onSubmit,
}: {
    loginData: LogInUserDto;
    onChange: (key: keyof LogInUserDto, value: string) => void;
    onSubmit: () => Promise<undefined | null>
}) {
    return (
        <>
            <input
                type="email"
                name="user_email"
                id="user_email"
                value={loginData.email}
                onChange={(e) => onChange('email', e.target.value)}
                className="auth-form__input"
                placeholder="Email"
            />
            <input
                type="password"
                name="user_password"
                id="user_password"
                value={loginData.password}
                onChange={(e) => onChange('password', e.target.value)}
                className="auth-form__input"
                placeholder="Password"
            />
            <button
                onClick={onSubmit}
                type="button"
                className="auth-form__submit-btn primary-button"
            >
                Sign In
            </button>
        </>
    )
}