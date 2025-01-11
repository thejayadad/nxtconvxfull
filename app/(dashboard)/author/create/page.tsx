import React from 'react'
import BookForm from './_component/book-form'

const CreateBook = () => {
  return (
    <div className='p-6'>
        <div className='flex flex-col'>
            <div className=''>
                <h1 className='text-xl font-semibold'>New Book Page</h1>
                <p>Start by giving your book a title</p>
                <div className='space-y-8 mt-8 h-full'>
                    <BookForm />
                </div>
            </div>
            
        </div>  
   </div>
  )
}

export default CreateBook