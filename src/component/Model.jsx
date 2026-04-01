import React, { use } from 'react';
import { toast } from 'react-toastify';

const Model = ({ modelPromise, carts, setCarts }) => {
    const models = use(modelPromise);

    const handleBuy = (model) => {
        const alreadyAdded = carts.find(item => item.id === model.id);

        if (!alreadyAdded) {
            setCarts([...carts, model]);
            toast.success("Added to Cart");
        } else {
            toast.info("Already in Cart");
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
            
            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {models.map(model => (
                    
                    <div
                        key={model.id}
                        className="border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
                    >

                        
                        <div>

                            
                            <div className="flex justify-end">
                                <p className="text-xs px-3 py-1 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white rounded-full">
                                    {model.tag}
                                </p>
                            </div>

                            
                            <img className="w-12 h-12 my-4" src={model.icon} alt="" />

                            
                            <h3 className="text-xl sm:text-2xl font-bold">
                                {model.name}
                            </h3>

                            
                            <p className="text-sm text-gray-600 mt-2">
                                {model.description}
                            </p>

                            
                            <h2 className="text-2xl sm:text-3xl font-bold mt-4">
                                ${model.price}
                                <span className="text-sm font-normal text-gray-500">
                                    /{model.period}
                                </span>
                            </h2>

                            
                            <ul className="mt-4 space-y-2 text-sm text-gray-600">
                                {model.features.map((feature, i) => (
                                    <li key={i}>✔ {feature}</li>
                                ))}
                            </ul>
                        </div>

                        
                        <button
                            onClick={() => handleBuy(model)}
                            className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-2 rounded-lg"
                        >
                            {carts.some(item => item.id === model.id)
                                ? "Purchased"
                                : "Buy Now"}
                        </button>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Model;