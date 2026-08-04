import { useState } from "react"
import { useUserStore } from "~/stores/user.store";
import type { SignUpUserDto } from '../../types/user';
import AuthForm from '~/components/AuthForm';
import InputText from '~/components/InputText/InputText';
import { validateSignUpData } from '~/helpers/validate-user';

export default function SignUpPage() {
    const signUp = useUserStore((state) => state.signUp);

    const [signUpData, setSignUpData] = useState<SignUpUserDto>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [signUpErrors, setSignUpErros] = useState<SignUpUserDto>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    function handleChange(key: keyof SignUpUserDto, value: string) {
        setSignUpData((currentState) => ({
            ...currentState,
            [key]: value,
        }));
        }

    async function submit() {
        try {
            const { success, validationResults } = validateSignUpData<SignUpUserDto>(signUpData);

            const errors: SignUpUserDto = {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            };

            for(const result of validationResults) {
                errors[result.field] = result.errorMessage?? '';
            };

            setSignUpErros(errors);
            if(!success) {
                return false;
            }
            return await signUp(signUpData);
        } catch (err) {
            throw err;
        } 
    }

    return (
        <div className="page auth-page w-full h-full">
            <AuthForm
                onSubmit={submit}
                action='Sign up'
                head={<h5 className="auth-form__title">Sign up</h5>}
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
                    <InputText 
                        type='password'
                        name='confirm password'
                        id='confirm password'
                        value={signUpData.confirmPassword}
                        label='Confirm password'
                        onChange={(value) => handleChange('confirmPassword', value)}
                        errorMessage={signUpErrors.confirmPassword}
                    />
                </>
                }
            />
        </div>
    )
}