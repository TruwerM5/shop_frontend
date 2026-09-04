import "@styles/page.css";
import { useState } from "react";
import { getProductById, getProductsByCategory } from "~/api/products.api";
import type { Route } from "./+types/product";
import emptyImage from "@assets/images/empty-image.png";
import "~/styles/product-page.css";
import Button from "~/components/Button/Button";
import Description from "~/components/Description/Description";
import BreadCrumbs from "~/components/BreadCrumbs/BreadCrumbs";
import Rating from "~/components/Rating/Rating";
import { IoBagAdd } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Slider from "~/components/Slider/Slider";
import Carousel from "~/components/Carousel/Carousel";
import ProductItem from "~/components/ProductItem/ProductItem";
import beautifyPrice from "~/helpers/beautify-price";
import { addToCart } from "~/api/cart.api";
import { useCartStore } from "~/stores/cart.store";

export function meta({
    loaderData,
}: Route.MetaArgs) {
  return [
    { title: `${loaderData?.product.name} | NovaMarket` },
  ];
}

export async function clientLoader({
    params
}: Route.ClientLoaderArgs) {
    const { data: product } = await getProductById(Number(params.id));
    const { data: recommended } = await getProductsByCategory(product.category, product.productId);
    return { product, recommended };
}

export default function ProductPage({
    loaderData
}: Route.ComponentProps) {
    const { product, recommended } = loaderData;
    const { productId, name, price, category, productDetails, rating, productImages } = product;
    const { description, size, color, author } = productDetails;
    const cartStore = useCartStore();
    const beautifiedPrice = beautifyPrice(price);

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
    
    const [isInWishlist, setIsInWishlist] = useState(false);

    // TODO
    async function handleAddToCart() {
        try {
            const { data } = await addToCart(productId);
        } catch {

        }
    }

    async function handleAddToWishlist() {
        return new Promise(res => {
            return setTimeout(() => res('done'), 3000)
        })
        .then(() => {
            setIsInWishlist(!isInWishlist);
        });
    }

    const images: typeof productImages = [
        {
            productId: 1,
            imagePath: 'https://i.imgur.com/l7C8GNJ.jpeg',
        },{
            productId: 1,
            imagePath: 'https://i.imgur.com/1K8k707.jpeg',
        },{
            productId: 1,
            imagePath: 'https://i.imgur.com/C3JC3rK.jpeg',
        }
    ];

    return (
        <div className="page product-page">
            <BreadCrumbs paths={breadCrumbsPaths} />
            <div className="product">
                <div className="product__image-wrapper">
                    {images.length > 0 ? (
                        <Slider images={images} name={name} />
                    ) : (
                        <img src={emptyImage} alt={name} className="produt__image" />
                    )}
                </div>
                <div className="product__main-info">
                    <span className="product__name">
                        {name}
                    </span>
                    <span className="product__price">
                        &#36;{beautifiedPrice}
                    </span>
                    {author && 
                    <span className="product__author-name">
                        Author: {author}
                    </span>}
                    <Rating rating={rating} />
                    <div className="product__actions">
                        <Button
                            text="Add to cart"
                            type="button"
                            onClick={handleAddToCart}
                            customClass="product__add-to-cart-btn"
                            icon={<IoBagAdd />}
                        />
                        <Button
                            type="button"
                            onClick={handleAddToWishlist}
                            customClass="product__add-to-wishlist-btn"
                            icon={isInWishlist ? (
                                <FaHeart className="product__wishlist-icon" />
                                ) : (
                                    <FaRegHeart className="product__wishlist-icon" />
                                )}
                        />
                    </div>
                </div>
                <div className="product__bottom">
                    {recommended.length > 0 && 
                    <div className="product__recommended-products">
                        <Carousel header="Recommended">
                            <>
                                {recommended.map((item) => (
                                    <ProductItem key={item.productId} product={item} />
                                ))}
                            </>
                        </Carousel>
                    </div>}
                    <Description description={description} />
                </div>
            </div>
        </div>
    )
}