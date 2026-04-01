import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts,handleCheckout }) => {
        const handleDelete = (id) => {
        const updated = carts.filter(item => item.id !== id);
         setCarts(updated);
         toast.error("Item Removed!!")
        
    };
    const total = carts.reduce((sum, item) => sum + item.price, 0);
    return (
        <div>
             <div className='w-[800px] m-auto mt-10'>
            <h1 className='text-3xl font-bold mb-5'>Your Cart</h1>

            {carts.length === 0 ? (
                <p>No items added.</p>
            ) : (
                carts.map(item => (
                    <div className='flex border p-4 mb-3 rounded justify-between'>
                        <div key={item.id} className=''>
                        <h2 className='text-xl font-semibold'>{item.name}</h2>
                        <p>${item.price}</p>
                    </div>
                    <button onClick={() => handleDelete(item.id)} className='text-red-500'>Remove</button>
                    </div>
                    

                ))
            )}
            <div className='space-y-6'>
                     <div className="mt-6 border-t pt-4 flex justify-between items-center">
                        <h2 className="text-xl font-bold">Total:</h2>
                        <h2 className="text-2xl font-bold text-black">
                            ${total}
                        </h2>
                    </div>
                    <button onClick={handleCheckout} className='w-[800px] h-[52px] bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-2 rounded-full'>Proceed to Checkout</button>
            </div>
        </div>
            
        </div>
    );
};

export default Cart;