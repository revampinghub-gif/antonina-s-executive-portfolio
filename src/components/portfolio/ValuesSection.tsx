import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2 } from "lucide-react";

const values = [
  {
    title: "Delivery Focus",
    description:
      "Every action is oriented toward keeping projects on track — on scope, on schedule, and on budget. I remove blockers before they become risks.",
  },
  {
    title: "Stakeholder Clarity",
    description:
      "Clear, timely communication with project teams, executives, and vendors. No surprises — just structured updates and transparent reporting.",
  },
  {
    title: "Governance Rigour",
    description:
      "Meticulous attention to compliance, documentation, and process. RAID logs, change controls, and governance records are always current and audit-ready.",
  },
  {
    title: "Adaptability",
    description:
      "Comfortable moving between Agile sprints and Waterfall milestones, adapting coordination style to fit the team, the program, and the organisation.",
  },
];

export default function ValuesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 section-padding bg-hero text-hero-foreground">
      <div ref={ref} className="section-container">
        <p
          className={`text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-4 text-center ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Professional Values
        </p>
        <h2
          className={`text-3xl md:text-4xl font-bold tracking-tight text-center mb-14 text-balance ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          What I stand for
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`bg-hero-foreground/5 border border-hero-foreground/10 rounded-xl p-6 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <CheckCircle2 size={18} className="text-accent shrink-0" />
                <h3 className="text-base font-semibold">{v.title}</h3>
              </div>
              <p className="text-sm text-hero-foreground/65 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
