import React, { use, useState } from 'react';
import { toast } from 'react-toastify';


const Model = ({ modelPromise, carts, setCarts }) => {
    const models = use(modelPromise);

    const handleBuy = (model) => {
        const alreadyAdded = carts.find(item => item.id === model.id);
        toast.success("Added to Cart")

        if (!alreadyAdded) {
            setCarts([...carts, model]);
        }
    };
    return (
        
        <div className='lg:grid grid-cols-3 gap-5 md:grid grid-cols-2 sm:grid grid-cols-1 m-auto gap-5 gap-5 space-y-5 space-x-6 mr-[200px] ml-[200px]'>
            {
                models.map(model=> <div className='w-[360px] h-[422px] border-2 rounded-xl p-6 shadow space-y-4'>
                    

                    <div>
                      <div>
                        
                          <div className='flex justify-end text-center'>
                            <p className='w-[95px] h-[31px] bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-xl text-white p-0.5'>{model.tag}</p>
                        </div>
                            <img src={model.icon} alt="" />
                            <h3 className='text-2xl font-bold'>{model.name}</h3>
                     </div>
                                         <p>{model.description}</p>
                    <h2 className="text-3xl font-bold mt-4"><span>$</span>{model.price}<span className='font-normal'>/{model.period}</span></h2>
                            <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            <li>✔ {model.features[0]}</li>
                             <li>✔ {model.features[1]}</li>
                              <li>✔ {model.features[2]}</li>
                               <li>✔ {model.features[3]}</li>
                              
                              
                            </ul>
                          <button onClick={()=>handleBuy(model)} className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-2 rounded-lg">  {carts.find(item => item.id === model.id)
                                ? "Purchased"
                                : "Buy Now"} </button>

                    </div>
                   


                            

                </div>)
            }
        </div>
    );
};

export default Model;