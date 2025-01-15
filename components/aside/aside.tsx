'use client';
import React, { useState } from 'react';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

interface Props {
    userEmail: string;
}

const Aside = ({userEmail}:Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <aside
      className={`h-full bg-primary/10 overflow-hidden relative flex flex-col z-[99999] border-r transition-all duration-300 ${
        isCollapsed ? 'w-16 bg-white' : 'w-60'
      }`}
    >
      {/* Toggle Button */}
      <div
        onClick={toggleSidebar}
        className={`absolute top-4 -right-1 mr-2 bg-white border border-gray-300 shadow-md p-1 rounded-full cursor-pointer hover:bg-gray-200 transition-transform duration-300`}
      >
        {isCollapsed ? (
          <FiChevronsRight className="h-6 w-6 text-gray-600" />
        ) : (
          <FiChevronsLeft className="h-6 w-6 text-gray-600" />
        )}
      </div>

      {/* Sidebar Content */}
      <div className="flex-1 space-y-4 p-2 px-4 rounded-lg mt-1">
        {!isCollapsed && (
          <>
            <div className='bg-white h-20 flex items-center border-b  rounded-lg p-2'>
              <p>{userEmail}</p>
            </div>
            <div>
              <p>Documents</p>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default Aside;
