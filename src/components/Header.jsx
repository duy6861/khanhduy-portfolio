import React, { useState, useEffect } from 'react';

const Header = ({ avatar, name, contact, isEnglish }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  // Các section cần theo dõi
  const sections = [
    { label: isEnglish ? 'Objective' : 'Mục tiêu', id: 'objective' },
    { label: isEnglish ? 'Education' : 'Học vấn', id: 'education' },
    { label: isEnglish ? 'Experience' : 'Kinh nghiệm', id: 'experience' },
    { label: isEnglish ? 'Skills' : 'Kỹ năng', id: 'skills' },
    { label: isEnglish ? 'Projects' : 'Dự án', id: 'projects' },
  ];

  // Hàm scroll đến phần
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    setIsMenuOpen(false); // Đóng menu mobile
  };

  // Theo dõi scroll để highlight menu
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let section of sections.reverse()) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <header className="w-full">
      {/* Navigation Bar - Glassmorphism */}
      <nav className="fixed top-0 left-0 right-0 bg-black/70 backdrop-blur-xl z-50 shadow-lg border-b border-gray-700/50 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo / Tên */}
            <div
              onClick={() => scrollToSection('top')}
              className="text-xl font-bold text-white cursor-pointer hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2"
            >
              <span>{isEnglish ? 'My Resume' : 'Hồ sơ của tôi'}</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-300 capitalize
                    ${activeSection === item.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-white/10'
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              <span className="text-sm font-medium text-white">{isEnglish ? 'EN' : 'VI'}</span>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1.5"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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

          {/* Mobile Menu - Slide Down */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="bg-black/90 backdrop-blur-md rounded-b-lg mb-2 px-4 py-3 space-y-2">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left text-sm px-3 py-2 rounded-md transition-all duration-300 capitalize
                    ${activeSection === item.id
                      ? 'bg-blue-600 text-white font-medium'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-white/10'
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Profile Section */}
      <div id="top" className="flex flex-col items-center mb-10 pt-28">
        {/* Avatar với hiệu ứng nổi */}
        <div className="relative group mb-4">
          <img
            src={avatar}
            alt="Your Avatar"
            className="rounded-full w-40 h-40 object-cover border-4 border-gray-300 shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide">
          {name}
        </h1>

        {/* Thông tin liên hệ */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-gray-300 mb-6 text-sm sm:text-base text-center sm:text-left">
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 whitespace-nowrap font-medium"
          >
            <svg
              className="w-5 h-5 opacity-90"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span className="text-white">{contact.phone}</span>
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-1 hover:text-blue-400 transition-colors duration-300 whitespace-nowrap"
          >
            <svg className="w-5 h-5 opacity-70" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            {contact.email}
          </a>
          <a
            href={contact.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 whitespace-nowrap font-medium"
          >
            <svg
              className="w-5 h-5 opacity-90"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-white">LinkedIn</span>
          </a>

          <span className="flex items-center gap-1 max-w-xs text-center sm:text-left whitespace-normal sm:whitespace-nowrap">
            <svg className="w-4 h-4 opacity-70" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {isEnglish ? contact.address.en : contact.address.vi}
          </span>
        </div>

        {/* Divider */}
        <div className="w-4/5 md:w-3/5 border-t border-gray-600 my-6"></div>
      </div>
    </header>
  );
};

export default Header;