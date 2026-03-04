import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-foreground">
            사용자 경험을 코드로<br />설계합니다.
          </h2>

          <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
            <p>
              단순히 동작하는 코드가 아니라, <span className="text-foreground font-medium">유지보수 가능하고 확장 가능한 구조</span>를 
              고민합니다. 컴포넌트 설계부터 상태 관리, 성능 최적화까지 프론트엔드 전반에 걸친 
              깊은 이해를 추구합니다.
            </p>
            <p>
              디자인 시스템과 접근성을 중시하며, 사용자와 개발자 모두에게 좋은 경험을 
              제공하는 인터페이스를 만듭니다.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { label: "프로젝트", value: "6+" },
              { label: "기술 스택", value: "10+" },
              { label: "커밋 수", value: "500+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-lg bg-card border-subtle">
                <p className="text-2xl font-bold text-primary font-mono">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
