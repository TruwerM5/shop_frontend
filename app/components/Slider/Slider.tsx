import { useState, useRef } from "react";
import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa6";

interface SliderProps {
    name: string;
    images: {
        productId: number;
        imagePath: string;
    }[]
}

export default function Slider({
    name,
    images
}: SliderProps) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLUListElement | null>(null);
    function handleControlClick(index: number) {
        const scrollTo = 300 * index;
        sliderRef.current?.scrollTo({
            left: scrollTo
        });
        setCurrentIndex(index);
    }

    return (
        <div className="slider">
            <div className="slider__inner relative overflow-hidden">
                <ul ref={sliderRef} className="slider__list flex  overflow-scroll snap-x snap-mandatory scrollbar-none">
                    {images.map((image, index) => (
                        <li key={index} className="slider__item min-w-full snap-center">
                            <img
                                src={image.imagePath}
                                alt={name}
                                className="slider__image w-full min-w-full max-h-[300px] object-cover"
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="slider__controls flex gap-2 justify-center my-2">
                {images.map((_, index) => (
                    <button key={index} onClick={() => handleControlClick(index)}>
                        {index === currentIndex ? (
                            <FaCircle />
                        ) : (
                            <FaRegCircle />
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}