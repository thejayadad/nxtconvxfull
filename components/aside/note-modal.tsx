'use client';
import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

interface NoteModalProps {
  isOpen: boolean; // Whether the modal is open
  onClose: () => void; // Function to close the modal
  onSave: (title: string) => void; // Function to save the note
}

const NoteModal: React.FC<NoteModalProps> = ({ isOpen, onClose, onSave }) => {
  const [noteTitle, setNoteTitle] = useState('');

  const handleSave = () => {
    if (noteTitle.trim()) {
      onSave(noteTitle.trim());
      setNoteTitle('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-9999999 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close"
        >
          <FiX className="h-5 w-5" />
        </button>

        {/* Modal Content */}
        <h2 className="text-xl font-bold mb-4">Create New Note</h2>
        <input
          type="text"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          placeholder="Enter note title"
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
        />
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-500 hover:text-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
