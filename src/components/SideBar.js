import React from 'react'

export default function () {
  return (
    <div>
        <div className=' min-h-screen bg-black '>
          <div className='font-bold text-2xl text-white flex flex-col items-center justify-center pt-10'>
              <h1>
                WELCOME TO NUB
              </h1>
              <h1>
                ADMIN PANEL
              </h1>
          </div>
          <button className='w-full  font-bold text-2xl bg-white mt-5'>LogOut</button>
          <button className='w-full  font-bold text-2xl text-white mt-5'>Dashbord</button>
          <button className='w-full  font-bold text-2xl text-white mt-5'>Teachers</button>
          <button className='w-full  font-bold text-2xl text-white mt-5'>Students</button>
          
        </div>
    </div>
  )
}
