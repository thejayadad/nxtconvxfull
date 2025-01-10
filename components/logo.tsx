import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Icon */}
      <div className="bg-gradient-to-r from-[#6C63FF] to-[#F6B8C3] w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-white text-xl font-bold">P</span>
      </div>
      {/* Website Name */}
      <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#F6B8C3]">
        PoemPique
      </h1>
    </div>
  );
};

export default Logo;
