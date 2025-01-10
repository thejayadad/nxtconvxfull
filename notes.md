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
