import { useState } from "react"
import { useUserStore } from "~/stores/user.store";
import type { SignUpUserDto } from '../../types/user';
import AuthForm from '~/components/AuthForm';
import InputText from '~/components/InputText';
import { validateSignUpData } from '~/helpers/validate-user';

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
        try {
            const validated = validateSignUpData(signUpData);
            console.log(validated.success);
            await signUp(signUpData);
        } catch (err) {
            throw err;
        } 
    }

    return (
        <div className="page auth-page w-full h-full">
            <AuthForm
                onSubmit={submit}
                action='Sign Up'
                head={<h5 className="auth-form__title">Sign Up</h5>}
                body={
                <>
                    <InputText 
                        name='name'
                        id='name'
                        value={signUpData.name}
                        label='Your name'
                        onChange={(value) => handleChange('name', value)}
                    />
                    <InputText
                        type='email'
                        name='email'
                        id='email'
                        value={signUpData.email}
                        label='Email'
                        onChange={(value) => handleChange('email', value)}
                    />
                    <InputText 
                        type='password'
                        name='password'
                        id='password'
                        value={signUpData.password}
                        label='Password'
                        onChange={(value) => handleChange('password', value)}
                    />
                </>
                }
            />
        </div>
    )
}