import React, { useState } from 'react';

const Header = ({ avatar, name, contact, isEnglish }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hàm scroll đến phần
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Đóng menu mobile sau khi bấm
  };

  return (
    <header className="w-full">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 shadow-lg border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo / Tên */}
            <div
              className="text-xl font-bold text-white cursor-pointer"
              onClick={() => scrollToSection('top')}
            >
              {isEnglish ? 'My Resume' : 'Hồ sơ của tôi'}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              {[
                { label: isEnglish ? 'Objective' : 'Mục tiêu', id: 'objective' },
                { label: isEnglish ? 'Education' : 'Học vấn', id: 'education' },
                { label: isEnglish ? 'Experience' : 'Kinh nghiệm', id: 'experience' },
                { label: isEnglish ? 'Skills' : 'Kỹ năng', id: 'skills' },
                { label: isEnglish ? 'Projects' : 'Dự án', id: 'projects' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:underline"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <span className="text-sm font-medium text-white">{isEnglish ? 'EN' : 'VI'}</span>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-md rounded-b-lg mb-2 px-4 py-3 space-y-3">
              {[
                { label: isEnglish ? 'Objective' : 'Mục tiêu', id: 'objective' },
                { label: isEnglish ? 'Education' : 'Học vấn', id: 'education' },
                { label: isEnglish ? 'Experience' : 'Kinh nghiệm', id: 'experience' },
                { label: isEnglish ? 'Skills' : 'Kỹ năng', id: 'skills' },
                { label: isEnglish ? 'Projects' : 'Dự án', id: 'projects' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Profile Section */}
      <div id="top" className="flex flex-col items-center mb-8 pt-28"> {/* pt-28 để tránh bị che bởi nav */}
        <img
          src={avatar}
          alt="Your Avatar"
          className="rounded-full w-40 h-40 object-cover mb-4 border-4 border-gray-300 shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <h1 className="text-4xl font-bold text-white mb-2">{name}</h1>

        <div className="flex flex-wrap justify-center gap-4 text-gray-300 mb-4 text-center">
          <span className="text-lg">{contact.phone}</span>
          <span className="text-lg">{contact.email}</span>
          <a
            href={contact.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-400 hover:underline transition duration-300"
          >
            LinkedIn
          </a>
          <span className="text-lg">{isEnglish ? contact.address.en : contact.address.vi}</span>
        </div>

        <div className="w-full border-b-2 border-gray-500 my-6"></div>
      </div>
    </header>
  );
};

export default Header;