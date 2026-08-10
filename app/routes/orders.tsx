import { useUserStore } from "~/stores/user.store"

export default function OrdersPage() {
    const user = useUserStore((state) => state.user);

    return (
        <div className="page orders-page">
            <h1 className='font-2xl'>Orders</h1>
        </div>
    )
}