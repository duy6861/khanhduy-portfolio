import React from 'react';

const Skills = ({ skills, isEnglish }) => {
  // Component cho Language Skill Item với text
  const LanguageSkillItem = ({ language, proficiency }) => (
    <div className="flex justify-between items-center py-2 border-b border-gray-700/50 last:border-b-0">
      <span className="text-gray-300 font-medium">{language}</span>
      <span className="text-blue-400 font-semibold bg-blue-900/30 px-3 py-1 rounded-full text-sm">
        {proficiency}
      </span>
    </div>
  );

  // Component cho Skill Tag với hiệu ứng
  const SkillTag = ({ children, className = '' }) => (
    <span className={`
      inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium
      bg-gradient-to-r from-blue-600 to-purple-600 text-white
      hover:from-blue-500 hover:to-purple-500
      transform hover:scale-105 transition-all duration-200
      shadow-lg hover:shadow-xl
      ${className}
    `}>
      {children}
    </span>
  );

  // Component cho Skill Category với card design
  const SkillCategory = ({ title, children, icon }) => (
    <div className="
      bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 
      border border-gray-700/50 hover:border-gray-600/50
      transition-all duration-300 hover:shadow-xl
      hover:-translate-y-1
    ">
      <div className="flex items-center gap-3 mb-4">
        {icon && <span className="text-blue-400 text-xl">{icon}</span>}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );

  return (
    <div className="mb-12">
      <h2 className="
        text-3xl font-bold text-white mb-8 pb-3 
        relative border-b-2 border-gray-500
      ">
        {isEnglish ? 'Skills' : 'Kỹ năng'}
        {/* <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div> */}
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
          <div className="flex flex-wrap gap-2">
            {skills.programmingLanguages.map((item, index) => (
              <SkillTag key={index}>{item}</SkillTag>
            ))}
          </div>
        </SkillCategory>

        {/* Frameworks & Libraries */}
        <SkillCategory
          title={isEnglish ? skills.frameworks.en : skills.frameworks.vi}
          icon="🔧"
        >
          <div className="flex flex-wrap gap-2">
            {skills.frameworksAndLibraries.map((item, index) => (
              <SkillTag key={index}>{item}</SkillTag>
            ))}
          </div>
        </SkillCategory>

        {/* State Management */}
        <SkillCategory
          title={isEnglish ? skills.stateManagement.en : skills.stateManagement.vi}
          icon="🔄"
        >
          <div className="flex flex-wrap gap-2">
            {skills.stateManagementTools.map((item, index) => (
              <SkillTag key={index}>{item}</SkillTag>
            ))}
          </div>
        </SkillCategory>

        {/* UI Frameworks & Styling */}
        <SkillCategory
          title={isEnglish ? skills.uiFrameworks.en : skills.uiFrameworks.vi}
          icon="🎨"
        >
          <div className="flex flex-wrap gap-2">
            {skills.uiFrameworksAndStylingTools.map((item, index) => (
              <SkillTag key={index}>{item}</SkillTag>
            ))}
          </div>
        </SkillCategory>

        {/* Backend Development */}
        <SkillCategory
          title={isEnglish ? skills.backend.en : skills.backend.vi}
          icon="⚙️"
        >
          <div className="flex flex-wrap gap-2">
            {skills.backendTechnologies.map((item, index) => (
              <SkillTag key={index}>{item}</SkillTag>
            ))}
          </div>
        </SkillCategory>

        {/* API & Data Handling */}
        <SkillCategory
          title={isEnglish ? skills.api.en : skills.api.vi}
          icon="🔌"
        >
          <div className="flex flex-wrap gap-2">
            {skills.apiAndDataHandlingTools.map((item, index) => (
              <SkillTag key={index}>{item}</SkillTag>
            ))}
          </div>
        </SkillCategory>

        {/* Version Control */}
        <SkillCategory
          title={isEnglish ? skills.versionControl.en : skills.versionControl.vi}
          icon="🔄"
        >
          <div className="flex flex-wrap gap-2">
            {skills.versionControlTools.map((item, index) => (
              <SkillTag key={index}>{item}</SkillTag>
            ))}
          </div>
        </SkillCategory>

        {/* Testing & Debugging */}
        <SkillCategory
          title={isEnglish ? skills.testing.en : skills.testing.vi}
          icon="🧪"
        >
          <div className="flex flex-wrap gap-2">
            {skills.testingAndDebuggingTools.map((item, index) => (
              <SkillTag key={index}>{item}</SkillTag>
            ))}
          </div>
        </SkillCategory>

        {/* Soft Skills */}
        <SkillCategory
          title={isEnglish ? skills.softSkills.en : skills.softSkills.vi}
          icon="👥"
        >
          <div className="flex flex-wrap gap-2">
            {skills.softSkillsList.map((item, index) => (
              <SkillTag key={index}>{item}</SkillTag>
            ))}
          </div>
        </SkillCategory>
      </div>
    </div>
  );
};

export default Skills;