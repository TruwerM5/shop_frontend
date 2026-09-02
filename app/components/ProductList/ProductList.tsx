import type { ApiGetProductItem } from "../../../types/product";
import ProductItem from "~/components/ProductItem/ProductItem";
import "./product-list.css";

interface ProductListProps {
    products: ApiGetProductItem[];
}

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


