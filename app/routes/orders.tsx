import { useUserStore } from "~/stores/user.store"
import { Navigate } from "react-router";

export default function OrdersPage() {        
    const isAuthenticated = useUserStore((state) => state.isAuthenticated);

    if(!isAuthenticated) {
       return <Navigate to="/login" replace />
    }

    return (
        <div className="page orders-page">
            <h1>Orders</h1>
        </div>
    )
}