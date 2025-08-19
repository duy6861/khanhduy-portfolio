import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const Skills = ({ skills, isEnglish }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    },
  };

  // Component cho Language Skill Item với text
  const LanguageSkillItem = ({ language, proficiency }) => (
    <motion.div
      variants={itemVariants}
      className="flex justify-between items-center py-2 border-b border-gray-700/50 last:border-b-0"
    >
      <span className="text-gray-300 font-medium">{language}</span>
      <span className="text-blue-400 font-semibold bg-blue-900/30 px-3 py-1 rounded-full text-sm">
        {proficiency}
      </span>
    </motion.div>
  );

  // Component cho Skill Tag với hiệu ứng
  const SkillTag = ({ children, className = '' }) => (
    <motion.span
      variants={tagVariants}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(99, 102, 241, 0.3), 0 8px 10px -6px rgba(99, 102, 241, 0.3)"
      }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
      className={`
      inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium
      bg-gradient-to-r from-blue-600 to-purple-600 text-white
      shadow-lg
      cursor-pointer
      ${className}
    `}
    >
      {children}
    </motion.span>
  );

  // Component cho Skill Category với card design
  const SkillCategory = ({ title, children, icon }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.02,
        y: -1,
        boxShadow: "0 20px 25px -5px rgba(99, 102, 241, 0.3), 0 8px 10px -6px rgba(99, 102, 241, 0.3)",
        borderColor: "#374151"
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-4">
        {icon && <span className="text-blue-400 text-xl">{icon}</span>}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="space-y-2">
        {children}
      </div>
    </motion.div>
  );
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="mb-12"
    >
      <h2 className="
        text-3xl font-bold text-white mb-8 pb-3 
        relative border-b-2 border-gray-500
      ">
        {isEnglish ? 'Skills' : 'Kỹ năng'}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Language Skills */}
        <SkillCategory
          title={isEnglish ? "Language Skills" : "Kỹ năng ngôn ngữ"}
          icon="🗣️"
        >
          {skills.languageSkills.map((item, index) => (
            <LanguageSkillItem
              key={index}
              language={isEnglish ? item.name.en : item.name.vi}
              proficiency={isEnglish ? item.proficiency.en : item.proficiency.vi}
            />
          ))}
        </SkillCategory>

        {/* Programming Languages */}
        <SkillCategory
          title={isEnglish ? skills.programmingLanguage.en : skills.programmingLanguage.vi}
          icon="💻"
        >
          <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
            {skills.programmingLanguages.map((item, index) => (
              <SkillTag key={index}>{item}</SkillTag>
            ))}
          </motion.div>
        </SkillCategory>

        {/* Frameworks & Libraries */}
        <SkillCategory
          title={isEnglish ? skills.frameworks.en : skills.frameworks.vi}
          icon="🔧"
        >
          <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
            {skills.frameworksAndLibraries.map((item, index) => (
              <SkillTag key={index}>{item}</SkillTag>
            ))}
          </motion.div>
        </SkillCategory>

        {/* State Management */}
        <SkillCategory
          title={isEnglish ? skills.stateManagement.en : skills.stateManagement.vi}
          icon="🔄"
        >
          <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
            {skills.stateManagementTools.map((item, index) => (
              <SkillTag key={index}>{item}</SkillTag>
            ))}
          </motion.div>
        </SkillCategory>

        {/* UI Frameworks & Styling */}
        <SkillCategory
          title={isEnglish ? skills.uiFrameworks.en : skills.uiFrameworks.vi}
          icon="🎨"
        >
          <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
            {skills.uiFrameworksAndStylingTools.map((item, index) => (
              <SkillTag key={index}>{item}</SkillTag>
            ))}
          </motion.div>
        </SkillCategory>

        {/* Backend Development */}
        <SkillCategory
          title={isEnglish ? skills.backend.en : skills.backend.vi}
          icon="⚙️"
        >
          <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
            {skills.backendTechnologies.map((item, index) => (
              <SkillTag key={index}>{item}</SkillTag>
            ))}
          </motion.div>
        </SkillCategory>

        {/* API & Data Handling */}
        <SkillCategory
          title={isEnglish ? skills.api.en : skills.api.vi}
          icon="🔌"
        >
          <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
            {skills.apiAndDataHandlingTools.map((item, index) => (
              <SkillTag key={index}>{item}</SkillTag>
            ))}
          </motion.div>
        </SkillCategory>

        {/* Version Control */}
        <SkillCategory
          title={isEnglish ? skills.versionControl.en : skills.versionControl.vi}
          icon="🔄"
        >
          <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
            {skills.versionControlTools.map((item, index) => (
              <SkillTag key={index}>{item}</SkillTag>
            ))}
          </motion.div>
        </SkillCategory>

        {/* Testing & Debugging */}
        <SkillCategory
          title={isEnglish ? skills.testing.en : skills.testing.vi}
          icon="🧪"
        >
          <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
            {skills.testingAndDebuggingTools.map((item, index) => (
              <SkillTag key={index}>{item}</SkillTag>
            ))}
          </motion.div>
        </SkillCategory>

        {/* Soft Skills */}
        <SkillCategory
          title={isEnglish ? skills.softSkills.en : skills.softSkills.vi}
          icon="👥"
        >
          <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
            {skills.softSkillsList.map((item, index) => (
              <SkillTag key={index}>{item}</SkillTag>
            ))}
          </motion.div>
        </SkillCategory>
      </div>
    </motion.div>
  );
};

export default Skills;