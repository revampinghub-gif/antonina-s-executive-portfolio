import { useScrollReveal } from "@/hooks/useScrollReveal";
import { RefreshCw, FileText, TrendingUp, Calendar, GitBranch, ClipboardCheck } from "lucide-react";

const methodologies = [
  {
    icon: RefreshCw,
    title: "Agile & Scrum",
    description:
      "Sprint planning, backlog grooming, daily stand-ups, retrospectives, and sprint reviews. Experienced managing delivery cadences for teams of up to 15 members.",
  },
  {
    icon: Calendar,
    title: "Waterfall",
    description:
      "Traditional phased delivery with milestone tracking, detailed scheduling, and stage-gate governance for infrastructure and migration projects.",
  },
  {
    icon: GitBranch,
    title: "Hybrid Delivery",
    description:
      "Blending Agile execution with Waterfall governance to meet enterprise compliance requirements while maintaining delivery velocity.",
  },
  {
    icon: ClipboardCheck,
    title: "PMO Governance",
    description:
      "RAID log management, governance reporting, SteerCo preparation, compliance tracking, and project health dashboards.",
  },
  {
    icon: TrendingUp,
    title: "Financial & Resource Planning",
    description:
      "Budget tracking, cost control, workforce forecasting, timesheet management, and vendor invoicing coordination.",
  },
  {
    icon: FileText,
    title: "Documentation & Reporting",
    description:
      "SOWs, change requests, closure reports, executive dashboards, and status reporting for senior stakeholders.",
  },
];

export default function MethodologySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 section-padding bg-background">
      <div ref={ref} className="section-container">
        <p
          className={`text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-4 text-center ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          How I Work
        </p>
        <h2
          className={`text-3xl md:text-4xl font-bold text-foreground tracking-tight text-center mb-4 text-balance ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          Methodologies & frameworks
        </h2>
        <p
          className={`text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14 text-pretty ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.15s" }}
        >
          Adaptable to any project delivery model — with a strong foundation in structured
          governance and Agile execution.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {methodologies.map((m, i) => (
            <div
              key={m.title}
              className={`border border-border rounded-xl p-6 hover:shadow-md transition-shadow ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + i * 0.08}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <m.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
