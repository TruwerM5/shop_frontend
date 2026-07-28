import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export default function AuthForm({
    head,
    body,
    isSuccessSubmit,
    redirect
}: {
    head: React.ReactElement;
    body: React.ReactElement;
    isSuccessSubmit: boolean;
    redirect?: string;
}) {

    const navigate = useNavigate();

    useEffect(() => {
        if(isSuccessSubmit) {
            navigate(redirect ?? '/');
        }

    },[isSuccessSubmit, navigate, redirect]);

    return (
        <div className="auth-form min-w-100 min-h-50 flex flex-col mx-auto p-4 rounded-xl shadow-2xl">
            <div className="auth-form__head flex justify-between border-b mb-4">
                {head}
            </div>
            <form className="auth-form__body flex flex-col gap-4 flex-1">
                {body}
            </form>
        </div>
    )
}