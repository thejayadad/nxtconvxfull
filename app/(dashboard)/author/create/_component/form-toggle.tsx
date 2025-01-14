'use client';

import React, { useState, ReactNode } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface Props {
  label: string;
  desc: string;
  icon: IconType; // React Icon as a prop
  children: ReactNode; // Content to be rendered inside the toggle
}

const FormToggle = ({ label, desc, icon: Icon, children }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => setIsEditing(!isEditing);

  return (
    <div className="border rounded-lg shadow-sm p-4 bg-secondary/80">
      {/* Header */}
      <div className="flex justify-between items-center cursor-pointer">
        {/* Icon and Label */}
        <div className="flex items-center gap-4">
          {/* Icon with Circle */}
          <div
            className="p-1 bg-primary text-secondary rounded-full border-2 border-secondary/80 shadow-sm hover:bg-gray-200 transition-all duration-300"
          >
            <Icon className='h-4 w-4' />
          </div>
          <div>
            <h2 className="text-sm md:text-xl text-white font-medium
            ">{label}</h2>
            <p className="hidden md:block lg:text-sm text-gray-300">{desc}</p>
          </div>
        </div>
        {/* Toggle Arrow */}
        <div onClick={toggleEditing}>
          {isEditing ? (
            <FiChevronUp size={20} className="text-gray-300 hover:text-gray-100 transition-colors" />
          ) : (
            <FiChevronDown size={20} className="text-gray-300 hover:text-gray-100 transition-colors" />
          )}
        </div>
      </div>

      {/* Accordion Content */}
      {isEditing && (
        <div className="bg-white py-4 px-4 mt-2 rounded-xl transition-all duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

export default FormToggle;
