import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Camera } from 'lucide-react';
import { scrollToSection } from '../../hooks/use-smooth-scroll';

const navLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'Portfolio', href: 'portfolio' },
    { name: 'Services', href: 'services' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'Book Now', href: 'booking' },
    { name: 'Contact', href: 'contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href) => {
        scrollToSection(href);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                        ? 'glass py-4'
                        : 'bg-transparent py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center gap-3 cursor-pointer"
                            onClick={() => handleNavClick('hero')}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="w-10 h-10 rounded-full bg-gradient-premium flex items-center justify-center">
                                <Camera className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <span className="text-xl font-display font-semibold text-text">
                                    Christhelp
                                </span>
                                <span className="text-xl font-display font-semibold text-primary ml-1">
                                    Studio
                                </span>
                            </div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <motion.button
                                    key={link.name}
                                    onClick={() => handleNavClick(link.href)}
                                    className={`text-sm font-medium transition-colors duration-300 ${link.name === 'Book Now'
                                            ? 'btn-primary py-2 px-5'
                                            : 'text-text-muted hover:text-primary'
                                        }`}
                                    whileHover={link.name !== 'Book Now' ? { y: -2 } : {}}
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-text hover:text-primary transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 top-[72px] z-40 glass lg:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
                            {navLinks.map((link, index) => (
                                <motion.button
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => handleNavClick(link.href)}
                                    className={`text-xl font-medium ${link.name === 'Book Now'
                                            ? 'btn-primary'
                                            : 'text-text hover:text-primary transition-colors'
                                        }`}
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
