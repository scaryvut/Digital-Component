import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-16 px-4 sm:px-8 lg:px-20'>
            
            <div className='max-w-4xl mx-auto text-center space-y-6'>
                
                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>
                    Ready to Transform Your Workflow?
                </h1>

                <div className='space-y-2'>
                    <p className='text-gray-200'>
                        Join thousands of professionals using Digitools to work smarter.
                    </p>
                    <p className='text-gray-200'>
                        Start your free trial today.
                    </p>
                </div>

                
                <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-6'>
                    <button className='w-full sm:w-auto px-6 py-3 bg-white text-purple-600 rounded-full font-medium hover:opacity-90 transition'>
                        Explore Product
                    </button>

                    <button className='w-full sm:w-auto px-6 py-3 border border-white rounded-full font-medium hover:bg-white hover:text-purple-600 transition'>
                        View Pricing
                    </button>
                </div>

                <p className='text-gray-200 text-sm'>
                    14-day free trial • No credit card required • Cancel anytime
                </p>

            </div>
        </div>
    );
};

export default Workflow;