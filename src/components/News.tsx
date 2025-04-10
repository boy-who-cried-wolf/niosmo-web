import React from 'react';
import { motion } from 'framer-motion';
import { useNotification } from '../context/NotificationContext';
import financialPlanningImage from '../assets/images/blogs/financial-planning.svg';
import investmentImage from '../assets/images/blogs/investment.svg';
import stockMarketImage from '../assets/images/blogs/stock-market.svg';

const News = () => {
  const { showNotification } = useNotification();

  const handleNewsClick = (title: string) => {
    showNotification(`The ${title} article is coming soon! Stay tuned for updates.`);
  };

  const newsItems = [
    {
      id: 1,
      title: 'Financial Wellness Trends 2024',
      description: 'Discover the latest trends in financial wellness and how they can benefit you.',
      image: stockMarketImage,
      date: 'March 15, 2024',
    },
    {
      id: 2,
      title: 'Investment Strategies for Beginners',
      description: 'Learn the basics of investing and start building your financial future.',
      image: investmentImage,
      date: 'March 10, 2024',
    },
    {
      id: 3,
      title: 'Financial Planning Essentials',
      description: 'Essential tips and tools for effective financial planning.',
      image: financialPlanningImage,
      date: 'March 5, 2024',
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
            Stay informed with the latest financial wellness news and insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden bg-light-50 dark:bg-dark-700 rounded-xl hover:shadow-[0_8px_30px_rgba(0,229,117,0.1)] dark:hover:shadow-[0_8px_30px_rgba(0,229,117,0.2)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => handleNewsClick(item.title)}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary-500/10 group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold text-light-900 dark:text-dark-100 mb-4 group-hover:text-primary-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-light-600 dark:text-dark-300">
                  {item.description}
                </p>
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