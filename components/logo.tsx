import React from 'react';
import { FiFileText, FiShare2 } from 'react-icons/fi'; // React Icons

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-1">
      {/* Icon Part */}
      <div className="bg-default text-primary p-2 rounded-lg shadow-sm">
        <FiFileText className="h-4 w-4" />
      </div>
      {/* Text Part */}
      <h1 className="text-xl font-bold text-gray-800 tracking-wide">
        Doc<span className="text-secondary">Share</span>
      </h1>
    </div>
  );
};

export default Logo;
