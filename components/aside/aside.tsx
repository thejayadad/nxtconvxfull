'use client';
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import React, { useState } from 'react';
import { FiChevronsLeft, FiChevronsRight, FiPlusCircle } from 'react-icons/fi';
import AsideItem from './aside-item';

interface Props {
  userEmail: string;
}

const Aside = ({ userEmail }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  // Fetch notes from Convex
  const notes = useQuery(api.note.get); // Adjust `api.notes.get` based on your actual Convex API

  return (
    <aside
      className={`h-full bg-primary/10 overflow-hidden relative flex flex-col z-[99999] border-r transition-all duration-300 ${
        isCollapsed ? 'w-16 bg-white' : 'w-60'
      }`}
    >
      {/* Toggle Button */}
      <div
        onClick={toggleSidebar}
        className={`absolute top-4 -right-1 mr-2 bg-white border border-gray-300 shadow-md p-1 rounded-full cursor-pointer hover:bg-gray-200 transition-transform duration-300`}
      >
        {isCollapsed ? (
          <FiChevronsRight className="h-6 w-6 text-gray-600" />
        ) : (
          <FiChevronsLeft className="h-6 w-6 text-gray-600" />
        )}
      </div>

      {/* Sidebar Content */}
      <div className="flex-1 space-y-4 p-2 px-4 rounded-lg mt-1">
        {/* User Email Section */}
        {!isCollapsed && (
          <>
            <div className="bg-white h-20 flex items-center border-b rounded-lg p-2">
              <p>{userEmail}</p>
            </div>
            <div className='bg-white p-2 rounded-lg'>
              <AsideItem
                onClick={() => {}}
                label={'New Note'}
                icon={FiPlusCircle}
              />
            </div>

            {/* Notes Section */}
            <div className="bg-white p-2 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Notes</h3>
              {notes && notes.length > 0 ? (
                <ul className="space-y-1">
                  {notes.map((note: { _id: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
                    <li
                      key={note._id}
                      className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition"
                    >
                      {note.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Create your first note today!</p>
              )}
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default Aside;
