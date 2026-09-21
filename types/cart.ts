import type { AddToCartResponse, CartItemResponse, GetCartResponse } from "@shop/contracts";

export interface CartStore {
    cart: GetCartResponse;
    fetchCart: () => Promise<void>;
    getCartSize: () => number;
    setItems: (cart: GetCartResponse) => void;
    addItem: (cart: AddToCartResponse) => void;
    clearCart: () => void;
}