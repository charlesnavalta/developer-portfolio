export const portfolioData = {
  personal: {
    name: "Charles Darwin Navalta",
    fullName: "Charles Darwin Navalta",
    nickname: "Charles",
    role: "Computer Science Student",
    subRoles: ["Software Engineer", "Automation Developer", "Full-Stack Developer"],
    tagline: "Passionate about continuous learning, workflow automation, algorithmic problem-solving, and engineering scalable software that solves real-world challenges.",
    bio: "Computer Science student at the University of Cabuyao (Pamantasan ng Cabuyao) and creator/lead programmer of FalsiCode, my undergraduate thesis. I'm passionate about software engineering, automation systems, and algorithmic problem-solving, with hands-on experience building practical solutions like CWTS BinBot (civic automation), AutoAnswerExt (browser automation), and FalsiCode (academic NLP & plagiarism detection). I'm driven to build software that streamlines workflows and solves real-world problems.",
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
    gradYear: "Class of 2027",
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
        period: "2023 – Present (Class of 2027)"
      },
      {
        level: "Senior High School",
        institution: "Cabuyao Institute of Technology",
        program: "TVL - Information and Communication Technology (ICT)",
        period: "2021 – 2023"
      }
    ]
  },

  stats: [
    { label: "Core Focus", value: "Software & Automation" },
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
      { name: "Python", level: 75, tag: "Automation & NLP", levelLabel: "Proficient" },
      { name: "JavaScript (ES6+)", level: 70, tag: "React & Browser Ext", levelLabel: "Working Proficiency" },
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
    automationAndAI: [
      { name: "Browser & DOM Automation (MV3)", category: "Automation" },
      { name: "AST Parsing (javalang)", category: "Code Analysis" },
      { name: "TF-IDF Vectorization", category: "NLP & Feature Extraction" },
      { name: "Automated Sensor Integration", category: "Civic Automation" },
      { name: "N-Grams Tokenization", category: "Algorithms" },
      { name: "Scikit-Learn (ML Metrics)", category: "Algorithms" },
      { name: "Pandas & Data Processing", category: "Data Processing" },
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
      title: "Falsicode: Structural Source Code Plagiarism Detection System",
      tag: "Undergraduate Thesis • AST & Syntax Engine",
      category: "Thesis",
      period: "2026 – Present",
      status: "In Progress",
      statusNote: "Active Capstone Development & Live Testing",
      featured: true,
      description: "An automated, syntax-aware code plagiarism detection platform engineered for Data Structures & Algorithms (DSA) academic submissions in Python and Java. Unlike superficial text matchers that are easily fooled by renamed variables or code rearrangement, Falsicode extracts Abstract Syntax Tree (AST) representations, prunes dead code, normalizes logic structures, and applies token N-Grams with Sublinear TF-IDF vectorization to identify Type 1, Type 2, and Type 3 plagiarism.",
      goal: "Traditional plagiarism tools rely on surface-level text matching or require sending student source code to external third-party servers. Falsicode solves this by providing a standalone, privacy-preserving academic integrity platform that analyzes the underlying structure and logic of student code rather than just text syntax.",
      highlights: [
        "AST Structural Analysis: Parses Python (ast) and Java (javalang) source code into Abstract Syntax Trees to normalize token structures, making detection resilient against variable renaming, comment alterations, and formatting tricks.",
        "Dead-Code Pruning: Eliminates injected decoy functions and uncalled code blocks used to evade traditional detection.",
        "Asymmetric Code Detection: Employs a dual-scoring mechanism (Cosine Similarity + Containment Metric) to catch small plagiarized algorithm snippets embedded inside larger files.",
        "Multi-Class Taxonomy: Classifies similarities into Type 1 (verbatim copy), Type 2 (renamed identifiers), and Type 3 (reordered/reworked logic).",
        "Classroom & LMS Integration: Role-based access control (Instructor, Student, Admin), assignment creation, syntax-validated submissions, interactive visual diffs, and downloadable PDF reports (jsPDF/html2canvas).",
        "Production Infrastructure: Deployed as a high-performance React 18 SPA on Vercel Edge, containerized Python Flask REST API on Render via Gunicorn WSGI, and Cloud MySQL on Aiven Cloud with SSL/TLS encryption."
      ],
      techStack: ["React 18", "Python (Flask 3.x)", "AST (Python & Javalang)", "Scikit-Learn (TF-IDF)", "MySQL 8.0 (Aiven Cloud)", "Docker Compose", "Gunicorn", "Vercel / Render"],
      techLayers: [
        { layer: "Frontend", tech: "React 18, React Router v6, Axios, Tailwind CSS, jsPDF & html2canvas" },
        { layer: "Backend API", tech: "Python 3.9+, Flask 3.x, Gunicorn WSGI, Flask-JWT-Extended, Flask-Bcrypt, Flask-SQLAlchemy" },
        { layer: "Detection Engine", tech: "Python ast, javalang (Java AST Parser), Scikit-Learn (TfidfVectorizer), NumPy, difflib" },
        { layer: "Database", tech: "MySQL 8.0 / MariaDB (Relational ORM via SQLAlchemy & Aiven Cloud)" },
        { layer: "DevOps & Tooling", tech: "Docker, Docker Compose, Git / GitHub, Vercel & Render Continuous Deployment" },
      ],
      cloudInfrastructure: [
        { name: "Frontend Hosting", provider: "Vercel", desc: "Optimized React SPA with global edge CDN delivery and client-side route rewriting." },
        { name: "Backend API", provider: "Render", desc: "Containerized Python Flask REST API running with production Gunicorn WSGI web servers." },
        { name: "Cloud Database", provider: "Aiven Cloud", desc: "Fully managed Cloud MySQL 8.0 database cluster with SSL/TLS encryption." },
        { name: "Email Service", provider: "Gmail SMTP", desc: "Secure OTP (One-Time Password) email delivery for account verification and password recovery." },
        { name: "Local Lab Support", provider: "Docker Compose", desc: "1-click containerized deployment (API + Client + MySQL + phpMyAdmin) for offline lab evaluation." }
      ],
      github: "https://github.com/charlesnavalta/Code-Plagiarism-Detection-in-DSA-using-AST-N-Grams-and-TF-IDF",
      demo: "https://falsicode.vercel.app/",
      stats: { metric: "Live Platform", value: "Falsicode" }
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
      github: "https://github.com/charlesnavalta/AppDev-Finals_LabExam_2025",
      demo: "https://github.com/charlesnavalta/AppDev-Finals_LabExam_2025",
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
