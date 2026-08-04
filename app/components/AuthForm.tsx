import { Link, useNavigate } from 'react-router';
import Button from './Button/Button';
import "@styles/auth-form.css";
import type { ApiUserPayload } from '../../types/user';

export default function AuthForm({
    head,
    body,
    onSubmit,
    action,
    redirect
}: {
    head: React.ReactElement;
    body: React.ReactElement;
    onSubmit: () => Promise<ApiUserPayload | boolean>;
    action: 'Sign in' | 'Sign up';
    redirect?: string;
}) {

    const navigate = useNavigate();

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        const req = await onSubmit();
        if(req) {
            navigate(redirect ?? '/');
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
                    <Button text={action} type="submit" />
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