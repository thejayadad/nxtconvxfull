'use client'
import React from 'react'
import { FiBarChart, FiBook, FiDatabase, FiHeart, FiSearch } from 'react-icons/fi'
import SideItem from './side-item'
import { usePathname } from 'next/navigation'

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
const authorRoutes = [
    {
        icon: FiBook,
        label: 'Books',
        href: '/author/books'
    },
    {
        icon: FiBarChart,
        label: 'Data',
        href: '/author/data'
    },

]

const SideRoutes = () => {
    const pathname = usePathname()
    const isAuthorPage = pathname?.includes('/author')
    const routes = isAuthorPage ? authorRoutes : readerRoutes
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