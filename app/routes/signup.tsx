import { useState } from "react"
import { Link } from "react-router";
import { useUserStore } from "~/stores/user.store";
import type { SignUpUserDto } from "../../types/user";

export default function SignUpPage() {

    const signUp = useUserStore((state) => state.signUp);

    const [signUpData, setSignUpData] = useState<SignUpUserDto>({
        email: '',
        name: '',
        password: '',
    });

    async function onSubmit() {
        await signUp(signUpData);
    }

    return (
        <div className="page auth-page">
            <div className="auth-form max-w-100 mx-auto p-4 rounded-xl shadow-2xl">
                <div className="auth-form__head flex justify-between border-b mb-4">
                    <h5 className="auth-title text-2xl">Sign Up</h5>
                    <Link to="/login" className="auth-form__link">Login</Link>
                </div>
                <div className="auth-form__body flex flex-col gap-4">
                    <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        value={signUpData.name}
                        onChange={(e) => {
                            setSignUpData({...signUpData, name: e.target.value})
                        }}
                        className="auth-form__input"
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        value={signUpData.email}
                        onChange={(e) => {
                            setSignUpData({...signUpData, email: e.target.value})
                        }}
                        className="auth-form__input"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        name="user_password"
                        id="user_password"
                        value={signUpData.password}
                        onChange={(e) => {
                            setSignUpData({...signUpData, password: e.target.value})
                        }}
                        className="auth-form__input"
                        placeholder="Password"
                    />
                    <button 
                        onClick={onSubmit}
                        type="button"
                        className="auth-form__submit-btn primary-button"
                    >
                        Sign Up
                    </button>
                </div>     
            </div>
        </div>
    )
}