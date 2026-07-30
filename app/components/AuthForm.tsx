import { Link, useNavigate } from 'react-router';
import Button from './Button';
import "@styles/auth-form.css";

export default function AuthForm({
    head,
    body,
    onSubmit,
    action,
    redirect
}: {
    head: React.ReactElement;
    body: React.ReactElement;
    onSubmit: () => Promise<void>;
    action: 'Sign In' | 'Sign Up';
    redirect?: string;
}) {

    const navigate = useNavigate();

    async function handleSubmit() {
        await onSubmit();
        navigate(redirect ?? '/');
    }

    function goBack() {
        navigate('/');
    }

    return (
        <div className="auth-form">
            <div className="auth-form__head">
                {head}
            </div>
            <form className="auth-form__body">
                {body}
                <Button
                    text={action}
                    onClick={handleSubmit}
                />
            </form>
                {action === 'Sign In' ? (
                    <p className="auth-form__text">
                        Don't have an account yet? {' '}
                        <Link to='/signup' className="link">
                            Sign Up
                        </Link>    
                    </p>
                ): (
                    <p className="auth-form__text">
                        Already have an account? {' '}
                        <Link to='/login' className="link">
                            Sign In
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