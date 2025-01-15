import React from 'react'
import Logo from '../logo'

const Header = () => {
  return (
    <header className='w-full h-24 py-2  text-white'>
        <div className='mx-auto max-w-screen-lg flex items-center h-full justify-between px-4 border-b-blue-200'>
            <div>
                <Logo />
            </div>
        </div>
    </header>
  )
}

export default Header