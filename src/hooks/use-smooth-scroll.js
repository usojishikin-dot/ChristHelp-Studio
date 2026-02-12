import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Custom hook for smooth scrolling using Lenis
 */
export const useSmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Expose lenis for scroll-to functionality
        window.lenis = lenis;

        return () => {
            lenis.destroy();
            delete window.lenis;
        };
    }, []);
};

/**
 * Scroll to a specific section
 * @param {string} targetId - The ID of the target section
 */
export const scrollToSection = (targetId) => {
    const target = document.getElementById(targetId);
    if (target && window.lenis) {
        window.lenis.scrollTo(target, {
            offset: -80, // Account for fixed navbar
            duration: 1.5,
        });
    }
};

export default useSmoothScroll;
