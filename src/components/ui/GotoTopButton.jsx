import spider from '../../assets/spider.png';
import { useState, useEffect } from 'react';

const GoToTopSpiderButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isThrowing, setIsThrowing] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 200); // Show button after 200px scroll
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        setIsThrowing(true); // Start animation
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
            setTimeout(() => setIsThrowing(false), 1000); // Reset after animation
        }, 1000); // Wait for animation to finish
    };

    return (
        isVisible && (
            <div className="fixed bottom-4 right-4 z-50">
                <button
                    onClick={scrollToTop}
                    className={`relative w-16 h-16 rounded-full text-white
                    flex items-center justify-center transition-transform transform hover:scale-110`}
                    aria-label="Go to top"
                >
                    {/* Rope Animation */}
                    {isThrowing && (
                        <div className="absolute w-1 bg-black  dark:bg-white bottom-3 animate-web-extend-dynamic"></div>
                    )}

                    {/* Spider Image */}
                    <img
                        src={spider}
                        alt="Spider"
                        className={`w-14 h-14 absolute bottom-3 dark:invert ${isThrowing ? 'animate-spider-climb' : ''
                            }`}
                    />
                </button>
            </div>
        )
    );
};

export default GoToTopSpiderButton;
