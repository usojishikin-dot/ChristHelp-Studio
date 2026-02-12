import { useSmoothScroll } from './hooks/use-smooth-scroll';
import Navbar from './components/ui/Navbar';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import Hero from './components/sections/Hero';
import Portfolio from './components/sections/Portfolio';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import Booking from './components/sections/Booking';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
    // Initialize smooth scrolling
    useSmoothScroll();

    return (
        <div className="min-h-screen bg-background text-text">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main>
                <Hero />
                <Portfolio />
                <Services />
                <Testimonials />
                <Booking />
                <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating WhatsApp Button */}
            <FloatingWhatsApp />
        </div>
    );
}

export default App;
