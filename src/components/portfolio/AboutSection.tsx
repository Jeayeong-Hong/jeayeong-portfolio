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
            좋은 경험 뒤에는 좋은 구조가<br />있다고 믿습니다.
          </h2>

          <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
            <p>
              단순히 동작하는 코드에서 멈추지 않고,<br />
              불편한 지점을 발견하면 끝까지 원인을 파고드는 개발자입니다.
            </p>
            <p>
              팀 프로젝트에서는 마이페이지 도메인 구축과 전역 에러 처리 구조 개선을 통해<br />
              서비스의 안정성과 유지보수성을 높였고,<br />
              또 다른 팀 프로젝트에서는 OCR 기반 학습 플로우를 설계하고 구현하며<br />
              사용자가 끊기지 않고 이어지는 경험을 만드는 데 집중했습니다.
            </p>
            <p>
              사용자 흐름뿐 아니라 데이터 흐름까지 함께 고민하며,<br />
              복잡한 문제를 더 단순하고 자연스러운 경험으로 풀어내는 개발을 지향합니다.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { title: "팀 프로젝트 경험", description: "6인 협업 · MOU MZIP" },
              { title: "AI 학습 서비스 개발 및 운영 경험", description: "BAT(Build Adaptive Thinking)" },
            ].map((stat) => (
              <div key={stat.title} className="p-5 rounded-lg bg-card border-subtle">
                <p className="text-sm font-semibold text-foreground">{stat.title}</p>
                <p className="text-xs text-muted-foreground mt-2">{stat.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
