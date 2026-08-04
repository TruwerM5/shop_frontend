import { useEffect, useState } from "react"
import { useProductsStore } from "~/stores/products.store"
import ProductList from "~/components/ProductList/ProductList";
import type { ApiGetProductItem } from "../../types/product";

export default function CatalogPage() {

    const [products, setProducts] = useState<ApiGetProductItem[]>([]);
    const fetchProducts = useProductsStore((state) => state.fetchCatalog);

    useEffect(() => {
        async function initiailizeCatalog() {
            const data = await fetchProducts();
            setProducts(data);
        };

        initiailizeCatalog();
    }, []);

    return (
        <div className="page catalog-page">
            {products.length > 0 ? (
                <ProductList products={products} />
            ) : (
                <span>Products not found</span>
            )} 
        </div>
        
    )
}