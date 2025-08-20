import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
const Header = ({ avatar, name, contact, isEnglish }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const isScrollingRef = useRef(false);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Danh sách section
  const sections = useMemo(
    () => [
      { label: isEnglish ? "Objective" : "Mục tiêu", id: "objective" },
      { label: isEnglish ? "Education" : "Học vấn", id: "education" },
      { label: isEnglish ? "Experience" : "Kinh nghiệm", id: "experience" },
      { label: isEnglish ? "Skills" : "Kỹ năng", id: "skills" },
      { label: isEnglish ? "Projects" : "Dự án", id: "projects" },
    ],
    [isEnglish]
  );

  // Đóng menu khi click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Không đóng nếu click vào toggle button hoặc menu
      if (
        toggleButtonRef.current?.contains(event.target) ||
        menuRef.current?.contains(event.target)
      ) {
        return;
      }
      setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Hàm scroll đến section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop;
      const headerHeight = 70;

      setActiveSection(id);
      isScrollingRef.current = true;

      window.scrollTo({
        top: offsetTop - headerHeight,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
    setIsMenuOpen(false);
  };

  // Theo dõi scroll để highlight menu
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const scrollPosition = window.scrollY + 70;

      let currentSection = "top";

      for (let item of sections) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          const bottom = offsetTop + offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < bottom) {
            currentSection = item.id;
            break;
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, activeSection]);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 h-16 md:h-20 bg-black/70 backdrop-blur-xl z-50 shadow-lg border-b border-gray-700/50 transition-all duration-300 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div
              onClick={() => scrollToSection("top")}
              className="relative text-lg md:text-xl font-bold text-white cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-400 group">
              {isEnglish ? "My Resume" : "Hồ sơ của tôi"}

              {/* Hiệu ứng underline khi hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md capitalize transition-all duration-300
                    ${activeSection === item.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-300 hover:text-blue-400 hover:bg-white/10"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center space-x-3">
              <span className="text-xs md:text-sm font-medium text-white">
                {isEnglish ? "EN" : "VI"}
              </span>
              <button
                ref={toggleButtonRef}
                onClick={toggleMenu}
                className="text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              ref={menuRef}
              className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-gray-700/50 shadow-xl animate-fadeIn"
            >
              <div className="py-2 space-y-1">
                {sections.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 text-sm capitalize transition-all duration-300
                      ${activeSection === item.id
                        ? "bg-blue-600 text-white font-medium"
                        : "text-gray-300 hover:text-blue-400 hover:bg-white/10"
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Profile Section */}
      <div
        id="top"
        className="flex flex-col items-center mb-8 md:mb-10 pt-20 md:pt-28 px-4"
      >
        {/* Avatar với animation mượt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            delay: 0.5,
          }}
          style={{ transformOrigin: "center" }}
          className="relative group mb-4"
        >
          <img
            src={avatar}
            alt="Avatar"
            className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover border-4 border-white shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>

        {/* Tên với animation */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-2 text-center"
        >
          {name}
        </motion.h1>

        {/* Contact Info với stagger animation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 text-gray-300 mb-1 text-sm md:text-base text-center w-1/2 max-w-4xl"
        >
          <ContactItem
            icon={
              <svg
                className="w-4 h-4 md:w-5 md:h-5 opacity-90"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            }
            href={`tel:${contact.phone}`}
            label={contact.phone}
          />
          <ContactItem
            icon={
              <svg
                className="w-4 h-4 md:w-5 md:h-5 opacity-70"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            }
            href={`mailto:${contact.email}`}
            label={contact.email}
          />
          <ContactItem
            icon={
              <svg
                className="w-4 h-4 md:w-5 md:h-5 opacity-90"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            }
            href={contact.website}
            label="LinkedIn"
            external
          />
          <ContactItem
            icon={
              <svg
                className="w-4 h-4 md:w-10 md:h-10 opacity-70"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            }
            label={isEnglish ? contact.address.en : contact.address.vi}
          />
        </motion.div>
        {/* Line phân cách với animation */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
          className="max-w-4xl border-t border-gray-600 my-6"
        />
      </div>
    </header>
  );
};

// Contact Item Component
const ContactItem = ({ icon, href, label, external = false }) => {
  const content = (
    <div className="flex items-center justify-center gap-2 hover:text-blue-400 transition-colors duration-300">
      {icon}
      <span className="text-white">{label}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="flex justify-center py-1"
      >
        {content}
      </a>
    );
  }

  return <div className="flex justify-center py-1">{content}</div>;
};

export default Header;
