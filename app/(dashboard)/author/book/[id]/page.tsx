'use client';

import React from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useParams } from 'next/navigation';
import { Id } from '@/convex/_generated/dataModel';
import TitleForm from '../../create/_component/title-form';

const BookDetails = () => {
  const { id } = useParams(); // Get book ID from URL params

  // Validate and cast the `id` to a Convex ID
  if (!id || typeof id !== 'string') {
    return <div>Invalid book ID</div>; // Handle undefined or invalid ID
  }

  const bookId = id as Id<"book">; // Cast to Convex's `Id` type

  // Pass the `bookId` to the query
  const book = useQuery(api.book.getBookById, { id: bookId });

  if (!book) {
    return <div>Loading...</div>;
  }

  //REQUIRED FIELDS
  const requiredFields = [
    book.title,
    book.author,
    book.summary,
    book.coverImage,
    book.categoryId
  ]

  //REF INDICATOR
 const totalFields = requiredFields.length;
 const completedFields = requiredFields.filter(Boolean).length;

 const completedText = `(${completedFields} / ${totalFields})`


  return (
    <div className="p-4">
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-y-2'>
          <h1 className='font-medium text-xl'>Book Setup</h1>
          <span className='text-sm text-secondary'>Required Fields {completedText}</span>
        </div>
      </div>
      <h2 className='text-xl'>Update your book</h2>
      <div className='grid grid-cols-4 md:grid-cols-8 gap-6 mt-16 mx-auto max-w-screen-2xl'>
      <div className='col-span-1  md:col-span-2'>
        <div className='flex flex-col'>
        <TitleForm
          initialdata={book}
          bookId={bookId}
        />
            <TitleForm
          initialdata={book}
          bookId={bookId}
        />
        </div>
 
      </div>
      <div className='grid col-span-3 h-[400px] md:col-span-6 bg-orange-400'>
        Cover Section
      </div>
       </div>
        
    </div>
  );
};

export default BookDetails;
