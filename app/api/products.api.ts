import api from ".";
import type { ApiGetProductItem, ApiGetProduct, ProductCategory } from "../../types/product";

export const fetchCatalog = async () => {
    return api.get<ApiGetProductItem[]>('/products');
}

export const getProductById = async (id: number) => {
    return api.get<ApiGetProduct>(`/products/${id}`);
}

export const getProductsByCategory = async (category: ProductCategory, productId: number) => {
    return api.get<ApiGetProduct[]>(`/products/category/${category}`, {
        params: {
            excludeId: productId,
        }
    });
}