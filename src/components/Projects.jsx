import React from 'react';

const Projects = ({ projects, isEnglish }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-white mb-3 border-b-2 border-gray-500 pb-2">{isEnglish ? 'Projects' : 'Dự án'}</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-6 p-6 rounded-lg shadow-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300">
          <h3 className="font-semibold text-xl text-white mb-2">{isEnglish ? project.en.name : project.vi.name}</h3>
          {project.en.link && (
            <a href={project.en.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 text-sm">
              {isEnglish ? 'View Project' : 'Xem dự án'}
            </a>
          )}
          {project.en.tech && (
            <p className="text-gray-400 text-sm mt-2">
              {isEnglish ? 'Technology: ' : 'Công nghệ: '}
              {isEnglish ? project.en.tech : project.vi.tech}
            </p>
          )}
          {project.en.description && (
            <p className="text-gray-300 mt-2">
              {isEnglish ? project.en.description : project.vi.description}
            </p>
          )}
        </div>
      ))}
    </div>

  );
};

export default Projects;