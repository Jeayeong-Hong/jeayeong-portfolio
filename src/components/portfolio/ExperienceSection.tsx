import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "2026.02 - 2026.04",
    title: "프론트엔드 단기심화 부트캠프 수료",
    org: "코드잇",
    description:
      "모임 탐색과 스페이스 관리를 위한 moum-zip 프로젝트를 개발하며 Next.js, React, TanStack Query 기반의 화면 구현과 상태 관리를 경험했습니다.",
  },
  {
    period: "2025.09 - 2025.11",
    title: "새싹 해커톤 참가",
    org: "프론트엔드, 백엔드, AI 엔지니어, 기획자, 디자이너 협업",
    description:
      "팀 프로젝트에서 BAT MVP의 프론트엔드를 담당해 OCR 기반 자료 업로드, 빈칸 학습, 복습, 리그 화면까지 이어지는 핵심 사용자 흐름을 구현했습니다.",
  },
  {
    period: "2024.07 - 2024.09",
    title: "캡스톤디자인 경진대회",
    org: "주요 개발 담당",
    description:
      "Unity와 C#을 기반으로 VR 기기를 활용한 가상 학습 뷰어 프로그램을 개발하며 3D 학습 환경과 사용자 인터랙션을 구현했습니다.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-card/30" ref={ref}>
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            Experience
          </p>
          <h2 className="mb-12 font-display text-3xl font-bold text-foreground md:text-4xl">
            경험 & 활동
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={`${exp.period}-${exp.title}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-primary bg-background" />

                <span className="font-mono text-xs text-muted-foreground">
                  {exp.period}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {exp.title}
                </h3>
                <p className="mt-0.5 text-sm font-mono text-primary">
                  {exp.org}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
