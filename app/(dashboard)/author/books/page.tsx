import Link from 'next/link'
import React from 'react'

const AuthorBooksPage = () => {
  return (
    <div className='p-6'>
      <Link href={'/author/create'}>
        Create Book
      </Link>
    </div>
  )
}

export default AuthorBooksPage