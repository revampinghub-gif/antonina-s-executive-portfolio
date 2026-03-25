import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase, Users, UserPlus, BarChart2, ListChecks } from "lucide-react";

const achievements = [
  { icon: Briefcase, metric: "30+", label: "Enterprise IT & infrastructure projects delivered" },
  { icon: Users, metric: "15", label: "Cross-functional engineers & specialists coordinated" },
  { icon: UserPlus, metric: "150+", label: "Resources onboarded via SAP & ServiceNow" },
  { icon: BarChart2, metric: "SteerCo", label: "Executive dashboards & reporting packs built" },
  { icon: ListChecks, metric: "Agile", label: "Backlogs & sprints managed in JIRA & Confluence" },
];

export default function AchievementsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="achievements" className="py-24 md:py-32 section-padding bg-secondary">
      <div ref={ref} className="section-container">
        <p
          className={`text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-4 text-center ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Key Achievements
        </p>
        <h2
          className={`text-3xl md:text-4xl font-bold text-foreground tracking-tight text-center mb-14 text-balance ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          Impact by the numbers
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {achievements.map((a, i) => (
            <div
              key={a.label}
              className={`bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.15 + i * 0.08}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <a.icon size={20} className="text-accent" />
              </div>
              <p className="text-2xl font-bold text-foreground tracking-tight mb-1">
                {a.metric}
              </p>
              <p className="text-sm text-muted-foreground leading-snug">
                {a.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
