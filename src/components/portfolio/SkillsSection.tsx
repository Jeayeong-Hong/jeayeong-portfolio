import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / TypeScript", description: "컴포넌트 기반 UI 구성과 API 응답 타입 관리" },
      { name: "Expo React Native", description: "모바일 화면 구성과 이미지 업로드 흐름 구현" },
      { name: "Tailwind CSS", description: "반응형 레이아웃과 일관된 UI 스타일링" },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "FastAPI", description: "OCR/GPT 처리 API 흐름 설계 및 연동" },
      { name: "Supabase / PostgreSQL", description: "사용자 학습 결과 저장 구조 구성" },
      { name: "REST API", description: "프론트와 백엔드 간 요청/응답 흐름 정리" },
    ],
  },
  {
    title: "AI & Tools",
    skills: [
      { name: "OpenAI API", description: "OCR 텍스트 기반 빈칸 문제 생성 흐름 구현" },
      { name: "Kakao / Apple OAuth", description: "모바일 인증 환경과 redirect 흐름 검토" },
      { name: "Git / GitHub", description: "기능 단위 변경 관리와 원격 저장소 협업" },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-foreground">
            기술 스택
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="p-6 rounded-xl bg-card border-subtle"
            >
              <h3 className="font-mono text-sm text-primary mb-6 font-medium">{`// ${category.title}`}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <p className="text-sm font-medium text-foreground">{skill.name}</p>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
