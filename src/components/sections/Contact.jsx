import { motion } from 'framer-motion';
import {
    MapPin,
    Phone,
    MessageCircle,
    Facebook,
    Navigation,
    Clock,
    Sparkles
} from 'lucide-react';

const WHATSAPP_NUMBER = '2348060451925';
const PHONE_NUMBER = '08060451925';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=637712266097835';
const ADDRESS = 'CFXH+H72, Tsaunin Kura 800104, Kaduna, Nigeria';
const MAPS_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.0!2d7.4!3d10.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDMwJzAwLjAiTiA3wrAyNCcwMC4wIkU!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng';
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;

const contactInfo = [
    {
        icon: Phone,
        label: 'Phone',
        value: PHONE_NUMBER,
        href: `tel:${PHONE_NUMBER}`,
        action: 'Call us',
    },
    {
        icon: MessageCircle,
        label: 'WhatsApp',
        value: PHONE_NUMBER,
        href: `https://wa.me/${WHATSAPP_NUMBER}`,
        action: 'Chat now',
    },
    {
        icon: Facebook,
        label: 'Facebook',
        value: 'Christhelp Studio',
        href: FACEBOOK_URL,
        action: 'Follow us',
    },
];

const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: 'By Appointment' },
];

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent" />

            <div className="section relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >

                    <h2 className="section-title">
                        Contact <span className="text-gradient">Us</span>
                    </h2>
                    <p className="section-subtitle">
                        Have questions or ready to book? Reach out through any of these channels
                        and we'll get back to you promptly.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left - Contact Info */}
                    <div className="space-y-8">
                        {/* Contact cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="grid sm:grid-cols-3 gap-4"
                        >
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="card p-6 text-center group"
                                >
                                    <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-premium flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <p className="text-text-muted text-sm mb-1">{item.label}</p>
                                    <p className="text-text font-medium mb-2 text-sm">{item.value}</p>
                                    <span className="text-primary text-sm">{item.action} →</span>
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Address */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="card p-6"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-text font-semibold mb-2">Studio Location</h3>
                                    <p className="text-text-muted mb-4">{ADDRESS}</p>
                                    <a
                                        href={DIRECTIONS_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary hover:underline"
                                    >
                                        <Navigation className="w-4 h-4" />
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Business Hours */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="card p-6"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-text font-semibold mb-4">Business Hours</h3>
                                    <div className="space-y-2">
                                        {businessHours.map((item, index) => (
                                            <div key={index} className="flex justify-between">
                                                <span className="text-text-muted">{item.day}</span>
                                                <span className="text-text">{item.hours}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right - Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/5"
                    >
                        <iframe
                            src={MAPS_EMBED_URL}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Christhelp Studio Location"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
