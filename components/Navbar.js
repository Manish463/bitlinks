'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const [showsidebar, setShowsidebar] = useState(false)

  return (
    <nav className='h-18 bg-purple-700 flex justify-between items-center text-white px-2 md:px-8'>
      <div className="logo text-2xl font-bold">
        BitLinks
      </div>
      <div className='flex gap-2 md:gap-6 items-center'>
        <ul className='md:flex justify-center items-center gap-6 hidden'>
          <Link href='/'><li className={`px-4 py-2 rounded-lg hover:bg-purple-800 ${pathname == '/' ? "bg-purple-800" : ""}`}>Home</li></Link>
          <Link href='/about'><li className={`px-4 py-2 rounded-lg hover:bg-purple-800 ${pathname == '/about' ? "bg-purple-800" : ""}`}>About</li></Link>
          <Link href='/shorten'><li className={`px-4 py-2 rounded-lg hover:bg-purple-800 ${pathname == '/shorten' ? "bg-purple-800" : ""}`}>Shortner</li></Link>
          <Link href='/contact'><li className={`px-4 py-2 rounded-lg hover:bg-purple-800 ${pathname == '/contact' ? "bg-purple-800" : ""}`}>Contact Us</li></Link>
          <li className='flex gap-6'>
            <button className='px-3 py-2 rounded-md shadow-md font-bold bg-purple-500 hover:bg-purple-600'><Link href='/shorten'>Try Now</Link></button>
            <button className='px-3 py-2 rounded-md shadow-md font-bold bg-purple-500 hover:bg-purple-600'><Link href='https://github.com/Manish463/bitlinks'>GitHub</Link></button>
          </li>
        </ul>
        <div className='block md:hidden' onClick={() => setShowsidebar(true)}><img className='w-8 invert' src="/bar.svg" alt="Menu" /></div>
        {showsidebar && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-[50vh] bg-purple-50 gap-6 md:hidden shadow-lg text-black'>
          <div className='absolute top-3 right-3' onClick={() => setShowsidebar(false)}><img className='w-6' src="/x.svg" alt="X" /></div>
          <Link href='/' onClick={() => setShowsidebar(false)}><li className={`px-4 py-2 rounded-lg hover:bg-purple-800 ${pathname == '/' ? "text-purple-600" : ""}`}>Home</li></Link>
          <Link href='/about' onClick={() => setShowsidebar(false)}><li className={`px-4 py-2 rounded-lg hover:bg-purple-800 ${pathname == '/about' ? "text-purple-600" : ""}`}>About</li></Link>
          <Link href='/shorten' onClick={() => setShowsidebar(false)}><li className={`px-4 py-2 rounded-lg hover:bg-purple-800 ${pathname == '/shorten' ? "text-purple-600" : ""}`}>Shortner</li></Link>
          <Link href='/contact' onClick={() => setShowsidebar(false)}><li className={`px-4 py-2 rounded-lg hover:bg-purple-800 ${pathname == '/contact' ? "text-purple-600" : ""}`}>Contact Us</li></Link>
        </ul>}
      </div>
    </nav>
  )
}

export default Navbar
