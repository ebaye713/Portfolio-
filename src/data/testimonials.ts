import { Testimonial } from '../types';

/**
 * ============================================================================
 * 💬 CLIENT & COLLABORATOR TESTIMONIALS
 * ============================================================================
 * 
 * 💡 HOW TO ADD A NEW CLIENT REVIEW:
 * 1. Add a new object to the `testimonialsData` array below.
 * 2. Fill in:
 *    - `quote`: What the client or mentor said
 *    - `author`: Full name
 *    - `role`: Job title (e.g., "Founder & CEO", "Lead Mentor")
 *    - `company`: Client company or organization
 *    - `projectRelation`: Which project they worked with you on
 * ============================================================================
 */

export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-solarvolt",
    quote: "Ebaye transformed how customers perceive SolarVolt & Secure online. He didn't just write clean code; he understood our business model, incorporated intuitive service breakdowns, and built an inquiry flow that doubled our incoming calls within weeks of launching.",
    author: "Engr. Emmanuel Kalu",
    role: "Managing Director",
    company: "SolarVolt & Secure Technologies",
    projectRelation: "SolarVolt & Secure Web Platform"
  },
  {
    id: "testimonial-kenuch",
    quote: "Working with Ebaye on the Kenuch Solar digital branding was an absolute pleasure. His eye for clean aesthetic design, prompt turnaround, and disciplined work ethic gave our solar business the modern credibility we needed to win commercial tenders.",
    author: "Kenneth Uche",
    role: "Head of Operations",
    company: "Kenuch Solar Systems Ltd.",
    projectRelation: "Kenuch Solar Brand & Website"
  },
  {
    id: "testimonial-robotics",
    quote: "In the robotics arena, split-second problem solving separates winning teams from the rest. Ebaye was our anchor during intense competitive matches with Team Galaxy—calm under pressure, mechanically agile, and always uplifting his teammates.",
    author: "Engr. David Okon",
    role: "Robotics Coach & Lead Mentor",
    company: "Team Galaxy / FIRST Robotics",
    projectRelation: "Team Galaxy International Competitions"
  },
  {
    id: "testimonial-collaborator",
    quote: "Ebaye is one of the rare young innovators who pairs technical capability with strong entrepreneurial drive. When faced with an unfamiliar framework or challenge, he dives in, masters it, and delivers something meaningful.",
    author: "Blessing Adeyemi",
    role: "Tech Innovation Lead",
    company: "Future Forward Youth Tech Alliance",
    projectRelation: "Innovation & Software Collaborations"
  }

  /* 
   * ⬇️ ADD NEW CLIENT REVIEWS BELOW THIS LINE ⬇️
   * ,{
   *   id: "new-client-review",
   *   quote: "Ebaye delivered beyond expectations on our project...",
   *   author: "Client Full Name",
   *   role: "Chief Technology Officer",
   *   company: "Company Name",
   *   projectRelation: "E-Commerce Web Portal"
   * }
   */
];
