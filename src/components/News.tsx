import React from 'react';
import { motion } from 'framer-motion';

const News = () => {
  const newsItems = [
    {
      title: 'Financial Wellness in the Digital Age',
      date: 'March 15, 2024',
      excerpt: 'How technology is transforming personal finance management and making financial wellness more accessible.',
      category: 'Industry News',
    },
    {
      title: 'The Importance of Regular Financial Check-ups',
      date: 'March 10, 2024',
      excerpt: 'Why regular financial assessments are crucial for maintaining long-term financial health.',
      category: 'Financial Tips',
    },
    {
      title: 'MyMoneyMedic Partners with Leading Financial Institutions',
      date: 'March 5, 2024',
      excerpt: 'Expanding our network to provide even better financial wellness solutions to our users.',
      category: 'Company News',
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
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card bg-light-50 dark:bg-dark-700"
            >
              <div className="text-sm text-primary-500 mb-2">{news.category}</div>
              <h3 className="text-xl font-semibold text-light-900 dark:text-dark-100 mb-2">
                {news.title}
              </h3>
              <div className="text-sm text-light-500 dark:text-dark-400 mb-4">
                {news.date}
              </div>
              <p className="text-light-600 dark:text-dark-300">
                {news.excerpt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News; 