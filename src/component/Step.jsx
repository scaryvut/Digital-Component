import React from 'react';
import imgThree from '../assets/user.png'
import imgFour from '../assets/package.png'
import imgFive from '../assets/rocket.png'

const Step = () => {
    return (
        <div className='bg-gray-200 mt-20 py-16 px-4 sm:px-8 lg:px-20'>
            
            
            <div className='text-center space-y-4 max-w-2xl mx-auto mb-12'>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
                    Get Started in 3 Steps
                </h1>
                <p className='text-gray-600'>
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>

            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                
                
                <div className='bg-white rounded-2xl text-center space-y-6 p-6 shadow-sm hover:shadow-md transition'>
                    <div className='flex justify-end'>
                        <p className='w-10 h-10 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full text-white'>
                            01
                        </p>
                    </div>

                    <div className='flex justify-center'>
                        <img src={imgThree} alt="Create Account" className='w-16 h-16'/>
                    </div>

                    <h3 className='font-bold text-lg'>Create Account</h3>
                    <p className='text-gray-600 text-sm'>
                        Sign up for free in seconds. No credit card required.
                    </p>
                </div>

                
                <div className='bg-white rounded-2xl text-center space-y-6 p-6 shadow-sm hover:shadow-md transition'>
                    <div className='flex justify-end'>
                        <p className='w-10 h-10 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full text-white'>
                            02
                        </p>
                    </div>

                    <div className='flex justify-center'>
                        <img src={imgFour} alt="Choose Products" className='w-16 h-16'/>
                    </div>

                    <h3 className='font-bold text-lg'>Choose Products</h3>
                    <p className='text-gray-600 text-sm'>
                        Browse our catalog and select tools that fit your needs.
                    </p>
                </div>

                
                <div className='bg-white rounded-2xl text-center space-y-6 p-6 shadow-sm hover:shadow-md transition'>
                    <div className='flex justify-end'>
                        <p className='w-10 h-10 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full text-white'>
                            03
                        </p>
                    </div>

                    <div className='flex justify-center'>
                        <img src={imgFive} alt="Start Creating" className='w-16 h-16'/>
                    </div>

                    <h3 className='font-bold text-lg'>Start Creating</h3>
                    <p className='text-gray-600 text-sm'>
                        Download and start using your tools immediately.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Step;