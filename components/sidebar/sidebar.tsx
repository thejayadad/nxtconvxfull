import React from 'react'
import Logo from '../logo'
import SideRoutes from './side-routes'

const Sidebar = () => {
  return (
    <div className='h-full border-r border-primary/20 flex flex-col overflow-y-auto bg-primary/10 shadow-sm'>
        <div className='p-6'>
            <Logo />
        </div>
        <div className='flex flex-col w-full'>
            <SideRoutes />
        </div>
    </div>
  )
}

export default Sidebar