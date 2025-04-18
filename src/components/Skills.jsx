import React from 'react';

const Skills = ({ skills, isEnglish }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-white mb-4 border-b-2 border-gray-600 pb-2">{isEnglish ? 'Skills' : 'Kỹ năng'}</h2>

      {/* Language Skills */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-primary mb-2">{isEnglish ? skills.language.en : skills.language.vi}</h3>
        <div className="grid grid-cols-2 gap-4">
          {skills.languageSkills.map((item, index) => (
            <div key={index} className="bg-gray-800 p-3 rounded-lg text-white">
              <p className="text-sm">{isEnglish ? item.name.en : item.name.vi}: <span className="font-semibold">{isEnglish ? item.proficiency.en : item.proficiency.vi}</span></p>
            </div>
          ))}
        </div>
      </div>

      {/* Programming Languages */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-primary mb-2">{isEnglish ? skills.programmingLanguage.en : skills.programmingLanguage.vi}</h3>
        <div className="flex flex-wrap gap-3">
          {skills.programmingLanguages.map((item, index) => (
            <span key={index} className="bg-primary text-white rounded-full px-4 py-2 text-sm">{item}</span>
          ))}
        </div>
      </div>

      {/* Frameworks & Libraries */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-primary mb-2">{isEnglish ? skills.frameworks.en : skills.frameworks.vi}</h3>
        <div className="flex flex-wrap gap-3">
          {skills.frameworksAndLibraries.map((item, index) => (
            <span key={index} className="bg-primary text-white rounded-full px-4 py-2 text-sm">{item}</span>
          ))}
        </div>
      </div>

      {/* State Management */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-primary mb-2">{isEnglish ? skills.stateManagement.en : skills.stateManagement.vi}</h3>
        <div className="flex flex-wrap gap-3">
          {skills.stateManagementTools.map((item, index) => (
            <span key={index} className="bg-primary text-white rounded-full px-4 py-2 text-sm">{item}</span>
          ))}
        </div>
      </div>

      {/* UI Frameworks & Styling */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-primary mb-2">{isEnglish ? skills.uiFrameworks.en : skills.uiFrameworks.vi}</h3>
        <div className="flex flex-wrap gap-3">
          {skills.uiFrameworksAndStylingTools.map((item, index) => (
            <span key={index} className="bg-primary text-white rounded-full px-4 py-2 text-sm">{item}</span>
          ))}
        </div>
      </div>

      {/* Backend Development */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-primary mb-2">{isEnglish ? skills.backend.en : skills.backend.vi}</h3>
        <div className="flex flex-wrap gap-3">
          {skills.backendTechnologies.map((item, index) => (
            <span key={index} className="bg-primary text-white rounded-full px-4 py-2 text-sm">{item}</span>
          ))}
        </div>
      </div>

      {/* API & Data Handling */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-primary mb-2">{isEnglish ? skills.api.en : skills.api.vi}</h3>
        <div className="flex flex-wrap gap-3">
          {skills.apiAndDataHandlingTools.map((item, index) => (
            <span key={index} className="bg-primary text-white rounded-full px-4 py-2 text-sm">{item}</span>
          ))}
        </div>
      </div>

      {/* Version Control */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-primary mb-2">{isEnglish ? skills.versionControl.en : skills.versionControl.vi}</h3>
        <div className="flex flex-wrap gap-3">
          {skills.versionControlTools.map((item, index) => (
            <span key={index} className="bg-primary text-white rounded-full px-4 py-2 text-sm">{item}</span>
          ))}
        </div>
      </div>

      {/* Testing & Debugging */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-primary mb-2">{isEnglish ? skills.testing.en : skills.testing.vi}</h3>
        <div className="flex flex-wrap gap-3">
          {skills.testingAndDebuggingTools.map((item, index) => (
            <span key={index} className="bg-primary text-white rounded-full px-4 py-2 text-sm">{item}</span>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-primary mb-2">{isEnglish ? skills.softSkills.en : skills.softSkills.vi}</h3>
        <div className="flex flex-wrap gap-3">
          {skills.softSkillsList.map((item, index) => (
            <span key={index} className="bg-primary text-white rounded-full px-4 py-2 text-sm">{item}</span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Skills;
