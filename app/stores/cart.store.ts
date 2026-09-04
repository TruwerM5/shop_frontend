import { create } from "zustand";
import type { CartItem, CartStore } from "@shop/contracts";
import { getCart } from "~/api/cart.api";

export const useCartStore = create<CartStore>((set, get) => ({
    items: [],
    fetchCart: async () => {
        const { data } = await getCart();
        if(!data) {
            return;
        }
    },
    getCartSize: () => {
        return get().items.reduce((acc, item) => acc + item.quantity, 0);
    },
    setItems: (items: CartItem[]) => {
        set({ items });
    }
}))