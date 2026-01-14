import React from 'react';
import { ArrowUpRight, ShoppingCart } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { motion } from 'framer-motion';

const FeaturedSection = () => {
    const { products, addToCart } = useShop();

    return (
        <section className="py-24 bg-black relative">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-blue/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-neon-orange/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-display font-bold text-white mb-2"
                        >
                            LATEST <span className="text-neon-orange">DROPS</span>
                        </motion.h2>
                        <div className="h-1 w-24 bg-neon-orange"></div>
                    </div>
                    <a href="#" className="hidden md:flex items-center text-gray-400 hover:text-white transition-colors gap-2 text-sm font-medium tracking-widest uppercase group">
                        View All <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-900 border border-white/10 group-hover:border-neon-orange/50 transition-colors duration-500">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter saturate-0 group-hover:saturate-100"
                                />

                                {product.tag && (
                                    <div className="absolute top-4 left-4 bg-neon-orange text-white text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-lg">
                                        {product.tag}
                                    </div>
                                )}

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white font-display font-bold text-2xl tracking-wide uppercase mb-1 drop-shadow-lg">{product.name}</h3>
                                    <p className="text-gray-300 text-sm mb-4 font-light tracking-wider drop-shadow-md">{product.category}</p>

                                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        <span className="text-xl font-mono text-neon-orange font-bold">{product.currency}{product.price.toFixed(2)}</span>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                addToCart(product);
                                            }}
                                            className="bg-white text-black p-3 rounded-full hover:bg-neon-orange hover:text-white transition-colors"
                                        >
                                            <ShoppingCart className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="border border-white/30 text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors">
                        View All Drops
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;
