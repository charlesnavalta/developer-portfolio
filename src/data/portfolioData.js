export const portfolioData = {
  personal: {
    name: "Charles Darwin Navalta",
    fullName: "Charles Darwin Navalta",
    nickname: "Charles",
    role: "Computer Science Student",
    subRoles: ["Software Engineer", "Automation Developer", "Full-Stack Developer"],
    tagline: "Passionate about continuous learning, workflow automation, algorithmic problem-solving, and engineering scalable software that solves real-world challenges.",
    bio: "Computer Science student at University of Cabuyao and lead developer of FalsiCode. I specialize in software engineering, automation systems, and algorithmic problem-solving, with practical experience engineering browser automations, civic technology, and code analysis tools to streamline workflows.",
    email: "charlesdarwinnavalta@gmail.com",
    github: "https://github.com/charlesnavalta",
    linkedin: "https://www.linkedin.com/in/charles-darwin-navalta-a908623b1/",
    location: "Cabuyao, Laguna, Philippines",
    isOpenToWork: true,
    statusText: "Open to Full-Time Roles & Opportunities",
    avatar: "/profile.jpg",
    resumeUrl: "#",
  },

  education: {
    degree: "Bachelor of Science in Computer Science",
    university: "University of Cabuyao",
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
        institution: "University of Cabuyao",
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
      institution: "University of Cabuyao",
      period: "2023 – Present",
      desc: "Active member contributing to CS departmental events, coding seminars, and student technology initiatives."
    },
    {
      role: "Member",
      org: "AWS Cloud Club",
      institution: "University of Cabuyao",
      period: "2024 – 2025",
      desc: "Participating in cloud architecture workshops, AWS foundational learning paths, and student developer summits."
    },
    {
      role: "Head Production",
      org: "NSTP Civic Welfare Training Service (CWTS)",
      institution: "University of Cabuyao",
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
      { name: "Java", level: 58, tag: "Data Structures & Algorithms", levelLabel: "Academic Base" },
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
      { name: "Browser & DOM Automation", category: "Automation" },
      { name: "Abstract Syntax Tree Parsing", category: "Code Analysis" },
      { name: "TF-IDF Vectorization", category: "NLP & Feature Extraction" },
      { name: "Automated Sensor Integration", category: "Civic Automation" },
      { name: "N-Grams Tokenization", category: "Algorithms" },
      { name: "Scikit-Learn Machine Learning", category: "Algorithms" },
      { name: "Pandas Data Processing", category: "Data Processing" },
    ],
    toolsAndDevOps: [
      { name: "Docker & Docker Compose", category: "Containerization" },
      { name: "MySQL & SQLAlchemy", category: "Database ORM" },
      { name: "Git & GitHub", category: "Version Control" },
      { name: "Unity Game Engine", category: "Game Development" },
      { name: "Chrome Extension API", category: "Tooling" },
      { name: "PDF Report Generation", category: "Reporting & Export" },
    ]
  },

  // Highlighted Projects (Ordered by Date: Recent to Earlier)
  projects: [
    {
      id: "falsicode-thesis",
      title: "Falsicode: Structural Source Code Plagiarism Detection System",
      tag: "Undergraduate Thesis • Code Plagiarism",
      category: "Thesis",
      period: "2026 – Present",
      status: "In Progress",
      statusNote: "Active Thesis Development",
      featured: true,
      description: "An automated source code plagiarism detection system for Data Structures and Algorithms coursework in Python and Java. Unlike basic text matchers, Falsicode parses Abstract Syntax Trees, prunes dead code, and analyzes logic structures to detect plagiarism even when variables are renamed or code is rearranged.",
      goal: "Provides a standalone, privacy-focused academic integrity platform that inspects the underlying structure and logic of student programs rather than plain text.",
      highlights: [
        "Abstract Syntax Tree Analysis: Parses Python and Java source code to detect structural similarity despite renamed variables or modified formatting.",
        "Dead-Code Pruning: Automatically strips unused functions and decoy blocks inserted to evade detection.",
        "Asymmetric Similarity Scoring: Uses cosine similarity and containment metrics to identify plagiarized algorithm snippets inside larger files."
      ],
      techStack: ["React", "Python Flask", "Abstract Syntax Trees", "Scikit-Learn", "MySQL", "Docker", "Gunicorn", "Vercel"],
      techLayers: [
        { layer: "Frontend", tech: "React, React Router, Tailwind CSS, Axios, PDF Exporters" },
        { layer: "Backend API", tech: "Python, Flask, Gunicorn, SQLAlchemy, Token Authentication" },
        { layer: "Detection Engine", tech: "Python Abstract Syntax Tree, Java Parser, Scikit-Learn Vectorizer" },
        { layer: "Database", tech: "MySQL Cloud Database with SQLAlchemy ORM" },
        { layer: "DevOps & Tooling", tech: "Docker, Docker Compose, Git, Vercel, Render" },
      ],
      cloudInfrastructure: [
        { name: "Frontend Hosting", provider: "Vercel", desc: "React single-page application delivered through global edge servers." },
        { name: "Backend API", provider: "Render", desc: "Containerized Python Flask web service powered by Gunicorn." },
        { name: "Cloud Database", provider: "Aiven Cloud", desc: "Managed MySQL database with encrypted network connections." },
        { name: "Email Service", provider: "Google SMTP", desc: "One-time password delivery for account verification." },
        { name: "Local Lab Support", provider: "Docker Compose", desc: "Multi-container setup for offline academic lab evaluations." }
      ],
      github: "https://github.com/charlesnavalta/Code-Plagiarism-Detection-in-DSA-using-AST-N-Grams-and-TF-IDF",
      demo: "https://falsicode.vercel.app/",
      stats: { metric: "Live Platform", value: "Falsicode" }
    },
    {
      id: "debugging-farm-game",
      title: "DebuggingFarm",
      tag: "Unity 6 • 2D Simulation Game",
      category: "Software Engineering",
      period: "2026 – Present",
      status: "In Progress",
      statusNote: "Active Gameplay Systems Development",
      featured: false,
      description: "A cozy 2D top-down farming simulation and sandbox game built in Unity 6 and C#. Follows the story of a software engineer recovering from burnout by rebuilding an agricultural homestead in Bohol, Philippines, using structured problem-solving.",
      goal: "Engineered a modular, data-driven 2D simulation game combining custom 8-way movement, grid-based tilemap farming cycles, dynamic inventory, and multi-area scene transitions.",
      highlights: [
        "Custom 8-Way Movement System: Implemented decoupled vector physics and facing memory to ensure smooth diagonal movement without speed distortion.",
        "Data-Driven Inventory & Farming Engine: Built modular item ScriptableObjects and a grid-based tilemap system managing multi-state soil hydration and crop growth cycles.",
        "Interactive World & Scene Transitions: Created physics-based resource harvesting and persistent area transitions connecting farm, forest, and town environments."
      ],
      techStack: ["Unity 6", "C#", "ScriptableObjects", "Universal Render Pipeline", "2D Tilemaps", "Input System", "Git"],
      techLayers: [
        { layer: "Game Engine", tech: "Unity 6, Universal Render Pipeline 2D, Pixel Art Materials" },
        { layer: "Core Programming", tech: "C#, ScriptableObject Architecture, Rigidbody2D Physics" },
        { layer: "Gameplay Systems", tech: "8-Directional Input System, Grid Tilemap Farming, Slot Inventory" },
        { layer: "World Architecture", tech: "Composite Colliders, Resource Harvesting, Scene Transition Manager" }
      ],
      github: "https://github.com/charlesnavalta/DebuggingFarm",
      demo: "https://github.com/charlesnavalta/DebuggingFarm",
      stats: { metric: "Engine", value: "Unity 6 & C#" }
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
      description: "Award-winning civic automation system developed under the NSTP CWTS program at University of Cabuyao. Features automated sensor classification and mechanical segregation for institutional waste management.",
      highlights: [
        "Awarded Best in Project Implementation by the NSTP Civic Welfare Training Service department at University of Cabuyao.",
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
