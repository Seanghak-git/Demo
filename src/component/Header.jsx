import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='w-full h-full'>
      <div className='bg-black text-white flex justify-center'>
        <p>Have you tried the Chrono24 app? </p>
        <a href=""> Discover now!</a>
      </div>
    <div className='text-2xl items-center w-full h-full flex justify-between py-5'>
       <div className='px-20'>
        <img src="https://static.chrono24.com/images/default/logos/chrono24-logo.svg" alt="" />
        </div> 
        <div className='flex justify-center relative right-15'>
          <input type="text" className='w-150 border border-2 bg-gray-200'  placeholder=' Search through watches work worldwide........ '/>
          <CiSearch className='absolute right-2' />
        </div> 
        <Link to={'/profile'} className='right-20 px-20 flex hover:text-blue-400 '>
          <IoPersonCircleSharp className='text-3xl' />
          <a href="" className='px-2'>Login or register </a>
        </Link>
    </div>
       
    </div>
  )
}

export default Header
