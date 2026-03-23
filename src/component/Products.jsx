import React from 'react'

function Products({watch , alarm} ) {
  return (
    <div className='w-full'>
      <div>
        <p className='text-3xl px-20'>Explore Chrono24</p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5' >
        {watch.map((item) =>(
         <div key={item.id} className=' flex flex-col items-center'>
          <img src={item.image} alt="" className='w-6/10 ' />
          <div>
            <p className='text-center'>{item.text}</p>
          </div>
         </div>
        ) 
        )}
      </div>
      <div>
        <p className='text-3xl px-20 py-10'>Our Most Popular Models</p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5'>
        {alarm.map((items) =>(
          <div key={items.id} className='flex flex-col items-center bg-gray-300 rounded-2xl hover:shadow-lg'>
              <img src={items.img} alt="" className='w-6/10' />
              <div>
                <p>{items.text}</p>
                <p className='font-bold'>{items.p}</p>
              </div>         
          </div>
        )
      )}
      </div>
      <div className='grid grid-cols-4 items-center p-10 gap-5 '>
        <div >
          <div className=' hover:text-blue-500'>Omega  <a href="" className='font-bold'>Seamaster</a> </div>
          <div className=' hover:text-blue-500'>Audemars Piguet <a href="" className='font-bold'> Royal Oak Offshore</a> </div>
          <div className=' hover:text-blue-500'>Tudor <a href="" className='font-bold'>Black Bay</a> </div>
          <div className=' hover:text-blue-500'>IWC <a href="" className='font-bold'> Portuguese</a> </div>
          <div className=' hover:text-blue-500'>Omega  <a href="" className='font-bold'>Constellation</a> </div>
          <div className=' hover:text-blue-500'>Rolex  <a href="" className='font-bold'>Pepsi</a> </div>
          <div className=' hover:text-blue-500'>Rolex <a href="" className='font-bold'> Milgauss</a> </div>
        </div>

        <div>
          <div className=' hover:text-blue-500'> Breitling <a href="" className='font-bold'> Navitimer</a> </div>
          <div className=' hover:text-blue-500'> TAG Heuer  <a href="" className='font-bold'>Carrera</a> </div>
          <div className=' hover:text-blue-500'> Rolex  <a href=""className='font-bold'>Yacht-Master</a> </div>
          <div className=' hover:text-blue-500'> Rolex  <a href=""className='font-bold'> Explorer II</a> </div>
          <div className=' hover:text-blue-500'> Cartier <a href="" className='font-bold'>Tank</a> </div>
          <div className=' hover:text-blue-500'> Rolex <a href="" className='font-bold'>Hulk</a> </div>
          <div className=' hover:text-blue-500'>Jacob & Co.  <a href="" className='font-bold'>Bugatti Watch</a> </div>
        </div>

        <div>
           <div className=' hover:text-blue-500'>Rolex<a href="" className='font-bold'> Oyster Perpetual</a> </div>
          <div className=' hover:text-blue-500'>Panerai  <a href="" className='font-bold'>Luminor</a> </div>
          <div className=' hover:text-blue-500'>Patek Philippe  <a href=""className='font-bold'>Calatrava</a> </div>
          <div className=' hover:text-blue-500'>IWC  <a href="" className='font-bold'>Pilot</a> </div>
          <div className=' hover:text-blue-500'> Rolex <a href="" className='font-bold'>Datejust 41</a> </div>
          <div className=' hover:text-blue-500'>Rolex <a href="" className='font-bold'> Batman</a> </div>
          <div className=' hover:text-blue-500'>Seiko  <a href="" className='font-bold'>5</a> </div>
        </div>

        <div>
           <div className=' hover:text-blue-500'>Patek Philippe<a href="" className='font-bold'> Grand Complications </a> </div>
          <div className=' hover:text-blue-500'>Rolex  <a href="" className='font-bold'>GMT-Master</a> </div>
          <div className=' hover:text-blue-500'> Hublot <a href="" className='font-bold'>Big Bang</a> </div>
          <div className=' hover:text-blue-500'> Zenith <a href="" className='font-bold'>El Primero</a> </div>
          <div className=' hover:text-blue-500'>Cartier  <a href="" className='font-bold'>Crash</a> </div>
          <div className=' hover:text-blue-500'>Rolex  <a href="" className='font-bold'>Ice</a> </div>
          <div className=' hover:text-blue-500'>Tissot <a href="" className='font-bold'> PRX Powermatic 80</a> </div>

        </div>
      </div>
    </div>
  )
}

export default Products
