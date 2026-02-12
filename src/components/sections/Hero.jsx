import { motion } from 'framer-motion';
import { ArrowDown, Camera, Sparkles } from 'lucide-react';
import { scrollToSection } from '../../hooks/use-smooth-scroll';
import { heroImages } from '../../lib/image-loader';

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImages.main})` }}
            />

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background z-10" />

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden z-5">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            {/* Hero content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}

                {/* Main heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                >
                    <span className="text-text">Capturing</span>
                    <br />
                    <span className="text-gradient">Moments</span>
                    <br />
                    <span className="text-text">That Last</span>
                    <br />
                    <span className="text-text">Forever</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10"
                >
                    Professional photography services for your most cherished moments.
                    From portraits to events, we bring your vision to life with
                    stunning, timeless imagery.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={() => scrollToSection('booking')}
                        className="btn-primary text-lg px-8 py-4"
                    >
                        <Camera className="w-5 h-5" />
                        Book a Session
                    </button>
                    <button
                        onClick={() => scrollToSection('portfolio')}
                        className="btn-secondary text-lg px-8 py-4"
                    >
                        View Our Work
                    </button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
                >
                    {[
                        { number: '500+', label: 'Happy Clients' },
                        { number: '8+', label: 'Years Experience' },
                        { number: '1000+', label: 'Photos Shot' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                                {stat.number}
                            </div>
                            <div className="text-xs md:text-sm text-text-muted">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 cursor-pointer"
                    onClick={() => scrollToSection('portfolio')}
                >
                    <span className="text-text-muted text-sm">Scroll to explore</span>
                    <ArrowDown className="w-5 h-5 text-primary" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
