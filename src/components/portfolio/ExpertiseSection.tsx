import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Rocket, ShieldCheck, Handshake, ClipboardList } from "lucide-react";

const categories = [
  {
    icon: Rocket,
    title: "Project Delivery",
    items: ["Project Coordination", "Agile & Waterfall Delivery", "Sprint Planning & Backlog Management"],
  },
  {
    icon: ShieldCheck,
    title: "Governance & Operations",
    items: ["PMO Governance", "Risk & Issue Management (RAID)", "Budget Tracking & Cost Control"],
  },
  {
    icon: Handshake,
    title: "Collaboration",
    items: ["Stakeholder Engagement", "Vendor Coordination", "Workshop Facilitation"],
  },
  {
    icon: ClipboardList,
    title: "Planning & Reporting",
    items: ["Resource Planning", "Workforce Forecasting", "Executive Reporting & Documentation"],
  },
];

export default function ExpertiseSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="expertise" className="py-24 md:py-32 section-padding bg-background">
      <div ref={ref} className="section-container">
        <p
          className={`text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-4 text-center ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Core Expertise
        </p>
        <h2
          className={`text-3xl md:text-4xl font-bold text-foreground tracking-tight text-center mb-14 text-balance ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          What I bring to the table
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`border border-border rounded-xl p-7 hover:shadow-md transition-shadow ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <cat.icon size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{cat.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
