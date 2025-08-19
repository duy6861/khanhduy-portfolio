import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const Education = ({ education, isEnglish }) => {
  return (
    <motion.div
      // Hiệu ứng khi scroll vào phần này
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-6"
    >
      <h2 className="text-2xl font-semibold text-white mb-3 border-b-2 border-gray-500 pb-2">
        {isEnglish ? 'Education' : 'Học vấn'}
      </h2>

      {education.map((item, index) => (
        <div
          key={index}
          className="mb-4 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
        >
          <h3 className="text-lg font-semibold text-primary">
            {isEnglish ? item.en.title : item.vi.title}
          </h3>
          <p className="text-gray-300">
            {isEnglish ? item.en.date : item.vi.date}
          </p>
          {item.en.major && (
            <p className="text-gray-300">
              Major: {isEnglish ? item.en.major : item.vi.major}
            </p>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default Education;