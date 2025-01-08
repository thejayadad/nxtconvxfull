'use client';

import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

const AsideBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { user } = useUser();

  // Fetch documents for the logged-in user
  const documents = useQuery(api.documents.get);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  if (!user) {
    redirect('/');
  }

  return (
    <div className="h-full">
      <aside
        className={`h-full border-r overflow-y-auto flex flex-col relative z-[99999] transition-all duration-300 ${
          isVisible ? 'w-60' : 'w-0'
        }`}
      >
        {isVisible && (
          <div className="px-4 py-16">
            {/* User Info */}
            <div className="flex items-center w-full justify-between py-6">
              <div className="flex items-center space-x-2">
                {user?.imageUrl && (
                  <div className="flex items-center space-x-2">
                    <img
                      src={user.imageUrl}
                      alt="User Profile"
                      className="w-8 h-8 rounded-full"
                    />
                    <p className="text-xs font-medium leading-none text-neutral-600">
                      {user?.emailAddresses?.[0]?.emailAddress || 'Guest'}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Documents */}
            <div className="mt-4">
              <h3 className="text-sm font-bold text-neutral-800">Documents</h3>
              {documents ? (
                documents.length > 0 ? (
                  <ul className="mt-2 space-y-2">
                    {documents.map((doc: { _id: string; title: string }) => (
                      <li
                        key={doc._id}
                        className="text-sm text-neutral-700 bg-gray-100 p-2 rounded hover:bg-gray-200"
                      >
                        {doc.title}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500">No documents found.</p>
                )
              ) : (
                <p className="text-sm text-gray-500">Loading documents...</p>
              )}
            </div>
          </div>
        )}
      </aside>
      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className="absolute top-4 left-3 z-[100000] bg-blue-400 p-1 border border-blue-900 rounded-full shadow-md"
      >
        {isVisible ? (
          <FiChevronLeft className="h-6 w-6 text-orange-600" />
        ) : (
          <FiChevronRight className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default AsideBar;
