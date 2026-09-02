import clsx from "clsx";
import { useState, useRef } from "react";
import { VscCloseCompact } from "react-icons/vsc";
import SliderItem from "~/components/SliderItem/SliderItem";
import "./slider.css";

interface SliderProps {
    name: string;
    images: {
        productId: number;
        imagePath: string;
    }[];
}

export default function Slider({
    name,
    images
}: SliderProps) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLarge, setIsLarge] = useState(false);
    const sliderRef = useRef<HTMLUListElement | null>(null);
    function scrollToSlide(index: number) {
        const slider = sliderRef.current;
        if(!slider) return;
        const slide: Element | undefined = slider.children[index];
        slide?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
        setCurrentIndex(index);
    }

    function handleScrollEnd() {
        const slider = sliderRef.current;
        if(!slider) return;
        const index = Math.round(
            slider.scrollLeft / slider.clientWidth
        );
        setCurrentIndex(index);
    }

    function switchSlider() {
        setIsLarge(!isLarge);
    }

    return (
        <div className="slider">
            <div className={clsx("slider__inner", { "large": isLarge })}>
                {isLarge && 
                    <button onClick={switchSlider} className="slider__close-btn">
                        <VscCloseCompact />
                    </button>
                }
                <div className={clsx("slider__controls", { "active": isLarge })}>
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToSlide(index)}
                            className={clsx("slider__control-btn", {"active": index === currentIndex})}
                        >
                            <img src={image.imagePath} alt={name} className="slider__control-image" />
                        </button>
                    ))}
                </div>
                <ul
                    ref={sliderRef}
                    onScrollEnd={handleScrollEnd}
                    className="slider-list snap-x snap-mandatory"
                >
                    {images.map((image, index) => (
                        <SliderItem
                            key={index}
                            name={name}
                            imagePath={image.imagePath}
                            onClick={switchSlider}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

