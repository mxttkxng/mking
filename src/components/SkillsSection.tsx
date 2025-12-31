import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cpu, Target, Rocket, Lightbulb, GraduationCap } from "lucide-react";

const skillCategories = [
  {
    title: "Design Arsenal",
    icon: Cpu,
    skills: ["Autodesk Suite", "Solid Edge", "MicroStation", "Adobe Creative Cloud", "FARO Tools", "NavVis", "PIM360", "Datum360", "Microsoft 365", "SQLiteStudio", "Maximo"]
  },
  {
    title: "Expertise Edge",
    icon: Target,
    skills: ["3D Modeling", "Intelligent P&IDs", "Laser Scanning", "Automation", "FEED Studies", "Piping/Mechanical Layouts", "Isometrics", "Constructible Packages"]
  },
  {
    title: "Delivery Dynamo",
    icon: Rocket,
    skills: ["Procurement", "Consultant Coordination", "Asset Management", "Project Delivery", "Quality Assurance"]
  },
  {
    title: "Innovation Ignition",
    icon: Lightbulb,
    skills: ["Workflow Automation", "Tech Integration", "Stakeholder Engagement", "Process Optimization", "Digital Transformation"]
  }
];

const education = [
  "Advanced Diploma in Piping & Mechanical Engineering",
  "Cert III in Adobe Creative Cloud",
  "Cert III in Advanced Public Sector Writing",
  "Queensland Certificate of Education"
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 rounded-xl bg-card/50 border border-border hover:border-primary/30 hover:bg-card transition-all duration-500"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="font-display font-semibold text-foreground">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.03 }}
            className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const headerRef = useRef(null);
  const educationRef = useRef(null);
  const sectionRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const isEducationInView = useInView(educationRef, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.2, 0.2, 0]);
  const floatingY1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const floatingY2 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 bg-grid-pattern" 
        style={{ opacity: gridOpacity }}
      />
      
      {/* Parallax Floating Elements */}
      <motion.div 
        className="absolute top-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        style={{ y: floatingY1 }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        style={{ y: floatingY2 }}
      />
      
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
            Technical Prowess
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Skills <span className="text-gradient">Spotlight</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Education Section Header */}
        <motion.div
          ref={educationRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isEducationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isEducationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-6 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg">Qualifications</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {education.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isEducationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
