import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Topbar = ({props}) => {
  const profile = props;


  return (
    <section className='topbar'>
        <div className='flex-between py-0 px-5 bg-white font-bold'>
        <div className='flex items-center gap-2'>
            <Link to="/" className="flex gap-0 items-center">
                 <img 
                    src="/assets/images/logo.png"
                    alt="logo"
                    width={60}
                    height={60}
                />
                <p className='text-4xl text-black h1-semibold'>GeminiChat</p>
            </Link>
            <p className='text-zinc-600 gap-5 font-mono font-extralight'> ← Home</p>
            </div>
            <div className='flex text-zinc-600 gap-5'>
              <div className='flex gap-4'>
                <p className=' font-mono font-extralight'>History → </p><Link to='/history'> {profile}</Link>
              </div>
              |
              <button 
                className=' hover:text-gray-400 text-md' 
                onClick={() => {
                  localStorage.removeItem('token');
                  location.reload(); 
                }}
              >
                Logout
              </button>
            </div>
        </div>
    </section>
  )
}

export default Topbar