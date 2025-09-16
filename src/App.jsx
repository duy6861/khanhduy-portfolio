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
        vi: { title: 'Đại học Hoa Sen (Tốt nghiệp)', date: '2018 - 2024', major: 'Kỹ thuật phần mềm' },
        en: { title: 'Hoa Sen University (Graduated)', date: '2018 - 2024', major: 'Software Engineering' }
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
          description: 'Login/registration page, employee information panel, add/delete/edit employee information'
        }
      },
      {
        vi: {
          name: 'Sàn giáo dục thương mại điện tử',
          tech: 'React, Redux, Firebase ...',
          link: 'https://edumart-git-use-redux-toolkit-duys-projects-f4eed92b.vercel.app/',
          description: 'Trang đăng nhập/đăng ký, bảng hiện thị thông tin các khóa học, Tìm kiếm Sản phẩm, danh sách yêu thích, lọc theo giá, chát bot, lịch sử xem ....'
        },
        en: {
          name: 'E-commerce Education Platform',
          tech: 'React, Redux, Firebase ...',
          link: 'https://edumart-henna.vercel.app/',
          description: 'Login/registration page, course information dashboard, product search, wishlist, price filtering, chatbot, viewing history, and more.'
        }
      },
      {
        vi: { name: 'Trang web bán quần áo', tech: 'React ...', link: 'https://clothes-web-duy.vercel.app/' },
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
          // 👇 GIỮ NGUYÊN PHẦN CŨ
          'Sửa lỗi và tối ưu hóa UI & các tính năng trên trang web. Xác định, khắc phục sự cố và giải quyết các vấn đề UI/UX để đảm bảo trải nghiệm người dùng liền mạch.',
          'Phát triển và triển khai UI dựa trên các thiết kế được giao. Chuyển đổi các thiết kế từ Figma, Adobe XD hoặc các công cụ thiết kế khác thành giao diện web tương tác và thân thiện với người dùng. Cộng tác chặt chẽ với các nhà thiết kế và nhà phát triển backend để duy trì tính nhất quán về thiết kế và chức năng.',
          'Hỗ trợ kiểm tra và đảm bảo chất lượng sản phẩm. Làm việc với người kiểm tra (nhóm QA) để xác định và giải quyết các vấn đề trước khi triển khai.',

          // 👇 THÊM PHẦN MỚI VÀO CUỐI
          'Xây dựng giao diện workflow đa bước: Phát triển 6 trang chức năng: ToleranceCheckPage, ProductDetailsPage, CategoriesPage, ApplyPage, MembersPage, MemberLTAPage. Quản lý điều hướng có điều kiện, cảnh báo khi rời trang chưa lưu, và điều khiển luồng nghiệp vụ (tiếp tục, quay lại, lưu & thoát).',
          'Xử lý form và validation phức tạp: Triển khai hệ thống validation nhiều tầng cho các quy tắc nghiệp vụ bảo hiểm (kiểm tra tolerance, % chênh lệch, số lượng thành viên, định dạng ngày/tháng, mã nghề nghiệp...). Tự động định dạng dữ liệu (postcodes, %, ngày sinh), hiển thị lỗi inline và tổng hợp lỗi. Xử lý edge case: focus tự động, disable/enable nút, cảnh báo khi thay đổi loại chính sách.',
          'Tích hợp upload/download file Excel: Cho phép người dùng upload file Excel → chuyển sang base64 → gọi API → validate từng dòng → hiển thị lỗi chi tiết. Hỗ trợ download template và xuất dữ liệu hiện tại ra file. Xử lý dataset lớn (1000+ dòng) với phân trang, lọc, sắp xếp phía client.',
          'Quản lý state và tích hợp API: Sử dụng Redux để quản lý state toàn cục: quote, categories, members, loading status. Gọi API bất đồng bộ (async/await) với xử lý lỗi, loading state, và race condition (dùng cờ isMounted). Tự động lock/unlock quote khi vào/ra trang để tránh xung đột dữ liệu.',
          'Thành phần động và tái sử dụng: Xây dựng hệ thống tab động (CategoryTabs) cho phép thêm/xóa/sửa danh mục, kèm validation riêng cho từng tab. Tạo modal confirm tùy chỉnh cho các hành động quan trọng: Accept Tolerance, Push to Rate Review, Take Off Portal. Dùng useRef, useEffect, useCallback để tối ưu hiệu suất và quản lý side effect.',
          'Tối ưu trải nghiệm người dùng (UX): Tự động focus vào trường cần nhập sau khi thêm/xóa. Phân trang, lọc, sắp xếp bảng dữ liệu lớn. Hiển thị skeleton, loading spinner, và thông báo lỗi thân thiện. Tích hợp Tealium để theo dõi hành vi người dùng (số lượng danh mục, thao tác eligibility...).',
          'Kiến thức chuyên sâu về nghiệp vụ bảo hiểm: Hiểu rõ các loại sản phẩm: Group Life (GL), Group Income Protection (GIP), Registered/Excepted Trust. Xử lý logic nghiệp vụ: tolerance breach, calculation method (salary multiplier vs fixed benefit), eligibility criteria, occupation code check. Đảm bảo tuân thủ quy định: không cho phép lưu nếu dữ liệu không hợp lệ, cảnh báo khi có rủi ro (occupation code 7).'
        ],
        tech: 'ReactJs, Sitecore'
      },
      en: {
        name: 'Zurich UK',
        teamSize: 'around 50 or so',
        position: 'Frontend developer',
        responsibility: [
          // 👇 GIỮ NGUYÊN PHẦN CŨ
          'Fix errors and optimize UI & features on the website. Identify, troubleshoot, and resolve UI/UX issues to ensure a seamless user experience.',
          'Develop and implement UI based on assigned designs. Convert designs from Figma, Adobe XD, or other design tools into interactive and user-friendly web interfaces. Collaborate closely with designers and backend developers to maintain design and functionality consistency.',
          'Support testing and ensure product quality. Work with testers (QA team) to identify and resolve issues before deployment.',

          // 👇 THÊM PHẦN MỚI VÀO CUỐI
          'Built multi-step workflow interfaces: Developed 6 functional pages — ToleranceCheckPage, ProductDetailsPage, CategoriesPage, ApplyPage, MembersPage, MemberLTAPage. Implemented conditional navigation, unsaved change warnings, and business flow controls (continue, back, save & exit).',
          'Handled complex form validation: Deployed multi-layer validation logic for insurance business rules (tolerance checks, percentage variance, member count, date/month formatting, occupation codes, etc.). Automated data formatting (postcodes, percentages, birth dates), displayed inline and aggregated errors. Managed edge cases: auto-focus, dynamic button enable/disable, and policy type change alerts.',
          'Integrated Excel file upload/download: Enabled users to upload Excel files → convert to base64 → call API → validate row-by-row → display detailed errors. Supported template downloads and exporting current data to files. Handled large datasets (1,000+ rows) with client-side pagination, filtering, and sorting.',
          'Managed state and integrated APIs: Used Redux to manage global state (quote, categories, members, loading status). Called asynchronous APIs (async/await) with error handling, loading states, and race condition mitigation (using isMounted flags). Automatically locked/unlocked quotes on page entry/exit to prevent data conflicts.',
          'Designed dynamic and reusable components: Built dynamic CategoryTabs allowing add/edit/delete categories with per-tab validation. Created custom modal confirmations for critical actions: Accept Tolerance, Push to Rate Review, Take Off Portal. Optimized performance and managed side effects using useRef, useEffect, and useCallback.',
          'Enhanced user experience (UX): Auto-focused input fields after adding/deleting items. Implemented pagination, filtering, and sorting for large data tables. Displayed skeleton loaders, spinners, and user-friendly error messages. Integrated Tealium to track user behavior (number of categories, eligibility actions, etc.).',
          'Deep insurance domain knowledge: Understood key products: Group Life (GL), Group Income Protection (GIP), Registered/Excepted Trust. Implemented business logic: tolerance breach detection, calculation methods (salary multiplier vs. fixed benefit), eligibility criteria, and occupation code validation. Ensured regulatory compliance: blocked saves on invalid data and issued warnings for high-risk occupation codes (e.g., code 7).'
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

        <section id="objective" className="pt-4">
          <Objective objective={profileData.objective[isEnglish ? 'en' : 'vi']} isEnglish={isEnglish} />
        </section>

        <section id="education" className="pt-4">
          <Education education={profileData.education} isEnglish={isEnglish} />
        </section>

        <section id="experience" className="pt-4">
          <Experience
            experience={profileData.experience}
            zurichTeam={profileData.zurichTeam}
            manulifeTeam={profileData.manulifeTeam}
            isEnglish={isEnglish}
          />
        </section>

        <section id="skills" className="pt-4">
          <Skills skills={profileData.skills} isEnglish={isEnglish} />
        </section>

        <section id="projects" className="pt-4">
          <Projects projects={profileData.projects} isEnglish={isEnglish} />
        </section>
      </div>
      {/* Thêm Footer */}
      <Footer isEnglish={isEnglish} />
    </div>
  );
}

export default App;