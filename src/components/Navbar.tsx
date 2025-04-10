import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useState } from 'react';
import niosmoLogo from '../assets/images/niosmo-logo.png';
import { useTheme } from '../context/ThemeContext';
import { useNotification } from '../context/NotificationContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { showNotification } = useNotification();

  const navigation = [
    { name: 'PulseCheck', href: '/pulsecheck' },
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'News & Media', href: '/news' },
    { name: 'Partners Area', href: '/partners' },
    { name: 'MyMoneyMedic', href: '/mymoneymedic' },
  ];

  const handleLinkClick = (name: string) => {
    showNotification(`The ${name} feature is coming soon! Stay tuned for updates.`);
  };

  return (
    <nav className="fixed w-full bg-dark-800/20 backdrop-blur-md z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <button
            className="flex items-center"
            onClick={() => handleLinkClick('Home')}
          >
            <img
              className="h-8 w-auto"
              src={niosmoLogo}
              alt="Niosmo"
            />
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleLinkClick(item.name)}
                className="nav-link"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-light-100 dark:hover:bg-dark-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-dark-200" />
              ) : (
                <MoonIcon className="h-5 w-5 text-light-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-4"
          >
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  handleLinkClick(item.name);
                  setIsOpen(false);
                }}
                className="block text-dark-200 hover:bg-dark-700 px-4 py-2 rounded-md w-full text-left"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 