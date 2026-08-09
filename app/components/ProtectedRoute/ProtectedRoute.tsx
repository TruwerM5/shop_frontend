import { useUserStore } from "~/stores/user.store";
import { Navigate, useNavigation } from "react-router";
import  { type ReactElement, useState, useEffect } from "react";
import { PROTECTED_ROUTES } from '~/constants';
import type { ApiUserPayload } from '../../../types/user';
import GlobalLoading from "~/components/GlobalLoading/GlobalLoading";

export default function ProtectedRoute({
    user,
    children,
}: {
    user: ApiUserPayload
    children: ReactElement
}) {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        console.log(isInitialized);
    }, [setIsInitialized]);


    if(!isInitialized) {
        return <GlobalLoading />
    }

    if(!user.userId) {
        return <Navigate to='/login' replace />
    }
    
    return (
        <>
            {children}
        </>
    )
}