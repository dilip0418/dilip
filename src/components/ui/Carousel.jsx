/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Carousel = ({
    items,
    renderItem,
    interval = 5000,
    cardHeading,
    className,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [direction, setDirection] = useState("next");
    const containerRef = useRef(null);

    // Intersection Observer to detect visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 } // At least 50% visible
        );

        const currentRef = containerRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    // Auto-scroll logic
    useEffect(() => {
        if (!isVisible || isPaused) return;

        const autoScroll = setInterval(() => {
            setDirection("next"); // Auto-scroll is considered "next"
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, interval);

        return () => clearInterval(autoScroll);
    }, [isVisible, isPaused, items.length, interval]);

    // Handle manual navigation (Next)
    const handleNext = () => {
        setDirection("next"); // Set direction to "next" for forward animation
        setActiveIndex((prev) => (prev + 1) % items.length); // Move to next item
    };

    // Handle manual navigation (Previous)
    const handlePrev = () => {
        setDirection("prev"); // Set direction to "prev" for backward animation
        setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1)); // Move to previous item
    };

    return (
        <div
            ref={containerRef}
            className={`relative ${className}`}
            onMouseEnter={() => setIsPaused(true)} // Pause auto-scroll on hover
            onMouseLeave={() => setIsPaused(false)} // Resume auto-scroll on leave
        >
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    {cardHeading}
                </h3>
                <div className="flex space-x-2">
                    <button
                        onClick={handlePrev}
                        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full 
                        shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-white"
                        aria-label="Previous"
                    >
                        <FaArrowCircleLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full 
                        shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-white"
                        aria-label="Next"
                    >
                        <FaArrowCircleRight />
                    </button>
                </div>
            </div>

            {/* Carousel Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    initial={{
                        opacity: 0,
                        x: direction === "next" ? 100 : -100, // Enter from right for "next", left for "prev"
                        scale: 0.95,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                    }}
                    exit={{
                        opacity: 0,
                        x: direction === "next" ? -100 : 100, // Exit to left for "next", right for "prev"
                        scale: 0.95,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.25, 0.8, 0.25, 1],
                    }}
                >
                    {renderItem(items[activeIndex], activeIndex)}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Carousel;
