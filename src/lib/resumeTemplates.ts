import { v4 as uuidv4 } from 'uuid';

export interface ResumeTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  popular: boolean;
  structure: {
    layout: 'standard' | 'modern' | 'creative' | 'minimal' | 'executive' | 'technical';
    primaryColor: string;
    secondaryColor: string;
    fontFamily: string;
    fontSize: string;
    spacing: string;
    sections: string[];
  };
  sampleData: {
    personal: {
      fullName: string;
      jobTitle: string;
      email: string;
      phone: string;
      website?: string;
      location: string;
      linkedIn?: string;
      bio?: string;
    };
    summary: string;
    experience: Array<{
      id: string;
      title: string;
      company: string;
      location: string;
      startDate: string;
      endDate: string | null;
      current: boolean;
      description: string;
      achievements?: string[];
    }>;
    education: Array<{
      id: string;
      degree: string;
      institution: string;
      location: string;
      startDate: string;
      endDate: string | null;
      current: boolean;
      description?: string;
      achievements?: string[];
    }>;
    skills: Array<{
      id: string;
      name: string;
      level?: number;
      category?: string;
    }>;
    certifications?: Array<{
      id: string;
      name: string;
      issuer: string;
      date: string;
      expires?: string | null;
      credentialId?: string;
      url?: string;
    }>;
    projects?: Array<{
      id: string;
      name: string;
      description: string;
      url?: string;
      startDate?: string;
      endDate?: string | null;
      current?: boolean;
      technologies?: string[];
    }>;
  };
}

export const resumeTemplates: ResumeTemplate[] = [
  {
    id: "1",
    name: "Professional Classic",
    category: "Professional",
    description: "Clean and minimal design for corporate environments",
    image: "/resume.png",
    popular: true,
    structure: {
      layout: 'standard',
      primaryColor: '#2563eb',
      secondaryColor: '#64748b',
      fontFamily: 'Arial, sans-serif',
      fontSize: '11pt',
      spacing: 'standard',
      sections: ['personal', 'summary', 'experience', 'education', 'skills', 'certifications']
    },
    sampleData: {
      personal: {
        fullName: "Alex Johnson",
        jobTitle: "Senior Project Manager",
        email: "alex.johnson@example.com",
        phone: "(555) 123-4567",
        website: "alexjohnson.com",
        location: "New York, NY",
        linkedIn: "linkedin.com/in/alexjohnson",
        bio: "Experienced project manager with over 8 years of experience leading cross-functional teams in delivering complex software projects on time and within budget."
      },
      summary: "Results-driven project manager with 8+ years of experience in software development. Proven track record of successfully delivering enterprise-level projects while managing budgets exceeding $1M. Skilled in Agile methodologies, risk management, and stakeholder communication.",
      experience: [
        {
          id: uuidv4(),
          title: "Senior Project Manager",
          company: "Tech Solutions Inc.",
          location: "New York, NY",
          startDate: "2020-03",
          endDate: null,
          current: true,
          description: "Lead a team of 15 developers, designers, and QA specialists in delivering enterprise software solutions for Fortune 500 clients.",
          achievements: [
            "Delivered 12 major projects with 100% on-time completion rate and 95% client satisfaction",
            "Reduced project costs by 15% through process optimization and resource allocation",
            "Implemented new Agile framework that increased team productivity by 20%"
          ]
        },
        {
          id: uuidv4(),
          title: "Project Manager",
          company: "Digital Innovations",
          location: "Boston, MA",
          startDate: "2017-06",
          endDate: "2020-02",
          current: false,
          description: "Managed full project lifecycle for web and mobile application development projects.",
          achievements: [
            "Successfully delivered 8 major projects valued at over $5M total",
            "Improved client communication processes, resulting in 30% fewer revision requests",
            "Mentored 5 junior project managers who went on to lead their own projects"
          ]
        },
        {
          id: uuidv4(),
          title: "Assistant Project Manager",
          company: "WebTech Solutions",
          location: "Boston, MA",
          startDate: "2015-01",
          endDate: "2017-05",
          current: false,
          description: "Assisted senior project managers in planning, executing, and closing projects.",
          achievements: [
            "Supported the successful delivery of 15+ web development projects",
            "Created project documentation templates that were adopted company-wide",
            "Coordinated client meetings and prepared status reports for stakeholders"
          ]
        }
      ],
      education: [
        {
          id: uuidv4(),
          degree: "MBA, Technology Management",
          institution: "Boston University",
          location: "Boston, MA",
          startDate: "2013-09",
          endDate: "2015-05",
          current: false,
          description: "Focused on technology management and digital transformation strategies."
        },
        {
          id: uuidv4(),
          degree: "BS, Computer Science",
          institution: "University of Massachusetts",
          location: "Amherst, MA",
          startDate: "2009-09",
          endDate: "2013-05",
          current: false,
          description: "Graduated with honors. Specialized in software engineering."
        }
      ],
      skills: [
        { id: uuidv4(), name: "Project Management", level: 5, category: "Management" },
        { id: uuidv4(), name: "Agile Methodologies", level: 5, category: "Methodologies" },
        { id: uuidv4(), name: "Scrum", level: 4, category: "Methodologies" },
        { id: uuidv4(), name: "Kanban", level: 4, category: "Methodologies" },
        { id: uuidv4(), name: "Budgeting", level: 4, category: "Management" },
        { id: uuidv4(), name: "Risk Management", level: 4, category: "Management" },
        { id: uuidv4(), name: "Stakeholder Communication", level: 5, category: "Communication" },
        { id: uuidv4(), name: "JIRA", level: 5, category: "Tools" },
        { id: uuidv4(), name: "MS Project", level: 4, category: "Tools" },
        { id: uuidv4(), name: "Confluence", level: 4, category: "Tools" }
      ],
      certifications: [
        {
          id: uuidv4(),
          name: "Project Management Professional (PMP)",
          issuer: "Project Management Institute",
          date: "2018-06",
          expires: "2024-06",
          credentialId: "1234567",
          url: "pmi.org/certifications/verify"
        },
        {
          id: uuidv4(),
          name: "Certified Scrum Master (CSM)",
          issuer: "Scrum Alliance",
          date: "2017-03",
          expires: null,
          credentialId: "CSM-123456",
          url: "scrumalliance.org/verify"
        }
      ]
    }
  },
  {
    id: "2",
    name: "Creative Portfolio",
    category: "Creative",
    description: "Stand out with this creative and bold design",
    image: "/resume.png",
    popular: false,
    structure: {
      layout: 'creative',
      primaryColor: '#8b5cf6',
      secondaryColor: '#ec4899',
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '10.5pt',
      spacing: 'compact',
      sections: ['personal', 'summary', 'skills', 'experience', 'projects', 'education']
    },
    sampleData: {
      personal: {
        fullName: "Jordan Rivera",
        jobTitle: "UX/UI Designer",
        email: "jordan@designportfolio.com",
        phone: "(555) 987-6543",
        website: "jordanrivera.design",
        location: "San Francisco, CA",
        linkedIn: "linkedin.com/in/jordanrivera",
        bio: "Passionate UX/UI designer with a background in visual arts and 5+ years of experience creating beautiful, user-centered digital experiences."
      },
      summary: "Creative UX/UI designer with 5+ years of experience crafting intuitive and visually stunning digital experiences. Passionate about solving complex user problems through thoughtful design. Proficient in design thinking, user research, and creating high-fidelity prototypes that delight users and drive business goals.",
      experience: [
        {
          id: uuidv4(),
          title: "Senior UX/UI Designer",
          company: "Creative Digital Agency",
          location: "San Francisco, CA",
          startDate: "2021-04",
          endDate: null,
          current: true,
          description: "Lead designer for major client projects, overseeing the entire design process from concept to implementation.",
          achievements: [
            "Redesigned e-commerce platform resulting in 35% increase in conversion rate",
            "Created design system that reduced design inconsistencies by 90%",
            "Led workshops with clients to align business goals with user needs"
          ]
        },
        {
          id: uuidv4(),
          title: "UX Designer",
          company: "TechStart Inc.",
          location: "San Francisco, CA",
          startDate: "2018-09",
          endDate: "2021-03",
          current: false,
          description: "Designed user interfaces for mobile and web applications, focusing on user research and interaction design.",
          achievements: [
            "Improved user satisfaction scores by 40% through iterative design process",
            "Conducted 50+ user interviews and usability tests to inform design decisions",
            "Collaborated with development team to ensure design feasibility and quality implementation"
          ]
        },
        {
          id: uuidv4(),
          title: "UI Design Intern",
          company: "DesignWorks Studio",
          location: "Los Angeles, CA",
          startDate: "2018-01",
          endDate: "2018-08",
          current: false,
          description: "Assisted senior designers with creating visual assets and UI components for client projects.",
          achievements: [
            "Created icon set used across multiple client projects",
            "Designed landing pages that exceeded client expectations",
            "Participated in brainstorming sessions and contributed innovative ideas"
          ]
        }
      ],
      education: [
        {
          id: uuidv4(),
          degree: "BFA, Graphic Design",
          institution: "California Institute of the Arts",
          location: "Valencia, CA",
          startDate: "2014-09",
          endDate: "2018-05",
          current: false,
          description: "Focused on digital design and interactive media. Senior project featured in student showcase."
        }
      ],
      skills: [
        { id: uuidv4(), name: "UI Design", level: 5, category: "Design" },
        { id: uuidv4(), name: "UX Research", level: 4, category: "Research" },
        { id: uuidv4(), name: "Wireframing", level: 5, category: "Design" },
        { id: uuidv4(), name: "Prototyping", level: 5, category: "Design" },
        { id: uuidv4(), name: "Figma", level: 5, category: "Tools" },
        { id: uuidv4(), name: "Adobe XD", level: 4, category: "Tools" },
        { id: uuidv4(), name: "Sketch", level: 4, category: "Tools" },
        { id: uuidv4(), name: "Adobe Photoshop", level: 4, category: "Tools" },
        { id: uuidv4(), name: "Adobe Illustrator", level: 4, category: "Tools" },
        { id: uuidv4(), name: "Design Systems", level: 4, category: "Design" },
        { id: uuidv4(), name: "Typography", level: 5, category: "Design" },
        { id: uuidv4(), name: "Color Theory", level: 5, category: "Design" }
      ],
      projects: [
        {
          id: uuidv4(),
          name: "HealthTrack Mobile App",
          description: "Designed a health tracking mobile application focused on intuitive data visualization and goal setting.",
          url: "jordanrivera.design/healthtrack",
          startDate: "2022-01",
          endDate: "2022-04",
          current: false,
          technologies: ["Figma", "Prototyping", "User Testing"]
        },
        {
          id: uuidv4(),
          name: "E-commerce Redesign",
          description: "Complete redesign of an e-commerce platform with focus on improving the checkout process and product discovery.",
          url: "jordanrivera.design/ecommerce",
          startDate: "2021-06",
          endDate: "2021-12",
          current: false,
          technologies: ["Adobe XD", "User Research", "A/B Testing"]
        },
        {
          id: uuidv4(),
          name: "Financial Dashboard",
          description: "Created an intuitive dashboard for a financial services company that simplified complex data visualization.",
          url: "jordanrivera.design/finance",
          startDate: "2020-10",
          endDate: "2021-02",
          current: false,
          technologies: ["Sketch", "Data Visualization", "User Interviews"]
        }
      ]
    }
  },
  {
    id: "3",
    name: "Executive Summary",
    category: "Professional",
    description: "Traditional format preferred in conservative industries",
    image: "/resume.png",
    popular: true,
    structure: {
      layout: 'executive',
      primaryColor: '#1e293b',
      secondaryColor: '#475569',
      fontFamily: 'Georgia, serif',
      fontSize: '11pt',
      spacing: 'generous',
      sections: ['personal', 'summary', 'experience', 'education', 'skills', 'certifications']
    },
    sampleData: {
      personal: {
        fullName: "Morgan Williams",
        jobTitle: "Chief Financial Officer",
        email: "morgan.williams@example.com",
        phone: "(555) 234-5678",
        location: "Chicago, IL",
        linkedIn: "linkedin.com/in/morganwilliams",
        bio: "Strategic financial executive with over 15 years of experience in corporate finance, M&A, and financial planning for Fortune 500 companies."
      },
      summary: "Accomplished financial executive with 15+ years of experience driving financial strategy and operational excellence. Expert in financial planning, M&A, investor relations, and corporate governance. Proven track record of optimizing capital structures, improving profitability, and leading organizations through periods of significant growth and transformation.",
      experience: [
        {
          id: uuidv4(),
          title: "Chief Financial Officer",
          company: "Global Enterprises Inc.",
          location: "Chicago, IL",
          startDate: "2018-01",
          endDate: null,
          current: true,
          description: "Oversee all financial operations for a $2B multinational corporation with 5,000+ employees across 12 countries.",
          achievements: [
            "Led financial strategy that increased EBITDA by 22% over 3 years",
            "Orchestrated $500M acquisition that expanded market share by 15%",
            "Restructured debt portfolio saving $12M annually in interest expenses",
            "Implemented new ERP system that improved financial reporting efficiency by 40%"
          ]
        },
        {
          id: uuidv4(),
          title: "VP of Finance",
          company: "Midwest Manufacturing Corp.",
          location: "Detroit, MI",
          startDate: "2013-04",
          endDate: "2017-12",
          current: false,
          description: "Directed financial planning, analysis, and reporting for a $750M manufacturing company.",
          achievements: [
            "Developed 5-year strategic financial plan that guided 30% company growth",
            "Led due diligence for 3 successful acquisitions totaling $180M",
            "Improved cash flow by $25M through working capital optimization",
            "Established investor relations program that attracted 5 new institutional investors"
          ]
        },
        {
          id: uuidv4(),
          title: "Director of Financial Planning & Analysis",
          company: "Consumer Products International",
          location: "Chicago, IL",
          startDate: "2008-06",
          endDate: "2013-03",
          current: false,
          description: "Led financial planning, budgeting, and analysis for the North American division ($500M revenue).",
          achievements: [
            "Redesigned budgeting process reducing cycle time by 50%",
            "Created financial models that identified $30M in cost-saving opportunities",
            "Developed KPI dashboard used by executive leadership for strategic decisions",
            "Mentored team of 8 financial analysts with 100% retention rate"
          ]
        }
      ],
      education: [
        {
          id: uuidv4(),
          degree: "MBA, Finance",
          institution: "University of Chicago Booth School of Business",
          location: "Chicago, IL",
          startDate: "2006-09",
          endDate: "2008-05",
          current: false,
          description: "Graduated with honors. Concentration in corporate finance and investment management."
        },
        {
          id: uuidv4(),
          degree: "BS, Accounting",
          institution: "University of Illinois",
          location: "Urbana-Champaign, IL",
          startDate: "2002-09",
          endDate: "2006-05",
          current: false,
          description: "Summa Cum Laude. Member of Beta Alpha Psi accounting honor society."
        }
      ],
      skills: [
        { id: uuidv4(), name: "Financial Strategy", level: 5, category: "Finance" },
        { id: uuidv4(), name: "Mergers & Acquisitions", level: 5, category: "Finance" },
        { id: uuidv4(), name: "Financial Planning & Analysis", level: 5, category: "Finance" },
        { id: uuidv4(), name: "Capital Markets", level: 4, category: "Finance" },
        { id: uuidv4(), name: "Risk Management", level: 4, category: "Finance" },
        { id: uuidv4(), name: "Investor Relations", level: 5, category: "Communication" },
        { id: uuidv4(), name: "ERP Systems", level: 4, category: "Technology" },
        { id: uuidv4(), name: "Strategic Planning", level: 5, category: "Management" },
        { id: uuidv4(), name: "Team Leadership", level: 5, category: "Management" },
        { id: uuidv4(), name: "Board Reporting", level: 5, category: "Communication" }
      ],
      certifications: [
        {
          id: uuidv4(),
          name: "Certified Public Accountant (CPA)",
          issuer: "American Institute of CPAs",
          date: "2007-09",
          expires: null,
          credentialId: "CPA-987654",
          url: "cpaverify.org"
        },
        {
          id: uuidv4(),
          name: "Chartered Financial Analyst (CFA)",
          issuer: "CFA Institute",
          date: "2010-06",
          expires: null,
          credentialId: "CFA-123456",
          url: "cfainstitute.org/verify"
        }
      ]
    }
  },
  {
    id: "4",
    name: "Minimalist Modern",
    category: "Minimal",
    description: "Minimalist design with elegant typography",
    image: "/resume.png",
    popular: false,
    structure: {
      layout: 'minimal',
      primaryColor: '#0f172a',
      secondaryColor: '#64748b',
      fontFamily: 'Inter, sans-serif',
      fontSize: '10pt',
      spacing: 'compact',
      sections: ['personal', 'summary', 'experience', 'skills', 'education']
    },
    sampleData: {
      personal: {
        fullName: "Taylor Chen",
        jobTitle: "Frontend Developer",
        email: "taylor.chen@example.com",
        phone: "(555) 876-5432",
        website: "taylorchen.dev",
        location: "Seattle, WA",
        linkedIn: "linkedin.com/in/taylorchen",
        bio: "Frontend developer specializing in React and modern JavaScript frameworks with a passion for creating clean, accessible, and performant web applications."
      },
      summary: "Frontend developer with 4+ years of experience building responsive web applications with React, TypeScript, and modern CSS. Passionate about web accessibility, performance optimization, and creating intuitive user interfaces. Committed to writing clean, maintainable code and staying current with emerging web technologies.",
      experience: [
        {
          id: uuidv4(),
          title: "Frontend Developer",
          company: "TechNova Solutions",
          location: "Seattle, WA",
          startDate: "2021-02",
          endDate: null,
          current: true,
          description: "Develop and maintain frontend applications for enterprise clients using React, TypeScript, and modern frontend tools.",
          achievements: [
            "Rebuilt company's main product dashboard reducing load time by 60%",
            "Implemented component library used across 5 different projects",
            "Improved accessibility compliance from 65% to 98% WCAG AA standard",
            "Mentored 3 junior developers in React best practices"
          ]
        },
        {
          id: uuidv4(),
          title: "Web Developer",
          company: "Digital Agency Co.",
          location: "Portland, OR",
          startDate: "2019-05",
          endDate: "2021-01",
          current: false,
          description: "Created responsive websites and web applications for various clients in retail, healthcare, and education sectors.",
          achievements: [
            "Developed 12+ client websites with focus on responsive design",
            "Reduced build times by 40% through webpack optimization",
            "Implemented automated testing that caught 25+ critical bugs before deployment",
            "Created reusable animation library that improved UX across projects"
          ]
        },
        {
          id: uuidv4(),
          title: "Frontend Intern",
          company: "StartUp Inc.",
          location: "Seattle, WA",
          startDate: "2018-09",
          endDate: "2019-04",
          current: false,
          description: "Assisted in developing UI components and implementing designs for a SaaS platform.",
          achievements: [
            "Built 20+ reusable UI components for company's design system",
            "Collaborated with designers to implement pixel-perfect interfaces",
            "Optimized image assets reducing page load times by 25%"
          ]
        }
      ],
      education: [
        {
          id: uuidv4(),
          degree: "BS, Computer Science",
          institution: "University of Washington",
          location: "Seattle, WA",
          startDate: "2015-09",
          endDate: "2019-06",
          current: false,
          description: "Focus on web development and human-computer interaction. Capstone project: Accessible web application for community resources."
        }
      ],
      skills: [
        { id: uuidv4(), name: "React", level: 5, category: "Frontend" },
        { id: uuidv4(), name: "TypeScript", level: 4, category: "Languages" },
        { id: uuidv4(), name: "JavaScript", level: 5, category: "Languages" },
        { id: uuidv4(), name: "HTML5", level: 5, category: "Frontend" },
        { id: uuidv4(), name: "CSS3/SASS", level: 5, category: "Frontend" },
        { id: uuidv4(), name: "Redux", level: 4, category: "Frontend" },
        { id: uuidv4(), name: "Jest/React Testing Library", level: 4, category: "Testing" },
        { id: uuidv4(), name: "Webpack", level: 3, category: "Tools" },
        { id: uuidv4(), name: "Git", level: 4, category: "Tools" },
        { id: uuidv4(), name: "Web Accessibility", level: 4, category: "Frontend" },
        { id: uuidv4(), name: "Responsive Design", level: 5, category: "Frontend" },
        { id: uuidv4(), name: "Performance Optimization", level: 4, category: "Frontend" }
      ]
    }
  },
  {
    id: "5",
    name: "Technical Expert",
    category: "Technical",
    description: "Optimized for technical roles and skill presentation",
    image: "/resume.png",
    popular: false,
    structure: {
      layout: 'technical',
      primaryColor: '#0f766e',
      secondaryColor: '#374151',
      fontFamily: 'Roboto Mono, monospace',
      fontSize: '10pt',
      spacing: 'compact',
      sections: ['personal', 'skills', 'experience', 'projects', 'education', 'certifications']
    },
    sampleData: {
      personal: {
        fullName: '',
        jobTitle: '',
        email: '',
        phone: '',
        website: '',
        location: '',
        linkedIn: '',
        bio: ''
      },
      summary: '',
      experience: [],
      education: [],
      skills: [],
      certifications: [],
      projects: []
    }
  }
  ]