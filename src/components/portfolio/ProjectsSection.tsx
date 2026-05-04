import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    title: "BAT",
    description: "OCR 기반 빈칸 학습과 복습을 제공하는 모바일 앱",
    longDescription:
      "Expo React Native 기반 학습 앱입니다. 이미지와 문서 입력, OCR 결과 확인, 학습/복습 화면, 소셜 로그인 화면 등 사용자 플로우 중심의 모바일 UI를 구현했습니다.",
    tech: ["Expo", "React Native", "TypeScript", "React Navigation"],
    role: "프론트엔드",
    period: "2026.04",
  },
  {
    title: "moum-zip",
    description: "모임 탐색과 스페이스 관리를 위한 웹 서비스",
    longDescription:
      "Next.js와 React 기반의 모임 서비스입니다. 공통 UI 컴포넌트, 마이페이지, 스페이스, 게시판 화면을 중심으로 반응형 인터페이스를 구현했습니다.",
    tech: ["Next.js", "React", "TanStack Query", "Tailwind CSS"],
    role: "프론트엔드",
    period: "2026.04",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <>
      <section id="projects" className="section-padding" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">
              Projects
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-foreground">
              주요 프로젝트
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedProject(idx)}
                className="group cursor-pointer p-6 rounded-xl bg-card border-subtle hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="font-mono text-primary text-sm font-bold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-lg w-full p-8 rounded-2xl bg-card border-subtle"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>

            <span className="font-mono text-xs text-primary">
              {projects[selectedProject].period}
            </span>
            <h3 className="text-2xl font-bold text-foreground mt-2 mb-2">
              {projects[selectedProject].title}
            </h3>
            <p className="text-sm text-muted-foreground mb-1">
              담당: {projects[selectedProject].role}
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              {projects[selectedProject].longDescription}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {projects[selectedProject].tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectsSection;
