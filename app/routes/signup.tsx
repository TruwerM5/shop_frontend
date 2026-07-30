import { useState } from "react"
import { useUserStore } from "~/stores/user.store";
import type { SignUpUserDto } from '../../types/user';
import AuthForm from '~/components/AuthForm';
import InputText from '~/components/InputText';
import { validateSignUpData } from '~/helpers/validate-user';
import { ValidationError } from "~/helpers";

export default function SignUpPage() {
    const signUp = useUserStore((state) => state.signUp);

    const [signUpData, setSignUpData] = useState<SignUpUserDto>({
        email: '',
        name: '',
        password: '',
    });

    const [signUpErrors, setSignUpErros] = useState<SignUpUserDto>({
        email: '',
        name: '',
        password: '',
    });

    function handleChange(key: keyof SignUpUserDto, value: string) {
            setSignUpData((currentState) => ({
                ...currentState,
                [key]: value,
            }));
        }

    async function submit() {
        try {
            validateSignUpData(signUpData);
            await signUp(signUpData);
        } catch (err) {
            if(err instanceof ValidationError) {
                setSignUpErros((currentState) => ({
                    ...currentState,
                    [err.fieldName]: err.message,
                }))
            }
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
                        errorMessage={signUpErrors.name}
                    />
                    <InputText
                        type='email'
                        name='email'
                        id='email'
                        value={signUpData.email}
                        label='Email'
                        onChange={(value) => handleChange('email', value)}
                        errorMessage={signUpErrors.email}
                    />
                    <InputText 
                        type='password'
                        name='password'
                        id='password'
                        value={signUpData.password}
                        label='Password'
                        onChange={(value) => handleChange('password', value)}
                        errorMessage={signUpErrors.password}
                    />
                </>
                }
            />
        </div>
    )
}