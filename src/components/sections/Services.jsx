import { motion } from 'framer-motion';
import {
    Camera,
    Users,
    Baby,
    GraduationCap,
    Heart,
    IdCard,
    Sparkles
} from 'lucide-react';

const services = [
    {
        icon: Camera,
        title: 'Studio Portraits',
        description: 'Professional studio portraits with expert lighting and premium backdrops for that perfect shot.',

    },
    {
        icon: IdCard,
        title: 'Passport Photos',
        description: 'Quick, professional passport and visa photos that meet all international standards.',

    },
    {
        icon: Baby,
        title: 'Baby Photography',
        description: 'Capture those precious first moments with gentle, adorable baby photo sessions.',

    },
    {
        icon: GraduationCap,
        title: 'Graduation Shoots',
        description: 'Celebrate your academic achievement with stunning graduation portraits and group photos.',

    },
    {
        icon: Users,
        title: 'Family Photos',
        description: 'Beautiful family portraits that capture the love and connection between your loved ones.',

    },
    {
        icon: Heart,
        title: 'Wedding Coverage',
        description: 'Full wedding day coverage capturing every special moment of your big day.',

    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

const Services = () => {
    return (
        <section id="services" className="py-24 bg-background relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent" />

            <div className="section">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >

                    <h2 className="section-title">
                        Our <span className="text-gradient">Services</span>
                    </h2>
                    <p className="section-subtitle">
                        From intimate portraits to grand celebrations, we offer a comprehensive
                        range of photography services tailored to your needs.
                    </p>
                </motion.div>

                {/* Services grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="card p-8 group cursor-pointer"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-gradient-premium flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <service.icon className="w-7 h-7 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-text-muted mb-4 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Price */}
                            <div className="flex items-center justify-between pt-4 border-t border-white/5">

                                <span className="text-text-muted text-sm group-hover:text-primary transition-colors">
                                    Learn more →
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
