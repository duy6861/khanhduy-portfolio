import React from 'react';

const Footer = ({ isEnglish }) => {
  return (
    <footer className="w-full relative bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-sm border-t border-gray-700 text-white py-10 mt-12 shadow-lg animate-fadeIn">
      {/* Ánh sáng nền nhẹ cho depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

          {/* Thông tin bản quyền */}
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-sm font-light tracking-wide">
              &copy; {new Date().getFullYear()}{' '}
              <span className="font-semibold text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-105">
                {isEnglish ? 'Nguyen Khanh Duy' : 'Nguyễn Khánh Duy'}
              </span>
              . {isEnglish ? 'All rights reserved.' : 'Đã đăng ký bản quyền.'}
            </p>
            <p className="text-gray-400 text-xs mt-1 italic opacity-90">
              {isEnglish
                ? 'Crafted with passion for web development.'
                : 'Tạo ra bằng đam mê phát triển web.'}
            </p>
          </div>

          {/* Mạng xã hội - Hiệu ứng nâng cao */}
          <div className="flex space-x-6">
            {[
              {
                href: 'https://www.linkedin.com/in/duy-nguyễn-0a680b235/',
                color: 'text-blue-500 hover:text-blue-400',
                label: 'LinkedIn',
                svgPath:
                  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
              },
              {
                href: 'https://github.com/duy6861',
                color: 'text-gray-300 hover:text-white',
                label: 'GitHub',
                svgPath:
                  'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
              },
              {
                href: 'mailto:duy6861@gmail.com',
                color: 'text-red-400 hover:text-red-300',
                label: 'Email',
                svgPath:
                  'M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h20.727c.904 0 1.636.732 1.636 1.636zM4.156 7.07l6.545 4.91c.452.34.99.51 1.548.51s1.096-.17 1.548-.51l6.545-4.91H4.156z',
              },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${link.color} transition-all duration-300 ease-out transform hover:scale-125 hover:drop-shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded-full`}
                aria-label={link.label}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={link.svgPath} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Ghi chú nhỏ */}
        <div className="mt-8 text-center text-gray-400 text-xs md:text-sm tracking-wide opacity-80">
          <p>
            {isEnglish
              ? 'Built with React & Tailwind CSS — Fully Responsive & Accessible'
              : 'Xây dựng bằng React & Tailwind CSS — Tối ưu di động & thân thiện với người dùng'}
          </p>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;