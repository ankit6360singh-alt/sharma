import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';

const CartSidebar = () => {
    const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal } = useShop();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-black/95 border-l border-white/10 z-50 shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex items-center justify-between">
                            <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wider">
                                Your Cart <span className="text-neon-orange">({cart.length})</span>
                            </h2>
                            <button onClick={toggleCart} className="text-gray-400 hover:text-white transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                                    <h3 className="text-xl font-bold mb-2">Your cart is empty</h3>
                                    <p className="text-sm">Looks like you haven't added any gear yet.</p>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={`${item.id}-${item.size}`} className="flex gap-4 p-4 glass-panel rounded-lg">
                                        <div className="w-20 h-24 flex-shrink-0 bg-white/5 rounded overflow-hidden">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h3 className="font-bold text-white uppercase text-sm tracking-wide">{item.name}</h3>
                                                    <p className="text-xs text-gray-400">Size: {item.size}</p>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id, item.size)}
                                                    className="text-gray-500 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <div className="flex items-center gap-3 bg-white/5 rounded px-2 py-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.size, -1)}
                                                        className="text-gray-400 hover:text-white"
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="text-sm font-mono w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.size, 1)}
                                                        className="text-gray-400 hover:text-white"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                                <p className="font-mono text-neon-orange">${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cart.length > 0 && (
                            <div className="p-6 border-t border-white/10 bg-black/50">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-gray-400 uppercase tracking-widest text-sm">Subtotal</span>
                                    <span className="text-2xl font-mono font-bold text-white">${cartTotal.toFixed(2)}</span>
                                </div>
                                <button className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-neon-orange hover:text-white transition-all duration-300">
                                    Checkout Now
                                </button>
                                <p className="text-center text-xs text-gray-500 mt-4 uppercase tracking-wider">
                                    Free Shipping Worldwide
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartSidebar;
