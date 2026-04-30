import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Core Frontend",
    skills: [
      {
        name: "React / TypeScript",
        description: "컴포넌트 기반 UI 구성과 API 응답 타입 관리",
      },
      {
        name: "Next.js",
        description: "moum-zip 웹 화면 구조와 라우팅 흐름 구현",
      },
      {
        name: "TanStack Query",
        description: "서버 데이터 조회 상태와 갱신 흐름 관리",
      },
    ],
  },
  {
    title: "Mobile UI",
    skills: [
      {
        name: "Expo React Native",
        description: "BAT 모바일 화면과 학습 플로우 구현",
      },
      {
        name: "React Navigation",
        description: "홈, 학습, 복습, 마이페이지 화면 전환 구성",
      },
      {
        name: "Expo Camera / Image Picker",
        description: "카메라, 이미지, 문서 입력 화면 구현",
      },
    ],
  },
  {
    title: "Styling & Tools",
    skills: [
      {
        name: "Tailwind CSS",
        description: "반응형 레이아웃과 일관된 UI 스타일링",
      },
      {
        name: "shadcn / Radix UI",
        description: "moum-zip 공통 UI 컴포넌트 구성",
      },
      { name: "Storybook", description: "공통 컴포넌트 상태 확인과 UI 문서화" },
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
          <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">
            Skills
          </p>
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
                    <p className="text-sm font-medium text-foreground">
                      {skill.name}
                    </p>
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
