import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-light-50 to-light-100 dark:from-dark-900 dark:to-dark-800 overflow-hidden">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light-900 dark:text-dark-100 leading-tight">
              FEELING <span className="text-primary-500">FINANCIALLY STRESSED?</span>
            </h1>
            <p className="mt-6 text-lg text-light-600 dark:text-dark-300">
              You are not alone. Get a PulseCheck with MyMoneyMedic today and take control of your financial future.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/pulsecheck" className="btn-primary">
                Get Your FREE Pulse Check Now
              </Link>
              <Link to="/how-it-works" className="btn-secondary">
                Learn How It Works
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="w-full h-64 md:h-96 bg-light-100 dark:bg-dark-700 rounded-lg shadow-xl flex items-center justify-center">
                <span className="text-primary-500 text-lg font-medium">Financial Wellness Image</span>
              </div>
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500 rounded-full opacity-20 blur-sm"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -top-4 -left-4 w-16 h-16 bg-light-200 dark:bg-dark-700 rounded-full opacity-50 blur-sm"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.6, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements with animation and fade edges */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full opacity-10 blur-xl -translate-y-1/2 translate-x-1/2"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-48 h-48 bg-light-200 dark:bg-dark-700 rounded-full opacity-50 blur-xl translate-y-1/2 -translate-x-1/2"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.6, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Hero; 