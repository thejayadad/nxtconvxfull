import React from 'react'
import MobileSidebar from './mobile-sidebar'
import NavRoute from './user-button'

const Navbar = () => {
  return (
    <div className='p-4 border-b h-full flex items-center shadow-sm'>
        <MobileSidebar />
        <NavRoute />
    </div>
  )
}

export default Navbar