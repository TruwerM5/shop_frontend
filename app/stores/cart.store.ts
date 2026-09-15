import { create } from "zustand";
import type { CartResponse } from "@shop/contracts";
import type { CartStore } from "../../types/cart";
import { getCart } from "~/api/cart.api";

export const useCartStore = create<CartStore>((set, get) => ({
    cart: <CartResponse>({
        items: null,
    }),
    fetchCart: async () => {
        const { data } = await getCart();
        if(!data) {
            return;
        }
    },
    getCartSize: (): number => {
        const cart = get().cart;
        if(!cart.items) {
            return 0;
        }
        return cart.items.reduce((acc, item) => acc + item.quantity, 0);
    },
    setItems: (cart: CartResponse) => {
        set({ cart });
    },
}));