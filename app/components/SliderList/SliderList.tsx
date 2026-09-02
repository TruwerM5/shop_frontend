import { useRef, useState } from "react";

interface SliderListProps {
    name: string;
    images: {
        productId: number;
        imagePath: string;
    }[];
}

export default function SliderList({
    name,
    images,
}: SliderListProps) {
    const sliderRef = useRef<HTMLUListElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    function scrollToSlide(index: number) {
        const slider = sliderRef.current;
        if(!slider) return;
        slider.children[index]?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    }

    function handleScrollEnd() {
        
    }
}