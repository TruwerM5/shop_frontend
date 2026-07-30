import { useState } from "react"
import { useUserStore } from "~/stores/user.store";
import type { LogInUserDto } from '../../types/user';
import AuthForm from '~/components/AuthForm';
import InputText from "~/components/InputText";

export default function LoginPage() {
    const login = useUserStore((state) => state.login);

    const [loginData, setLoginData] = useState<LogInUserDto>({
        email: '',
        password: '',
    });

    const [loginErrors, setLoginErrors] = useState<LogInUserDto>({
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
       return await login(loginData);
    }

    return (
        <div className="page auth-page w-full h-full">
            <AuthForm
                head={<h5 className="auth-form__title">Sign in</h5>}
                body={
                <>
                    <InputText
                        type='email'
                        name='email'
                        id='email'
                        value={loginData.email}
                        label='Email'
                        onChange={(value) => handleChange('email', value)}
                        errorMessage={loginErrors.email}
                    />
                    <InputText
                        type='password'
                        name='password'
                        id='password'
                        value={loginData.password}
                        label='Password'
                        onChange={(value) => handleChange('password', value)}
                        errorMessage={loginErrors.password}
                    />
                </>
                }
                onSubmit={submit}
                action='Sign in'
            />
        </div>
    )
}