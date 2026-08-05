import api from ".";
import type { ApiGetProductItem, ApiGetProduct } from "../../types/product";

export const fetchCatalog = async () => {
    return api.get<ApiGetProductItem[]>('/products');
}

export const getProductById = async (id: number) => {
    return api.get<ApiGetProduct>(`/products/${id}`);
}