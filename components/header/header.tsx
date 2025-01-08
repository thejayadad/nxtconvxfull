import React from 'react'

const Header = () => {
  return (
    <header className='z-50 fixed top-0 flex items-center w-full p-6 border-b shadow-sm'>
        <div>LOGO</div>
        <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
            Login
        </div>
    </header>
  )
}

export default Header