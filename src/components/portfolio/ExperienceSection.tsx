import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "2024.09 - 현재",
    title: "프론트엔드 스터디 리드",
    org: "개발 커뮤니티",
    description: "주 1회 React/TypeScript 스터디 진행, 코드 리뷰 문화 정착",
  },
  {
    period: "2024.06 - 2024.08",
    title: "해커톤 참가 (우수상)",
    org: "OO 대학교",
    description: "48시간 내 MVP 개발, 프론트엔드 설계 및 구현 담당",
  },
  {
    period: "2024.03 - 2024.05",
    title: "프론트엔드 부트캠프 수료",
    org: "OO 아카데미",
    description: "React 기반 웹 개발 집중 과정, 팀 프로젝트 3회 수행",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-foreground">
            경험 & 활동
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-8"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background" />

                <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                <h3 className="text-lg font-semibold text-foreground mt-1">{exp.title}</h3>
                <p className="text-sm text-primary font-mono mt-0.5">{exp.org}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
