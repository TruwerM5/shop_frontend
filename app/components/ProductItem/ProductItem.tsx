import emptyImage from "@assets/images/empty-image.png";
import { Link } from "react-router";
import type { ApiGetProductItem } from "../../../types/product";
import "./product-item.css"

interface ProductItemProps {
    product: ApiGetProductItem;
}

export default function ProductItem({
    product
}: ProductItemProps) {

    const priductPageUrl = `/product/${product.productId}`;

    return (
        <div className="product-item">
            <Link to={priductPageUrl} className="product-item__image-wrapper">
                <img src={emptyImage} alt={product.name} className="product-item__image" loading="lazy" />
            </Link>
            <div className="product-item__info">
                <Link to={priductPageUrl} className="product-item__name">
                    {product.name}
                </Link>
                <span className="product-item__price">
                    {product.price}&#36;
                </span>
            </div>
        </div>
    )
}