import React from 'react';
import { Globe, Cpu, TrendingUp, Lightbulb, Users, ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      num: "01",
      title: "Web Development",
      icon: Globe,
      description: "Building modern, responsive, and high-performance websites for businesses and individuals tailored for conversion, speed, and seamless cross-device experiences.",
      deliverables: ["Responsive Websites & SPAs", "Clean Semantic HTML/CSS/JS", "Lead Capture & Contact Portals", "SEO & Speed Optimization"],
      tag: "Code & Web",
      projectReference: "Kenuch Solar, Awa Decoration"
    },
    {
      num: "02",
      title: "Technology & Innovation",
      icon: Cpu,
      description: "Exploring cutting-edge technologies, embedded software, robotics, and artificial intelligence to solve complex engineering and operational bottlenecks.",
      deliverables: ["Robotics Hardware Prototyping", "Microcontroller & Sensor Wiring", "AI Exploration & Automation", "Rapid Technical Testing"],
      tag: "Hardware & AI",
      projectReference: "GIDEL Robotics, Team Galaxy"
    },
    {
      num: "03",
      title: "Digital Entrepreneurship",
      icon: TrendingUp,
      description: "Exploring digital business models, building sustainable ideas, and understanding how applied technology creates tangible commercial value for businesses.",
      deliverables: ["Digital Brand Strategy", "Customer Funnel Optimization", "Product-Market Discovery", "Tech-Enabled Value Creation"],
      tag: "Business & Growth",
      projectReference: "Kenuch Solar & Client Ventures"
    },
    {
      num: "04",
      title: "Creative Thinking",
      icon: Lightbulb,
      description: "Developing fresh concepts, approaching engineering and business challenges from first principles, and crafting practical, cost-effective solutions.",
      deliverables: ["First-Principles Problem Solving", "Alternative Architecture Design", "Iterative Prototyping", "User-Centric Workflows"],
      tag: "Strategy & Ideation",
      projectReference: "Custom Engineering Prototypes"
    },
    {
      num: "05",
      title: "Collaboration & Leadership",
      icon: Users,
      description: "Working effectively with multi-disciplinary teams, participating in competitive tournaments, and leading high-pressure problem-solving initiatives.",
      deliverables: ["Tournament Robotics Execution", "Cross-Functional Teamwork", "Calm Crisis Troubleshooting", "Open Technical Communication"],
      tag: "Team & Competition",
      projectReference: "Team Galaxy International Circuit"
    }
  ];

  return (
    <section id="services" className="py-24 border-t border-slate-900 bg-slate-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <p className="text-xs uppercase font-mono tracking-widest text-amber-400">02. WHAT I DO</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interdisciplinary Capabilities. Real-World Execution.
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Combining software engineering, competitive robotics innovation, and business acumen to build impactful digital and physical solutions.
          </p>
        </div>

        {/* 5 Distinct Service Cards (Bento-like layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index === 0 || index === 1;

            return (
              <div
                key={service.title}
                className={`group relative p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-slate-900/90 border-slate-700/80 hover:border-amber-400/50 shadow-lg shadow-black/40'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                <div>
                  {/* Card Header with Editorial Index and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-amber-400/90 font-semibold">{service.num}</span>
                    <div className="p-2.5 rounded-xl bg-slate-800 text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List (unboxed) */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Focus Areas:</p>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer with Project Reference */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="truncate pr-2">Ref: {service.projectReference}</span>
                  <a
                    href="#projects"
                    className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium whitespace-nowrap shrink-0"
                  >
                    <span>View Work</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
