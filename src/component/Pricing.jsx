import React from 'react';

const Pricing = () => {
    return (
<div>
    <section className="py-16 px-4 bg-white">
     <div className="max-w-6xl mx-auto ">

      <div className='text-center'>
        <h1 className="text-3xl font-bold text-gray-800">Simple, Transparent Pricing</h1>
        <p className="text-gray-500 mt-2">Choose the plan that fits your needs.</p>
     </div>

    <div className="grid md:grid-cols-3 gap-6 mt-12">
      <div className="bg-white rounded-xl p-6 shadow">
        <h3 className="text-lg font-semibold">Starter</h3>
        <p className="text-gray-500 text-sm mt-1">Best for getting started</p>
        <h2 className="text-3xl font-bold mt-4">$0<span className="text-sm text-gray-500">/Month</span></h2>

        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li>✔ Access to 10 free tools</li>
          <li>✔ Basic templates</li>
          <li>✔ Community support</li>
        </ul>

        <button className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-2 rounded-lg">
          Get Started
        </button>
    </div>

    
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-xl p-6 shadow-lg scale-105">
        <span className="absolute -top-3 right-4 bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-full text-black shadow-md">Most Popular</span>
        <h3 className="text-lg font-semibold">Pro</h3>
        <p className="text-white/80 text-sm mt-1">Best for professionals</p>
        <h2 className="text-3xl font-bold mt-4">$29<span className="text-sm text-white/70">/Month</span></h2>
        <ul className="mt-4 space-y-2 text-sm text-white/90">
          <li>✔ All premium tools</li>
          <li>✔ Unlimited templates</li>
          <li>✔ Priority support</li>
        </ul>
        <button className="mt-6 w-full bg-white text-indigo-700 py-2 rounded-lg font-semibold">
          Get Started
        </button>
    </div>

      
      <div className="bg-white rounded-xl p-6 shadow">
        <h3 className="text-lg font-semibold">Enterprise</h3>
        <p className="text-gray-500 text-sm mt-1">For teams</p>

        <h2 className="text-3xl font-bold mt-4">$99<span className="text-sm text-gray-500">/Month</span></h2>

        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li>✔ Everything in Pro</li>
          <li>✔ Team features</li>
          <li>✔ Dedicated support</li>
        </ul>

        <button className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-2 rounded-lg">
          Contact Sales
        </button>
      </div>

    </div>
  </div>
</section>
            
        </div>
    );
};

export default Pricing;