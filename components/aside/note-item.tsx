'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FiChevronRight, FiMoreHorizontal, FiPlus } from 'react-icons/fi';

interface NoteItemProps {
  id: string; // Note ID for redirection
  title: string; // Note title
  onMoreClick: () => void; // Function triggered by the "More" icon
  onAddClick: () => void; // Function triggered by the "Add" icon
}

const NoteItem: React.FC<NoteItemProps> = ({ id, title, onMoreClick, onAddClick }) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/dashboard/${id}`);
  };

  return (
    <div
      className="relative flex items-center justify-between px-4 py-2   hover:border-gray-300 hover:shadow-md transition cursor-pointer group"
      onClick={handleRedirect} // Redirect to the note's page
    >
      {/* Chevron on Hover */}
      <FiChevronRight className="absolute left-2 text-gray-400 group-hover:text-gray-600 transition-opacity opacity-0 group-hover:opacity-100" />

      {/* Title */}
      <span
        className="text-gray-700 font-medium group-hover:text-gray-900 transition"
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering parent onClick
          handleRedirect();
        }}
      >
        {title}
      </span>

      {/* Icons on Hover */}
      <div
        className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition"
        onClick={(e) => e.stopPropagation()} // Prevent triggering parent onClick
      >
        <FiMoreHorizontal
          className="text-gray-400 hover:text-gray-600 cursor-pointer"
          onClick={onMoreClick}
        />
        <FiPlus
          className="text-gray-400 hover:text-gray-600 cursor-pointer"
          onClick={onAddClick}
        />
      </div>
    </div>
  );
};

export default NoteItem;
