import heroImage from "../assets/profile.png";

export const profile = {
  name: "Sohel Rana",
  initials: "SR",
  title: "Python & Django Developer",
  subtitle: "Full-Stack Web Architect",
  location: "Bangladesh (Available Worldwide)",
  status: "Available for Full-Time Roles & Projects",
  tagline:
    "Specialized in architecting high-performance backend systems with Django & Python, paired with modern, responsive React interfaces and robust database design.",
  about: [
    "I am a passionate Full-Stack Web Developer dedicated to engineering clean, reliable, and user-centric web applications.",
    "My core mastery revolves around Python and Django — designing robust RESTful APIs, scalable database schemas with PostgreSQL & MySQL, and seamless frontend integrations with modern JavaScript and React.",
    "I focus on writing maintainable, secure code following clean architecture principles, test-driven logic, and continuous deployment workflows.",
  ],
  profileImage: heroImage,
  heroImage: heroImage,
  stats: [
    { value: "2+", label: "Years of Experience" },
    { value: "15+", label: "Projects Completed" },
    { value: "100%", label: "Code Integrity" },
    { value: "<24h", label: "Response Time" },
  ],
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    whatsapp: "+8801700000000",
    email: "hello@sohelrana.dev",
  },
  email: "hello@sohelrana.dev",
  resumeUrl: "#contact",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const coreServices = [
  {
    title: "Backend API Engineering",
    description:
      "Robust RESTful microservices and monoliths with Django REST Framework, JWT auth, secure endpoints, and optimal serialization.",
    icon: "server",
  },
  {
    title: "Full-Stack Web Apps",
    description:
      "End-to-end production web applications connecting high-throughput Python backends with interactive React & Tailwind frontends.",
    icon: "code",
  },
  {
    title: "Database Architecture",
    description:
      "Normalized relational modeling, index optimization, query tuning, and reliable data migrations using PostgreSQL & MySQL.",
    icon: "database",
  },
  {
    title: "Performance & Security",
    description:
      "Strict CSRF/CORS security, caching layers, automated migrations, clean error logging, and resilient deployment practices.",
    icon: "shield",
  },
];

export const skillCategories = [
  {
    category: "Backend & Frameworks",
    skills: [
      { name: "Python", level: 92, tag: "Core" },
      { name: "Django", level: 90, tag: "Primary" },
      { name: "Django REST Framework", level: 88, tag: "APIs" },
      { name: "FastAPI", level: 75, tag: "Async" },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "JavaScript (ES6+)", level: 86, tag: "Core" },
      { name: "React.js", level: 82, tag: "UI" },
      { name: "HTML5 / Semantic Web", level: 95, tag: "Markup" },
      { name: "CSS3 / Tailwind CSS", level: 90, tag: "Styling" },
    ],
  },
  {
    category: "Database & Storage",
    skills: [
      { name: "PostgreSQL", level: 86, tag: "Relational" },
      { name: "MySQL", level: 85, tag: "Relational" },
      { name: "SQLite", level: 90, tag: "Dev/Test" },
      { name: "Redis", level: 72, tag: "Caching" },
    ],
  },
  {
    category: "DevOps & Tooling",
    skills: [
      { name: "Git & GitHub", level: 90, tag: "VCS" },
      { name: "Postman", level: 88, tag: "Testing" },
      { name: "Docker", level: 74, tag: "Containers" },
      { name: "Linux / Nginx", level: 76, tag: "Deploy" },
    ],
  },
];

export const marqueeTech = [
  "Python",
  "Django",
  "Django REST",
  "PostgreSQL",
  "React.js",
  "Tailwind CSS",
  "JavaScript",
  "MySQL",
  "Docker",
  "Git & GitHub",
  "Redis",
  "Linux",
  "FastAPI",
  "REST APIs",
];

export const projects = [
  {
    id: "task-manager",
    name: "TaskFlow Workspace",
    category: "Full Stack",
    tagline: "High-productivity team task board with real-time status tracking.",
    description:
      "A complete workspace web application allowing teams to organize sprints, assign priority tasks, track milestones, and visualize activity metrics with authenticated access.",
    highlights: ["Django REST Backend", "React Dynamic UI", "MySQL Database", "Role-based Access"],
    tech: ["Python", "Django", "React", "MySQL", "Tailwind CSS", "REST API"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true,
    stats: "Sub-100ms API response",
  },
  {
    id: "job-tracker",
    name: "CareerPulse CRM",
    category: "Backend",
    tagline: "Smart application pipeline tracker with automated stage analytics.",
    description:
      "A developer & professional job tracking dashboard designed to log applications, schedule interview callbacks, monitor offer stages, and generate conversion reports.",
    highlights: ["PostgreSQL Schema", "Interview Calendar", "Status Analytics", "Secure Session Auth"],
    tech: ["Python", "Django", "PostgreSQL", "JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true,
    stats: "Normalized DB Schema",
  },
  {
    id: "ecommerce",
    name: "AuraCommerce Store",
    category: "Full Stack",
    tagline: "Scalable digital storefront with cart management and order ledger.",
    description:
      "A feature-rich e-commerce engine offering catalog filtering, instant search, authenticated cart sessions, automated invoice generation, and order history tracking.",
    highlights: ["Inventory Ledger", "Cart State Management", "Stripe-Ready Orders", "Admin Controls"],
    tech: ["Python", "Django", "PostgreSQL", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true,
    stats: "Full CRUD & Payment Flow",
  },
  {
    id: "student-management",
    name: "EduCore Academic Portal",
    category: "Full Stack",
    tagline: "Centralized academic administration and grading system.",
    description:
      "Designed for educational institutes to manage student cohorts, semester registrations, grading curves, attendance logs, and faculty course allocations.",
    highlights: ["Batch Enrollments", "Report Card Exports", "Relational Integrity", "MySQL Optimization"],
    tech: ["Python", "Django", "MySQL", "JavaScript", "Bootstrap/Tailwind"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: false,
    stats: "Multi-Role Portals",
  },
  {
    id: "api-gateway",
    name: "Sentinel API Service",
    category: "Backend",
    tagline: "Modular microservice architecture with token authentication.",
    description:
      "A production-grade RESTful API template providing token-based authentication (JWT), request rate-limiting, Swagger documentation, and automated unit test coverage.",
    highlights: ["JWT Token Auth", "Swagger / OpenAPI", "Unit Testing", "Rate Limiting"],
    tech: ["Python", "Django REST", "PostgreSQL", "Swagger", "PyTest"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: false,
    stats: "99% Test Coverage",
  },
];

export const journeyTimeline = [
  {
    period: "2024 — Present",
    role: "Full-Stack Python & Django Developer",
    organization: "Independent Engineering & Projects",
    description:
      "Architecting full-stack web applications, engineering RESTful services with Django REST Framework, and delivering scalable data systems with PostgreSQL and React.",
  },
  {
    period: "2023 — 2024",
    role: "Backend & Web Development Specialization",
    organization: "Practical Software Engineering",
    description:
      "Mastered Python programming, database normalization (MySQL/PostgreSQL), ORM optimization, MVC architectures, and clean code principles.",
  },
  {
    period: "Foundations",
    role: "Frontend & Web Architecture Foundations",
    organization: "Continuous Learning",
    description:
      "Built responsive, accessible web interfaces using semantic HTML5, modern CSS/Tailwind, and JavaScript ES6+ standards.",
  },
];

export const developerCodeSnippet = `# views.py — Sohel Rana's Clean Architecture
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import ProjectSerializer

class PortfolioHighlightView(APIView):
    """
    Exposes high-performance endpoints with
    strict validation & clean queries.
    """
    def get(self, request):
        data = {
            "developer": "Sohel Rana",
            "stack": ["Python 3.12", "Django 5", "React", "PostgreSQL"],
            "status": "Ready to build ambitious products 🚀",
            "quality": "Clean Code, Scalable, Secure"
        }
        return Response(data, status=200)
`;
