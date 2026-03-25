import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Building2 } from "lucide-react";

interface Role {
  title: string;
  company: string;
  period: string;
  summary?: string;
  bullets: string[];
}

const roles: Role[] = [
  {
    title: "Program Coordinator",
    company: "Service Stream",
    period: "2022 – 2023",
    summary: "Supported delivery of a complex enterprise IT transformation program, coordinating Agile delivery activities across multiple teams.",
    bullets: [
      "Managed Agile sprint boards and backlog prioritisation in JIRA supporting a 15-member project delivery team",
      "Produced program dashboards, sprint reports, and executive SteerCo reporting packs",
      "Maintained risk and issue registers (RAID logs) ensuring mitigation actions were tracked",
      "Coordinated timesheets, invoicing, and workforce planning using ServiceNow",
      "Supported resource forecasting and labour budget planning for project delivery teams",
      "Facilitated daily stand-ups, sprint planning sessions, and project coordination meetings",
      "Maintained project documentation and governance records aligned with PMO standards",
    ],
  },
  {
    title: "Project Coordinator — APPS Packaging Team",
    company: "Macquarie Bank",
    period: "2022",
    summary: "Coordinated enterprise application deployment and packaging projects within the technology operations division.",
    bullets: [
      "Maintained JIRA sprint boards, backlog tracking, and project documentation repositories",
      "Prepared project status reports and documentation for senior project stakeholders",
      "Supported Agile ceremonies including daily stand-ups and sprint planning sessions",
      "Managed project timesheets and vendor invoicing via ServiceNow",
      "Monitored deliverables and ensured project tasks were completed within timelines",
      "Supported resource planning and workforce forecasting",
    ],
  },
  {
    title: "Project Coordinator",
    company: "Nokia Australia",
    period: "2021 – 2022",
    summary: "Provided project coordination support within the Cloud and Network Operations team.",
    bullets: [
      "Coordinated communication between vendors, engineers, and internal stakeholders",
      "Scheduled project meetings and tracked completion of action items",
      "Supported performance reporting and workforce planning metrics",
      "Assisted leadership teams in maintaining operational project visibility",
    ],
  },
  {
    title: "Project Coordinator (PMO)",
    company: "EnergyAustralia",
    period: "2019",
    summary: "Supported multiple IT infrastructure and application migration projects within a PMO environment.",
    bullets: [
      "Managed project trackers, schedule milestones, and documentation repositories",
      "Onboarded 150+ project resources using SAP and ServiceNow systems",
      "Assisted project managers with budget tracking, forecasting, and cost reporting",
      "Maintained governance compliance records across active projects",
      "Supported vendor coordination and contract tracking activities",
    ],
  },
  {
    title: "Project Coordinator / Junior Project Manager",
    company: "Thomas Duryea Logicalis",
    period: "2017 – 2018",
    summary: "Coordinated end-to-end delivery of 30+ enterprise infrastructure projects across corporate and government clients.",
    bullets: [
      "Managed project scheduling, resource allocation, and delivery tracking across concurrent projects",
      "Produced financial tracking reports, purchase orders, and invoicing documentation",
      "Maintained project documentation including SOWs, change requests, and closure reports",
      "Coordinated vendor deliverables and supported procurement activities",
      "Supported transition of projects from sales handover through to delivery and closeout",
    ],
  },
];

function TimelineItem({ role, index }: { role: Role; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.08);

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-10">
      <div className="flex flex-col items-center shrink-0">
        <div
          className={`w-3.5 h-3.5 rounded-full border-2 border-accent bg-background z-10 ${
            isVisible ? "animate-scale-in" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s" }}
        />
        {index < roles.length && (
          <div className="w-px flex-1 bg-border" />
        )}
      </div>

      <div
        className={`pb-14 max-w-2xl ${isVisible ? "animate-slide-right" : "opacity-0"}`}
        style={{ animationDelay: "0.15s" }}
      >
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
          <h3 className="text-lg font-semibold text-foreground">{role.title}</h3>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
          <span className="text-sm text-accent font-medium flex items-center gap-1.5">
            <Building2 size={14} />
            {role.company}
          </span>
          <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
            {role.period}
          </span>
        </div>
        {role.summary && (
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed italic">
            {role.summary}
          </p>
        )}
        <ul className="space-y-2">
          {role.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-24 md:py-32 section-padding bg-background">
      <div className="section-container">
        <div ref={ref}>
          <p
            className={`text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-4 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Professional Experience
          </p>
          <h2
            className={`text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4 text-balance ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            Career timeline
          </h2>
          <p
            className={`text-muted-foreground text-lg mb-14 max-w-2xl text-pretty ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            A consistent track record of supporting enterprise project delivery across
            Australia's leading organisations.
          </p>
        </div>

        <div className="max-w-3xl">
          {roles.map((role, i) => (
            <TimelineItem key={role.company + role.period} role={role} index={i} />
          ))}

          {/* Career break */}
          <div className="relative flex gap-6 md:gap-10">
            <div className="flex flex-col items-center shrink-0">
              <div className="w-3.5 h-3.5 rounded-full border-2 border-border bg-secondary z-10" />
            </div>
            <div className="pb-4">
              <p className="text-sm font-medium text-foreground">Career Break</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">2024 – 2025</p>
              <p className="text-sm text-muted-foreground italic">
                Took time away from professional career to provide full-time care and support for family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
