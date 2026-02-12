import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { portfolioImages } from '../../lib/image-loader';

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 bg-surface relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >

                    <h2 className="section-title">
                        Gallery <span className="text-gradient">Shot Collection</span>
                    </h2>
                    <p className="section-subtitle">
                        Browse through our curated collection of stunning photography.
                        Each image captures a unique, timeless moment.
                    </p>
                </motion.div>

                {/* Masonry Grid */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [column-fill:_balance]">
                    {portfolioImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.07,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            className="relative mb-3 md:mb-4 break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />

                            {/* Subtle border */}
                            <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-primary/30 transition-colors duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom hint text */}

            </div>
        </section>
    );
};

export default Portfolio;
