import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-4 sm:px-8 lg:px-20">
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

                
                <div className="space-y-4">
                    <h1 className='text-2xl sm:text-3xl font-bold'>DigiTools</h1>
                    <p className='text-gray-400 text-sm'>
                        ACME Industries Ltd. <br />
                        Providing reliable tech since 1992
                    </p>
                </div>

                
                <div>
                    <h6 className="font-semibold mb-3">Services</h6>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer">Branding</li>
                        <li className="hover:text-white cursor-pointer">Design</li>
                        <li className="hover:text-white cursor-pointer">Marketing</li>
                        <li className="hover:text-white cursor-pointer">Advertisement</li>
                    </ul>
                </div>

                
                <div>
                    <h6 className="font-semibold mb-3">Company</h6>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer">About us</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                        <li className="hover:text-white cursor-pointer">Jobs</li>
                        <li className="hover:text-white cursor-pointer">Press kit</li>
                    </ul>
                </div>

                
                <div>
                    <h6 className="font-semibold mb-3">Legal</h6>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer">Terms of use</li>
                        <li className="hover:text-white cursor-pointer">Privacy policy</li>
                        <li className="hover:text-white cursor-pointer">Cookie policy</li>
                    </ul>
                </div>

                
                <div className="space-y-4">
                    <p className='text-gray-400 font-semibold'>Social Links</p>
                    <div className='flex gap-4 text-xl'>
                        <a href="#" className="hover:text-indigo-400 transition"><FaFacebook /></a>
                        <a href="#" className="hover:text-indigo-400 transition"><FaInstagram /></a>
                        <a href="#" className="hover:text-indigo-400 transition"><FaXTwitter /></a>
                    </div>
                </div>

            </div>

            
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} DigiTools. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;