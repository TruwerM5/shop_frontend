import { create } from "zustand";
import type { AddToCartResponse, CartItemResponse, GetCartResponse } from "@shop/contracts";
import type { CartStore } from "../../types/cart";
import { getCart } from "~/api/cart.api";

export const useCartStore = create<CartStore>((set, get) => ({
    cart: <GetCartResponse>({
        cartId: null,
        items: null,
    }),
    fetchCart: async () => {
        const { data: cart } = await getCart();
        if(!cart) {
            return;
        }
        set({ cart });
    },
    getCartSize: (): number => {
        const cart = get().cart;
        if(!cart.items) {
            return 0;
        }
        return cart.items.reduce((acc, item) => acc + item.quantity, 0);
    },
    addItem: (response: AddToCartResponse) => {
        const cart = get().cart;
        const { cartId, userId, expiresAt, createdAt } = response.cart;
        const { cartItem } = response;
        const productId = cartItem.product.productId;
        const quantity = cartItem.quantity;
        const items: CartItemResponse[] = [...cart.items || []];
        const productInCart = items.find(item => item.product.productId === productId);
        if(productInCart) {
            productInCart.quantity = quantity;
        } else {
            items.push(cartItem);
        }
        
        const updatedCart: GetCartResponse = {
            cartId,
            userId,
            expiresAt,
            createdAt,
            items,
        };
        set({ cart: updatedCart });
    },
    setItems: (cart: GetCartResponse) => {
        set({ cart });
    },
    clearCart: () => {
        set({
            cart: {
                cartId: null,
                items: null,
            }
        });
    }
}));