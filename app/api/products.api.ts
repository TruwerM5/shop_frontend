import api from ".";
import type { ProductResponse, FullProductItem, ProductCategory } from "@shop/contracts";

export const fetchCatalog = async () => {
    return api.get<ProductResponse[]>('/products');
}

export const getProductById = async (id: number) => {
    return api.get<FullProductItem>(`/products/${id}`);
}

export const getProductsByCategory = async (category: ProductCategory, productId: number) => {
    return api.get<ProductResponse[]>(`/products/category/${category}`, {
        params: {
            excludeId: productId,
        }
    });
}