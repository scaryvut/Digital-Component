import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-600 to-purple-500 text-white w-auto h-[487px]'>
            <div className='flex justify-between items-center pt-20 mr-[200px] ml-[200px] text-center'>
                <div className='m-auto space-y-4'>
                    <h1 className='text-4xl font-semibold'>Ready to Transform Your Workflow?</h1>
                    <div>
                    <p className='text-gray-300'>Join thousands of professionals who are already using Digitools to work smarter.</p>
                    <p className='text-gray-300'>Start your free trial today.</p>
                    </div>

                      <div className='space-x-3 mt-6'>
                        <button className='btn bg-white text-purple-500 rounded-full'>Explore Product</button>
                        <button className='btn btn-primary text-white rounded-full'>View Pricing</button>
                     </div>
                     <p className='text-gray-300'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>

            </div>

            
        </div>
    );
};

export default Workflow;