export interface SkillItem {
  name: string;
  category: 'Development' | 'Robotics & AI' | 'Strategy & Mindset';
  level: string;
  description: string;
  highlights: string[];
}

export const skillsData: SkillItem[] = [
  {
    name: "Web Design & Development",
    category: "Development",
    level: "Advanced",
    description: "Building modern, high-performance, and responsive websites for commercial businesses and individuals.",
    highlights: ["Clean semantic structure", "Mobile-first layouts", "Cross-browser compatibility"]
  },
  {
    name: "HTML5, CSS3 & JavaScript",
    category: "Development",
    level: "Advanced",
    description: "Core web standards proficiency, responsive layouts, CSS animations, and dynamic client-side interactions.",
    highlights: ["Modern ES6+ syntax", "DOM manipulation", "Tailwind CSS & CSS Grid/Flexbox"]
  },
  {
    name: "Python Programming",
    category: "Development",
    level: "Proficient",
    description: "Scripting, algorithm implementation, robotics prototyping logic, and data handling.",
    highlights: ["Automation scripts", "Hardware microcontroller interfacing", "Logic structuring"]
  },
  {
    name: "UI/UX Design",
    category: "Development",
    level: "Proficient",
    description: "Designing user-centered interfaces with strict visual hierarchy, clean typography, and intuitive user journeys.",
    highlights: ["Wireframing & prototypes", "Design systems", "Conversion-focused layouts"]
  },
  {
    name: "Robotics & Innovation",
    category: "Robotics & AI",
    level: "Advanced / Competitive",
    description: "Hands-on engineering, mechanical assembly, sensor integration, and competitive arena strategy.",
    highlights: ["Tournament robotics", "Microcontroller circuits", "Field troubleshooting"]
  },
  {
    name: "Artificial Intelligence Exploration",
    category: "Robotics & AI",
    level: "Intermediate",
    description: "Investigating emerging AI capabilities, generative tools, computer vision fundamentals, and intelligent systems.",
    highlights: ["Generative AI integration", "Prompt engineering", "Smart workflow automation"]
  },
  {
    name: "Digital Entrepreneurship",
    category: "Strategy & Mindset",
    level: "Active Practitioner",
    description: "Identifying market opportunities, building ideas into viable digital solutions, and understanding business value.",
    highlights: ["Client value proposition", "Lead funnels", "Digital presence strategy"]
  },
  {
    name: "Problem Solving & Creative Thinking",
    category: "Strategy & Mindset",
    level: "Mastery Mindset",
    description: "Approaching complex challenges from first principles, experimenting fearlessly, and finding practical solutions.",
    highlights: ["Analytical deduction", "Alternative approaches", "Continuous improvement"]
  },
  {
    name: "Team Collaboration & Leadership",
    category: "Strategy & Mindset",
    level: "High Alignment",
    description: "Thriving in high-stakes competition environments, coordinating teammates, and executing unified game plans.",
    highlights: ["Tournament team play", "Interdisciplinary coordination", "Discipline & morale"]
  },
  {
    name: "Communication & Client Relations",
    category: "Strategy & Mindset",
    level: "Professional",
    description: "Translating technical requirements into clear client deliverables, active listening, and transparent updates.",
    highlights: ["Requirement discovery", "Stakeholder presentations", "Professional delivery"]
  }
];

export const experienceAchievements = [
  {
    year: "2025 – 2026",
    title: "International Robotics Competitor & Team Lead",
    organization: "Team Galaxy / FIRST & Coding Age Circuit",
    description: "Represented Team Galaxy in competitive robotics tournaments. Designed, assembled, and programmed arena robots, overcoming live match challenges under strict timing constraints.",
    metric: "Finalist Placement"
  },
  {
    year: "2025 – 2026",
    title: "Lead Web Developer & Digital Brand Consultant",
    organization: "Pitta Santorini, Nagina Grill, PrettyAngel's, Cut Label, Kenuch Solar & Awa Decoration",
    description: "Engineered and deployed responsive commercial websites across UK hospitality, fashion retail, renewable energy, and event styling businesses—complete with Schema.org local SEO, Deliveroo integration, and custom brand systems.",
    metric: "6 Live Client Sites"
  },
  {
    year: "2024 – 2026",
    title: "Lead Hardware & Firmware Prototyper",
    organization: "GIDEL Robotics Project",
    description: "Spearheaded hardware construction, multi-axis mechanical articulation, and microcontroller sensory feedback loops for precision automated manipulation.",
    metric: "2mm Positioning Precision"
  },
  {
    year: "Continuous",
    title: "Self-Driven Tech & Innovation Researcher",
    organization: "Continuous Learning & Experimentation",
    description: "Constantly expanding mastery across full-stack web engineering, Python, artificial intelligence, and digital business creation with an unshakeable belief that your background never limits your imagination.",
    metric: "Daily Dedication"
  }
];
