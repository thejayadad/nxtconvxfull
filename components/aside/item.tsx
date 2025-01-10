import { Id } from '@/convex/_generated/dataModel';
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

interface ActionProps {
  id?: Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  isSearch?: boolean;
  label: string;
  onClick: () => void;
  icon: IconType;
}

const ActionItem: React.FC<ActionProps> = ({
  label,
  id,
  documentIcon,
  active,
  isSearch,
  onClick,
  icon: Icon,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="w-full">
      {/* Main Row */}
      <div
        onClick={onClick}
        style={{ paddingLeft: '12px' }}
        className={`group min-h-[27px] text-sm py-1 pr-3 w-full flex items-center font-medium cursor-pointer ${
          active ? 'text-primary' : 'text-muted-foreground'
        } hover:bg-primary/5`}
      >
        {/* Chevron Icon */}
        {id && (
          <div
            className="h-full rounded-sm hover:bg-neutral-300 mr-1"
            onClick={toggleExpand}
          >
            {isExpanded ? (
              <FiChevronDown className="h-4 w-4 shrink-0 text-muted-foreground/50" />
            ) : (
              <FiChevronRight className="h-4 w-4 shrink-0 text-muted-foreground/50" />
            )}
          </div>
        )}
        {/* Document Icon */}
        {documentIcon ? (
          <img
            src={documentIcon}
            alt="Document Icon"
            className="shrink-0 h-[18px] w-[18px] mr-2 rounded object-cover"
          />
        ) : (
          <Icon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
        )}
        {/* Label */}
        <span className="truncate">{label}</span>
        {/* Search Shortcut */}
        {isSearch && (
          <kbd
            className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted
            px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
          >
            <span className="text-sm">X</span>K
          </kbd>
        )}
      </div>
      {/* Dropdown Area */}
      {isExpanded && (
        <div className="ml-6 mt-2 bg-gray-100 p-2 rounded shadow">
          <p className="text-xs text-muted-foreground">Additional content goes here.</p>
                
        </div>
      )}
    </div>
  );
};

export default ActionItem;
