'use client'
import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { UserButton, useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';


const AsideBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true); // State to manage sidebar visibility
  const { user } = useUser(); // Get the current user from Clerk

  const handleToggle = () => {
    setIsVisible(!isVisible); // Toggle visibility state
  };
  if(!user){
    redirect('/')
  }
  return (
    <div className="h-full">
      <aside
        className={`h-full border-r overflow-y-auto flex flex-col relative z-[99999] transition-all duration-300 ${
          isVisible ? 'w-60' : 'w-0'
        }`}
      >
        {isVisible && (
          <div className="px-4 py-16">
            <div className="flex items-center w-full justify-between py-6">
                <div className="flex items-center space-x-2">
                           {user?.imageUrl && isVisible && (
                                <div className='flex items-center space-x-2'>
                                     <img
                                    src={user.imageUrl}
                                    alt="User Profile"
                                    className="w-8 h-8 rounded-full"
                                  />
                                  <p className="text-xs font-medium leading-none text-neutral-600">
                                  {user?.emailAddresses?.[0]?.emailAddress || 'Guest'}
                                </p>
                                </div>

                                )}
                </div>    
            </div>
          </div>
        )}
      </aside>
      <button
        onClick={handleToggle}
        className="absolute top-4 left-3 z-[100000] bg-blue-400 p-1 border border-blue-900 rounded-full shadow-md"
      >
        {isVisible ? (
          <FiChevronLeft className="h-6 w-6 text-orange-600" />
        ) : (
          <FiChevronRight className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default AsideBar;
