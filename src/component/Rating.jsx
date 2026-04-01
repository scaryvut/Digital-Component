import React from 'react';

const Rating = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-600 to-purple-500 text-white w-auto h-[247px]'>
            <div className='flex justify-between items-center pt-20 mr-[200px] ml-[200px] text-center'>
                <div>
                    <h1 className='text-6xl font-semibold'>50K</h1>
                    <p className='text-gray-300'>Active User</p>
                </div>

                <div>
                    <h1 className='text-6xl font-semibold'>200+</h1>
                    <p className='text-gray-300'>Premium Tools</p>
                </div>

                <div>
                    <h1 className='text-6xl font-semibold'>4.9</h1>
                    <p className='text-gray-300'>Rating</p>
                </div>
            </div>

            
        </div>
    );
};

export default Rating;