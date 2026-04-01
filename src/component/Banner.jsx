import React from 'react';
import bannerImg from '../assets/banner.png'
import imgOne from '../assets/Group 5.png'
import imgTwo from '../assets/play.png'

const Banner = () => {
    return (
        <div className='flex justify-between pr-[200px] pl-[200px] m-auto justify-center items-center space-y-4'>
            <div className='w-[640px] h-[322px]'>
                <div className='w-[294px] h-[38px]'>
                    <p className='flex items-center gap-1 bg-[#E1E7FF] text-indigo-600 rounded-full p-2 mb-6'><img className='w-5 h-5' src={imgOne} alt="" />New: AI-Powered Tools Available </p>
                </div>
                <h1 className='text-6xl font-bold mb-6'>Supercharge Your Digital Workflow</h1>
                <p>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products</p>

                <div className='space-x-3 mt-6'>
                    <button className='btn bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-full'>Explore Product</button>
                    <button className='btn bg-white text-black rounded-full'><img src={imgTwo} alt="" />Watch Demo</button>
                </div>
                
            </div>

            <div className='mt-[60px] mb-[60px]'>
                <img src={bannerImg} alt="" />

            </div>
            
        </div>
    );
};

export default Banner;