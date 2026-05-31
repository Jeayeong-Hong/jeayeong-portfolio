import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Github } from "lucide-react";

const contactLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Jeayeong-Hong",
  },
  {
    icon: FileText,
    label: "Resume",
    href: "/resume/resume.pdf",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            함께 일하고 싶다면
          </h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            새로운 기회와 협업 이야기를 기다리고 있습니다.
          </p>

          <p className="mb-10 break-words font-mono text-2xl font-semibold text-foreground md:text-4xl">
            hong612644@gmail.com
          </p>

          <div className="flex justify-center gap-6">
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-28 flex-col items-center gap-2 rounded-xl bg-card p-5 border-subtle transition-all duration-300 hover:border-primary/30"
              >
                <Icon
                  size={22}
                  className="text-muted-foreground transition-colors group-hover:text-primary"
                />
                <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
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
