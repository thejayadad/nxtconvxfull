'use client';
import React from 'react';
import { UserButton } from '@clerk/nextjs';
import { usePathname, useRouter } from 'next/navigation';
import { FiLogOut } from 'react-icons/fi';
import Link from 'next/link';

const NavRoute = () => {
    const pathname = usePathname()
    const router = useRouter()
    const isAuthorPage = pathname?.startsWith('/author')
    const isReaderPage = pathname?.includes('/chapter')
  return (
    <div className="flex gap-x-2 ml-auto pr-2">
        {isAuthorPage || isReaderPage ? (
            <button>
                <FiLogOut className='h-4 w-4 mr-2' />
                Exit
            </button>
        ) :
            <Link
            className='mr-2'
                href={'/author/books'} 
            >
                <button>
                    Author View
                </button>
            </Link>
        }
      <div className="transform scale-150">
        <UserButton />
      </div>
    </div>
  );
};

export default NavRoute;
