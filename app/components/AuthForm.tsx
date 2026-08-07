import { Link, useNavigate, useLocation } from 'react-router';
import Button from './Button/Button';
import "@styles/auth-form.css";
import type { ApiUserPayload } from '../../types/user';
import { useState } from 'react';

interface AuthFormProps {
    head: React.ReactElement;
    body: React.ReactElement;
    onSubmit: () => Promise<ApiUserPayload | boolean>;
    action: 'Sign in' | 'Sign up';
    redirect?: string;
}

export default function AuthForm({
    head,
    body,
    onSubmit,
    action,
}: AuthFormProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const fromRoute = location.state?.from ?? "/";
    async function handleSubmit(event?: React.SubmitEvent) {
        event?.preventDefault();
        const req = await onSubmit();
        if(req) {
            navigate(fromRoute, { replace: true });
        }
    }

    function goBack() {
        navigate('/');
    }

    return (
        <div className="auth-form">
            <div className="auth-form__inner">
                <div className="auth-form__head">
                    {head}
                </div>
                <form className="auth-form__body" onSubmit={handleSubmit}>
                    {body}
                    <Button text={action} type="submit" onClick={handleSubmit} />
                </form>
            </div>
            {action === 'Sign in' ? (
                <p className="auth-form__text">
                    Don't have an account yet? {' '}
                    <Link to='/signup' className="link">
                        Sign up
                    </Link>    
                </p>
            ): (
                <p className="auth-form__text">
                    Already have an account? {' '}
                    <Link to='/login' className="link">
                        Sign in
                    </Link>
                </p>
            )}
            <button 
                onClick={goBack}
                className="auth-form__go-back-button"
            >
                Cancel
            </button>
        </div>
    )
}