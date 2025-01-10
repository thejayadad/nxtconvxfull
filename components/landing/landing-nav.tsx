import React from 'react';
import Logo from '../logo';
import Link from 'next/link';
import { FiSearch } from "react-icons/fi";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const LandingNav = () => {
  return (
    <div className="landing-nav">
      <div className="landing-box">
        <div className="landing-search">
          <Logo />
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Link
                href={'/search'}
                className="flex items-center gap-2 rounded-full bg-gray-300 h-10 px-4 transition-all duration-300 ease-in-out group-hover:w-48 w-10 overflow-hidden"
              >
                {/* Static search icon */}
                <FiSearch className="text-gray-600 text-lg group-hover:text-primary transition-colors duration-300" />
                {/* Sliding text reveal */}
                <span className="absolute left-12 opacity-0 group-hover:opacity-100 group-hover:left-16 transition-all duration-300 text-gray-700 font-medium">
                  Search Books
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* User Button Section */}
        <SignedIn>
          <div className="flex items-center">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10', // Adjust avatar size
                  userButtonOuter: 'flex items-center justify-center', // Optional, centers the avatar
                },
              }}
            />
          </div>
        </SignedIn>
        <SignedOut>
          {/* Add any content for signed-out users */}
        </SignedOut>
      </div>
    </div>
  );
};

export default LandingNav;
