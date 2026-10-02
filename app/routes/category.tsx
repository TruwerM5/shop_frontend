import { type ProductCategory } from "@shop/contracts";
import { PRODUCT_CATEGORIES } from "@shop/contracts";
import type { Route } from "./+types/category";
import { getProductsByCategory } from "~/api/products.api";
import BreadCrumbs from "~/components/BreadCrumbs/BreadCrumbs";
import ProductList from "~/components/ProductList/ProductList";

function isProductCategory(value: string): value is ProductCategory {
    return PRODUCT_CATEGORIES.includes(value as ProductCategory);
}

export async function clientLoader({
    params
}: Route.MetaArgs) {
    const { category } = params;
    
    if(!isProductCategory(category)) {
        throw new Response('Category not found.', { status: 404 });
    }
    const { data } = await getProductsByCategory(category);
    return data;
}

export default function CategoryPage ({
    loaderData,
    params
}: Route.ComponentProps) {
    const { category } = params;
    return (
        <div className="page category-page">
            <div className="page__head">
                {/* TODO: MAKE AS SELECT FROM A FEW CATEGORIES */}
                <h4 className="page__header">{category}</h4>
            </div>
            <div className="page__body">
                <ProductList products={loaderData} />
            </div>
        </div>
    )
}