'use client';

import React from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useParams } from 'next/navigation';
import { Id } from '@/convex/_generated/dataModel';

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

  return (
    <div className="p-4">
      <h1>{book.title}</h1>
      <p>Book ID: {id}</p>
      <p>Author: {book.author || "Unknown"}</p>
      <p>{book.isPublished ? "Published" : "Not Published"}</p>
    </div>
  );
};

export default BookDetails;
