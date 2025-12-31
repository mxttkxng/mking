import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container px-6">
        <div className="flex items-center justify-center">

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
