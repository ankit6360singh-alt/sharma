import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image - Using a fashion oriented Unsplash Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2000&auto=format&fit=crop"
                    alt="Background"
                    className="w-full h-full object-cover opacity-50 hover:scale-105 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
                <p className="text-neon-orange tracking-[0.5em] text-sm md:text-base mb-4 font-bold uppercase animate-pulse">
                    Premium Streetwear
                </p>
                <h1 className="text-6xl md:text-9xl font-display font-bold text-white mb-6 leading-none tracking-tighter">
                    URBAN <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">LEGENDS</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
                    Redefining street fashion with bold aesthetics and premium quality. The new collection is here.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <button className="group bg-white text-black px-8 py-4 font-bold tracking-wider hover:bg-neon-orange hover:text-white transition-all duration-300 flex items-center gap-2">
                        SHOP COLLECTION <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 border border-white/30 hover:border-white text-white font-bold tracking-wider transition-all duration-300 backdrop-blur-sm">
                        VIEW LOOKBOOK
                    </button>
                </div>
            </div>

            {/* Scrolling Ticker */}
            <div className="absolute bottom-0 w-full overflow-hidden border-t border-white/10 bg-black/80 backdrop-blur-md py-4">
                <div className="flex animate-marquee whitespace-nowrap gap-12">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-white/50 text-sm font-mono tracking-widest uppercase">
                            New Drop Available • Free Shipping Worldwide • Limited Edition
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
