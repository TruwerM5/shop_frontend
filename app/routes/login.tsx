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

    function handleChange(key: keyof LogInUserDto, value: string) {
        setLoginData({
            ...loginData,
            [key]: value,
        })
    }

    async function submit() {
        await login(loginData);
    }

    return (
        <div className="page auth-page w-full h-full">
            <AuthForm
                head={<LoginFormHeader />}
                body={<LoginFormBody loginData={loginData} onChange={handleChange} />}
                onSubmit={submit}
                action='Sign In'
            />
        </div>
    )
}

function LoginFormHeader() {
    return (
        <>
            <h5 className="auth-form__title">Sign In</h5>
            <Link to="/signup" className="auth-form__link">Sign Up</Link>
        </>
    )
}

function LoginFormBody({ 
    loginData,
    onChange,
}: {
    loginData: LogInUserDto;
    onChange: (key: keyof LogInUserDto, value: string) => void;
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
        </>
    )
}