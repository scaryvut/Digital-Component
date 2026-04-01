import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts, handleCheckout }) => {

    const handleDelete = (id) => {
        const updated = carts.filter(item => item.id !== id);
        setCarts(updated);
        toast.error("Item Removed!!");
    };

    const total = carts.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className='max-w-4xl mx-auto mt-10'>
                
                <h1 className='text-2xl sm:text-3xl font-bold mb-5 text-center sm:text-left'>
                    Your Cart
                </h1>

                {carts.length === 0 ? (
                    <p className="text-center">No items added.</p>
                ) : (
                    carts.map(item => (
                        <div 
                            key={item.id}
                            className='flex flex-col sm:flex-row sm:items-center justify-between border p-4 mb-3 rounded gap-3'
                        >
                            <div>
                                <h2 className='text-lg sm:text-xl font-semibold'>
                                    {item.name}
                                </h2>
                                <p className='text-gray-600'>${item.price}</p>
                            </div>

                            <button 
                                onClick={() => handleDelete(item.id)} 
                                className='text-red-500 border border-red-500 px-3 py-1 rounded hover:bg-red-500 hover:text-white transition'
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}

                <div className='mt-6 space-y-4'>
                    
                    <div className="border-t pt-4 flex justify-between items-center">
                        <h2 className="text-lg sm:text-xl font-bold">Total:</h2>
                        <h2 className="text-xl sm:text-2xl font-bold">
                            ${total}
                        </h2>
                    </div>

                    <button 
                        onClick={handleCheckout} 
                        className='w-full h-[50px] bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-full hover:opacity-90 transition'
                    >
                        Proceed to Checkout
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Cart;