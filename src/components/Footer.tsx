import React from 'react';
import { Link } from 'react-router-dom';
import niosmoLogo from '../assets/images/niosmo-logo.png';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Help Center', href: '/help' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    social: [
      { name: 'Twitter', href: 'https://twitter.com' },
      { name: 'LinkedIn', href: 'https://linkedin.com' },
      { name: 'Facebook', href: 'https://facebook.com' },
    ],
  };

  return (
    <footer className="bg-light-100 dark:bg-dark-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img
                className="h-8 w-auto"
                src={niosmoLogo}
                alt="Niosmo"
              />
            </Link>
            <p className="text-light-600 dark:text-dark-300 max-w-md">
              Empowering individuals to achieve financial wellness through personalized guidance and innovative tools.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-light-900 dark:text-dark-100 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-light-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-light-900 dark:text-dark-100 mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-light-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-light-200 dark:border-dark-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-light-600 dark:text-dark-300">
              © 2024 Niosmo. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.social.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 