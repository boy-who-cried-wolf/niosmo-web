import React from 'react';
import { motion } from 'framer-motion';
import { useNotification } from '../context/NotificationContext';

const Features = () => {
  const { showNotification } = useNotification();

  const handleFeatureClick = (title: string) => {
    showNotification(`The ${title} feature is coming soon! Stay tuned for updates.`);
  };

  const features = [
    {
      id: 1,
      title: 'Secure & Private',
      description: 'Your financial data is encrypted and protected with bank-level security measures.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'AI-Powered Insights',
      description: 'Get personalized financial advice and insights powered by advanced AI algorithms.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Community Support',
      description: 'Join a community of like-minded individuals on their financial wellness journey.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
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
            Why Choose MyMoneyMedic?
          </h2>
          <p className="mt-4 text-lg text-light-600 dark:text-dark-300 max-w-2xl mx-auto">
            Experience the future of financial wellness with our innovative platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden bg-light-50 dark:bg-dark-700 rounded-xl p-8 text-center hover:shadow-[0_8px_30px_rgba(0,229,117,0.1)] dark:hover:shadow-[0_8px_30px_rgba(0,229,117,0.2)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => handleFeatureClick(feature.title)}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                <div className="relative w-16 h-16 mx-auto mb-6 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-light-900 dark:text-dark-100 mb-4 group-hover:text-primary-500 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-light-600 dark:text-dark-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 