import { create } from "zustand";
import type { CartItemResponse, CartResponse } from "@shop/contracts";
import type { CartStore } from "../../types/cart";
import { getCart } from "~/api/cart.api";

export const useCartStore = create<CartStore>((set, get) => ({
    cart: <CartResponse>({}),
    fetchCart: async () => {
        const { data } = await getCart();
        if(!data) {
            return;
        }
    },
    getCartSize: () => {
        return get().cart.items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
    },
    setItems: (cart: CartResponse) => {
        set({ 
            cart
        });
    }
}))