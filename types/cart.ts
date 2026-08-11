export interface Cart {
    cartId: number;
    token: string;
    userId: number | null;
    createdAt: Date;
    updatedAt: Date;
    expiresAt: Date | null;
}

export interface CartItem {
    cartId: number;
    cartItemId: number;
    productId: number;
    quantity: number;
}