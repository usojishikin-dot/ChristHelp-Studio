import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Amina Ibrahim',
        role: 'Wedding Client',
        image: null,
        rating: 5,
        text: 'Christhelp Studio captured our wedding day perfectly! Every moment was preserved beautifully. The team was professional and made us feel so comfortable.',
    },
    {
        id: 2,
        name: 'David Okonkwo',
        role: 'Corporate Client',
        image: null,
        rating: 5,
        text: 'Outstanding professional headshots for our entire team. The quality exceeded our expectations. Highly recommended for business photography.',
    },
    {
        id: 3,
        name: 'Fatima Yusuf',
        role: 'Family Session',
        image: null,
        rating: 5,
        text: 'The family portraits came out amazing! They captured the essence of our family beautifully. These photos will be treasured for generations.',
    },
    {
        id: 4,
        name: 'Emmanuel Adebayo',
        role: 'Graduation Photos',
        image: null,
        rating: 5,
        text: 'My graduation photos are stunning. The studio has great lighting and the photographer knew exactly how to bring out the best in every shot.',
    },
    {
        id: 5,
        name: 'Blessing Okoro',
        role: 'Baby Photography',
        image: null,
        rating: 5,
        text: "They were so patient with my baby during the photoshoot. The resulting pictures are absolutely precious. I couldn't be happier!",
    },
    {
        id: 6,
        name: 'Ahmed Hassan',
        role: 'Portrait Session',
        image: null,
        rating: 5,
        text: 'Professional service from start to finish. The studio environment is top-notch and the final photographs speak for themselves.',
    },
];

const TestimonialCard = ({ testimonial, index }) => {
    // Generate initials for avatar
    const initials = testimonial.name
        .split(' ')
        .map(n => n[0])
        .join('');

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="flex-shrink-0 w-[350px] md:w-[400px] p-6 card mx-3"
        >
            {/* Quote icon */}
            <Quote className="w-8 h-8 text-primary/30 mb-4" />

            {/* Rating */}
            <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
            </div>

            {/* Text */}
            <p className="text-text-muted leading-relaxed mb-6">
                "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-premium flex items-center justify-center text-white font-semibold">
                    {initials}
                </div>
                <div>
                    <p className="font-semibold text-text">{testimonial.name}</p>
                    <p className="text-sm text-text-muted">{testimonial.role}</p>
                </div>
            </div>
        </motion.div>
    );
};

const Testimonials = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationId;
        let scrollPos = 0;
        const scrollSpeed = 0.5; // Slow auto-scroll

        const autoScroll = () => {
            scrollPos += scrollSpeed;

            // Reset to start when reaching end
            if (scrollPos >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                scrollPos = 0;
            }

            scrollContainer.scrollLeft = scrollPos;
            animationId = requestAnimationFrame(autoScroll);
        };

        // Start auto-scroll after a delay
        const timeout = setTimeout(() => {
            animationId = requestAnimationFrame(autoScroll);
        }, 2000);

        // Pause on hover
        const handleMouseEnter = () => {
            cancelAnimationFrame(animationId);
        };

        const handleMouseLeave = () => {
            animationId = requestAnimationFrame(autoScroll);
        };

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            clearTimeout(timeout);
            cancelAnimationFrame(animationId);
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >

                    <h2 className="section-title">
                        What Our <span className="text-gradient">Clients Say</span>
                    </h2>
                    <p className="section-subtitle">
                        Don't just take our word for it. Here's what our valued clients
                        have to say about their experience with us.
                    </p>
                </motion.div>
            </div>

            {/* Scrolling testimonials */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto scrollbar-hide pb-8 -mx-4 px-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {/* Double the testimonials for seamless loop effect */}
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <TestimonialCard
                        key={`${testimonial.id}-${index}`}
                        testimonial={testimonial}
                        index={index % testimonials.length}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
