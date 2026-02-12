import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '2348060451925';
const DEFAULT_MESSAGE = 'Hello Christhelp Studio! I would like to inquire about your photography services.';

const FloatingWhatsApp = () => {
    const handleClick = () => {
        const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <motion.button
            onClick={handleClick}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            aria-label="Contact us on WhatsApp"
        >
            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>

            <MessageCircle className="w-7 h-7 text-white relative z-10" />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-2 rounded-lg bg-surface text-text text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Chat with us
            </span>
        </motion.button>
    );
};

export default FloatingWhatsApp;
