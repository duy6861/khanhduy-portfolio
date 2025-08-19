import React from 'react';
import { motion } from 'framer-motion';  // eslint-disable-line no-unused-vars

const Experience = ({ experience, isEnglish, zurichTeam, manulifeTeam }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-6"
    >
      <h2 className="text-2xl font-semibold text-white mb-3 border-b-2 border-gray-500 pb-2">
        {isEnglish ? 'Work Experience' : 'Kinh nghiệm làm việc'}
      </h2>

      {experience.map((item, index) => (
        <div
          key={index}
          className="mb-4 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
        >
          <h3 className="text-lg font-semibold text-primary">
            {isEnglish ? item.en.company : item.vi.company}
          </h3>
          <p className="text-gray-300">
            {isEnglish ? item.en.position : item.vi.position} ({isEnglish ? item.en.date : item.vi.date})
          </p>
        </div>
      ))}

      {/* Zurich Team Experience */}
      <div className="mb-4 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
        <h3 className="text-lg font-semibold text-primary">
          {isEnglish ? "Zurich Team" : "Nhóm Zurich"} (1 year 8 months)
        </h3>
        <p className="text-gray-300">
          {isEnglish ? "Company: " + zurichTeam.en.name : "Công ty: " + zurichTeam.vi.name}
        </p>
        <p className="text-gray-300">
          {isEnglish ? "Team size: " + zurichTeam.en.teamSize : "Quy mô nhóm: " + zurichTeam.vi.teamSize}
        </p>
        <p className="text-gray-300">
          {isEnglish ? "Position: " + zurichTeam.en.position : "Vị trí: " + zurichTeam.vi.position}
        </p>
        <p className="font-semibold text-white">
          {isEnglish ? "Responsibilities:" : "Trách nhiệm:"}
        </p>
        <ul className="list-disc ml-5 text-gray-300">
          {zurichTeam[isEnglish ? 'en' : 'vi'].responsibility.map((item, index) => (
            <li key={index} className="mb-1">{item}</li>
          ))}
        </ul>
        <p className="text-gray-300">
          {isEnglish ? "Technology description: " + zurichTeam.en.tech : "Mô tả công nghệ: " + zurichTeam.vi.tech}
        </p>
      </div>

      {/* Manulife Team Experience */}
      <div className="mb-4 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
        <h3 className="text-lg font-semibold text-primary">
          {isEnglish ? "Manulife Team" : "Nhóm Manulife"} (5 months)
        </h3>
        <p className="text-gray-300">
          {isEnglish ? "Company: " + manulifeTeam.en.name : "Công ty: " + manulifeTeam.vi.name}
        </p>
        <p className="text-gray-300">
          {isEnglish ? "Team size: " + manulifeTeam.en.teamSize : "Quy mô nhóm: " + manulifeTeam.vi.teamSize}
        </p>
        <p className="text-gray-300">
          {isEnglish ? "Position: " + manulifeTeam.en.position : "Vị trí: " + manulifeTeam.vi.position}
        </p>
        <p className="font-semibold text-white">
          {isEnglish ? "Responsibilities:" : "Trách nhiệm:"}
        </p>
        <ul className="list-disc ml-5 text-gray-300">
          {manulifeTeam[isEnglish ? 'en' : 'vi'].responsibility.map((item, index) => (
            <li key={index} className="mb-1">{item}</li>
          ))}
        </ul>
        <p className="text-gray-300">
          {isEnglish ? "Technology description: " + manulifeTeam.en.tech : "Mô tả công nghệ: " + manulifeTeam.vi.tech}
        </p>
      </div>
    </motion.div>
  );
};

export default Experience;