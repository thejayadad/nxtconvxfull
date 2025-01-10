'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { IconType } from 'react-icons';

interface SideItemProps {
  icon: IconType; // React-icons type for icons
  label: string;
  href: string;
}

const SideItem: React.FC<SideItemProps> = ({ icon: Icon, label, href }) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === '/' && href === '/') || // Match root route
    pathname === href || // Match exact route
    pathname?.startsWith(`${href}/`); // Match nested routes

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-x-4 px-6 py-2 transition-all ${
        isActive
          ? 'bg-primary text-white font-bold' // Active route styles
          : 'text-secondary font-medium hover:text-text-gray-600 hover:bg-slate-300/20'
      }`}
    >
      {/* Icon */}
      <div
        className={`p-2 rounded-full transition-all ${
          isActive ? 'bg-secondary text-white' : 'bg-gray-200 text-secondary'
        }`}
      >
        <Icon size={20} />
      </div>
      {/* Label */}
      <span className="text-sm">{label}</span>
  </button>
  );
};

export default SideItem;
