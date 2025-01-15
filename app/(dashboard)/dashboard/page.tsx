'use client';
import { useUser } from '@clerk/nextjs';
import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { useMutation } from 'convex/react'; // Import useMutation
import { api } from '@/convex/_generated/api'; // Import Convex API
import NoteModal from '@/components/aside/note-modal';

const DashboardPage = () => {
  const { user } = useUser();
  const name = user?.firstName;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const createNote = useMutation(api.note.create); // Convex mutation to create a note

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleSaveNote = async (title: string) => {
    try {
      await createNote({ title }); // API call to save the note
      console.log('Note created successfully');
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <h2 className="font-semibold text-xl leading-4 text-gray-600">
        Hi There {name}
      </h2>
      <button
        className="flex items-center bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary/90 transition"
        onClick={handleModalOpen}
      >
        <FiPlusCircle className="h-5 w-5 mr-1" />
        Create a Note
      </button>

      {/* Note Modal */}
      <NoteModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSave={handleSaveNote}
      />
    </div>
  );
};

export default DashboardPage;
