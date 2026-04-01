import React from 'react';
import { FaFacebook,  FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
<footer className="footer sm:footer-horizontal bg-black text-white pl-[200px] pr-[200px] h-[472px] m-auto items-center">
  <aside>
        <h1 className='text-4xl font-bold'>DigiTools</h1>
    <p>
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>

  <div>
    <p className='text-gray-400 font-semibold'>Social Links</p>
    <div className='flex gap-2 justify-center items-center'>
        <a href=""><FaFacebook /></a>
        <a href=""><FaInstagram /></a>
        <a href=""><FaXTwitter /></a>

    </div>
  </div>
</footer>
    );
};

export default Footer;