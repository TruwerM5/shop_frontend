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
    const scrollWidth = carouselRef.current?.scrollWidth
    function handleClickLeft() {
        if(!carouselRef.current) {
            return;
        }
        carouselRef.current.scrollBy({
            left: scrollWidth ? -scrollWidth : 0,
            behavior: 'smooth',
        });
    }

    function handleClickRight() {
        if(!carouselRef.current) {
            return;
        }
        carouselRef.current.scrollBy({
            left: scrollWidth ?? 0,
            behavior: 'smooth',
        });
    }

    return (
        <div className="carousel">
            <div className="carousel__head">
                <h5 className="carousel__header title-sm">{header}</h5>
            </div>
            <div className="carousel__inner">
                <div className="carousel__controls">
                    <button onClick={handleClickLeft} className="carousel__btn carousel__btn_left">
                        <FaCircleArrowLeft />
                    </button>
                    <button onClick={handleClickRight} className="carousel__btn carousel__btn_right">
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


