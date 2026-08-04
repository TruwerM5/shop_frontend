import api from ".";
import type { ApiGetProductItem } from "../../types/product";

export const fetchCatalog = async () => {
    return api.get<ApiGetProductItem[]>('/products');
}
