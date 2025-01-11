'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

const BookForm = () => {
  const router = useRouter();
  const { user } = useUser();
  const createBook = useMutation(api.book.createBook);

  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      toast.error('Please enter a title.');
      return;
    }

    setIsLoading(true);

    try {
      // Call mutation to create the book
      const book = await createBook({ title  }); // Ensure user.id exists
      toast.success('Book created successfully!');

      // Redirect to the book page
      router.push(`/author/book/${book.id}`); // Use book.id from the returned object
    } catch (error) {
      toast.error('Failed to create the book.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={onCreate}
      className="flex flex-col max-w-screen-md space-y-6"
    >
      {/* Title Input */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-2">
          Title
        </label>
        <input
          id="title"
          name="title"
          placeholder="Enter book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-4 rounded-xl w-full"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4 mt-8 rounded-xl w-full">
        <Link
          href="/author/books"
          className="w-full p-3 flex items-center justify-center border rounded-xl"
        >
          Cancel
        </Link>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full p-3 border rounded-xl bg-primary text-white flex items-center justify-center ${
            isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-dark'
          }`}
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              {/* Loading Animation */}
              <div className="h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
              <span>Creating...</span>
            </div>
          ) : (
            'Continue'
          )}
        </button>
      </div>
    </form>
  );
};

export default BookForm;
