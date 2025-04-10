import React from 'react';
import { motion } from 'framer-motion';
import financialPlanningImage from '../assets/images/blogs/financial-planning.svg';
import investmentImage from '../assets/images/blogs/investment.svg';
import stockMarketImage from '../assets/images/blogs/stock-market.svg';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Financial Wellness in the Digital Age',
      date: 'March 15, 2024',
      excerpt: 'How technology is transforming personal finance management and making financial wellness more accessible.',
      category: 'Industry News',
      image: stockMarketImage,
    },
    {
      id: 2,
      title: 'The Importance of Regular Financial Check-ups',
      date: 'March 10, 2024',
      excerpt: 'Why regular financial assessments are crucial for maintaining long-term financial health.',
      category: 'Financial Tips',
      image: investmentImage,
    },
    {
      id: 3,
      title: 'MyMoneyMedic Partners with Leading Financial Institutions',
      date: 'March 5, 2024',
      excerpt: 'Expanding our network to provide even better financial wellness solutions to our users.',
      category: 'Company News',
      image: financialPlanningImage,
    },
  ];

  return (
    <section className="section bg-light-100 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-light-900 dark:text-dark-100">
            Latest News & Updates
          </h2>
          <p className="mt-4 text-lg text-light-600 dark:text-dark-300 max-w-2xl mx-auto">
            Stay informed with the latest developments in financial wellness and our platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden bg-light-50 dark:bg-dark-700 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,229,117,0.2)] dark:hover:shadow-[0_8px_30px_rgba(0,229,117,0.3)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 bg-primary-500 text-dark-900 px-3 py-1 text-sm font-medium rounded-br-lg">
                  {news.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-light-900 dark:text-dark-100 mb-2 group-hover:text-primary-500 transition-colors duration-300">
                  {news.title}
                </h3>
                <div className="text-sm text-light-500 dark:text-dark-400 mb-4">
                  {news.date}
                </div>
                <p className="text-light-600 dark:text-dark-300 mb-4">
                  {news.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors duration-300"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="btn-primary">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default News; 