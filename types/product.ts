
export interface ApiGetProductItem {
    productId: number;
    name: string;
    price: number;
    sellerId: number;
    productImages: ApiGetProductImages[];
}

export interface ApiGetProductImages {
    productId: number;
    imagePath: string;
}

export interface ApiGetProductDetails {
    productId: number;
    category: string;
    size: string | null;
    color: string | null;
    author?: string;
    description?: string;
}
export interface ApiGetProduct extends ApiGetProductItem {
    productDetails: ApiGetProductDetails;
}