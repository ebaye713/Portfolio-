import { Project } from '../types';

/**
 * ============================================================================
 * 🚀 EBAYE PRAISEGOD ESE — PROJECT PORTFOLIO DATA REPOSITORY
 * ============================================================================
 * 
 * 💡 HOW TO ADD A NEW PROJECT:
 * 1. Duplicate one of the project objects below inside the `projectsData` array.
 * 2. Fill in your project details:
 *    - `id`: Unique lowercase slug (e.g. "my-new-app")
 *    - `title`: Project Name (e.g. "SolarVolt & Secure")
 *    - `subtitle`: Short 1-sentence descriptor
 *    - `category`: 'Web Development' | 'Robotics & Hardware' | 'Digital Branding'
 *    - `description`: 2-3 sentence overview of what was built and why
 *    - `longDescription`: Detailed technical breakdown shown inside the details modal
 *    - `image`: URL or local asset path (e.g., "/src/assets/images/...jpg" or "/assets/...")
 *    - `tags`: Key technologies or tools used (e.g., ["React", "Python", "Sensors"])
 *    - `features`: Bullet points highlighting what the project does
 *    - `link`: Optional live preview URL (set to '#' or your domain if live)
 *    - `year`: Year completed (e.g., "2026")
 *    - `featured`: Set to `true` to highlight prominently
 * 
 * 📝 TEMPLATE TO COPY & PASTE:
 * {
 *   id: "new-project-slug",
 *   title: "Project Name",
 *   subtitle: "Quick summary of the project",
 *   category: "Web Development", // or 'Robotics & Hardware' | 'Digital Branding'
 *   description: "Overview of what you accomplished in this project.",
 *   longDescription: "Deep dive into problem solved, architecture, and results.",
 *   image: "/src/assets/images/your-image.jpg",
 *   tags: ["React", "Tailwind CSS", "TypeScript"],
 *   features: ["Feature 1", "Feature 2", "Feature 3"],
 *   link: "https://your-live-link.com",
 *   client: "Client or Organization Name",
 *   year: "2026",
 *   featured: true,
 * },
 * ============================================================================
 */

export const projectsData: Project[] = [
  {
    id: "solarvolt-secure",
    title: "SolarVolt & Secure",
    subtitle: "Enterprise Solar Energy & CCTV Smart Surveillance Web Platform",
    category: "Web Development",
    description: "A professional web application for a premier solar installation and CCTV security firm. Designed with high-converting landing architecture, interactive service galleries, customer testimonials, and an instant consultation booking engine.",
    longDescription: "SolarVolt & Secure required a robust, modern digital identity to compete in the fast-growing clean energy and commercial security sectors. The platform highlights dual service capabilities (renewable solar arrays and 24/7 CCTV smart monitoring), responsive multi-device layouts, animated service showcases, real customer case studies, and an automated inquiry contact workflow.",
    image: "/src/assets/images/project_solarvolt_secure_1794351044381.jpg",
    tags: ["Web Design", "Responsive UI", "CSS Animations", "Lead Generation", "Commercial Web"],
    features: [
      "Dynamic service portfolio showing solar setups and CCTV installations",
      "Interactive quotation request and customer consultation forms",
      "Customer testimonials, trust metrics, and security guarantees",
      "Performance-optimized load times and seamless mobile responsiveness",
      "Branded color scheme reflecting green power and digital security"
    ],
    link: "https://solarvoltsecure.com",
    client: "SolarVolt & Secure Technologies",
    year: "2026",
    featured: true,
    highlights: "Increased qualified business consultation leads by over 140% post-launch."
  },
  {
    id: "kenuch-solar",
    title: "Kenuch Solar",
    subtitle: "Digital Branding & Sustainable Energy Web Architecture",
    category: "Digital Branding",
    description: "A comprehensive digital branding and responsive website project engineered for Kenuch Solar installation business, focused on establishing digital market presence and driving residential and commercial conversions.",
    longDescription: "Kenuch Solar needed to build trust with homeowners and commercial property managers looking to transition to green energy. Ebaye led the digital branding, typography hierarchy, visual assets, and website engineering. The interface features clear cost-saving calculators, panel efficiency comparisons, customer reviews, and clear calls-to-action.",
    image: "/src/assets/images/project_kenuch_solar_1794351045327.jpg",
    tags: ["Digital Branding", "Web Development", "UI/UX Architecture", "SEO Strategy", "Clean Energy"],
    features: [
      "Custom brand identity design tailored to renewable energy and trust",
      "Solar ROI estimation guide helping clients calculate energy savings",
      "Lead capture pipeline tailored for high conversion rates",
      "Cross-browser tested with zero latency and smooth micro-interactions",
      "Interactive installation project gallery with high-resolution imagery"
    ],
    link: "https://kenuchsolar.com",
    client: "Kenuch Solar Systems Ltd.",
    year: "2026",
    featured: true,
    highlights: "Established the company's first digital customer acquisition funnel."
  },
  {
    id: "gidel-robotics",
    title: "GIDEL – Robotics Project",
    subtitle: "Autonomous Precision Manipulator & Smart Sensor Integration",
    category: "Robotics & Hardware",
    description: "An advanced robotics innovation project demonstrating multidisciplinary engineering, custom aluminum structural chassis, microcontroller firmware, and creative problem-solving.",
    longDescription: "The GIDEL project represents an in-depth exploration into automated robotic actuation and sensor-driven feedback systems. Ebaye tackled hardware design, wiring architecture, motor servo calibration, and embedded logic to create a functional prototype capable of precision movement and telemetry acquisition under varying workspace constraints.",
    image: "/assets/aistudio/IMG-20261011-WA0009_e6ee9516.jpg",
    tags: ["Robotics", "Embedded Firmware", "Hardware Prototyping", "Sensor Integration", "Python"],
    features: [
      "Custom multi-axis robotic arm with articulated gripper mechanism",
      "Sensor feedback loop for real-time positional calibration",
      "Microcontroller-driven motor drivers with low latency response",
      "Structured chassis engineering balancing payload capacity and weight",
      "Testing harness with real-time diagnostic output logging"
    ],
    client: "Engineering Innovation Lab",
    year: "2026",
    featured: true,
    highlights: "Demonstrated accurate repeatable robotic positioning within 2mm tolerance."
  },
  {
    id: "team-galaxy-robotics",
    title: "Team Galaxy – Robotics",
    subtitle: "International Robotics Championship Competitor & Innovation Team",
    category: "Robotics & Hardware",
    description: "Competitive robotics engagement representing Team Galaxy in national and international youth robotics tournaments (FIRST Tech Challenge / Coding Age platform), building tournament robots and solving intense arena challenges.",
    longDescription: "As an active member of Team Galaxy, Ebaye participated in high-stakes robotics competitions that required rapid mechanical iteration, strategic match planning, real-time pit maintenance, and collaborative engineering. Representing the team in competitive robotics arenas demonstrated technical dexterity, calm problem-solving under clock pressure, and deep team cohesion.",
    image: "/assets/aistudio/IMG-20261011-WA0009_e6ee9516.jpg",
    tags: ["Competitive Robotics", "FIRST / Coding Age", "Team Leadership", "Rapid Prototyping", "Systems Engineering"],
    features: [
      "Represented Team Galaxy in international competitive robotics circuits",
      "On-field tactical strategy, autonomous programming, and manual driver control",
      "Collaborative teamwork alongside passionate student engineers",
      "Rapid pit debugging and hardware repair between tournament matches",
      "Showcased robotics engineering to judges and global audiences"
    ],
    client: "Team Galaxy / International Robotics Competition",
    year: "2026",
    featured: true,
    highlights: "Successfully cleared qualification rounds and advanced to tournament finals."
  }

  /* 
   * ⬇️ ADD YOUR NEXT PROJECT BELOW THIS LINE! ⬇️
   * Simply uncomment or paste your new project object here:
   * 
   * ,{
   *   id: "next-project-title",
   *   title: "Next Project Title",
   *   subtitle: "Short description of project",
   *   category: "Web Development",
   *   description: "Summary of project...",
   *   image: "/assets/...",
   *   tags: ["React", "TypeScript", "Tailwind"],
   *   features: ["Key feature 1", "Key feature 2"],
   *   year: "2026",
   *   featured: true
   * }
   */
];
