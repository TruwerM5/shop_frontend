import "@styles/page.css";
import { getProductById } from "~/api/products.api";
import type { Route } from "./+types/product";
import emptyImage from "@assets/images/empty-image.png";
import "~/styles/product-page.css";
import Button from "~/components/Button/Button";
import Desciption from "~/components/Description/Description";
import BreadCrumbs from "~/components/BreadCrumbs/BreadCrumbs";
import { IoBagAdd } from "react-icons/io5";

export async function clientLoader({
    params
}: Route.ClientLoaderArgs) {
    const { data } = await getProductById(Number(params.id));
    return data;
}

export default function ProductPage({
    loaderData
}: Route.ComponentProps) {
    const { productId, name, price, productDetails, productImages } = loaderData;
    const { description, size, category, color } = productDetails;
    const breadCrumbsPaths = [{
        id: 1,
        title: 'Catalog',
        href: '/',
    },{
        id: 2,
        title: category,
        href: `/catalog/${category}`,
    },{
        id: 3,
        title: name,
        href: `/product/${productId}`,
        isActive: true,
    }];
    
    async function handleAddtToCart() {

    }

    return (
        <div className="page product-page">
            <BreadCrumbs paths={breadCrumbsPaths} />
            <div className="product">
                <div className="product__image-wrapper">
                    <img src={emptyImage} alt={name} className="produt__image" />
                </div>
                <div className="product__main-info">
                    <span className="product__name">
                        {name}
                    </span>
                    <span className="product__price">
                        {price}&#36;
                    </span>
                    <Button 
                        text="Add to cart"
                        type="button"
                        onClick={handleAddtToCart}
                        customClass="product__add-to-cart-btn"
                        icon={<IoBagAdd />}
                    />
                    <Desciption description={description} />
                </div>
            </div>
        </div>
    )
}