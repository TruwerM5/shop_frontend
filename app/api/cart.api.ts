import api from ".";
import type { Cart, CartItem } from "../../types/cart";

export const addToCart = async (productId: number) => {
    return api.post<{ cart: Cart, cartItem: CartItem }>('/cart/add-to-cart', {
        productId
    });
}