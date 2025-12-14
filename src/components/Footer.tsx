import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-muted-foreground"
          >
            © 2025 Senior Piping & Mechanical Designer. All rights reserved.
          </motion.p>

          <motion.a
            href="https://www.linkedin.com/in/myprofile"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Connect on LinkedIn
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
