
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Home() {
 const navigate = useNavigate();

  const handleChange = (e) => {
    navigate(e.target.value);
  };
  
  return (
    <div>
      <div className='flex '>
      <div className='px-20 flex-col'>
        <p>Buy a watch</p>
        <select onChange={handleChange}>
          {/* <option value="">
          </option>  */}
          <option value="rolex">        
           Rolex
            </option>
          <option value="patek">Patek Philippe</option>
          <option value="">Breitling</option>
          <option value="">Cartier</option>
          <option value="">IWC</option>
          <option value="">Hublot</option>
          <option value="">Breguet</option>
        </select>
      </div>
      <a href="" className='px-10 hover:text-blue-500'>Sell a watch </a>
      <a href="" className='px-10  hover:text-blue-500' >Magazine</a>
      <a href="" className='px-10  hover:text-blue-500' >Watch Collection</a>
      <a href="" className='px-10  hover:text-blue-500' >ChronoPulse</a>
      <a href="" className='px-10  hover:text-blue-500' >FAQ</a>
      <a href="" className='px-10  hover:text-blue-500' >Security </a>
      </div>
     
     <div className='w-full py-5 '>
          <img src="https://media.gq.com/photos/63c8799af8a71f5dff31ab28/1:1/w_828,h_828,c_limit/REDBAR.jpg" alt="" className='w-full h-[450px] absolute '/>
        <div className="relative z-10 px-10 md:px-20 text-white py-20">
    <span className="uppercase tracking-[0.2em] text-2xl font-semibold block mb-4">
      Introducing
    </span>
    
    <p className="text-3xl md:text-5xl font-black leading-none mb-10">
      TIME IS OUR <br /> THING
    </p>

    <button className="bg-white text-black px-12 py-4 text-sm font-bold uppercase hover:bg-gray-200 transition-all">
      Discover now
    </button>
  </div>
  </div>

  <div className='py-15 px-40'>
    <div>
         <p className='text-4xl '>Popular brands</p>
      </div>
      <div className=' flex gap-5 py-5'>
        <a href="" className='w-72 p-5 bg-gray-300 rounded-xl text-center text-lg  hover:text-blue-600 '>Rolex</a>
        <a href=""  className='w-72 p-5 bg-gray-300 rounded-xl text-center text-lg  hover:text-blue-600 '>Patek Philippe</a>
        <a href=""  className='w-72 p-5 bg-gray-300 rounded-xl text-center text-lg  hover:text-blue-600 '>Breitling</a>
        <a href="" className='w-72 p-5 bg-gray-300 rounded-xl text-center text-lg  hover:text-blue-600 '>Cartier</a>
        <a href="" className='w-72 p-5 bg-gray-300 rounded-xl text-center text-lg  hover:text-blue-600 '>IWC</a>
      </div>
      <div className=' flex gap-5 py-3'>
        <a href="" className='w-72 p-5 bg-gray-300 rounded-xl text-center text-lg  hover:text-blue-600 '>Omega</a>
        <a href="" className='w-72 p-5 bg-gray-300 rounded-xl text-center text-lg  hover:text-blue-600 '>Audemars Paduet</a>
        <a href="" className='w-72 p-5 bg-gray-300 rounded-xl text-center text-lg  hover:text-blue-600 '>Tudor</a>
        <a href="" className='w-72 p-5 bg-gray-300 rounded-xl text-center text-lg  hover:text-blue-600 '>Panerai</a>
        <a href="" className='w-72 p-5 bg-gray-300 rounded-xl text-center text-lg hover:text-blue-600 '>Seiko</a>
        </div>
  <div className='px-30 py-10 '>
    <div className='text-4xl'>The Leading Marketplace for Luxury Watches Since 2003</div>
    <div className='flex py-5 gap-5'>
    <div className='w-70 h-60 py-5 mx-auto border rounded-xl'>
      <div className='flex justify-center'>
      <img src="https://static.chrono24.com/images/default/illustrations/buyer-rating.svg" alt="" />
      </div>
      <div className=' px-4'>
        <p className='text-2xl py-5 font-bold'>4.7 out of 5 stars</p>
        <p className='text-center'>from 193,000 reviews worldwide</p>
      </div>
    </div>
     <div className='w-70 h-60 py-5 mx-auto border rounded-xl'>
      <div className='flex justify-center'>
      <img src="https://static.chrono24.com/images/default/illustrations/love-my-watch.svg" alt="" />
      </div>
      <div className='px-4 '>
        <p  className='text-2xl px-10 py-5 font-bold'>9 million</p>
        <p>watch enthusiasts use Chrono24 each month</p>
      </div>
    </div>
     <div className='w-70 h-60 py-5 mx-auto border rounded-xl'>
      <div className='flex justify-center'>
      <img src="https://static.chrono24.com/images/default/illustrations/handshake.svg" alt="" />
      </div>
      <div className='px-4 '>
        <p  className='text-2xl py-5 font-bold'>Over 200,000</p>
        <p>customers choose Buyer Protection annually</p>
      </div>
    </div>
     <div className='w-70 h-60 py-5 mx-auto border rounded-xl'>
      <div className='flex justify-center'>
      <img src="https://static.chrono24.com/images/default/illustrations/dealer.svg" alt="" />
      </div>
      <div className='px-2'>
        <p  className='text-2xl py-5 font-bold'>More than 25,000</p>
        <p className='text-center'>trustworthy sellers</p>
      </div>
    </div>
    </div>
  </div>
  </div>
  

    </div>
  )
}

export default Home
