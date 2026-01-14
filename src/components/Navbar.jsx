import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { toggleCart, cartCount } = useShop();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['NEW DROPS', 'MEN', 'WOMEN', 'COMMUNITY'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-2' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer group">
                        <h1 className="font-display text-3xl font-bold tracking-tighter text-white group-hover:scale-105 transition-transform">
                            BLU<span className="text-neon-orange group-hover:text-white transition-colors">ORNG</span>
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-12">
                            {navLinks.map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="relative text-sm font-medium tracking-widest text-gray-300 hover:text-white transition-colors group"
                                >
                                    {link}
                                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-neon-orange transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button className="text-white hover:text-neon-orange transition-transform hover:scale-110 duration-300">
                            <Search className="w-6 h-6" />
                        </button>
                        <button
                            onClick={toggleCart}
                            className="relative text-white hover:text-neon-orange transition-transform hover:scale-110 duration-300"
                        >
                            <ShoppingBag className="w-6 h-6" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-neon-orange text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="block px-3 py-4 text-lg font-display tracking-widest text-white hover:text-neon-orange hover:bg-white/5 rounded-lg transition-colors"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
