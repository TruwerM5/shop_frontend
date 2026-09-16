import api from ".";
import type { GetCartResponse, CartItemResponse, AddToCartResponse } from "@shop/contracts";

export const getCart = async () => {
    return api.get<GetCartResponse>('/cart');
};

export const addToCart = async (productId: number) => {
    return api.post<AddToCartResponse>('/cart/add-to-cart', {
        productId
    });
};