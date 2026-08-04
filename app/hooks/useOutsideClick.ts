import { useEffect, type RefObject } from "react";

export default function useOutsideClick<T extends HTMLElement>(
    elementRef: RefObject<T | null>,
    onOutsideClick: () => void,
) {

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            const element = elementRef.current;
            const target = event.target;

            if(!element || !(target instanceof Node)) {
                return;
            }

            if(!element.contains(target)) {
                onOutsideClick();
            }
        }

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        }
    }, [elementRef, onOutsideClick]);
}