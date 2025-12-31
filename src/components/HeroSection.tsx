import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Briefcase, Send } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const leftOrbY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rightOrbY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0]);
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Effects */}
      <motion.div 
        className="absolute inset-0 bg-grid-pattern" 
        style={{ opacity: gridOpacity }}
      />
      <motion.div 
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"
        style={{ y: leftOrbY }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float"
        style={{ y: rightOrbY }}
      />
      
      {/* Parallax Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"
        style={{ y: backgroundY }}
      />

      <div className="container relative z-10 px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary/10 border border-primary/20 rounded-full"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">15+ Years of Excellence</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            <span className="text-foreground">Innovative</span>
            <br />
            <span className="text-gradient">Piping & Mechanical</span>
            <br />
            <span className="text-foreground">Design Expert</span>
          </motion.h1>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Seasoned Senior Piping & Mechanical Designer with{" "}
            <span className="text-foreground font-medium">15+ years</span> revolutionizing mining, 
            energy, and utilities projects. Master of 3D plant modeling, intelligent P&IDs, and 
            data-driven integrations. Known for{" "}
            <span className="text-primary">laser-sharp detail</span>, tech-savvy innovation to 
            streamline workflows, and collaborative prowess in stakeholder magic and project triumphs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={() => scrollToSection("#portfolio")}
              className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg glow-primary transition-all hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Briefcase className="w-5 h-5" />
              Explore Portfolio
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="group flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg border border-border hover:border-primary/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              Request Full CV
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={() => scrollToSection("#portfolio")}
            >
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
              <ArrowDown className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
