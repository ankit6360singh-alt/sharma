import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const products = [
    {
        id: 1,
        name: "Wildloom Hoodie",
        price: "$89.00",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
        tag: "BESTSELLER"
    },
    {
        id: 2,
        name: "Star Studded Tee",
        price: "$45.00",
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
        tag: "NEW"
    },
    {
        id: 3,
        name: "Neon Cargo Pants",
        price: "$120.00",
        image: "https://images.unsplash.com/photo-1517445312882-5636079c09c9?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 4,
        name: "Oversized Denim",
        price: "$95.00",
        image: "https://images.unsplash.com/photo-1490216719910-c13f64923497?q=80&w=1000&auto=format&fit=crop",
    }
];

const FeaturedSection = () => {
    return (
        <section className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">LATEST <span className="text-neon-orange">DROPS</span></h2>
                        <div className="h-1 w-20 bg-neon-orange"></div>
                    </div>
                    <a href="#" className="hidden md:flex items-center text-gray-400 hover:text-white transition-colors gap-2 text-sm font-medium tracking-widest uppercase group">
                        View All <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative cursor-pointer">
                            <div className="aspect-[3/4] overflow-hidden bg-gray-900 border border-white/10 relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {product.tag && (
                                    <div className="absolute top-4 left-4 bg-neon-orange text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                        {product.tag}
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <button className="bg-white text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-neon-orange hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-between items-start">
                                <div>
                                    <h3 className="text-white font-bold text-lg tracking-wide uppercase">{product.name}</h3>
                                    <p className="text-gray-500 text-sm mt-1">Unisex Streetwear</p>
                                </div>
                                <span className="text-white font-mono font-medium">{product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;
