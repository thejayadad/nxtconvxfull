'use client'
import React from 'react'
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Aside from '@/components/aside/aside';


const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const { user } = useUser();
    if (!user) {
        redirect('/');
      }

      const userEmail= user.emailAddresses[0].emailAddress

  return (
    <div className='h-full flex'>
       <Aside
       userEmail={userEmail}
       />
     <main className='flex-1 h-full overflow-y-auto'>
     {children}
     </main>
    </div>
  )
}

export default layout