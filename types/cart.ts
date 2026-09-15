import type { CartItemResponse, CartResponse } from "@shop/contracts";

export interface CartStore {
    cart: CartResponse;
    fetchCart: () => Promise<void>;
    getCartSize: () => number;
    setItems: (cart: CartResponse) => void;
}