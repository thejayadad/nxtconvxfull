'use client'
import { useUser } from '@clerk/nextjs'
import { useMutation } from 'convex/react'
import React from 'react'
import { api } from '@/convex/_generated/api' 
import { toast } from 'sonner'
import { Button } from '@nextui-org/button'

const DashboardPage = () => {
  const {user} = useUser()
  const create = useMutation(api.documents.create)

  const onCreate = () => {
    const promise = create({title: 'Testing...'})
    toast.promise(promise, {
      loading: 'Creating a document...',
      success: 'New document created!',
      error: 'Failed to create a document.'
    })
  }
  return (
    <div className='flex h-full flex-col items-center justify-center space-y-4'>
      <h2 className='text-lg font-medium'>
        Welcome to your Note Pad! {user?.firstName}
      </h2>
      <Button 
      onClick={onCreate}
      >
        Create A Document
      </Button>
    </div>
  )
}

export default DashboardPage