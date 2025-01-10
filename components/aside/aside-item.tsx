'use client';

import { Id } from '@/convex/_generated/dataModel';
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';

interface Props {
  id?: Id<"documents">;
  coverImage?: string;
  active?: boolean;
  expanded?: boolean;
  onExpand?: () => void;
  label: string;
  onClick: () => void;
  icon: IconType;
}

const AsideItem: React.FC<Props> = ({
  id,
  coverImage,
  active,
  expanded,
  onExpand,
  label,
  onClick,
  icon: Icon,
}) => {
  const ChevronIcon = expanded ? BiChevronDown : BiChevronRight;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (onExpand) onExpand();
  };

  return (
    <div className="w-full">
      {/* Main Item */}
      <div
        onClick={onClick}
        className={`group min-h-[27px] text-sm py-2 pr-3 w-full flex items-center font-medium cursor-pointer ${
          active ? 'bg-primary/10 text-primary' : 'text-muted-foreground'
        } hover:bg-primary/5`}
      >
        {/* Expand Icon */}
        <button
          className="h-full rounded-sm hover:bg-neutral-300 mr-1"
          onClick={(e) => {
            e.stopPropagation();
            toggleExpand();
          }}
        >
          <ChevronIcon className="h-4 w-4 shrink-0 text-muted-foreground/50" />
        </button>

        {/* Cover Image */}
        <img
          src={coverImage || '/default-cover.png'} // Default image
          alt="Cover"
          className="w-6 h-6 rounded mr-2 object-cover"
        />

        {/* Label */}
        <span className="truncate">{label}</span>
      </div>

      {/* Dropdown Content */}
      {isExpanded && (
        <div className="ml-6 mt-2 space-y-2 text-sm text-neutral-700">
          <button
            onClick={() => alert('Update document')}
            className="w-full text-left hover:bg-neutral-100 p-2 rounded"
          >
            Update Document
          </button>
          <button
            onClick={() => alert('Additional project item')}
            className="w-full text-left hover:bg-neutral-100 p-2 rounded"
          >
            Additional Item
          </button>
        </div>
      )}
    </div>
  );
};

export default AsideItem;
