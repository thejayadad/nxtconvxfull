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