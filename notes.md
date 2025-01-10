# CREATE THE APP
- package.json
- home page css
- daisyui


# CLERK
- follow docs
- set jwt template

# CONVEX
- install it first
- schema file
- users.ts file
- wrap the app
- add the sync user function
- run the app
- check database
- add custom spinner


# LAYOUT
- update the page
- add a layout

# SIDEBAR
- fix the layout
- add dashboard page
- add the layout
- bring in sidebar
- update the functionality
- add npm i sonner
- bring into the layout


# DOCUMENTS
- update the schema
- add the document api
- add in the dashboard page
- create a document with the test to show the toast notification
- logo is in this branch


# ASIDE ITEM
- build component 
- add too sidebar
- add the item in its space
- start with the props of 
    - label 
    - onClick
    - icon

```
import React from 'react'
import { IconType } from 'react-icons';

interface ActionProps {
    label: string;
    onClick: () => void;
    icon: IconType;
    
}

const ActionItem = ({label, onClick, icon: Icon}: ActionProps) => {
  return (
    <div
    onClick={onClick}
    style={{paddingLeft: '12px'}}
    className='group min-h-[27px] text-sm py-1 pr-3 w-ful hover:bg-primary/5 flex items-center text-muted-foreground font-medium'
    >   
      <Icon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
      {label}
    </div>
  )
}

export default ActionItem

```
- add the on create function and create a document add sonner as well

- add the additional props

```
interface ActionProps {
    id?: Id<"documents">;
    documentIcon?: string;
    active?: boolean;
    
    isSearch?: boolean;
    onExand?: () => void;
    label: string;
    onClick: () => void;
    icon: IconType;
    
}
```

- add the interaface and pass in the props

```
import { Id } from '@/convex/_generated/dataModel';
import React from 'react'
import { IconType } from 'react-icons';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

interface ActionProps {
    id?: Id<"documents">;
    documentIcon?: string;
    active?: boolean;
    expanded?: boolean;
    isSearch?: boolean;
    onExpand?: () => void;
    label: string;
    onClick: () => void;
    icon: IconType;
    
}

const ActionItem = ({label, id, documentIcon, expanded, onExpand, active, isSearch, onClick, icon: Icon}: ActionProps) => {
    const ChevronIcon = expanded ? FiChevronDown : FiChevronRight;
    
  return (
    <div
    onClick={onClick}
    style={{paddingLeft: '12px'}}
    className='group min-h-[27px] text-sm py-1 pr-3 w-ful hover:bg-primary/5 flex items-center text-muted-foreground font-medium'
    >   
        {!!id && (
            <div
            role='button'
            className='h-full rounded-sm hover:bg-neutral-300 mr-1'
            onClick={() => {}}
            >
                <ChevronIcon
                className='h-4 w-4 shirnk-0 text-muted-foreground/50'
                />
            </div>
        )}
        {documentIcon ? (
            <div className='shrink-0 mr-2 text-[18px]'>
                {documentIcon}
            </div>
        ) : (
            <Icon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />

        )
     
    }
      <span className='truncate'>
      {label}
      </span>
      {isSearch && (
        <kbd
        className='ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted
        px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100
        '
        >
            <span className='text-sm'>X</span>K
        </kbd>
      )}
    </div>
  )
}

export default ActionItem
```

- actionItem update to show expand with the cheveron toggle

```
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

```

# SEARCH FUNCTIONALITY
 - 