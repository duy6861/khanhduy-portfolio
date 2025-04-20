import React from 'react';

const Header = ({ avatar, name, contact, isEnglish }) => {
  return (
    <div className="flex flex-col items-center mb-6">
      <img
        src={avatar}
        alt="Your Avatar"
        className="rounded-full w-40 h-40 object-cover mb-4 border-4 border-gray-300 shadow-lg hover:scale-105 transition-all duration-300"
      />

      <h1 className="text-4xl font-bold text-white mb-2">{name}</h1>

      <div className="flex flex-wrap justify-center space-x-4 text-gray-300 mb-4">
        <span className="text-lg">{contact.phone}</span>
        <span className="text-lg">{contact.email}</span>
        <span className="text-lg">
          <a
            href={contact.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary text-primary transition duration-300 text-lg"
          >
            LinkedIn
          </a>
        </span>
        <span className="text-lg">{isEnglish ? contact.address.en : contact.address.vi}</span>
      </div>

      <div className="w-full border-b-2 border-gray-500 mb-6"></div>

    </div>


  );
};

export default Header;