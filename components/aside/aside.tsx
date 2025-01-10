'use client';

import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft, FiPlusCircle, FiSearch } from 'react-icons/fi';
import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import Logo from '../logo';
import AsideItem from './aside-item';
import { toast } from 'sonner';
import ActionItem from './item';
import DocumentList from './document-list';

const AsideBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { user } = useUser();
  const create = useMutation(api.documents.create);


  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  if (!user) {
    redirect('/');
  }

  const onCreate = () => {
    const promise = create({ title: 'New Document' });
    toast.promise(promise, {
      loading: 'Creating a document...',
      success: 'New document created!',
      error: 'Failed to create a document.',
    });
  };

  return (
    <div className="h-full">
      <aside
        className={`h-full border-r overflow-y-auto flex flex-col relative z-[99999] transition-all duration-300 ${
          isVisible ? 'w-60 px-4' : 'w-0'
        }`}
      >
        {isVisible && (
          <div className="py-4">
            <div className="flex justify-center w-full px-4">
              <Logo />
            </div>
            <div className="py-4">
              {/* <AsideItem
                onClick={onCreate}
                label="New Document"
                icon={FiPlusCircle}
              />
              <AsideItem
                label="Search..."
                icon={FiSearch}
                onClick={() => {}}
              /> */}
              <ActionItem
                onClick={onCreate}
                label="New Document"
                icon={FiPlusCircle}
              />
              <ActionItem
              label='Search...'
              icon={FiSearch}
              isSearch
              onClick={() => {}}
              />
            
              <div className="mt-4">
                <h3 className="text-sm font-bold text-neutral-500">Documents</h3>
             <DocumentList />
              </div>
            </div>
          </div>
        )}
      </aside>
      <button
        onClick={handleToggle}
        className="absolute top-4 left-3 z-[100000] bg-primary p-1 border rounded-full shadow-md"
      >
        {isVisible ? (
          <FiChevronLeft className="h-6 w-6 text-white" />
        ) : (
          <FiChevronRight className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default AsideBar;
