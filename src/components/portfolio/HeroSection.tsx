import heroBg from "@/assets/hero-bg.jpg";
import headshot from "@/assets/headshot.jpg";
import { ArrowDown, Mail, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-hero/60" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Headshot */}
        <div
          className="shrink-0 opacity-0 animate-scale-in"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full ring-4 ring-accent/40 ring-offset-4 ring-offset-hero/80 overflow-hidden shadow-2xl">
            <img
              src={headshot}
              alt="Antonina Morello"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="text-center md:text-left">
          <p
            className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Project & Program Coordination
          </p>

          <h1
            className="text-hero-foreground text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-5 opacity-0 animate-fade-up text-balance"
            style={{ animationDelay: "0.45s" }}
          >
            Antonina Morello
          </h1>

          <p
            className="text-hero-foreground/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-3 opacity-0 animate-fade-up text-pretty"
            style={{ animationDelay: "0.6s" }}
          >
            Agile Delivery · PMO Governance · Enterprise IT Transformation
          </p>

          <p
            className="text-hero-foreground/55 text-base md:text-lg font-light max-w-xl mb-8 opacity-0 animate-fade-up text-pretty"
            style={{ animationDelay: "0.7s" }}
          >
            Driving delivery excellence across complex, multi-team enterprise
            programs in financial services, telecommunications, utilities, and
            technology sectors.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-fade-up"
            style={{ animationDelay: "0.85s" }}
          >
            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-accent/20 active:scale-[0.97]"
            >
              View Experience
              <ArrowDown size={16} />
            </a>
            <a
              href="/Antonina-Morello-CV.docx"
              download
              className="inline-flex items-center justify-center gap-2 bg-hero-foreground/10 border border-hero-foreground/20 text-hero-foreground px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-hero-foreground/15 active:scale-[0.97]"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-hero-foreground/25 text-hero-foreground px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-hero-foreground/10 active:scale-[0.97]"
            >
              <Mail size={16} />
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up" style={{ animationDelay: "1.2s" }}>
        <div className="w-5 h-8 border-2 border-hero-foreground/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-hero-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}