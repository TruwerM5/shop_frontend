import ProductItem from "~/components/ProductItem/ProductItem";
import "./product-list.css";
import type { ProductResponse } from "@shop/contracts";


interface ProductListProps {
    products: ProductResponse[];
};

export default function ProductList({
    products
}: ProductListProps) {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductItem key={product.productId} product={product} />
            ))}
        </div>
    )
}


