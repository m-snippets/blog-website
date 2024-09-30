import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'

function NavBar() {
  return (
    <nav className='w-full realative flex items-center justify-between max-w-2xl mx-auto px-4 py-5'>
        <Link href='/' className='font-bold text-3xl'>
        First<span className='text-blue-500'>Blog</span>
        </Link>
<ModeToggle/>

    </nav>
  )
}

export default NavBar