export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription: string;
  problemStatement: string;
  solution: string;
  architecture: string[];
  features: string[];
  technologies: string[];
  contributions: string[];
  links: {
    live?: string;
    frontendRepo?: string;
    backendRepo?: string;
    github?: string;
    video?: string;
  };
  metrics?: string;
  image: string;
  video?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; highlight?: boolean }[];
}

export const portfolioData = {
  personal: {
    name: "Prasad Sable",
    role: "AI Engineer",
    subRoles: ["Generative AI", "LLM Applications", "Agentic AI"],
    tagline: "Building intelligent applications with LLMs, RAG pipelines, and Agentic AI.",
    headline: "I develop AI-powered applications that combine Large Language Models, intelligent workflows, and backend engineering to solve practical problems.",
    email: "prasadsable2000@gmail.com",
    phone: "+91 8879883719",
    location: "Mumbai, India",
    github: "https://github.com/Prasad-Sable",
    linkedin: "https://www.linkedin.com/in/prasadsable/",
    resumeUrl: "/Prasad_Sable_Resume.pdf",
    status: "AVAILABLE FOR AI & GENAI ROLES",
    aboutBio: [
      "I'm Prasad Sable, an AI Engineer specializing in Generative AI, LLM applications, and Agentic AI. Experienced in building RAG systems, AI agents, and intelligent applications using Python, LangChain, LangGraph, and FastAPI. Passionate about developing practical AI solutions and continuously exploring emerging technologies."
    ],
    approach: [
      { step: "01", title: "Understand", desc: "Deconstruct the core domain problem, data requirements, and technical constraints." },
      { step: "02", title: "Architect", desc: "Design resilient RAG pipelines, semantic graphs, and scalable backend services." },
      { step: "03", title: "Build", desc: "Implement clean LLM tool-calling, agentic orchestration, and vector indexing." },
      { step: "04", title: "Improve", desc: "Evaluate accuracy, latency, token efficiency, and iterate continuously." }
    ],
    areasOfInterest: [
      "Generative AI & LLM Engineering",
      "Agentic Workflows & Autonomous Systems",
      "Advanced RAG Architecture & Semantic Search",
      "AI Backend Engineering & Microservices",
      "Model Context Protocol (MCP)"
    ],
    educationSummary: [
      {
        degree: "M.Sc. Artificial Intelligence",
        institution: "B. K. Birla College, University of Mumbai",
        year: "2024 — 2026",
        score: "CGPA: 9.02",
        highlight: "Specialization in Machine Learning, Neural Networks & Autonomous Systems"
      },
      {
        degree: "B.Sc. Information Technology",
        institution: "University of Mumbai",
        year: "Graduated",
        score: "CGPA: 8.51",
        highlight: "Core Computing, Data Structures, Software Engineering & Databases"
      }
    ]
  },

  pillars: [
    {
      num: "01",
      title: "Generative AI Engineering",
      desc: "Building LLM-powered applications, intelligent assistants, and AI-driven solutions using modern generative AI models and tool-calling paradigms."
    },
    {
      num: "02",
      title: "RAG & Knowledge Systems",
      desc: "Developing context-aware applications using structured document processing, high-dimensional embeddings, vector databases, and semantic retrieval."
    },
    {
      num: "03",
      title: "Agentic AI Systems",
      desc: "Developing autonomous intelligent agents with tool calling, multi-step workflow orchestration, dynamic reasoning, and state management."
    }
  ],

  projects: [
    {
      id: "pagepilot-ai",
      title: "PagePilot AI",
      subtitle: "RAG-Powered Browser Assistant & AI Automation Agent",
      category: "Generative AI",
      description: "A RAG-powered Chrome extension enabling context-aware webpage conversations, automated summarization, and autonomous browser action execution.",
      longDescription: "PagePilot AI is an intelligent Chrome extension (Manifest V3) that parses and understands live webpage content, allowing users to interact with web pages using natural language commands while autonomously executing actions like clicking, scrolling, and extracting insights.",
      problemStatement: "Users frequently struggle with reading, searching, and extracting key data from lengthy or complex web pages. Furthermore, repetitive browser interactions waste valuable time without intelligent context awareness.",
      solution: "Engineered an AI-driven browser assistant that chunks and embeds page DOM in real-time, indexes content via FAISS, and allows natural language Q&A and browser automation through OpenAI and local Ollama models.",
      architecture: [
        "Webpage DOM & Content Extraction (Chrome Extension Manifest V3)",
        "HTML parsing and structured text pre-processing",
        "Document Chunking & Semantic Embedding via Hugging Face",
        "High-performance FAISS Vector Indexing & Semantic Search",
        "Context Retrieval & Augmented LLM Prompt Synthesis",
        "LLM Response Generation & Autonomous Action Execution"
      ],
      features: [
        "Context-aware question answering over active webpage content",
        "Instant webpage summarization and structured data extraction",
        "Live HTML parsing and text preprocessing pipeline",
        "Semantic embeddings and FAISS-based vector retrieval",
        "Autonomous browser actions (clicking, scrolling, form automation)",
        "Hybrid model support: OpenAI API & locally hosted Ollama models"
      ],
      technologies: [
        "Python", "LangChain", "FAISS", "FastAPI", "Hugging Face", "OpenAI API", "Ollama", "JavaScript", "Chrome Manifest V3"
      ],
      contributions: [
        "Designed and implemented end-to-end RAG pipeline for browser DOM",
        "Integrated Hugging Face embeddings with FAISS vector store",
        "Created FastAPI backend service orchestrating multi-model requests",
        "Built browser action execution engine via Chrome Extension content scripts"
      ],
      links: {
        github: "https://github.com/Prasad-Sable/pagepilot-ai",
        video: "/pagepilot-ai-demo.webm"
      },
      video: "/pagepilot-ai-demo.webm",
      image: "/images/pagepilot-ai.jpg"
    },
    {
      id: "bytecraft-ai",
      title: "ByteCraft AI",
      subtitle: "Adaptive Learning Platform with Generative Curriculum",
      category: "RAG & Knowledge",
      description: "An adaptive learning platform that generates personalized lessons, evaluates quizzes, and tracks learning progress using Gemini 2.0 Flash.",
      longDescription: "ByteCraft AI is a full-stack intelligent learning ecosystem that dynamically crafts tailored bite-sized lessons, generates interactive quizzes, and tracks student progress with gamified streaks and XP.",
      problemStatement: "Traditional online learning suffers from static, one-size-fits-all curricula that fail to adapt to a user's specific learning pace, available time, and retention rate.",
      solution: "Developed an AI-driven personalization engine using Gemini 2.0 Flash via OpenRouter with asynchronous lesson generation, MongoDB persistence, and an interactive React interface.",
      architecture: [
        "User profile & skill graph evaluation",
        "Prompt engineering engine for tailored lesson generation",
        "Gemini 2.0 Flash API integration via OpenRouter with fallback caching",
        "Automated quiz generation, scoring, and real-time explanation",
        "Async FastAPI backend with MongoDB state persistence",
        "Responsive React frontend with JWT authentication & XP gamification"
      ],
      features: [
        "Personalized topic and difficulty recommendations based on performance",
        "Real-time AI lesson generation via Gemini 2.0 Flash",
        "Automated quiz evaluation with constructive feedback loops",
        "Asynchronous concurrent lesson generation & caching",
        "Gamification engine featuring XP scores, badges, and learning streaks",
        "Secure user authentication with JWT and bcrypt password hashing"
      ],
      technologies: [
        "Python", "FastAPI", "MongoDB", "Gemini 2.0 Flash", "OpenRouter", "React", "JWT", "Tailwind CSS"
      ],
      contributions: [
        "Engineered FastAPI microservices for curriculum personalization",
        "Integrated Gemini 2.0 Flash with robust error fallback handling",
        "Designed MongoDB schemas for user streaks, XP, and quiz logs",
        "Deployed frontend to Vercel and backend microservices"
      ],
      links: {
        live: "https://bytecraft-ai.vercel.app/home",
        frontendRepo: "https://github.com/Prasad-Sable/recsys",
        backendRepo: "https://github.com/Prasad-Sable/recsys-backend"
      },
      image: "/images/bytecraft-ai.jpg"
    },
    {
      id: "driver-monitoring-ai",
      title: "Driver Monitoring AI — Road Safety",
      subtitle: "Edge Computer Vision & Hardware Sensor Fusion",
      category: "Computer Vision & IoT",
      description: "Computer-vision-based road safety system designed for real-time driver drowsiness detection and alcohol monitoring using camera and IoT sensors.",
      longDescription: "An embedded safety solution fusing real-time facial landmark detection (MediaPipe/OpenCV) with hardware alcohol gas sensing (MQ-3) on Raspberry Pi, streaming alerts via WebSockets.",
      problemStatement: "Driver drowsiness and alcohol consumption remain leading causes of traffic accidents worldwide. Affordable, real-time edge monitoring systems are crucial for fleet and driver safety.",
      solution: "Built a multi-modal computer vision and sensor fusion architecture running on Raspberry Pi that triggers immediate hardware buzzer alarms and transmits real-time telemetry to a cloud dashboard.",
      architecture: [
        "Camera stream capture & video frame preprocessing",
        "Facial landmark tracking & Eye Aspect Ratio (EAR) computation via MediaPipe",
        "Drowsiness threshold classification and fatigue alerting",
        "MQ-3 analog sensor reading for alcohol concentration",
        "GPIO hardware buzzer activation for emergency warning",
        "Real-time WebSocket telemetry streamed to FastAPI & MongoDB"
      ],
      features: [
        "Real-time facial landmark detection with MediaPipe & OpenCV",
        "Eye Aspect Ratio (EAR) calculation for microsleep & blink frequency",
        "MQ-3 sensor integration for immediate alcohol vapor detection",
        "Hardware GPIO buzzer alerts with low-latency trigger (<50ms)",
        "Bi-directional WebSocket streaming for remote fleet monitoring",
        "Session recording and event logs stored in MongoDB"
      ],
      technologies: [
        "Python", "MediaPipe", "OpenCV", "Raspberry Pi", "FastAPI", "MongoDB", "MQ-3 Sensor", "WebSockets"
      ],
      contributions: [
        "Developed facial landmark analysis algorithms for blink & yawn detection",
        "Interfaced MQ-3 alcohol sensor and GPIO buzzer on Raspberry Pi",
        "Implemented real-time WebSocket protocol for live driver state broadcast",
        "Created session telemetry logger for incident replay"
      ],
      links: {
        github: "https://github.com/Prasad-Sable"
      },
      image: "/images/driver-monitoring-ai.jpg"
    }
  ] as Project[],

  skills: [
    {
      category: "Generative AI & LLM Engineering",
      iconName: "Bot",
      skills: [
        { name: "Large Language Models (LLMs)", highlight: true },
        { name: "LangChain", highlight: true },
        { name: "LangGraph", highlight: true },
        { name: "Model Context Protocol (MCP)", highlight: true },
        { name: "CrewAI", highlight: false },
        { name: "Prompt Engineering", highlight: false },
        { name: "LLM Tool Calling", highlight: true },
        { name: "Agentic Workflows", highlight: true }
      ]
    },
    {
      category: "RAG & Information Retrieval",
      iconName: "Database",
      skills: [
        { name: "Retrieval-Augmented Generation", highlight: true },
        { name: "Document Processing", highlight: false },
        { name: "Text Chunking Strategies", highlight: false },
        { name: "Vector Embeddings", highlight: true },
        { name: "Semantic Search", highlight: true },
        { name: "FAISS Vector Store", highlight: true },
        { name: "Hybrid Retrieval", highlight: false }
      ]
    },
    {
      category: "Backend Development",
      iconName: "Server",
      skills: [
        { name: "Python", highlight: true },
        { name: "FastAPI", highlight: true },
        { name: "Pydantic", highlight: false },
        { name: "RESTful APIs", highlight: false },
        { name: "Asyncio & Concurrency", highlight: true },
        { name: "WebSockets", highlight: false },
        { name: "JWT Authentication", highlight: false }
      ]
    },
    {
      category: "Databases & Vector Stores",
      iconName: "Layers",
      skills: [
        { name: "MongoDB", highlight: true },
        { name: "PostgreSQL", highlight: false },
        { name: "FAISS Vector DB", highlight: true },
        { name: "Data Modeling", highlight: false }
      ]
    },
    {
      category: "Machine Learning & Vision",
      iconName: "Cpu",
      skills: [
        { name: "Machine Learning Fundamentals", highlight: false },
        { name: "Hugging Face Transformers", highlight: true },
        { name: "OpenCV", highlight: true },
        { name: "MediaPipe", highlight: false },
        { name: "Classification Models", highlight: false }
      ]
    },
    {
      category: "Tools, Platforms & APIs",
      iconName: "Wrench",
      skills: [
        { name: "Git & GitHub", highlight: false },
        { name: "OpenRouter", highlight: true },
        { name: "Ollama (Local LLMs)", highlight: true },
        { name: "OpenAI API", highlight: true },
        { name: "Google Gemini API", highlight: true },
        { name: "Chrome Extension Dev (MV3)", highlight: false },
        { name: "Raspberry Pi / IoT", highlight: false }
      ]
    }
  ],

  experience: [
    {
      role: "Machine Learning Intern",
      company: "Eisystems Services",
      period: "February 2025 — March 2025",
      type: "Internship",
      description: "Completed an intensive eight-week Machine Learning with Python program.",
      achievements: [
        "Engineered end-to-end ML pipeline for Mushroom Edibility Classification using UCI dataset",
        "Applied classification algorithms, hyperparameter tuning, and cross-validation",
        "Prepared and delivered comprehensive project technical documentation and evaluation report"
      ]
    },
    {
      role: "Nano R1 Challenge Program",
      company: "Open Source AI Initiative",
      period: "March 2025",
      type: "Research & Development",
      description: "Explored model distillation and fine-tuning on reasoning architectures.",
      achievements: [
        "Downloaded open-source Nano R1 model architecture from Hugging Face",
        "Fine-tuned the reasoning weights on custom structured domain datasets",
        "Evaluated inference latency and response consistency against baseline models"
      ]
    }
  ],

  education: [
    {
      degree: "Master of Science — Artificial Intelligence",
      institution: "B. K. Birla College of Arts, Science & Commerce, Kalyan",
      affiliation: "University of Mumbai",
      period: "2024 — 2026",
      grade: "CGPA: 9.02",
      details: "Comprehensive coursework in Deep Learning, Natural Language Processing, Autonomous Agents, and Cognitive Systems."
    },
    {
      degree: "Bachelor of Science — Information Technology",
      institution: "University of Mumbai",
      affiliation: "University of Mumbai",
      period: "Completed",
      grade: "CGPA: 8.51",
      details: "Solid foundations in Data Structures, Relational & NoSQL Databases, Web Engineering, and Networking."
    }
  ]
};
