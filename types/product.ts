
export enum ProductCategory {
    gadgets = 'gadgets',
    books = 'books',
    clothes = 'clothes',
}

export interface ApiGetProductItem {
    productId: number;
    name: string;
    price: number;
    rating: number;
    category: ProductCategory;
    sellerId: number;
    productImages: ApiGetProductImages[];
}

export interface ApiGetProductImages {
    productId: number;
    imagePath: string;
}

export interface ApiGetProductDetails {
    productId: number;
    size: string | null;
    color: string | null;
    author?: string;
    description?: string;
}
export interface ApiGetProduct extends ApiGetProductItem {
    productDetails: ApiGetProductDetails;
}