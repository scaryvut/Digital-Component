import React from 'react';

const Rating = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white">
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    
                    {/* ITEM */}
                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold">
                            50K
                        </h1>
                        <p className="text-sm sm:text-base text-gray-200 mt-2">
                            Active Users
                        </p>
                    </div>

                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold">
                            200+
                        </h1>
                        <p className="text-sm sm:text-base text-gray-200 mt-2">
                            Premium Tools
                        </p>
                    </div>

                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold">
                            4.9
                        </h1>
                        <p className="text-sm sm:text-base text-gray-200 mt-2">
                            Rating
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Rating;