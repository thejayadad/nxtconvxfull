'use client';
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { FiX } from 'react-icons/fi';

interface Props {
  label: string;
  onClick?: () => void;
  icon: IconType; // Icon type for React Icons
  isSearch?: boolean; // Flag to enable search functionality
  searchValue?: string; // Value for the search input
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Search input change handler
  onSearchCancel?: () => void; // Callback to cancel search
}

const AsideItem = ({
  label,
  onClick,
  icon: Icon,
  isSearch = false,
  searchValue = '',
  onSearchChange,
  onSearchCancel,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleSearch = () => {
    if (isExpanded && onSearchCancel) {
      onSearchCancel();
    }
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Main Action */}
      <div
        onClick={isSearch ? handleToggleSearch : onClick}
        role="button"
        className="min-h-[27px] text-sm py-1 border-b pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium cursor-pointer"
      >
        <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground" />
        <span className="truncate">{label}</span>
      </div>

      {/* Search Input (Conditional) */}
      {isSearch && isExpanded && (
        <div className="flex items-center mt-2 p-2 rounded-md bg-gray-100 border border-gray-300">
          <input
            type="text"
            value={searchValue}
            onChange={onSearchChange}
            placeholder="Search notes..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500"
          />
          <FiX
            className="text-gray-600 h-5 w-5 cursor-pointer ml-2 hover:text-gray-800"
            onClick={handleToggleSearch}
          />
        </div>
      )}
    </div>
  );
};

export default AsideItem;
