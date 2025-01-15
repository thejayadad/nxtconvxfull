import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Icon */}
      <div className="bg-gradient-to-r from-primary to-secondary w-12 h-12 rounded-lg flex items-center justify-center shadow-lg">
        <span className="text-white text-2xl font-extrabold">T</span>
      </div>
      {/* Website Name */}
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        ThinkCanvas
      </h1>
    </div>
  );
};

export default Logo;
