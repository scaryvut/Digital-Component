import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = ({ carts }) => {
    return (
<div className="navbar bg-base-100 shadow-sm p-2 pl-[200px] pr-[200px]">
  <div className="navbar-start">
    <a className="btn btn-ghost text-2xl font-bold text-indigo-600">DigiTools</a>
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

  <div className="navbar-end gap-3">
    <button><AiOutlineShoppingCart />                    {carts.length > 0 && (
                        <span className="absolute top-2 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full">
                            {carts.length}
                        </span>
                    )}</button>
    
    <ul>

        <li>Login</li>
    </ul>
    <a className="btn bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-full">Get Started</a>
  </div>
</div>
    );
};

export default Navbar;