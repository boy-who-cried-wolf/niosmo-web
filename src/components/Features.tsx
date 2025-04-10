import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: 'Personalized Financial Assessment',
      description: 'Get a comprehensive analysis of your financial health with our advanced assessment tools.',
      icon: '📊',
    },
    {
      title: 'Expert Guidance',
      description: 'Access professional financial advice tailored to your specific situation and goals.',
      icon: '💡',
    },
    {
      title: 'Actionable Insights',
      description: 'Receive clear, actionable steps to improve your financial well-being.',
      icon: '🎯',
    },
  ];

  return (
    <section className="section bg-light-50 dark:bg-dark-900">
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
            Our platform combines cutting-edge technology with expert financial knowledge to help you achieve financial wellness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card bg-light-50 dark:bg-dark-800"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-light-900 dark:text-dark-100 mb-2">
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