import { useUserStore } from "~/stores/user.store"
import ProtectedRoute from "~/components/ProtectedRoute/ProtectedRoute";
import { useNavigation } from "react-router";

export default function OrdersPage() {
    const user = useUserStore((state) => state.user);
    const navigation = useNavigation();
    const from = navigation.location?.pathname;
    return (
        <ProtectedRoute user={user}>
            <div className="page orders-page">
                <h1 className='font-2xl'>Orders</h1>
            </div>
        </ProtectedRoute>
    )
}