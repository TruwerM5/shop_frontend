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

    const { productId, name, price, productImages } = product;

    const priductPageUrl = `/product/${productId}`;

    return (
        <div className="product-item">
            <Link to={priductPageUrl} className="product-item__image-wrapper">
                {productImages.length > 0 ? (
                    <img src={productImages[0].imagePath} alt={name} className="product-item__image" loading="lazy" />
                ) : (
                    <img src={emptyImage} alt={name} className="product-item__image" loading="lazy" />
                )}
            </Link>
            <div className="product-item__info">
                <Link to={priductPageUrl} className="product-item__name">
                    {name}
                </Link>
                <span className="product-item__price">
                    {price}&#36;
                </span>
            </div>
        </div>
    )
}