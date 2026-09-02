import { useRef } from "react";
import "./carousel.css";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function Carousel({
    header,
    children
}: {
    header: string;
    children: React.JSX.Element
}) {

    const carouselRef = useRef<HTMLDivElement | null>(null);    
    function scrollCarousel(direction: "right" | "left") {
        const carousel = carouselRef.current;
        if(!carousel) {
            return;
        }

        carousel.scrollBy({
            left: direction === "left"
                ? -carousel.clientWidth
                : carousel.clientWidth,
            behavior: "smooth",
        });
    }

    return (
        <div className="carousel">
            <div className="carousel__head">
                <h5 className="carousel__header title-sm">{header}</h5>
            </div>
            <div className="carousel__inner">
                <div className="carousel__controls">
                    <button onClick={() => scrollCarousel("left")} className="carousel__btn carousel__btn_left">
                        <FaCircleArrowLeft />
                    </button>
                    <button onClick={() => scrollCarousel("right")} className="carousel__btn carousel__btn_right">
                        <FaCircleArrowRight />
                    </button>
                </div>
                <div className="carousel__list" ref={carouselRef}>
                    {children}
                </div>
            </div>
        </div>
    )
}


