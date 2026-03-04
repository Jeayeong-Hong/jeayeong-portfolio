import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, FileText } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            함께 일하고 싶다면
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            새로운 기회에 항상 열려 있습니다.<br />
            편하게 연락 주세요.
          </p>

          <div className="flex justify-center gap-6">
            {[
              { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
              { icon: Github, label: "GitHub", href: "https://github.com" },
              { icon: FileText, label: "Resume", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-5 rounded-xl bg-card border-subtle hover:border-primary/30 transition-all duration-300 group"
              >
                <Icon size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
