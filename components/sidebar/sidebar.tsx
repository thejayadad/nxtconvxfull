'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useUser } from '@clerk/nextjs';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(240); // Default width
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const isResizing = useRef(false);
  const { user } = useUser(); // Get the current user from Clerk

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
    setSidebarWidth(isCollapsed ? 240 : 60); // Adjust width on collapse
  };

  const handleMouseDown = () => {
    isResizing.current = true;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing.current && !isCollapsed) {
      const sidebar = sidebarRef.current;
      if (sidebar) {
        const newWidth = e.clientX - sidebar.getBoundingClientRect().left;
        if (newWidth >= 60 && newWidth <= 400) { // Min and max width
          setSidebarWidth(newWidth);
        }
      }
    }
  };

  const handleMouseUp = () => {
    isResizing.current = false;
  };

  useEffect(() => {
    // Attach global mouse events for dragging
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="group h-full">
      <aside
        ref={sidebarRef}
        className="h-full bg-neutral-200 overflow-y-auto flex flex-col relative z-[99999] transition-all duration-300"
        style={{ width: `${sidebarWidth}px` }}
      >
        {/* Header with user info */}
        <div className="flex items-center w-full justify-between py-6 px-4">
          <div className="flex items-center space-x-2">
            {/* User profile image */}
            {user?.imageUrl && !isCollapsed && (
              <img
                src={user.imageUrl}
                alt="User Profile"
                className="w-6 h-6 rounded-full"
              />
            )}
            {/* Conditionally render user email */}
            {!isCollapsed && (
              <p className="text-xs font-medium leading-none text-neutral-600">
                {user?.emailAddresses?.[0]?.emailAddress || 'Guest'}
              </p>
            )}
          </div>
          <button
            onClick={handleCollapseToggle}
            className="text-neutral-600 hover:text-neutral-800 transition-all"
          >
            {isCollapsed ? <FiChevronRight className="h-6 w-6" /> : <FiChevronLeft className="h-6 w-6" />}
          </button>
        </div>

        {/* Sidebar content */}
        {!isCollapsed && (
          <>
            <div className="mt-4">
              <p>Documents</p>
            </div>
          </>
        )}

        {/* Resizer */}
        <div
          className="absolute h-full w-1 bg-neutral-400 right-0 cursor-ew-resize opacity-0 group-hover:opacity-100 transition-opacity"
          onMouseDown={handleMouseDown}
        />
      </aside>
    </div>
  );
};

export default Sidebar;
