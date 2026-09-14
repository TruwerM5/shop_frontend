import type { CartItemResponse, CartResponse } from "@shop/contracts";

export interface CartStore {
    cart: CartResponse | null;
    fetchCart: () => Promise<void>;
    getCartSize: () => number;
    setItems: (cart: CartResponse) => void;
}