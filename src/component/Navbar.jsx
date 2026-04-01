import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = ({ carts }) => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-4 sm:px-6 lg:px-12">
            
            
            <div className="navbar-start">
                
        
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        ☰
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>

                
                <a className="btn btn-ghost text-xl sm:text-2xl font-bold text-indigo-600">
                    DigiTools
                </a>
            </div>

            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>

          
            <div className="navbar-end gap-2 sm:gap-3">

                
                <div className="relative">
                    <button className="text-xl">
                        <AiOutlineShoppingCart />
                    </button>

                    {carts.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full">
                            {carts.length}
                        </span>
                    )}
                </div>

            
                <span className="hidden sm:inline">Login</span>

                
                <a className="btn bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-full text-sm sm:text-base px-4 sm:px-6">
                    Get Started
                </a>
            </div>
        </div>
    );
};

export default Navbar;