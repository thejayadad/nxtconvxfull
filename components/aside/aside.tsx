'use client';
import { api } from '@/convex/_generated/api';
import { useMutation, useQuery } from 'convex/react';
import React, { useState } from 'react';
import { FiChevronsLeft, FiChevronsRight, FiPlusCircle, FiSearch } from 'react-icons/fi';
import AsideItem from './aside-item';
import NoteModal from './note-modal';
import NoteItem from './note-item';

interface Props {
  userEmail: string;
}

const Aside = ({ userEmail }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  const handleSearchCancel = () => setSearchQuery('');

  // Convex API calls
  const notes = useQuery(api.note.get);
  const createNote = useMutation(api.note.create);

  const handleSaveNote = async (title: string) => {
    await createNote({ title });
  };

  const filteredNotes = notes?.filter((note) =>
    note.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <NoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveNote}
      />

      <aside
        className={`h-full bg-primary/10 overflow-hidden relative flex flex-col z-[99999] border-r transition-all duration-300 ${
          isCollapsed ? 'w-16 bg-white' : 'w-60'
        }`}
      >
        <div
          onClick={toggleSidebar}
          className="absolute top-4 -right-1 mr-2 bg-white border border-gray-300 shadow-md p-1 rounded-full cursor-pointer hover:bg-gray-200 transition-transform duration-300"
        >
          {isCollapsed ? (
            <FiChevronsRight className="h-6 w-6 text-gray-600" />
          ) : (
            <FiChevronsLeft className="h-6 w-6 text-gray-600" />
          )}
        </div>

        <div className="flex-1 space-y-4 p-2 px-4 rounded-lg mt-1">
          {!isCollapsed && (
            <>
              <div className="bg-white h-20 flex items-center  rounded-lg p-2">
                <p>{userEmail}</p>
              </div>

              <div className="bg-white p-2 rounded-lg space-y-2">
                <AsideItem
                  onClick={() => setIsModalOpen(true)}
                  label="New Note"
                  icon={FiPlusCircle}
                />
                <AsideItem
                  label="Search"
                  isSearch
                  icon={FiSearch}
                  searchValue={searchQuery}
                  onSearchChange={(e) => setSearchQuery(e.target.value)}
                  onSearchCancel={handleSearchCancel}
                />
              </div>

              <div className="p-2 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Notes</h3>
                {filteredNotes && filteredNotes.length > 0 ? (
                  <ul className="">
                    {filteredNotes.map((note) => (
                      <li
                        key={note._id}
                        className="rounded-md hover:bg-gray-200 transition"
                      >
                        <NoteItem
                          id={note._id} // Pass the note's ID
                          title={note.name}
                          onMoreClick={() => console.log(`More options for: ${note.name}`)}
                          onAddClick={() => console.log(`Add action for: ${note.name}`)}
                        />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No matching notes found.</p>
                )}
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
};

export default Aside;
