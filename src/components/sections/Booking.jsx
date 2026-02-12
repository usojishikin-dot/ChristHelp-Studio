import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Camera, MessageSquare, Phone, User, Sparkles, Send } from 'lucide-react';

const shootTypes = [
    'Studio Portrait',
    'Passport Photos',
    'Baby Photography',
    'Graduation Shoot',
    'Family Photos',
    'Wedding Coverage',
    'Corporate / Headshots',
    'Event Coverage',
    'Other',
];

const WHATSAPP_NUMBER = '2348060451925';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        shootType: '',
        date: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Build WhatsApp message
        const whatsappMessage = `Hello Christhelp Studio!

I would like to book a photography session.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service:* ${formData.shootType}
*Preferred Date:* ${formData.date}
*Message:* ${formData.message || 'N/A'}

Looking forward to hearing from you!`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Short delay to show loading state
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setIsSubmitting(false);
        }, 800);
    };

    return (
        <section id="booking" className="py-24 bg-surface relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-radial from-primary/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-radial from-primary/5 to-transparent" />

            <div className="section relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-white/5 mb-6">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm text-text-muted">Book a Session</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            Ready to Capture Your{' '}
                            <span className="text-gradient">Special Moments?</span>
                        </h2>

                        <p className="text-text-muted text-lg mb-8 leading-relaxed">
                            Fill out the form and we'll get back to you via WhatsApp to discuss
                            your photography needs and schedule your session.
                        </p>

                        {/* Features */}
                        <div className="space-y-4">
                            {[
                                { icon: Camera, text: 'Professional studio equipment' },
                                { icon: Calendar, text: 'Flexible scheduling options' },
                                { icon: MessageSquare, text: 'Quick WhatsApp response' },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-text">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-background rounded-2xl p-8 border border-white/5"
                        >
                            <div className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name">Your Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            className="pl-12"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Your phone number"
                                            className="pl-12"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Shoot Type */}
                                <div>
                                    <label htmlFor="shootType">Type of Shoot</label>
                                    <div className="relative">
                                        <Camera className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                                        <select
                                            id="shootType"
                                            name="shootType"
                                            value={formData.shootType}
                                            onChange={handleChange}
                                            className="pl-12 appearance-none cursor-pointer"
                                            required
                                        >
                                            <option value="">Select a service</option>
                                            {shootTypes.map((type) => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Date */}
                                <div>
                                    <label htmlFor="date">Preferred Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="pl-12"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message">Additional Message (Optional)</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us more about your photography needs..."
                                        rows={4}
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Opening WhatsApp...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Book via WhatsApp
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Booking;
