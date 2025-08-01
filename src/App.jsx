import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Objective from './components/Objective';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import myImage from './image/duy.jpg';

function App() {
  const [isEnglish, setIsEnglish] = useState(true);
  const toggleLanguage = () => setIsEnglish(!isEnglish);

  const profileData = {
    avatar: myImage,
    name: { vi: 'Nguyễn Khánh Duy', en: 'Nguyen Khanh Duy' },
    contact: {
      phone: '0388804547',
      email: 'duy6861@gmail.com',
      website: 'https://www.linkedin.com/in/duy-nguy%C3%AA%CC%83n-0a680b235/',
      address: { vi: 'Phường Hiệp Thành, Quận 12, TP.HCM', en: 'Hiep Thanh Ward, District 12, Ho Chi Minh City' }
    },
    objective: {
      vi: [
        "Mong muốn làm việc trong môi trường chuyên nghiệp và nâng cao kỹ năng làm việc nhóm.",
        "Háo hức đóng góp vào sự thành công và phát triển lâu dài của công ty.",
        "Không ngừng nâng cao trình độ tiếng Anh để giao tiếp tốt hơn và thăng tiến trong sự nghiệp.",
        "Đặt mục tiêu thành thạo các kỹ năng lập trình và cập nhật các công nghệ mới nhất.",
        "Trở thành một lập trình viên full-stack, thành thạo cả công nghệ frontend và backend để xây dựng các ứng dụng web hoàn chỉnh, có khả năng mở rộng và hiệu suất cao."
      ],
      en: [
        "Aspire to work in a professional environment and enhance teamwork skills.",
        "Eager to contribute to the company's success and long-term growth.",
        "Strive to improve English proficiency for better communication and career advancement.",
        "Aim to master programming skills and stay updated with the latest technologies.",
        "Become a full-stack developer, mastering both frontend and backend technologies to build complete, scalable, and high-performance web applications."
      ]
    },
    education: [
      {
        vi: { title: 'Đại học Hoa Sen (Tốt nghiệp)', date: '2017 - 2021', major: 'Kỹ thuật phần mềm' },
        en: { title: 'Hoa Sen University (Graduated)', date: '2017 - 2021', major: 'Software Engineering' }
      }
    ],
    experience: [
      {
        vi: {
          company: 'DXC Technology Vietnam',
          position: 'Thực tập sinh',
          date: 'Tháng 5 2021 - Tháng 9 2023'
        },
        en: {
          company: 'DXC Technology Vietnam',
          position: 'Intern',
          date: 'May 2021 - Sep 2023'
        }
      },
      {
        vi: {
          company: 'DXC Technology Vietnam',
          position: 'Chuyên viên phân tích lập trình',
          date: 'Tháng 9 2021 - Tháng 9 2023'
        },
        en: {
          company: 'DXC Technology Vietnam',
          position: 'Associate Professional Programmer Analyst',
          date: 'Sep 2021 - Sep 2023'
        }
      }
    ],
    skills: {
      language: { vi: 'Tiếng Anh', en: 'English' },
      programmingLanguage: { vi: 'Ngôn ngữ lập trình', en: 'Programming language' },
      frameworks: { vi: 'Frameworks & Thư viện', en: 'Frameworks & Libraries' },
      stateManagement: { vi: 'Quản lý trạng thái', en: 'State Management' },
      uiFrameworks: { vi: 'UI Frameworks & Styling', en: 'UI Frameworks & Styling' },
      backend: { vi: 'Phát triển Backend', en: 'Backend Development' },
      api: { vi: 'API & Xử lý dữ liệu', en: 'API & Data Handling' },
      versionControl: { vi: 'Kiểm soát phiên bản', en: 'Version Control' },
      testing: { vi: 'Kiểm thử & Gỡ lỗi', en: 'Testing & Debugging' },
      softSkills: { vi: 'Kỹ năng mềm', en: 'Soft skills' },
      languageSkills: [
        { name: { vi: 'Tiếng Anh', en: 'English' }, proficiency: { vi: 'Thành thạo chuyên nghiệp', en: 'Professional proficiency' } },
        { name: { vi: 'Tiếng Việt', en: 'Vietnamese' }, proficiency: { vi: 'Bản ngữ', en: 'Native proficiency' } },
      ],
      programmingLanguages: ['C#', 'Javascript', 'HTML 5', 'CSS', 'C++(Basic)', 'java(Basic)', 'php(Basic)'],
      frameworksAndLibraries: ['ReactJS', 'React-Native', 'Next.js (Basic)', 'jQuery', 'VueJS', 'Angular(basic)'],
      stateManagementTools: ['Redux', 'Context API', 'Hooks', 'Zustand'],
      uiFrameworksAndStylingTools: ['Tailwind CSS', 'MUI', 'Bootstrap', "Antdesign", 'Styled Components', 'Sass'],
      backendTechnologies: ['Node.js', '.NET Core (Basic)', 'ASP.NET (Basic)'],
      apiAndDataHandlingTools: ['RESTful API', 'Axios(basic)'],
      versionControlTools: ['Git', 'GitHub', 'Bitbucket'],
      testingAndDebuggingTools: ['Chrome Dev Tools'],
      softSkillsList: ['Researching', 'Problem Solving', 'Teamwork', 'Communication', 'Self-Learning'],
    },
    projects: [
      {
        vi: {
          name: 'Trang web quản lý thông tin nhân viên',
          tech: 'Angular framework',
          link: 'https://proect-1463.web.app/',
          description: 'Trang đăng nhập/đăng ký, bảng điều khiển thông tin nhân viên, thêm/xóa/sửa thông tin nhân viên'
        },
        en: {
          name: 'Employee information management website',
          tech: 'Angular framework',
          link: 'https://proect-1463.web.app/',
          description: 'login/registration page, employee information panel, add/delete/edit employee information'
        }
      },
      {
        vi: { name: 'Trang web bán quần áo', tech: 'React', link: 'https://clothes-web-duy.vercel.app/' },
        en: { name: 'Clothing website', tech: 'React', link: 'https://clothes-web-duy.vercel.app/' }
      },
      {
        vi: {
          name: 'UnityGame: Knight\'s Adventure',
          tech: 'Unity',
          description: 'thanh máu, điểm cao, tháp pháo, kẻ thù, qua màn, di chuyển'
        },
        en: {
          name: 'UnityGame: Knight\'s Adventure',
          tech: 'Unity',
          description: 'health bar, high score, gun turret, enemies, level pass, move'
        }
      }
    ],
    zurichTeam: {
      vi: {
        name: 'Zurich UK',
        teamSize: 'khoảng 50 người',
        position: 'Frontend developer',
        responsibility: [
          'Sửa lỗi và tối ưu hóa UI & các tính năng trên trang web. Xác định, khắc phục sự cố và giải quyết các vấn đề UI/UX để đảm bảo trải nghiệm người dùng liền mạch.',
          'Phát triển và triển khai UI dựa trên các thiết kế được giao. Chuyển đổi các thiết kế từ Figma, Adobe XD hoặc các công cụ thiết kế khác thành giao diện web tương tác và thân thiện với người dùng. Cộng tác chặt chẽ với các nhà thiết kế và nhà phát triển backend để duy trì tính nhất quán về thiết kế và chức năng.',
          'Hỗ trợ kiểm tra và đảm bảo chất lượng sản phẩm. Làm việc với người kiểm tra (nhóm QA) để xác định và giải quyết các vấn đề trước khi triển khai.'
        ],
        tech: 'ReactJs, Sitecore'
      },
      en: {
        name: 'Zurich UK',
        teamSize: 'around 50 or so',
        position: 'Frontend developer',
        responsibility: [
          'Fix errors and optimize UI & features on the website. Identify, troubleshoot, and resolve UI/UX issues to ensure a seamless user experience.',
          'Develop and implement UI based on assigned designs. Convert designs from Figma, Adobe XD, or other design tools into interactive and user-friendly web interfaces. Collaborate closely with designers and backend developers to maintain design and functionality consistency.',
          'Support testing and ensure product quality. Work with testers (QA team) to identify and resolve issues before deployment.'
        ],
        tech: 'ReactJs, Sitecore'
      }
    },
    manulifeTeam: {
      vi: {
        name: 'Manulife',
        teamSize: 'khoảng 50 người',
        position: 'Frontend developer',
        responsibility: [
          'Sửa lỗi và tối ưu hóa UI & các tính năng trên trang web. Xác định, khắc phục sự cố và giải quyết các vấn đề UI/UX để đảm bảo trải nghiệm người dùng liền mạch.',
          'Hỗ trợ kiểm tra và đảm bảo chất lượng sản phẩm. Làm việc với người kiểm tra (nhóm QA) để xác định và giải quyết các vấn đề trước khi triển khai.'
        ],
        tech: 'ReactJs'
      },
      en: {
        name: 'Manulife',
        teamSize: 'around 50 or so',
        position: 'Frontend developer',
        responsibility: [
          'Fix errors and optimize UI & features on the website. Identify, troubleshoot, and resolve UI/UX issues to ensure a seamless user experience.',
          'Support testing and ensure product quality. Work with testers (QA team) to identify and resolve issues before deployment.'
        ],
        tech: 'ReactJs'
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 min-h-screen text-white scroll-smooth">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Language Toggle Button */}
        <div className="fixed top-24 right-6 z-50 flex items-center scale-100 sm:scale-110">
          <span className="text-white mr-3 text-sm font-medium">
            {isEnglish ? 'English' : 'Tiếng Việt'}
          </span>
          <label htmlFor="language-toggle" className="inline-flex items-center cursor-pointer">
            <span className="sr-only">Toggle Language</span>
            <div className="relative">
              <input
                id="language-toggle"
                type="checkbox"
                checked={isEnglish}
                onChange={toggleLanguage}
                className="hidden"
              />
              <div className="toggle-container w-12 h-6 bg-gray-300 rounded-full shadow-inner"></div>
              <div
                className={`toggle-circle absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ease-in-out ${isEnglish ? 'translate-x-6' : ''
                  }`}
              ></div>
            </div>
          </label>
        </div>

        {/* Main Content */}
        <Header avatar={myImage} name={profileData.name[isEnglish ? 'en' : 'vi']} contact={profileData.contact} isEnglish={isEnglish} />

        <section id="objective" className="scroll-mt-20">
          <Objective objective={profileData.objective[isEnglish ? 'en' : 'vi']} isEnglish={isEnglish} />
        </section>

        <section id="education" className="scroll-mt-20">
          <Education education={profileData.education} isEnglish={isEnglish} />
        </section>

        <section id="experience" className="scroll-mt-20">
          <Experience
            experience={profileData.experience}
            zurichTeam={profileData.zurichTeam}
            manulifeTeam={profileData.manulifeTeam}
            isEnglish={isEnglish}
          />
        </section>

        <section id="skills" className="scroll-mt-20">
          <Skills skills={profileData.skills} isEnglish={isEnglish} />
        </section>

        <section id="projects" className="scroll-mt-20">
          <Projects projects={profileData.projects} isEnglish={isEnglish} />
        </section>
      </div>
      {/* Thêm Footer */}
      <Footer isEnglish={isEnglish} />
    </div>
  );
}

export default App;