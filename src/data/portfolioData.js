export const portfolioData = {
  personal: {
    name: "Charles Navalta",
    fullName: "Charles Darwin Navalta",
    nickname: "Charles",
    role: "Computer Science Student",
    subRoles: ["Software Engineer", "AI & NLP Enthusiast", "Full-Stack Developer"],
    tagline: "Passionate about continuous learning, algorithmic problem-solving, and engineering scalable software that solves real-world challenges.",
    bio: "4th-year Computer Science student at the University of Cabuyao (Pamantasan ng Cabuyao) and creator/lead programmer of FalsiCode, my undergraduate thesis. I'm passionate about software engineering, NLP, and algorithmic problem-solving, with hands-on experience building practical solutions like CWTS BinBot (civic automation) and FalsiCode (academic NLP). I'm driven to keep learning and building software that solves real-world problems.",
    email: "charlesdarwinnavalta@gmail.com",
    github: "https://github.com/charlesnavalta",
    linkedin: "https://www.linkedin.com/in/charles-darwin-navalta-a908623b1/",
    location: "Cabuyao, Laguna, Philippines",
    isOpenToWork: true,
    statusText: "Open to Full-Time Roles & Opportunities",
    resumeUrl: "#",
  },

  education: {
    degree: "Bachelor of Science in Computer Science",
    university: "University of Cabuyao (Pamantasan ng Cabuyao)",
    gradYear: "Class of 2026 (4th Year Student)",
    honors: "Dean's Lister (S.Y. 2023–2024)",
    gpa: "Dean's List Standing",
    coursework: [
      "Data Structures & Algorithms",
      "Software Engineering & System Architecture",
      "Artificial Intelligence & NLP",
      "Database Management Systems (MySQL)",
      "Object-Oriented Programming (Java / C#)",
      "Web Development (React & REST APIs)",
      "Operating Systems & Docker",
      "Cloud & Distributed Systems"
    ],
    history: [
      {
        level: "College / Tertiary",
        institution: "University of Cabuyao (Pamantasan ng Cabuyao)",
        program: "Bachelor of Science in Computer Science",
        period: "2022 – Present (4th Year Student)",
        honors: "Dean's Lister (S.Y. 2023–2024)"
      },
      {
        level: "Senior High School",
        institution: "Cabuyao Institute of Technology",
        program: "TVL - Information and Communication Technology (ICT)",
        period: "2021 – 2023",
        honors: "With High Honors (2021–2022), With Honors (2022–2023)"
      },
      {
        level: "Junior High School",
        institution: "Cabuyao Integrated National High School",
        program: "Secondary Education",
        period: "2017 – 2021"
      },
      {
        level: "Elementary",
        institution: "Cabuyao Central Elementary School",
        program: "Primary Education",
        period: "2011 – 2017"
      }
    ]
  },

  stats: [
    { label: "Academic Standing", value: "Dean's List" },
    { label: "Undergraduate Thesis", value: "Lead Programmer" },
    { label: "Active Project Builds", value: "5+ Systems" },
    { label: "GitHub Repositories", value: "10+" },
  ],

  // Certifications list (Empty by default. When you earn certifications, simply add them here!)
  // Example schema:
  // {
  //   id: "aws-cloud-practitioner",
  //   title: "AWS Certified Cloud Practitioner (CLF-C02)",
  //   issuer: "Amazon Web Services (AWS)",
  //   issueDate: "2026",
  //   credentialUrl: "https://www.credly.com/...",
  //   category: "Cloud & Infrastructure",
  //   skillsCovered: ["AWS Core Services", "Cloud Architecture", "IAM & Security"],
  // }
  certifications: [],

  leaderships: [
    {
      role: "Member",
      org: "Association of Computer Science Students (ACSS)",
      institution: "Pamantasan ng Cabuyao",
      period: "2023 – Present",
      desc: "Active member contributing to CS departmental events, coding seminars, and student technology initiatives."
    },
    {
      role: "Member",
      org: "AWS Cloud Club",
      institution: "Pamantasan ng Cabuyao",
      period: "2024 – 2025",
      desc: "Participating in cloud architecture workshops, AWS foundational learning paths, and student developer summits."
    },
    {
      role: "Head Production",
      org: "NSTP Civic Welfare Training Service (CWTS)",
      institution: "Pamantasan ng Cabuyao",
      period: "2023 – 2024",
      desc: "Led the production team for community-oriented technical projects including the award-winning 'BinBot: Automated Trash Bin Segregation' system."
    },
    {
      role: "Class Auditor",
      org: "Senior High Student Council",
      institution: "Cabuyao Institute of Technology",
      period: "2022 – 2023",
      desc: "Managed class accountabilities, financial transparency, and records for the TVL-ICT cohort."
    }
  ],

  skills: {
    languages: [
      { name: "Python", level: 75, tag: "Thesis & NLP", levelLabel: "Proficient" },
      { name: "JavaScript (ES6+)", level: 70, tag: "React & Chrome Ext", levelLabel: "Working Proficiency" },
      { name: "HTML5 & CSS3", level: 75, tag: "Responsive UI", levelLabel: "Proficient" },
      { name: "SQL (MySQL)", level: 65, tag: "Database & ORM", levelLabel: "Competent" },
      { name: "Java", level: 58, tag: "DSA & AST Parsing", levelLabel: "Academic Base" },
      { name: "C# / .NET", level: 55, tag: "Unity Game Dev", levelLabel: "Applied Projects" },
    ],
    frameworks: [
      { name: "React.js (React 18)", category: "Frontend" },
      { name: "Flask & Flask-CORS", category: "Backend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "React Router DOM", category: "Frontend" },
      { name: "RESTful APIs", category: "Backend" },
      { name: "Axios", category: "Frontend" },
    ],
    dataScienceAndAI: [
      { name: "Scikit-Learn", category: "Machine Learning" },
      { name: "TF-IDF Vectorization", category: "NLP & Feature Extraction" },
      { name: "AST Parsing (javalang)", category: "Code Syntax Analysis" },
      { name: "N-Grams Tokenization", category: "Algorithms" },
      { name: "Cosine Similarity Metrics", category: "Machine Learning" },
      { name: "Pandas & NumPy", category: "Data Science" },
    ],
    toolsAndDevOps: [
      { name: "Docker & Docker Compose", category: "Containerization" },
      { name: "MySQL & SQLAlchemy", category: "Database ORM" },
      { name: "Git & GitHub", category: "Version Control" },
      { name: "Unity Game Engine", category: "Game Development" },
      { name: "Chrome Extension API (MV3)", category: "Tooling" },
      { name: "jsPDF & html2canvas", category: "Reporting & Export" },
    ]
  },

  // Highlighted Projects (Ordered by Date: Recent to Earlier)
  projects: [
    {
      id: "falsicode-thesis",
      title: "FalsiCode: Code Plagiarism Detection in DSA using AST, N-Grams & TF-IDF",
      tag: "Undergraduate Thesis / NLP & Algorithms",
      category: "Thesis",
      period: "2026 – Present",
      status: "In Progress",
      statusNote: "Active Capstone Development & Live Testing",
      featured: true,
      description: "Undergraduate thesis project at Pamantasan ng Cabuyao: An automated academic source code plagiarism detection system for Data Structures & Algorithms. Combines Abstract Syntax Tree (AST) structural parsing with N-Grams and TF-IDF cosine similarity to detect structural and semantic code plagiarism across student submissions.",
      highlights: [
        "Engineered AST static parsing using javalang to detect renamed variables, reordered methods, and disguised code structure.",
        "Implemented TF-IDF vectorization and N-Grams via Scikit-Learn to compute multi-metric similarity scores.",
        "Built a responsive full-stack platform deployed live at falsicode.vercel.app with automated PDF report exports (jsPDF) and Docker Compose support.",
      ],
      techStack: ["Python", "Flask", "Scikit-Learn (TF-IDF)", "AST (javalang)", "React 18", "MySQL", "Docker Compose", "Vercel"],
      github: "https://github.com/charlesnavalta/Code-Plagiarism-Detection-in-DSA-using-AST-N-Grams-and-TF-IDF",
      demo: "https://falsicode.vercel.app/",
      stats: { metric: "Live Platform", value: "FalsiCode" }
    },
    {
      id: "debugging-farm-game",
      title: "DebuggingFarm & Sunberry-Village: Interactive Simulation & Game Systems",
      tag: "Game Dev & C# Systems",
      category: "Software Engineering",
      period: "2026 – Present",
      status: "In Progress",
      statusNote: "Active Systems Exploration",
      featured: false,
      description: "Interactive game mechanics, laboratory simulation games, and extensible C# modding systems created with the Unity Engine and .NET game frameworks.",
      highlights: [
        "Programmed object-oriented player controllers, physics triggers, and state machines in C#.",
        "Implemented custom event listeners and content injection pipelines in Unity and modding frameworks.",
        "Designed modular architecture for game asset management and laboratory gameplay scenarios.",
      ],
      techStack: ["Unity Engine", "C#", ".NET", "Game Physics", "Object-Oriented Design"],
      github: "https://github.com/charlesnavalta/DebuggingFarm",
      demo: "https://github.com/charlesnavalta/DebuggingFarm",
      stats: { metric: "Platform", value: "Unity & C#" }
    },
    {
      id: "auto-answer-ext",
      title: "AutoAnswerExt: Chrome Browser Extension & DOM Automation Tool",
      tag: "Tooling & Automation",
      category: "Software Engineering",
      period: "2026",
      status: "Completed",
      statusNote: "Manifest V3 Built & Functional",
      featured: false,
      description: "A high-efficiency Google Chrome browser extension built with Manifest V3. Automates DOM parsing, form interaction, and question-answering workflows using event-driven background service workers and content scripts.",
      highlights: [
        "Engineered according to modern Chrome Extensions Manifest V3 standards with event-driven service workers.",
        "Implemented DOM mutation observers and content script injection for real-time page evaluation.",
        "Created an intuitive popup UI allowing custom user configurations and automated triggers.",
      ],
      techStack: ["JavaScript", "Chrome Extensions API (MV3)", "DOM Manipulation", "HTML5/CSS3"],
      github: "https://github.com/charlesnavalta/AutoAnswerExt",
      demo: "https://github.com/charlesnavalta/AutoAnswerExt",
      stats: { metric: "Standard", value: "Manifest V3" }
    },
    {
      id: "crafty-corner",
      title: "Crafty-Corner: Creative Handmade & DIY E-Commerce Platform",
      tag: "Full-Stack Web App",
      category: "Full-Stack",
      period: "2025 – 2026",
      status: "Completed",
      statusNote: "Core Architecture Finished",
      featured: true,
      description: "A modern, responsive e-commerce web platform designed for handmade crafts and DIY kits. Features interactive product catalogs, real-time cart state management, checkout flows, and modular component architecture.",
      highlights: [
        "Constructed responsive SPA UI using React 18 and component-driven state architecture.",
        "Implemented interactive cart calculations, checkout workflows, and dynamic item management.",
        "Crafted custom CSS design tokens for an intuitive shopping experience across mobile and desktop.",
      ],
      techStack: ["React 18", "JavaScript (ES6+)", "CSS3", "Component Architecture"],
      github: "https://github.com/charlesnavalta/Crafty-Corner",
      demo: "https://github.com/charlesnavalta/Crafty-Corner",
      stats: { metric: "Frontend", value: "React 18 SPA" }
    },
    {
      id: "binbot-automated-segregation",
      title: "CWTS BinBot: Automated Trash Bin Segregation System",
      tag: "Best in Project Implementation",
      category: "Software Engineering",
      period: "2023 – 2024",
      status: "Completed",
      statusNote: "Project Implemented & Awarded",
      featured: true,
      description: "Award-winning civic automation system developed under the NSTP CWTS program at Pamantasan ng Cabuyao. Features automated sensor classification and mechanical segregation for institutional waste management.",
      highlights: [
        "Awarded 'Best in Project Implementation' by the NSTP Civic Welfare Training Service department at Pamantasan ng Cabuyao.",
        "Led production engineering, sensor integration logic, and project demonstration.",
        "Designed to promote campus environmental sustainability through automated waste separation."
      ],
      techStack: ["Sensors & Microcontrollers", "Automation Logic", "System Integration", "Hardware/Software"],
      github: null,
      demo: null,
      stats: { metric: "Recognition", value: "Best in Project" }
    }
  ],

  terminalHelp: [
    { cmd: "help", desc: "List all available terminal commands" },
    { cmd: "about", desc: "Display summary about Charles" },
    { cmd: "education", desc: "Show complete educational timeline" },
    { cmd: "thesis", desc: "Display FalsiCode Undergraduate Thesis details" },
    { cmd: "certifications", desc: "List future & target industry certifications" },
    { cmd: "leadership", desc: "List ACSS, AWS Cloud Club, & officer roles" },
    { cmd: "skills", desc: "List technical stack & proficiencies" },
    { cmd: "projects", desc: "List real GitHub repositories & live links" },
    { cmd: "contact", desc: "Get email, LinkedIn, and GitHub links" },
    { cmd: "cat resume.txt", desc: "View full text resume preview" },
    { cmd: "clear", desc: "Clear terminal screen" },
  ]
};
