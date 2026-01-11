import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="font-display text-3xl font-bold tracking-tighter text-white">
                                BLU<span className="text-neon-orange">ORNG</span>
                            </h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <a href="#" className="hover:text-neon-orange transition-colors duration-300 text-sm font-medium tracking-widest">NEW DROPS</a>
                                <a href="#" className="hover:text-neon-orange transition-colors duration-300 text-sm font-medium tracking-widest">MEN</a>
                                <a href="#" className="hover:text-neon-orange transition-colors duration-300 text-sm font-medium tracking-widest">WOMEN</a>
                                <a href="#" className="hover:text-neon-orange transition-colors duration-300 text-sm font-medium tracking-widest">COMMUNITY</a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6 space-x-6">
                            <button className="text-gray-300 hover:text-white transition-colors">
                                <Search className="w-5 h-5" />
                            </button>
                            <button className="text-gray-300 hover:text-white transition-colors relative">
                                <ShoppingBag className="w-5 h-5" />
                                <span className="absolute -top-1 -right-1 bg-neon-orange text-xs text-white rounded-full w-4 h-4 flex items-center justify-center">0</span>
                            </button>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-black border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 text-base font-medium hover:text-neon-orange">NEW DROPS</a>
                        <a href="#" className="block px-3 py-2 text-base font-medium hover:text-neon-orange">MEN</a>
                        <a href="#" className="block px-3 py-2 text-base font-medium hover:text-neon-orange">WOMEN</a>
                        <a href="#" className="block px-3 py-2 text-base font-medium hover:text-neon-orange">COMMUNITY</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
