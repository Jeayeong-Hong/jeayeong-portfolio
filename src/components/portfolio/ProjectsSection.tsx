import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

type Screenshot = {
  src: string;
  title: string;
  description: string;
};

const batScreenshots: Screenshot[] = [
  {
    src: "/projects/bat/bat-01-intro.png",
    title: "브랜드와 학습 흐름을 먼저 전달",
    description:
      "첫 화면에서는 BAT 캐릭터와 핵심 메시지를 크게 보여주어 앱의 분위기와 학습 방향을 빠르게 이해할 수 있게 구성했습니다.",
  },
  {
    src: "/projects/bat/bat-02-home.png",
    title: "기술 스택으로 만든 홈 대시보드",
    description:
      "Expo와 React Native를 기반으로 학습 레벨, 연속 학습일, 리그 순위, 월간 목표를 한 화면에서 확인하는 모바일 UI를 구현했습니다.",
  },
  {
    src: "/projects/bat/bat-03-upload.png",
    title: "실제 교재 이미지를 학습 자료로 전환",
    description:
      "사용자가 직접 촬영한 교재를 자르고 업로드하면 OCR 학습 흐름으로 이어지도록 자료 입력 화면을 설계했습니다.",
  },
  {
    src: "/projects/bat/bat-04-ai-blink.png",
    title: "AI가 생성한 빈칸 학습",
    description:
      "OCR 결과에서 핵심 단어를 고르고 빈칸 문제로 바꿔, 단순 암기가 아니라 직접 떠올리는 복습 경험을 만들었습니다.",
  },
  {
    src: "/projects/bat/bat-05-hint.png",
    title: "막히는 순간을 돕는 단계별 힌트",
    description:
      "정답을 바로 보여주기보다 H1, H2, H3 단계로 힌트를 제공해 사용자가 스스로 답을 떠올릴 수 있게 했습니다.",
  },
  {
    src: "/projects/bat/bat-06-rebiew.png",
    title: "주기적으로 다시 보는 복습 구조",
    description:
      "업로드한 학습 자료와 정답률을 모아 보여주고, 필요한 자료를 다시 학습할 수 있는 복습 화면을 구성했습니다.",
  },
  {
    src: "/projects/bat/bat-07-league.png",
    title: "경쟁 요소로 유지되는 학습 동기",
    description:
      "리그 순위와 XP를 통해 친구와 경쟁하며 학습을 이어가도록 만들고, 반복 학습에 게임적인 재미를 더했습니다.",
  },
];

const batTech = ["Expo", "React Native", "TypeScript", "React Navigation"];

const otherProjects = [
  {
    title: "moum-zip",
    period: "2026.04",
    description: "모임 탐색과 스페이스 관리를 위한 웹 서비스",
    tech: ["Next.js", "React", "TanStack Query", "Tailwind CSS"],
  },
];

const fadeRange = [0, 0.22, 0.72, 1];

const useScrollFade = (scrollYProgress: MotionValue<number>, distance = 72) => ({
  opacity: useTransform(scrollYProgress, fadeRange, [0, 1, 1, 0]),
  y: useTransform(scrollYProgress, fadeRange, [distance, 0, 0, -distance]),
});

const BatScreenshotItem = ({
  screenshot,
  index,
}: {
  screenshot: Screenshot;
  index: number;
}) => {
  const itemRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 92%", "end 8%"],
  });
  const imageStyle = useScrollFade(scrollYProgress, 86);
  const textStyle = useScrollFade(scrollYProgress, 64);

  return (
    <article
      ref={itemRef}
      className="grid min-h-[78vh] gap-8 py-12 md:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)] md:items-center md:py-20"
    >
      <motion.div style={imageStyle}>
        <img
          src={screenshot.src}
          alt={`BAT ${screenshot.title}`}
          loading={index === 0 ? "eager" : "lazy"}
          className="w-full rounded-lg border border-border/70 object-cover shadow-xl shadow-primary/5"
        />
      </motion.div>

      <motion.div style={textStyle}>
        <span className="font-mono text-sm text-primary">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h4 className="mt-3 text-2xl font-semibold leading-tight text-foreground">
          {screenshot.title}
        </h4>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {screenshot.description}
        </p>
      </motion.div>
    </article>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            Projects
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            주요 프로젝트
          </h2>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="grid gap-8 border-b border-border/70 pb-12 md:grid-cols-[0.9fr_1.1fr] md:items-end"
          >
            <div>
              <span className="font-mono text-sm text-primary">2026.04</span>
              <h3 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                BAT
              </h3>
            </div>

            <div>
              <p className="text-lg font-medium leading-relaxed text-foreground">
                OCR 기반으로 교재 이미지를 빈칸 학습과 복습 콘텐츠로 바꾸는
                모바일 학습 앱입니다.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                사용자가 자료를 업로드하고, AI가 생성한 문제를 풀고, 리그와
                리포트로 학습 동기를 유지하는 흐름을 중심으로 화면을
                구현했습니다.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="grid gap-5 border-b border-border/70 pb-12 md:grid-cols-[180px_1fr]"
          >
            <h4 className="font-mono text-xs uppercase tracking-widest text-primary">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-3">
              {batTech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-primary/10 px-4 py-2 text-sm font-mono text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <div>
            {batScreenshots.map((screenshot, index) => (
              <BatScreenshotItem
                key={screenshot.src}
                screenshot={screenshot}
                index={index}
              />
            ))}
          </div>

          {otherProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55 }}
              className="grid gap-5 border-t border-border/70 pt-12 md:grid-cols-[180px_1fr]"
            >
              <div>
                <span className="font-mono text-sm text-primary">
                  {project.period}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-foreground">
                  {project.title}
                </h3>
              </div>

              <div>
                <p className="leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-secondary px-2 py-1 text-xs font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
