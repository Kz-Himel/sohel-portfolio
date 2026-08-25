// ------------------------------------------------------------------
// All editable content lives here. Change name, links, projects, etc.
// in one place instead of hunting through components.
// ------------------------------------------------------------------

export const profile = {
  name: "Sohel Rana",
  initials: "SR",
  title: "Python & Django Developer",
  subtitle: "Full-Stack Web Developer",
  tagline:
    "I'm a passionate Full-Stack Web Developer focused on building modern, responsive, and user-friendly web applications using Python, Django, JavaScript, and modern web technologies.",
  about: [
    "Hi, I'm Sohel Rana, a passionate Full-Stack Web Developer who loves building modern, responsive, and user-friendly web applications.",
    "I work with Python, Django, HTML, CSS, JavaScript, MySQL, PostgreSQL, Git, and GitHub.",
    "I enjoy turning ideas into real-world applications, solving problems through clean and efficient code, and continuously learning new technologies to improve my development skills.",
  ],
  profileImage: null, // set to an image path/URL to show a real photo
  social: {
    facebook: "YOUR_FACEBOOK_URL",
    linkedin: "YOUR_LINKEDIN_URL",
    github: "YOUR_GITHUB_URL",
  },
  email: "hello@sohelrana.dev",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    label: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    label: "Backend",
    skills: ["Python", "Django"],
  },
  {
    label: "Database",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub"],
  },
];

export const projects = [
  {
    id: "task-manager",
    name: "Task Manager",
    description:
      "A web-based task management application where users can create, update, delete and manage their daily tasks.",
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "job-tracker",
    name: "Job Tracker",
    description:
      "A job application tracking system that helps users manage job applications, application status, interview information and job details.",
    tech: ["Python", "Django", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "ecommerce",
    name: "E-Commerce Website",
    description:
      "A modern e-commerce website where users can browse products, view product details, manage cart items and place orders.",
    tech: ["Python", "Django", "JavaScript", "HTML", "CSS", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "student-management",
    name: "Student Management System",
    description:
      "A student management system for managing student information, courses, results and other academic data.",
    tech: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "demo-project",
    name: "Demo Project",
    description:
      "An additional project slot, ready to showcase the next build — swap this placeholder out any time.",
    tech: ["Python", "Django", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
