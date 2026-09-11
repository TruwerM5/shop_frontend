import api from ".";
import type { CartResponse, CartItemResponse } from "@shop/contracts";

export const getCart = async () => {
    return api.get<CartResponse>('/cart');
};

export const addToCart = async (productId: number) => {
    return api.post<{ cart: CartResponse, cartItem: CartItemResponse }>('/cart/add-to-cart', {
        productId
    });
};