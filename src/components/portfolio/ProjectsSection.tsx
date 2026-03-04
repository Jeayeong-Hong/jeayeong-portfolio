import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "매출 데이터 시각화 및 상품 관리 대시보드",
    longDescription: "React와 Recharts를 활용한 실시간 매출 대시보드입니다. 상품 CRUD, 필터링, 정렬 기능과 반응형 레이아웃을 구현했습니다.",
    tech: ["React", "TypeScript", "Tailwind", "Recharts"],
    role: "프론트엔드 전체",
    period: "2025.01 - 2025.02",
  },
  {
    title: "Task Management App",
    description: "드래그 앤 드롭 기반 칸반 보드 애플리케이션",
    longDescription: "dnd-kit을 활용한 칸반 보드입니다. 상태 관리에 Zustand를 사용하고, 낙관적 업데이트와 로컬 스토리지 영속성을 구현했습니다.",
    tech: ["Next.js", "Zustand", "dnd-kit", "Supabase"],
    role: "풀스택",
    period: "2025.03 - 2025.04",
  },
  {
    title: "Portfolio Website",
    description: "미니멀 다크 테마 개발자 포트폴리오",
    longDescription: "현재 보고 계신 이 사이트입니다. 디자인 시스템 설계부터 Framer Motion 애니메이션, 반응형 레이아웃까지 직접 구현했습니다.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    role: "디자인 & 개발",
    period: "2025.05",
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
            <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-foreground">
              주요 프로젝트
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded">
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

            <span className="font-mono text-xs text-primary">{projects[selectedProject].period}</span>
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
                <span key={t} className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              <a href="#" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                <Github size={16} /> GitHub
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
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
