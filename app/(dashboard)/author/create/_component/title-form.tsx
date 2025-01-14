'use client';

import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';
import React, { useState } from 'react';
import { FiEdit3, FiCheck, FiX, FiChevronDown, FiChevronUp, FiEdit } from 'react-icons/fi';
import { toast } from 'sonner';

interface Props {
  initialdata: {
    title: string;
  };
  bookId: string;
}

const TitleForm = ({ initialdata, bookId }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialdata.title);
  const updateTitle = useMutation(api.book.updateBookTitle);
  const [isLoading, setIsLoading] = useState(false);

  const toggleEditing = () => setIsEditing(!isEditing);

  const handleCancel = () => {
    setIsEditing(false);
    setTitle(initialdata.title); // Reset to initial title
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission from reloading the page

    try {
        
      await updateTitle({ id: bookId, title }); // Pass correct arguments
      setIsEditing(false); // Exit edit mode
      toast.success('Title updated successfully!');
    } catch (error) {
      toast.error('Failed to update the title.');
      console.error(error);
    }
  };

  return (
    <div className="border rounded-lg shadow-sm p-4 bg-secondary/90"> 
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleEditing}
      >
        <div className="flex items-center gap-4">
          <FiEdit  className="text-primary h-4 w-4 md:h-6 md:w-6" />
            <div>
                     
            <h2 className="text-sm md:text-xl text-white font-medium">Title</h2>
            <p className="hidden md:block lg:text-sm text-gray-600">Update your title here</p>    
            </div>     
        </div>
        <div>
          {isEditing ? (
            <FiChevronUp size={20} className="text-gray-600" />
          ) : (
            <FiChevronDown size={20} className="text-gray-600" />
          )}
        </div>
      </div>

      {/* Accordion Content */}
      {isEditing && (
        <form
          onSubmit={handleSave}
          className="md:mt-4 p-1 bg-gray-100 rounded-lg shadow-inner space-y-2 mt-2 transition-all duration-300"
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            id="title"
            className="w-full p-1 md:p-3  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter new title"
          />
          <div className="flex items-center justify-end space-x-2">
            <button
              type="button"
              onClick={handleCancel}
              className="px-2 md:px-4 py-1 md:py-2 bg-red-200 text-gray-700 rounded-md hover:bg-red-300"
            >
              Cancel
            </button>
            <button
  type="submit"
  disabled={isLoading}
  className={`px-2 md:px-4 py-1 md:py-2 rounded-md flex items-center justify-center ${
    isLoading
      ? 'bg-gray-400 text-white cursor-not-allowed'
      : 'bg-green-500 text-white hover:bg-green-600'
  }`}
>
  {isLoading ? (
    <div className="flex items-center space-x-2">
      {/* Spinner Animation */}
      <div className="h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
      <span>Updating...</span>
    </div>
  ) : (
    'Save'
  )}
</button>

          </div>
        </form>
      )}
    </div>
  );
};

export default TitleForm;
