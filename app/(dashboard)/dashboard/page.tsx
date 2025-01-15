'use client'
import { useUser } from '@clerk/nextjs'
import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'

const DashboardPage = () => {
    const {user} = useUser()
    const name = user?.firstName
  return (
    <div className='h-full flex flex-col items-center justify-center space-y-4'>
        <h2
        className='font-semibold text-xl leading-4 text-gray-600'
        >
            Hi There {name}
        </h2>
        <button
        className='flex items-center  bg-primary text-white px-4 py-4 rounded-xl'
        >
            <FiPlusCircle className='h-5 w-5 mr-1' />
            Create a Note
        </button>
    </div>
  )
}

export default DashboardPage