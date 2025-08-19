import React from 'react';
import { motion } from 'framer-motion';  // eslint-disable-line no-unused-vars

const Objective = ({ objective, isEnglish }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-6"
    >
      <h2 className="text-2xl font-semibold text-white mb-3 border-b-2 border-gray-500 pb-2">
        {isEnglish ? 'Objective' : 'Mục tiêu'}
      </h2>
      <ul className="list-disc ml-5 space-y-2">
        {objective.map((item, index) => (
          <li
            key={index}
            className="text-gray-300 hover:text-primary transition-colors duration-300 mb-1"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Objective;