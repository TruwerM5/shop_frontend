import clsx from "clsx";
import { useState, useRef } from "react";
import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa6";
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
    const sliderRef = useRef<HTMLUListElement | null>(null);
    const [isModalOpened, setIsModalOpened] = useState(false);
    const sliderModalClass = clsx("slider-modal fixed inset-0 w-full h-full z-10 bg-white px-3", {
        "opened": isModalOpened,
        "hidden": !isModalOpened,
    });
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

    return (
        <div className="slider">
            <div className="slider__inner">
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
                            onClick={() => {
                                setIsModalOpened(true)
                            }}
                        />
                    ))}
                </ul>
            </div>
            <div className="slider__controls">
                {images.map((_, index) => (
                    <button key={index} onClick={() => scrollToSlide(index)}>
                        {index === currentIndex ? (
                            <FaCircle />
                        ) : (
                            <FaRegCircle />
                        )}
                    </button>
                ))}
            </div>
            <div className={sliderModalClass}>
                <button onClick={() => setIsModalOpened(false)} className="absolute top-4 right-4">
                    <VscCloseCompact />
                </button>
                <div className="slider-modal__inner">
                    <ul ref={sliderRef} className="slider-list slider-list_lg snap-x snap-mandatory">
                        {images.map((image, index) => (
                            <SliderItem
                                key={index}
                                name={name}
                                imagePath={image.imagePath}
                                isLarge
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

function SliderList({

}) {}


