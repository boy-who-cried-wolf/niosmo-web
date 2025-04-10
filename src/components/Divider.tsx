import React from 'react';

const Divider = () => {
  return (
    <div className="relative h-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-light-100 dark:from-dark-800 to-transparent" />
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 60L60 50C120 40 240 20 360 20C480 20 600 40 720 50C840 60 960 60 1080 50C1200 40 1320 20 1380 10L1440 0V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V60Z"
          fill="#00E575"
          fillOpacity="0.1"
        />
      </svg>
    </div>
  );
};

export default Divider; 