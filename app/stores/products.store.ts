import { create } from "zustand";
import { fetchCatalog } from "~/api/products.api";
import type { CatalogStore, ApiGetProductItem } from "../../types/product";

export const useProductsStore = create<CatalogStore>((set, get) => ({
    products: <ApiGetProductItem[]>[],
    fetchCatalog: async () => {
        const { data } = await fetchCatalog();
        set({
            products: data,
        });
        return data;
    },
    getCatalog: (): ApiGetProductItem[] => {
        return get().products;
    }
}))