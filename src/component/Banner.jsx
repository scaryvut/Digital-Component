import React from 'react';
import bannerImg from '../assets/banner.png'
import imgOne from '../assets/Group 5.png'
import imgTwo from '../assets/play.png'

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
            
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
                
                
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    
                    
                    <p className="inline-flex items-center gap-2 bg-[#E1E7FF] text-indigo-600 rounded-full px-4 py-2 mb-6 text-sm sm:text-base">
                        <img className='w-4 h-4 sm:w-5 sm:h-5' src={imgOne} alt="" />
                        New: AI-Powered Tools Available
                    </p>

                    
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                        Supercharge Your Digital Workflow
                    </h1>

                    
                    <p className="text-sm sm:text-base text-gray-600 mb-6">
                        Access premium AI tools, design assets, templates, and productivity software—all in one place. 
                        Start creating faster today.
                    </p>

                    
                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                        <button className="btn bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-full px-6">
                            Explore Product
                        </button>

                        <button className="btn bg-white text-black rounded-full flex items-center gap-2 px-6">
                            <img className="w-4 h-4" src={imgTwo} alt="" />
                            Watch Demo
                        </button>
                    </div>
                </div>

                
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img className="w-full max-w-md lg:max-w-lg" src={bannerImg} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;