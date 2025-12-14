import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Building2, Wrench, Zap, Droplets, Fuel, Factory } from "lucide-react";

const experiences = [
  {
    title: "Senior Mechanical Designer",
    company: "Leading Energy Firm",
    period: "2023 - Present",
    icon: Zap,
    color: "primary",
    description: "Spearheaded asset uplift for 1,000+ facilities as key consultant liaison, delivering premium 3D models and intelligent P&IDs. Engineered smart data workflows into BIM360 and Datum360. Automated Plant 3D for faster, consistent designs.",
    highlights: [
      "Validated assets for top-tier safety and reliability",
      "Rolled out cloud platforms for seamless collaboration",
      "Crafted 3D designs for greenfield/brownfield feats, from FEED studies to isometrics",
      "Managed procurement with razor-sharp Scopes of Work"
    ]
  },
  {
    title: "Piping & Mechanical Designer",
    company: "Minerals Engineering Firm",
    period: "2021 - 2023",
    icon: Factory,
    color: "accent",
    description: "Powered major mining epics like tin operations paste backfill, 2.4 Mtpa gold projects, processing asset replacements, and more.",
    highlights: [
      "Built 3D models, layouts, and isometrics for ultimate constructibility",
      "Ensured full compliance with industry standards",
      "Teamed up cross-discipline to crush deadlines and minimize rework"
    ]
  },
  {
    title: "Piping & Mechanical Designer",
    company: "Utilities Infrastructure Firm",
    period: "2018 - 2021",
    icon: Droplets,
    color: "primary",
    description: "Transformed water treatment giants including wastewater plant upgrades and sewage facilities. Delivered FEED and detailed designs with P&IDs, isometrics, and 3D layouts.",
    highlights: [
      "Bridged design vision to construction reality",
      "Proactive stakeholder synergy for project success",
      "End-to-end FEED documentation delivery"
    ]
  },
  {
    title: "Piping & Mechanical Designer",
    company: "Resources Development Firm",
    period: "Details in Full CV",
    icon: Building2,
    color: "accent",
    description: "Fueled feasibility and design for industrial sands projects with layouts, flow diagrams, and 3D models."
  },
  {
    title: "Piping & Mechanical Designer",
    company: "Energy Solutions Firm",
    period: "Details in Full CV",
    icon: Fuel,
    color: "primary",
    description: "Engineered gas/water pipelines for mine projects and gas upgrades, producing alignment sheets and routing masterpieces."
  },
  {
    title: "Piping Designer",
    company: "Engineering Consultancy",
    period: "Details in Full CV",
    icon: Wrench,
    color: "accent",
    description: "As-built jet refueling bays, CSG gathering systems with 3D models, and upstream pipeline routings."
  }
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = exp.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div
        className={`relative overflow-hidden rounded-xl border transition-all duration-500 cursor-pointer ${
          isExpanded 
            ? "bg-card border-primary/30 glow-primary" 
            : "bg-card/50 border-border hover:border-primary/20 hover:bg-card"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Header */}
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-lg ${exp.color === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
              <Icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-primary font-medium whitespace-nowrap">{exp.period}</span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Content */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 pt-0">
            <div className="pl-16">
              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
              {exp.highlights && (
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-sm text-foreground/80"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </motion.div>

        {/* Accent Line */}
        <div className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ${
          isExpanded ? "w-full" : "w-0 group-hover:w-full"
        } ${exp.color === "primary" ? "bg-primary" : "bg-accent"}`} />
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="portfolio" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container relative z-10 px-6">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Professional <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A decade and a half of engineering excellence across mining, energy, and utilities sectors.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
