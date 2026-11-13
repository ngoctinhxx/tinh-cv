/* --------------------------------------------------------------------------
       1. BILINGUAL DICTIONARY (VI / EN)
       -------------------------------------------------------------------------- */
    const translations = {
      vi: {
        nav_sub: "IT Lecturer & Researcher",
        nav_home: "Trang chủ",
        nav_about: "Về tôi",
        nav_experience: "Kinh nghiệm",
        nav_education: "Học vấn",
        nav_skills: "Kỹ năng",
        nav_projects: "Dự án",
        nav_research: "Nghiên cứu",
        nav_contact: "Liên hệ",
        btn_download_cv: "Tải CV / In PDF",
        btn_download_cv_hero: "Tải CV (PDF)",
        btn_download_cv_full: "In hồ sơ / Lưu PDF",
        btn_explore_profile: "Khám phá hồ sơ",
        btn_view_research: "Xem đề tài nghiên cứu",
        hero_eyebrow: "Lecturer • Developer • AI Research",
        hero_title: "IT Lecturer | Software Developer | AI & LLM Researcher",
        hero_tagline: "\"Connecting Education, Software Engineering & Artificial Intelligence.\"",
        hero_bio_short: "Giảng viên Khoa Công nghệ thông tin tại Trường Đại học Đông Á. Kết hợp nền tảng kỹ thuật phần mềm vững chắc, kinh nghiệm phát triển ứng dụng di động & web, cùng định hướng nghiên cứu ứng dụng Mô hình ngôn ngữ lớn (LLM) và Chatbot thông minh vào giáo dục đại học.",
        hero_label_role: "Vị trí hiện tại",
        hero_val_role: "Giảng viên CNTT (10/2023 – Nay)",
        hero_label_academic: "Trình độ học vấn",
        hero_val_academic: "Thạc sĩ (Hoàn thành 2026)",
        hero_label_location: "Địa điểm công tác",
        hero_val_location: "Đà Nẵng, Việt Nam",
        badge_academic_top: "Faculty of IT",
        badge_academic_bottom: "Đại học Đông Á",
        badge_ai_top: "Research Focus",
        badge_ai_bottom: "LLM & Education AI",
        
        about_eyebrow: "Giới thiệu tổng quan",
        about_title: "Hồ Sơ Chuyên Môn",
        about_subtitle: "Sự hội tụ giữa chuẩn mực đào tạo học thuật, năng lực lập trình ứng dụng thực tiễn và tư duy nghiên cứu công nghệ mới.",
        about_para_1: "<strong>Phạm Ngọc Tính</strong> hiện đang công tác với vai trò là <strong>Giảng viên Khoa Công nghệ thông tin</strong> tại <strong>Trường Đại học Đông Á</strong> (từ tháng 10/2023 đến nay). Trên giảng đường, thầy tập trung truyền cảm hứng học tập và trang bị nền tảng công nghệ phần mềm thực tế, phương pháp tư duy lập trình vững chắc cho sinh viên.",
        about_para_2: "Xuất phát từ nền tảng đào tạo chuyên ngành <strong>Công nghệ phần mềm</strong> cùng kinh nghiệm thực tế trong phát triển ứng dụng di động (Flutter), giao diện web hiện đại (ReactJS) và quản trị cơ sở dữ liệu, thầy luôn chú trọng tính ứng dụng và chất lượng kiến trúc phần mềm trong giảng dạy.",
        about_para_3: "Thầy hoàn thành chương trình đào tạo Thạc sĩ năm 2026 với đề tài nghiên cứu trọng điểm: <em>\"PHÁT TRIỂN CHATBOT HỖ TRỢ TƯ VẤN TUYỂN SINH DỰA TRÊN MÔ HÌNH NGÔN NGỮ LỚN\"</em>. Hướng nghiên cứu hiện tại tập trung sâu vào ứng dụng Trí tuệ nhân tạo (AI), Mô hình ngôn ngữ lớn (LLM), Chatbot hội thoại thông minh và các giải pháp chuyển đổi số nâng cao trải nghiệm trong môi trường giáo dục đại học.",
        
        pillar_1_title: "Đào Tạo & Giảng Dạy",
        pillar_1_desc: "Giảng dạy tại Khoa Công nghệ thông tin Đại học Đông Á. Định hướng sinh viên tiếp cận chuẩn kỹ nghệ phần mềm, rèn luyện tư duy giải quyết vấn đề và thích ứng với làn sóng công nghệ mới.",
        pillar_2_title: "Phát Triển Phần Mềm",
        pillar_2_desc: "Kinh nghiệm thực hành lập trình ứng dụng di động đa nền tảng với Flutter/Dart, thiết kế giao diện web với ReactJS, tối ưu luồng trạng thái (BLoC, Redux) và tích hợp hệ thống cơ sở dữ liệu.",
        pillar_3_title: "Nghiên Cứu AI & LLM",
        pillar_3_desc: "Tập trung khai thác sức mạnh của Mô hình ngôn ngữ lớn (LLM), Conversational AI trong việc xây dựng hệ thống trợ lý ảo hỗ trợ tư vấn tuyển sinh và đổi mới phương thức tương tác giáo dục.",

        exp_eyebrow: "Hành trình nghề nghiệp",
        exp_title: "Kinh Nghiệm Chuyên Môn",
        exp_subtitle: "Lộ trình tích lũy từ môi trường doanh nghiệp phần mềm đến vai trò Giảng viên đại học và nghiên cứu công nghệ.",
        exp_role_1: "Giảng viên Công nghệ thông tin",
        exp_comp_1: "Trường Đại học Đông Á — Khoa Công nghệ thông tin",
        exp_time_1: "10/2023 – Hiện tại",
        exp_desc_1: "Đảm nhiệm công tác đào tạo và giảng dạy trong lĩnh vực Công nghệ thông tin; ứng dụng nền tảng chuyên môn sâu về công nghệ phần mềm và quy trình phát triển ứng dụng vào bài giảng. Luôn quan tâm tìm tòi, thúc đẩy các phương pháp ứng dụng công nghệ hiện đại, trí tuệ nhân tạo (AI) và các mô hình ngôn ngữ lớn (LLM) vào môi trường học thuật.",
        exp_tag_1a: "Giảng dạy CNTT",
        exp_tag_1b: "Công nghệ phần mềm",
        exp_tag_1c: "Ứng dụng AI trong Giáo dục",
        exp_tag_1d: "Large Language Models",
        exp_role_2: "Mobile Developer Intern",
        exp_desc_2: "Tham gia thực tập trong lĩnh vực phát triển ứng dụng di động; tiếp cận quy trình phát triển phần mềm chuyên nghiệp với Flutter, tối ưu hóa giao diện người dùng và quản lý luồng trạng thái phức tạp với BLoC pattern.",
        exp_role_3: "Frontend Developer Intern",
        exp_desc_3: "Thực tập chuyên môn trong mảng phát triển giao diện web; làm việc cùng công nghệ ReactJS, JavaScript hiện đại, xây dựng các thành phần giao diện người dùng có tính tương tác cao và chuẩn hóa CSS/HTML.",

        edu_eyebrow: "Hành trình học thuật",
        edu_title: "Học Vấn & Luận Văn Thạc Sĩ",
        edu_subtitle: "Nền tảng đào tạo chính quy, từ xuất sắc Đại học Công nghệ phần mềm đến định hướng nghiên cứu chuyên sâu về AI.",
        edu_master_level: "Trình độ Thạc sĩ",
        edu_master_year: "Hoàn thành năm 2026",
        edu_master_degree: "Chương Trình Thạc Sĩ",
        edu_master_sub: "Đào tạo sau đại học & Nghiên cứu ứng dụng",
        thesis_badge: "Luận văn Thạc sĩ",
        edu_bachelor_level: "Trình độ Đại học",
        edu_bachelor_degree: "Kỹ Sư Công Nghệ Phần Mềm",
        edu_bachelor_desc: "Tốt nghiệp chuyên ngành Công nghệ phần mềm với kết quả học tập xuất sắc. Được trang bị nền tảng kiến trúc phần mềm, cấu trúc dữ liệu và giải thuật, công nghệ cơ sở dữ liệu và quy trình kiểm thử phần mềm.",
        gpa_label: "Điểm Trung Bình Tốt Nghiệp",
        gpa_sub: "Academic Achievement",

        skills_eyebrow: "Năng lực cốt lõi",
        skills_title: "Kỹ Năng & Hướng Chuyên Môn",
        skills_subtitle: "Hệ thống công nghệ phần mềm thực hành và các chủ đề nghiên cứu trọng tâm.",
        skill_group_languages: "Ngôn Ngữ Lập Trình",
        skill_group_frameworks: "Framework & Nền Tảng",
        skill_group_databases: "Cơ Sở Dữ Liệu",
        skill_group_vcs: "Quản Lý Mã Nguồn",
        skill_group_ai: "Định Hướng Nghiên Cứu AI",
        skill_ai_note: "* Đây là các lĩnh vực trọng tâm và đề tài nghiên cứu học thuật đang được theo đuổi.",
        skill_group_comm_lang: "Ngoại Ngữ",
        lang_vietnamese: "Tiếng Việt",
        lang_native: "Bản ngữ (Native)",
        lang_english: "Tiếng Anh",

        projects_eyebrow: "Dự án kỹ thuật",
        projects_title: "Dự Án Phát Triển Phần Mềm",
        projects_subtitle: "Các sản phẩm phần mềm thực tế kết hợp giải pháp IoT, Mobile và Web Applications.",
        proj_role_mobile: "Vai trò: Mobile Developer",
        proj_role_fe: "Vai trò: Frontend Developer",
        proj_team_4: "Nhóm: 4 thành viên",
        proj_team_6: "Nhóm: 6 thành viên",
        proj_team_2: "Nhóm: 2 thành viên",
        proj_team_1: "Cá nhân (1 thành viên)",
        proj_1_title: "Smart Home",
        proj_1_desc: "Ứng dụng hỗ trợ người dùng điều khiển và giám sát các thiết bị trong gia đình thông minh từ xa, kết hợp đồng bộ công nghệ Internet of Things (IoT), vi điều khiển Arduino và ứng dụng di động Flutter trực quan.",
        proj_2_title: "Music Online Website",
        proj_2_desc: "Website nghe nhạc trực tuyến cho phép người dùng tìm kiếm, phát nhạc và khám phá các bài hát theo sở thích cá nhân; xây dựng giao diện hiện đại với ReactJS và quản lý luồng dữ liệu bài hát với Redux.",
        proj_3_title: "Tic Tac Toe Game",
        proj_3_desc: "Ứng dụng trò chơi cờ ca-rô (Tic Tac Toe) trên nền tảng di động với trải nghiệm mượt mà; tích hợp Firebase Realtime Database để lưu trữ trạng thái bàn cờ và đồng bộ dữ liệu người chơi theo thời gian thực.",
        proj_4_title: "Clothing Shop Application",
        proj_4_desc: "Ứng dụng thương mại điện tử mua sắm thời trang trên thiết bị di động, hỗ trợ người dùng xem danh mục, lọc và lựa chọn sản phẩm thuận tiện; kết nối API hệ thống qua Retrofit và backend Node.js.",

        research_badge_type: "Master's Thesis / Academic Research",
        research_badge_year: "2026",
        research_heading: "Exploring the Intersection of AI & Education",
        research_desc: "Đề tài tập trung nghiên cứu ứng dụng Trí tuệ nhân tạo và Mô hình ngôn ngữ lớn (LLM) trong lĩnh vực công nghệ giáo dục (Educational Technology). Mục tiêu là giải quyết bài toán tư vấn tuyển sinh đại học thông qua giao tiếp hội thoại tự nhiên, hỗ trợ cung cấp thông tin ngành học, chính sách và định hướng nghề nghiệp cho học sinh, sinh viên một cách trực quan, chính xác và kịp thời.",
        btn_discuss_research: "Trao đổi về đề tài nghiên cứu",

        cert_eyebrow: "Mở rộng quốc tế & Sở thích",
        cert_title: "Chứng Nhận & Hoạt Động",
        cert_subtitle: "Trải nghiệm học tập dự án quốc tế và các hoạt động cân bằng cuộc sống.",
        cert_tag: "International Program",
        cert_desc: "Hoàn thành chương trình học tập theo dự án quốc tế (hình thức Online) do Viện Công nghệ Shibaura (Nhật Bản) tổ chức; giao lưu học thuật và phối hợp giải quyết bài toán kỹ thuật cùng sinh viên quốc tế.",
        interest_tag: "Personal Interests",
        interest_title: "Sở Thích & Đam Mê",
        interest_desc: "Duy trì lối sống năng động, tinh thần học hỏi liên tục và nguồn cảm hứng sáng tạo thông qua thể thao, nghệ thuật và khám phá công nghệ mới.",
        interest_football: "Bóng đá",
        interest_reading: "Đọc sách",
        interest_music: "Âm nhạc",
        interest_tech: "Khám phá công nghệ",

        contact_eyebrow: "Kết nối & Hợp tác",
        contact_heading: "Let's Connect & Collaborate",
        contact_intro: "Luôn sẵn sàng đón nhận các cơ hội trao đổi học thuật, hợp tác nghiên cứu ứng dụng Trí tuệ nhân tạo (AI/LLM) trong giáo dục, các dự án kỹ thuật phần mềm hoặc lời mời giảng dạy, chia sẻ chuyên môn.",
        btn_send_email: "Gửi Email trực tiếp",
        btn_copy: "Sao chép",
        btn_visit: "Truy cập",
        contact_phone_label: "Điện thoại",
        contact_loc_label: "Địa điểm",
        contact_loc_val: "Đà Nẵng, Việt Nam",
        btn_back_to_top: "Lên đầu trang",
        toast_copied: "Đã sao chép vào bộ nhớ tạm!"
      },
      en: {
        nav_sub: "IT Lecturer & Researcher",
        nav_home: "Home",
        nav_about: "About",
        nav_experience: "Experience",
        nav_education: "Education",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_research: "Research",
        nav_contact: "Contact",
        btn_download_cv: "Download CV / Print",
        btn_download_cv_hero: "Download CV (PDF)",
        btn_download_cv_full: "Print CV / Save PDF",
        btn_explore_profile: "Explore Profile",
        btn_view_research: "View Research",
        hero_eyebrow: "Lecturer • Developer • AI Research",
        hero_title: "IT Lecturer | Software Developer | AI & LLM Researcher",
        hero_tagline: "\"Connecting Education, Software Engineering & Artificial Intelligence.\"",
        hero_bio_short: "IT Lecturer at the Faculty of Information Technology, Dong A University. Combining rigorous software engineering expertise, mobile & web application experience, and research dedication to Large Language Models (LLMs) and conversational AI in higher education.",
        hero_label_role: "Current Position",
        hero_val_role: "IT Lecturer (10/2023 – Present)",
        hero_label_academic: "Academic Degree",
        hero_val_academic: "Master's Degree (Completed 2026)",
        hero_label_location: "Location",
        hero_val_location: "Da Nang, Vietnam",
        badge_academic_top: "Faculty of IT",
        badge_academic_bottom: "Dong A University",
        badge_ai_top: "Research Focus",
        badge_ai_bottom: "LLM & Education AI",
        
        about_eyebrow: "Professional Overview",
        about_title: "Academic & Engineering Profile",
        about_subtitle: "Bridging pedagogical excellence, practical software engineering foundations, and cutting-edge AI research.",
        about_para_1: "<strong>Pham Ngoc Tinh</strong> currently serves as an <strong>IT Lecturer at the Faculty of Information Technology</strong>, <strong>Dong A University</strong> (October 2023 – Present). In academia, he is dedicated to delivering industry-standard software engineering curricula, inspiring algorithmic problem-solving, and mentoring the next generation of engineers.",
        about_para_2: "Rooted in a formal background in <strong>Software Engineering</strong> alongside hands-on enterprise internship experience in cross-platform mobile development (Flutter), modern web interfaces (ReactJS), and database management, he emphasizes practical code architecture and system robustness in every educational endeavor.",
        about_para_3: "He completed his Master's program in 2026 with the focal thesis: <em>\"PHÁT TRIỂN CHATBOT HỖ TRỢ TƯ VẤN TUYỂN SINH DỰA TRÊN MÔ HÌNH NGÔN NGỮ LỚN\"</em> (English: <em>\"Development of an Admission Counseling Chatbot Based on Large Language Models\"</em>). His ongoing research focuses on applied Artificial Intelligence, Conversational Agents, and Educational Technology to elevate digital admission and advising workflows.",
        
        pillar_1_title: "Teaching & Education",
        pillar_1_desc: "Lecturing at the Faculty of Information Technology, Dong A University. Equipping students with software engineering standards, problem-solving mindsets, and adaptability to emerging tech.",
        pillar_2_title: "Software Development",
        pillar_2_desc: "Hands-on engineering expertise in cross-platform mobile apps with Flutter/Dart, modern web UI development with ReactJS, state management (BLoC, Redux), and database integrations.",
        pillar_3_title: "AI & LLM Research",
        pillar_3_desc: "Investigating Large Language Models (LLMs) and Conversational AI to architect intelligent admission assistants and enhance interactive educational technology.",

        exp_eyebrow: "Career Journey",
        exp_title: "Professional Experience",
        exp_subtitle: "Progressive career trajectory spanning software enterprise internships, university lecturing, and technological research.",
        exp_role_1: "IT Lecturer",
        exp_comp_1: "Dong A University — Faculty of Information Technology",
        exp_time_1: "10/2023 – Present",
        exp_desc_1: "Delivering core IT and software engineering training; integrating modern app development methodologies and architectural best practices into higher education courses. Actively exploring and promoting the pedagogical integration of AI, modern technologies, and Large Language Models into academic learning environments.",
        exp_tag_1a: "IT Higher Education",
        exp_tag_1b: "Software Engineering",
        exp_tag_1c: "AI in Education",
        exp_tag_1d: "Large Language Models",
        exp_role_2: "Mobile Developer Intern",
        exp_desc_2: "Interned in cross-platform mobile development; practiced professional software engineering workflows with Flutter, UI optimization, and reactive state management using the BLoC pattern.",
        exp_role_3: "Frontend Developer Intern",
        exp_desc_3: "Interned in modern web UI development; leveraged ReactJS and modern JavaScript to build responsive, interactive web interfaces and maintain standardized HTML5/CSS3 components.",

        edu_eyebrow: "Academic Milestones",
        edu_title: "Academic Background & Master's Thesis",
        edu_subtitle: "Rigorous academic pathway, from graduating with software engineering distinction to conducting applied AI research.",
        edu_master_level: "Master's Level",
        edu_master_year: "Completed 2026",
        edu_master_degree: "Master's Degree Program",
        edu_master_sub: "Postgraduate Studies & Applied Research",
        thesis_badge: "Master's Thesis",
        edu_bachelor_level: "Bachelor's Level",
        edu_bachelor_degree: "Bachelor of Software Engineering",
        edu_bachelor_desc: "Graduated with High Academic Distinction in Software Engineering. Extensively trained in software architecture, data structures & algorithms, database systems, and software quality assurance.",
        gpa_label: "Cumulative Graduation GPA",
        gpa_sub: "Academic Achievement",

        skills_eyebrow: "Core Competencies",
        skills_title: "Technical Expertise & Research Topics",
        skills_subtitle: "Practical software engineering stacks and primary research areas.",
        skill_group_languages: "Programming Languages",
        skill_group_frameworks: "Frameworks & Platforms",
        skill_group_databases: "Databases",
        skill_group_vcs: "Version Control & Tooling",
        skill_group_ai: "AI & Research Interests",
        skill_ai_note: "* These reflect core academic research directions and focal scholarly interests.",
        skill_group_comm_lang: "Languages",
        lang_vietnamese: "Vietnamese",
        lang_native: "Native",
        lang_english: "English",

        projects_eyebrow: "Featured Projects",
        projects_title: "Selected Technical Works",
        projects_subtitle: "Real-world software products integrating IoT, mobile engineering, and modern web architectures.",
        proj_role_mobile: "Role: Mobile Developer",
        proj_role_fe: "Role: Frontend Developer",
        proj_team_4: "Team: 4 members",
        proj_team_6: "Team: 6 members",
        proj_team_2: "Team: 2 members",
        proj_team_1: "Solo (1 member)",
        proj_1_title: "Smart Home",
        proj_1_desc: "An application enabling users to remotely monitor and control smart household appliances, seamlessly integrating Internet of Things (IoT) hardware, Arduino microcontrollers, and a Flutter mobile app.",
        proj_2_title: "Music Online Website",
        proj_2_desc: "A music streaming web application allowing users to search, stream, and discover favorite audio tracks, built with responsive ReactJS UI components and Redux state management.",
        proj_3_title: "Tic Tac Toe Game",
        proj_3_desc: "A mobile turn-based Tic Tac Toe game with smooth user interactions, featuring Firebase Realtime Database for live match state storage and instantaneous multi-device player synchronization.",
        proj_4_title: "Clothing Shop Application",
        proj_4_desc: "An e-commerce mobile shopping application facilitating intuitive product catalog browsing, filtering, and order handling, communicating via Retrofit HTTP client with a Node.js backend.",

        research_badge_type: "Master's Thesis / Academic Research",
        research_badge_year: "2026",
        research_heading: "Exploring the Intersection of AI & Education",
        research_desc: "This research investigates the integration of Artificial Intelligence and Large Language Models (LLMs) in Educational Technology. The primary focus is solving university admission counseling inquiries through natural language dialogue, delivering personalized, timely guidance regarding academic majors, policies, and career paths.",
        btn_discuss_research: "Discuss Research Topics",

        cert_eyebrow: "Global Exposure & Interests",
        cert_title: "Certifications & Activities",
        cert_subtitle: "International collaborative project exposure and personal creative balance.",
        cert_tag: "International Program",
        cert_desc: "Successfully completed the online Global Project-Based Learning Program (gPBL) hosted by the Shibaura Institute of Technology, Japan; collaborating internationally to analyze and solve technical challenges.",
        interest_tag: "Personal Interests",
        interest_title: "Interests & Pursuits",
        interest_desc: "Cultivating an active lifestyle, continuous curiosity, and creative inspiration through sports, arts, and exploring state-of-the-art tech.",
        interest_football: "Football",
        interest_reading: "Reading",
        interest_music: "Music",
        interest_tech: "Exploring New Tech",

        contact_eyebrow: "Let's Connect",
        contact_heading: "Let's Connect & Collaborate",
        contact_intro: "Open to scholarly exchanges, joint research in applied AI / LLMs for educational institutions, software engineering collaborations, and academic guest lectures.",
        btn_send_email: "Send Direct Email",
        btn_copy: "Copy",
        btn_visit: "Visit",
        contact_phone_label: "Phone Number",
        contact_loc_label: "Location",
        contact_loc_val: "Da Nang, Vietnam",
        btn_back_to_top: "Back to Top",
        toast_copied: "Copied to clipboard!"
      }
    };

    /* --------------------------------------------------------------------------
       2. STATE & LANGUAGE HANDLER
       -------------------------------------------------------------------------- */
    let currentLang = localStorage.getItem('pnt_lang') || 'vi';

    function setLanguage(lang) {
      currentLang = lang;
      localStorage.setItem('pnt_lang', lang);
      document.documentElement.lang = lang;

      const langToggleLabel = document.getElementById('lang-label');
      if (langToggleLabel) {
        langToggleLabel.textContent = lang === 'vi' ? 'EN' : 'VI';
      }

      // Update all elements with data-i18n
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = translations[lang][key];
          } else {
            el.innerHTML = translations[lang][key];
          }
        }
      });
    }

    document.getElementById('lang-toggle-btn').addEventListener('click', () => {
      setLanguage(currentLang === 'vi' ? 'en' : 'vi');
    });

    /* --------------------------------------------------------------------------
       3. DARK / LIGHT THEME TOGGLE
       -------------------------------------------------------------------------- */
    const savedTheme = localStorage.getItem('pnt_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('pnt_theme', newTheme);
    });

    /* --------------------------------------------------------------------------
       4. SCROLL PROGRESS & ACTIVE SCROLLSPY
       -------------------------------------------------------------------------- */
    const scrollProgress = document.getElementById('scroll-progress');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
      // 4.1 Update Progress Bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.pageYOffset / totalHeight) * 100 : 0;
      scrollProgress.style.width = progress + '%';

      // 4.2 Scrollspy Highlight Active Section
      let currentSectionId = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSectionId) {
          link.classList.add('active');
        }
      });
    });

    /* --------------------------------------------------------------------------
       5. MOBILE DRAWER NAVIGATION
       -------------------------------------------------------------------------- */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function toggleMobileDrawer() {
      mobileDrawer.classList.toggle('open');
      const isOpen = mobileDrawer.classList.contains('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    }

    mobileMenuBtn.addEventListener('click', toggleMobileDrawer);

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });

    /* --------------------------------------------------------------------------
       6. INTERSECTION OBSERVER FOR FADE-IN ON SCROLL
       -------------------------------------------------------------------------- */
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => {
      revealObserver.observe(el);
    });

    /* --------------------------------------------------------------------------
       7. UTILITY: COPY TO CLIPBOARD WITH TOAST
       -------------------------------------------------------------------------- */
    function copyToClipboard(text) {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => showToast());
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
          showToast();
        } catch (err) {
          console.error('Copy failed:', err);
        }
        document.body.removeChild(textArea);
      }
    }

    function showToast() {
      const toast = document.getElementById('toast-notification');
      const toastMsg = document.getElementById('toast-message');
      toastMsg.textContent = translations[currentLang]?.toast_copied || "Đã sao chép!";
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2500);
    }

    /* --------------------------------------------------------------------------
       8. PRINT CV / SAVE AS PDF FUNCTIONALITY
       -------------------------------------------------------------------------- */
    function handlePrintCV() {
      window.print();
    }

    /* --------------------------------------------------------------------------
       9. INITIALIZATION
       -------------------------------------------------------------------------- */
    document.addEventListener('DOMContentLoaded', () => {
      setLanguage(currentLang);
    });
