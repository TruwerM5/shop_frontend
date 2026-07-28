import { useNavigate } from 'react-router';
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
            <button 
                onClick={goBack}
                className="auth-form__go-back-button"
            >
                Cancel
            </button>
        </div>
    )
}