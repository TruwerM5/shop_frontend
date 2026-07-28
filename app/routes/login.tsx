import { useState } from "react"
import { Link } from "react-router";
import { useUserStore } from "~/stores/user.store";
import type { SignUpUserDto } from "../../types/user";

export default function LoginPage() {

    const login = useUserStore((state) => state.login);

    const [loginData, setLoginData] = useState<SignUpUserDto>({
        email: '',
        name: '',
        password: '',
    });

    async function onSubmit() {
        await login(loginData);
    }

    return (
        <div className="page auth-page">
            <div className="auth-form max-w-100 mx-auto p-4 rounded-xl shadow-2xl">
                <div className="auth-form__head flex justify-between border-b mb-4">
                    <h5 className="auth-title text-2xl">Sign In</h5>
                    <Link to="/signup" className="auth-form__link">Sign Up</Link>
                </div>
                <div className="auth-form__body flex flex-col gap-4">
                    <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        value={loginData.email}
                        onChange={(e) => {
                            setLoginData({...loginData, email: e.target.value})
                        }}
                        className="auth-form__input"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        name="user_password"
                        id="user_password"
                        value={loginData.password}
                        onChange={(e) => {
                            setLoginData({...loginData, password: e.target.value})
                        }}
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
                </div>     
            </div>
        </div>
    )
}