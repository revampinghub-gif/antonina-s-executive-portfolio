import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Landmark, Radio, Zap, Cpu } from "lucide-react";

const sectors = [
  {
    icon: Landmark,
    name: "Financial Services",
    detail: "Macquarie Bank — enterprise application deployment, Agile delivery within regulated banking environments",
  },
  {
    icon: Radio,
    name: "Telecommunications",
    detail: "Nokia Australia — cloud and network operations, vendor coordination across large-scale telecom programs",
  },
  {
    icon: Zap,
    name: "Utilities & Energy",
    detail: "EnergyAustralia — IT infrastructure projects, PMO governance, staff onboarding at scale",
  },
  {
    icon: Cpu,
    name: "Technology & IT Services",
    detail: "Service Stream, Thomas Duryea Logicalis — IT transformation, infrastructure delivery, and managed services",
  },
];

export default function IndustriesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="industries" className="py-24 md:py-32 section-padding bg-secondary">
      <div ref={ref} className="section-container">
        <p
          className={`text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-4 text-center ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Industry Experience
        </p>
        <h2
          className={`text-3xl md:text-4xl font-bold text-foreground tracking-tight text-center mb-4 text-balance ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          Sectors I've worked across
        </h2>
        <p
          className={`text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14 text-pretty ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.15s" }}
        >
          Deep coordination experience across highly regulated, complex enterprise environments.
        </p>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {sectors.map((s, i) => (
            <div
              key={s.name}
              className={`bg-background border border-border rounded-xl p-6 hover:shadow-md transition-shadow ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + i * 0.08}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <s.icon size={20} className="text-accent" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{s.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
