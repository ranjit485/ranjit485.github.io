const CONFIG = {
  github: {
    username: 'ranjit485',
  },
  base: '/',
    external: {
      header: 'Highlighted Projects',
      projects: [
        {
          title: 'Present Sir',
          description: 'A smart college bus tracking app enabling real-time tracking and better engagement through notifications.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'manual',
      manual: {
        projects: ['ranjit485/freetube', 'ranjit485/canigo', 'ranjit485/mathsolver'],
      },
    },
  },
  seo: {
    title: 'Ranjit Patil | AI & Machine Learning Engineer | SaaS Expert',
    description: 'Showcasing expertise in Artificial Intelligence, Machine Learning, SaaS development, and cutting-edge technologies. Explore projects, skills, and achievements.',
    imageURL: 'https://example.com/ranjit-profile.jpg',
  },
  social: {
    linkedin: 'ranjit485',
    instagram: '_ranjit_patil',
    website: 'https://www.arifszn.com',
    phone: '7499491002',
    email: 'patilranjit485@gmail.com',
  },
  resume: {
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  skills: [
  'Spring Framework',
  'SaaS Development',
  'RBAC (Role-Based Access Control)',
  'MVC Pattern',
  'Microservices',
  'Docker',
  'Git',
  'GitHub',
  'PostgreSQL',
  'MongoDB',
  'MySQL',
  'JUnit',
  'API Testing',
  'SEO',
  'Selenium Testing',
  'React.js',
  'Node.js',
  'RESTful APIs',
  'Data Structures',
  'Algorithms',
  'Linux Server Management',
  'Multi-Tenant Architecture',
  'Debugging & Error Handling',
],
  experiences: [
    {
      company: 'Tech Solutions Pvt Ltd',
      position: 'Software Engineer Intern',
      from: 'July 2024',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Freelance Projects',
      position: 'Full Stack Developer',
      from: 'June 2021',
      to: 'June 2024',
    },
  ],
  certifications: [
    {
      name: 'Spring Framework',
      body: 'Spring 6 and Spring Boot3',
      year: 'March 2024',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'AITRC Vita',
      degree: 'B.Tech in Artificial Intelligence & Machine Learning',
      from: '2024',
      to: '2027',
    },
    {
      institution: 'MSBTE',
      degree: 'Diploma in Computer Science',
      from: '2021',
      to: '2024',
    },
  ],
  blog: {
    source: 'dev',
    username: 'ranjit485',
    limit: 2,
  },
  googleAnalytics: {
    id: 'G-XXXXXXXXXX',
  },
  hotjar: {
    id: '1234567',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
    themes: ['business', 'light', 'dark', 'lofi', 'luxury', 'night', 'winter'],
    customTheme: {
      primary: '#0d6efd',
      secondary: '#6c757d',
      accent: '#0dcaf0',
      neutral: '#212529',
      'base-100': '#f8f9fa',
      '--rounded-box': '1rem',
      '--rounded-btn': '0.5rem',
    },
  },
  enablePWA: true,
};

export default CONFIG;
    
