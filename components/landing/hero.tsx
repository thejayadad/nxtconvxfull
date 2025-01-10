'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <>
      <div className="landing-hero bg-gray-50 py-12 px-4 sm:py-16 sm:px-8">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          {/* Hero Text */}
          <motion.div
            className="landing-hero-content max-w-lg text-center lg:text-left"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Welcome to <span className="text-primary">PoemPique</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-600">
              Discover, share, and immerse yourself in short-form poetry.
              Join a vibrant community where words come alive.
            </p>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <button className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-all">
                Get Started
              </button>
            </motion.div>          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="landing-hero-image w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              src="/hero.png"
              alt="Hero Illustration"
              className="w-full max-w-sm sm:max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
