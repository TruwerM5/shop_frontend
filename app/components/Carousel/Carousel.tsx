import type { ApiGetProductItem } from "../../../types/product"
import "./carousel.css";

export default function Carousel({
    header,
    children
}: {
    header: string;
    children: React.JSX.Element
}) {
    return (

        <div className="carousel max-w-full overlfow-x-scroll">
            <h5 className="carousel__header title-sm">{header}</h5>
            <div className="carousel__inner">
                {children}
            </div>
        </div>
    )
}


