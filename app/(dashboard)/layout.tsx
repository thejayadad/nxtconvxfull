import AsideBar from '@/components/aside/aside';
import Sidebar from '@/components/sidebar/sidebar';
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='h-full flex'>
        {/* <Sidebar /> */}
        <AsideBar />
        <main className='h-full flex-1 overflow-y-auto'>
        {children}
        </main>
    </div>
  )
}

export default layout