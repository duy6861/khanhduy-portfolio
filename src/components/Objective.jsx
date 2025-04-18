import React from 'react';

const Objective = ({ objective, isEnglish }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-white mb-3 border-b-2 border-gray-500 pb-2">{isEnglish ? 'Objective' : 'Mục tiêu'}</h2>
      <ul className="list-disc ml-5 space-y-2">
        {objective.map((item, index) => (
          <li key={index} className="text-gray-300 hover:text-primary transition-colors duration-300 mb-1">
            {item}
          </li>
        ))}
      </ul>
    </div>

  );
};

export default Objective;