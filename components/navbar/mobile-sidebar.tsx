'use client';

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Sidebar from '../sidebar/sidebar';

const MobileSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full transition-transform transform hover:scale-105"
        onClick={toggleDrawer}
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
       {/* Links */}
        <Sidebar />

        {/* Footer Section */}
        <div className="absolute bottom-4 left-4 text-gray-500 text-xs">
          © 2025 Your Company
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
