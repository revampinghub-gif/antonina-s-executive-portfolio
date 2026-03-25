import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Users, BarChart3, Shield } from "lucide-react";

const highlights = [
  { icon: Target, label: "Agile & Waterfall Delivery" },
  { icon: Shield, label: "PMO Governance Support" },
  { icon: Users, label: "Stakeholder Engagement" },
  { icon: BarChart3, label: "Financial Tracking & Reporting" },
];

export default function SummarySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 section-padding bg-background">
      <div ref={ref} className="section-container">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-3">
            <p
              className={`text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-4 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
            >
              Professional Summary
            </p>
            <h2
              className={`text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight mb-6 text-balance ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              A reliable delivery enabler for complex enterprise programs
            </h2>
            <p
              className={`text-muted-foreground text-lg leading-relaxed mb-4 text-pretty ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              Antonina is a Project and Program Coordination professional with
              deep experience supporting enterprise IT, infrastructure, and
              digital transformation programs. She ensures projects stay aligned
              with scope, timeline, budget, and governance frameworks across
              highly regulated and complex environments.
            </p>
            <p
              className={`text-muted-foreground leading-relaxed text-pretty ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              With a proven track record across financial services,
              telecommunications, utilities, and technology sectors, Antonina
              brings structured coordination, stakeholder clarity, and
              operational rigour to every engagement.
            </p>
          </div>

          {/* Right column — highlights */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className={`bg-secondary rounded-xl p-5 flex flex-col gap-3 ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.3 + i * 0.08}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <h.icon size={20} className="text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground leading-snug">
                  {h.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
