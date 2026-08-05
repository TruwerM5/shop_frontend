import ProductList from "~/components/ProductList/ProductList";
import type { Route } from "./+types/catalog";
import { fetchCatalog } from "~/api/products.api";

export async function clientLoader() {
    const { data } = await fetchCatalog();
    return data;
}


export function HydrateFallback() {
    return <div>Loading...</div>;
}

export default function CatalogPage({
    loaderData
}: Route.ComponentProps) {
    const products = loaderData;

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