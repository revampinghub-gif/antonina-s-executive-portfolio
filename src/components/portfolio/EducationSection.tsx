import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="py-24 md:py-32 section-padding bg-secondary">
      <div ref={ref} className="section-container">
        <p
          className={`text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-4 text-center ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Education & Certifications
        </p>
        <h2
          className={`text-3xl md:text-4xl font-bold text-foreground tracking-tight text-center mb-14 text-balance ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          Credentials & learning
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Education */}
          <div
            className={`bg-background rounded-xl p-7 border border-border ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Education</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <p className="text-sm font-medium text-foreground">Diploma of Psychology & Counselling</p>
                <p className="text-xs text-muted-foreground">RMIT University</p>
              </li>
              <li>
                <p className="text-sm font-medium text-foreground">Higher School Certificate</p>
                <p className="text-xs text-muted-foreground">Swinburne College</p>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div
            className={`bg-background rounded-xl p-7 border border-border ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Award size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <p className="text-sm font-medium text-foreground">Cyber Wardens Certificate</p>
                <p className="text-xs text-muted-foreground">2025</p>
              </li>
              <li>
                <p className="text-sm font-medium text-foreground">AWSome Day Conference</p>
                <p className="text-xs text-muted-foreground">AWS — 2025</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
