import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";


function Profile() {
  return (
    <div className='flex justify-end  pr-20'>
        <div className='flex-col  bg-gray-100 w-1/3 h-[300px]'>
        <div className='px-50 py-10'>

      <FaRegCircleUser className='text-5xl '/>
        </div>
      <form action="" className='grid grid-cols-1 px-5'>
        <label htmlFor="">Phone Number</label> 
        <input type="text" className='bg-gray-300 border' placeholder='Enter your Phone number....'/>  <br />
        <label htmlFor="">Password</label> 
        <input type="text" className='bg-gray-300 border' placeholder='Enter Password........'/>
      </form>
      <div className='px-15 py-3'>
      <button type='submit' className='items-center bg-blue-400 w-90 h-[30px]'>Login</button>
      </div>

        </div>
    </div>
  )
}

export default Profile
