import { Camera, Facebook, Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { scrollToSection } from '../../hooks/use-smooth-scroll';

const WHATSAPP_NUMBER = '2348060451925';
const PHONE_NUMBER = '08060451925';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=637712266097835';

const footerLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'Portfolio', href: 'portfolio' },
    { name: 'Services', href: 'services' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'Book Now', href: 'booking' },
    { name: 'Contact', href: 'contact' },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleScrollToTop = () => {
        scrollToSection('hero');
    };

    return (
        <footer className="bg-surface border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-premium flex items-center justify-center">
                                <Camera className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <span className="text-2xl font-display font-semibold text-text">
                                    Christhelp
                                </span>
                                <span className="text-2xl font-display font-semibold text-primary ml-1">
                                    Studio
                                </span>
                            </div>
                        </div>
                        <p className="text-text-muted max-w-md mb-6">
                            Capturing moments that last forever. Professional photography services
                            in Kaduna, Nigeria. From portraits to events, we bring your vision to life.
                        </p>

                        {/* Social links */}
                        <div className="flex gap-4">
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className="w-10 h-10 rounded-full bg-background border border-white/5 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors"
                                aria-label="Call us"
                            >
                                <Phone className="w-5 h-5" />
                            </a>
                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-background border border-white/5 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle className="w-5 h-5" />
                            </a>
                            <a
                                href={FACEBOOK_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-background border border-white/5 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-text font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {footerLinks.slice(0, 4).map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-text-muted hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-text font-semibold mb-6">Services</h4>
                        <ul className="space-y-3">
                            {['Studio Portraits', 'Baby Photography', 'Graduation Shoots', 'Wedding Coverage'].map((service) => (
                                <li key={service}>
                                    <button
                                        onClick={() => scrollToSection('services')}
                                        className="text-text-muted hover:text-primary transition-colors"
                                    >
                                        {service}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-text-muted text-sm">
                        © {currentYear} Christhelp Studio. All rights reserved.
                    </p>

                    <button
                        onClick={handleScrollToTop}
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
