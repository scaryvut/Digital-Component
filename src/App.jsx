import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Banner from './component/Banner'
import Rating from './component/Rating'
import Step from './component/Step'
import Pricing from './component/Pricing'
import Workflow from './component/Workflow';
import Model from './component/Model'
import Cart from './component/Cart'
import { Suspense, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
const getModels = async()=>{
    const res = await fetch("/models.json")
    return res.json()
}

const modelPromise = getModels()

function App() {
  const [activeTab, setActiveTab]=useState("model")
  const [carts, setCarts]=useState([])
  const handleCheckout = () => {
  if (carts.length === 0) {
    toast.error("Cart is empty!");
    return;
  }
  toast.success("Checkout successful!");
  setCarts([]);
};
const isInCart = (id) => {
  return carts.some(item => item.id === id);
};
  return (
    <>
    <Navbar carts={carts}></Navbar>
    <Banner></Banner>
    <Rating></Rating>
    
            <div className='w-[1200px] h-[196px] mt-[120px] text-center m-auto space-y-6'>
            <h1 className='text-4xl font-bold'>Premium Digital Tools</h1>
            <div>
                <p className='text-gray-400'>Choose from our curated collection of premium digital products designed</p>
                <p className='text-gray-500'>to boost your productivity and creativity.</p>
            </div>

              <div className='space-x-3 mt-6'>
                <button
                  onClick={() => setActiveTab("model")}
                  className={`btn rounded-full ${
                    activeTab === "model"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-500 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  Product
                </button>

                <button
                  onClick={() => setActiveTab("cart")}
                  className={`btn rounded-full ${
                    activeTab === "cart"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-500 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  Cart({carts.length})
                </button>
              </div>
                          
        </div>
        <Suspense fallback="Loading">
           {activeTab==="model" &&<Model modelPromise={modelPromise} carts={carts} setCarts={setCarts}isInCart={isInCart}></Model>}
        </Suspense>
   
    {activeTab==="cart" && <Cart carts={carts} setCarts={setCarts} handleCheckout={handleCheckout} />}
    <Step></Step>
    <Pricing></Pricing>
   <Workflow></Workflow>
    <Footer></Footer>
    <ToastContainer></ToastContainer>

    
    </>
  )
}

export default App
