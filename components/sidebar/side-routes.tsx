'use client'
import React from 'react'
import { FiDatabase, FiHeart, FiSearch } from 'react-icons/fi'
import SideItem from './side-item'

const readerRoutes = [
    {
        icon: FiDatabase,
        label: 'Dashboard',
        href: '/'
    },
    {
        icon: FiSearch,
        label: 'Search',
        href: '/search'
    },
    {
        icon: FiHeart,
        label: 'Favorite',
        href: '/favorite'
    },
]

const SideRoutes = () => {
    const routes = readerRoutes
  return (
    <div className='flex flex-col w-full'>
        {routes.map((route) => (
            <SideItem
            key={route.href}
            icon={route.icon}
            label={route.label}
            href={route.href}
            />
        ))}
    </div>
  )
}

export default SideRoutes