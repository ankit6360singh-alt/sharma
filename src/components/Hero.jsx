import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
    '/assets/hero1.png',
    '/assets/hero2.png',
    '/assets/hero3.png'
];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Background Slideshow */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={heroImages[currentImage]}
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-60"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2000&auto=format&fit=crop";
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30"></div>
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16 mix-blend-screen">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-neon-orange tracking-[0.8em] text-sm md:text-base mb-6 font-bold uppercase"
                >
                    Premium Streetwear
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-7xl md:text-9xl font-display font-bold text-white mb-8 leading-none tracking-tighter neon-text"
                >
                    URBAN <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                        LEGENDS
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide glass-panel p-4 rounded-xl border-none bg-black/30"
                >
                    Redefining street fashion with bold aesthetics and premium quality. The new collection is here.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <button className="group bg-white text-black px-10 py-5 font-bold tracking-widest uppercase hover:bg-neon-orange hover:text-white transition-all duration-300 flex items-center gap-3">
                        Shop Collection <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                    <button className="px-10 py-5 border border-white/30 hover:border-white text-white font-bold tracking-widest uppercase transition-all duration-300 glass-btn hover:scale-105">
                        View Lookbook
                    </button>
                </motion.div>
            </div>

            {/* Scrolling Ticker */}
            <div className="absolute bottom-0 w-full overflow-hidden border-t border-white/5 bg-black/60 backdrop-blur-md py-4 z-20">
                <div className="flex animate-marquee whitespace-nowrap gap-12">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-white/70 text-sm font-mono tracking-widest uppercase flex items-center gap-4">
                            New Drop Available <span className="text-neon-orange">•</span>
                            Free Shipping Worldwide <span className="text-neon-orange">•</span>
                            Limited Edition
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
