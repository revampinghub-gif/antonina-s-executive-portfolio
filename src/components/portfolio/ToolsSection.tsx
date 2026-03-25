import { useScrollReveal } from "@/hooks/useScrollReveal";

const tools = [
  "JIRA", "Confluence", "ServiceNow", "SAP (NetWeaver)", "Microsoft Project",
  "Salesforce", "SharePoint", "PPM Tools", "Microsoft Office Suite",
];

const methodologies = ["Agile", "Scrum", "Waterfall"];

export default function ToolsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 section-padding bg-secondary">
      <div ref={ref} className="section-container text-center">
        <p
          className={`text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-4 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Tools & Technologies
        </p>
        <h2
          className={`text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-10 text-balance ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          Technology stack & methodologies
        </h2>

        <div
          className={`flex flex-wrap justify-center gap-3 mb-8 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          {tools.map((t) => (
            <span
              key={t}
              className="bg-background text-foreground border border-border px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow transition-shadow"
            >
              {t}
            </span>
          ))}
        </div>

        <div
          className={`flex flex-wrap justify-center gap-3 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          {methodologies.map((m) => (
            <span
              key={m}
              className="bg-accent/10 text-accent border border-accent/20 px-4 py-2 rounded-lg text-sm font-semibold"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
