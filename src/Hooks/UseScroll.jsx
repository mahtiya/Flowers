import { useRef, useEffect } from 'react';

export default function UseScroll(scrollStep = 3, speed = 10 ) {
    const scrollRef = useRef(null);

    // стартуем с середины
    useEffect(() => {
        if (scrollRef.current) {
            const scrollWidth = scrollRef.current.scrollWidth / 3;
            scrollRef.current.scrollLeft = scrollWidth;

            const interval = setInterval(() => {
                scrollRef.current.scrollLeft += scrollStep;
                // телепорт в середину
                if (scrollRef.current.scrollLeft >= scrollWidth * 2) {
                    scrollRef.current.scrollLeft -= scrollWidth;
                }
            }, speed);

            return () => clearInterval(interval);
        }
    }, [scrollStep, speed]);

    const scroll = (direction, amount = 300) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -amount : amount,
                behavior: 'smooth',
            });
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollWidth = scrollRef.current.scrollWidth / 3;
            if (scrollRef.current.scrollLeft <= 0) {
                scrollRef.current.scrollLeft += scrollWidth;
            } else if (scrollRef.current.scrollLeft >= scrollWidth * 2) {
                scrollRef.current.scrollLeft -= scrollWidth;
            }
        }
    };

    return { scrollRef, scroll, handleScroll };
}
