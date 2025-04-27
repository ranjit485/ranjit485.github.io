const CONFIG = {  
  github: {
    username: 'ranjit485',
  },
  base: '/',
  projects: {
    external: {
      header: 'Highlighted Projects',
      projects: [
        {
          title: 'Present Sir',
          description: 'Developed an Android app with a Spring Boot backend to track buses in real-time, serving over 1,000 daily users. Features include live location updates and push notifications for enhanced student safety and convenience.',
          imageUrl: 'https://presentsir-app.netlify.app/assets/images/appicon.png',
          link: 'https://presentsir-app.netlify.app/',
        },
        {
          title: 'Farm Genius',
          description: 'Farm Genius is a next-gen smart farming platform combining AI, real-time weather, offline-first mobile tech, and location intelligence to solve real problems for real farmer From detecting plant diseases using AI, to locating the nearest market, predicting the weather, and working offline in remote areas — it’s designed to uplift rural agriculture with the power of technology.',
          imageUrl: 'https://raw.githubusercontent.com/ranjit485/krushiMitra/refs/heads/master/app/src/main/res/drawable/spashlogo.png',
          link: 'https://github.com/ranjit485/krushiMitra',
        },
      ],
    },
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'manual',
      manual: {
        projects: ['ranjit485/freetubeapp', 'ranjit485/canigo', 'ranjit485/smartdb', 'ranjit485/mathsolver'],
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
    website: 'https://ranjit485.blogspot.com/?m=1',
    phone: '7499491002',
    email: 'patilranjit485@gmail.com',
  },
  resume: {
    fileUrl: 'https://drive.google.com/file/d/17-kD8esWTydaBDoBzgfaPNiW5g5GBNNF/view?usp=drivesdk',
  },
  skills: [
    'Spring Framework',
    'SaaS Development',
    'RBAC (Role-Based Access Control)',
    'MVC Pattern',
    'Microservices',
    'Docker',
    'PostgreSQL',
    'MongoDB',
    'MySQL',
    'JUnit',
    'API Testing',
    'SEO',
    'Selenium Testing',
    'Version Control',
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
      company: 'Freelance Projects',
      position: 'Full Stack Developer',
      from: 'June 2024',
      to: 'June 2024',
    },
  ],
  certifications: [
    {
      name: 'Java Spring Framework 6 with Spring Boot 3',
      body: 'Master Java, Spring 6 and Spring Boot 3 with JDBC, JPA, Security, Docker and Microservices with Telusko',
      year: '2024',
      description: 'Completed the comprehensive Spring 6 course by Navin Reddy on Udemy, gaining in-depth knowledge of the latest Spring technologies, including Spring Boot 3, Dependency Injection, Spring Security, and advanced REST API development.',
      link: 'https://www.udemy.com/course/spring-framework-6/', 
    },
  ],
  educations: [
    {
      institution: 'AITRC Vita',
      degree: 'B.Tech AI&ML',
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
    displayAvatarRing: false,
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
    
