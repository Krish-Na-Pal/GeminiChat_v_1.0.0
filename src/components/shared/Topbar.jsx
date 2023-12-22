import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <section className='topbar'>
        <div className='flex-between py-2 px-5 bg-white font-bold'>
            <Link to="/" className="flex gap-0 items-center">
                 <img 
                    src="/assets/images/logo.png"
                    alt="logo"
                    width={60}
                    height={60}
                />
                <p className='text-4xl text-black h1-semibold'>GeminiChat</p>
            </Link>
        </div>
    </section>
  )
}

export default Topbar