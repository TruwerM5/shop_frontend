import { useState } from "react"
import { useUserStore } from "~/stores/user.store";
import type { LoginRequest } from "@shop/contracts";
import AuthForm from '~/components/AuthForm';
import InputText from "~/components/InputText/InputText";

export default function LoginPage() {
    const login = useUserStore((state) => state.login);

    const [loginData, setLoginData] = useState<LoginRequest>({
        email: '',
        password: '',
    });

    const [loginErrors, setLoginErrors] = useState<LoginRequest>({
        email: '',
        password: '',
    });

    function handleChange(key: keyof LoginRequest, value: string) {
        setLoginData({
            ...loginData,
            [key]: value,
        })
    }

    async function submit() {
       return login(loginData);
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