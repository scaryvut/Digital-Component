import React from 'react';
import imgThree from '../assets/user.png'
import imgFour from '../assets/package.png'
import imgFive from '../assets/rocket.png'

const Step = () => {
    return (
        <div className='bg-gray-200 mt-[120px] w-auto pt-[120px] pb-[120px] pl-[200px] pr-[200px]'>
            <div className=' text-center justify-center items-center space-y-4 p-[40px]'>
                <h1 className='text-4xl font-bold'>Get Started in 3 Steps</h1>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='flex justify-between gap-5'>
                <div className='w-[380px] h-[380px] bg-white rounded-2xl text-center justify-center items-center space-y-6 p-[24px]'>
                     <div className='flex justify-end'>
                     <p className='w-[40px] h-[40px] bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full text-white p-2 justify-end'>01</p>
                     </div>
                     <div className='flex justify-center items-center gap-y-7'>
                        <img src={imgThree} alt="" />
                     </div>
                    
                    <h3 className='font-bold'>Create Account</h3>
                    <p>Sign up for free in seconds. No credit card required to get started.</p>

                </div>

                <div className='w-[380px] h-[380px] bg-white rounded-2xl text-center justify-center items-center space-y-6 p-[24px]'>
                     <div className='flex justify-end'>
                     <p className='w-[40px] h-[40px] bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full text-white p-2 justify-end'>02</p>
                     </div>
                     <div className='flex justify-center items-center gap-y-7'>
                        <img src={imgFour} alt="" />
                     </div>
                    
                    <h3 className='font-bold'>Choose Products</h3>
                    <p>Browse our catalog and select the tools that fit your needs.</p>

                </div>

                <div className='w-[380px] h-[380px] bg-white rounded-2xl text-center justify-center items-center space-y-6 p-[24px]'>
                     <div className='flex justify-end'>
                     <p className='w-[40px] h-[40px] bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full text-white p-2 justify-end'>03</p>
                     </div>
                     <div className='flex justify-center items-center gap-y-7'>
                        <img src={imgFive} alt="" />
                     </div>
                    
                    <h3 className='font-bold'>Start Creating</h3>
                    <p>Download and start using your premium tools immediately.</p>

                </div>
            </div>
            
        </div>
    );
};

export default Step;