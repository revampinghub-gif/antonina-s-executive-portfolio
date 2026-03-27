import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";

const contacts = [
  { icon: Mail, label: "amorello2305@gmail.com", href: "mailto:amorello2305@gmail.com" },
  { icon: Phone, label: "+61 420 555 330", href: "tel:+61420555330" },
  { icon: MapPin, label: "Melbourne, Australia", href: undefined },
  { icon: Linkedin, label: "linkedin.com/in/antonina-morello", href: "https://www.linkedin.com/in/antonina-morello" },
];

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 md:py-32 section-padding bg-hero text-hero-foreground">
      <div ref={ref} className="section-container text-center max-w-2xl mx-auto">
        <p
          className={`text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-4 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Get In Touch
        </p>
        <h2
          className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          Let's connect
        </h2>
        <p
          className={`text-hero-foreground/60 text-lg mb-10 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          Open to new opportunities and confidential discussions.
        </p>

        <div
          className={`grid sm:grid-cols-2 gap-4 mb-10 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          {contacts.map((c) => {
            const Wrapper = c.href ? "a" : "div";
            return (
              <Wrapper
                key={c.label}
                {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-3 bg-hero-foreground/5 border border-hero-foreground/10 rounded-xl px-5 py-4 hover:bg-hero-foreground/10 transition-colors"
              >
                <c.icon size={18} className="text-accent shrink-0" />
                <span className="text-sm text-hero-foreground/80">{c.label}</span>
              </Wrapper>
            );
          })}
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="mailto:amorello2305@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-accent/20 active:scale-[0.97]"
          >
            <Mail size={16} />
            Get In Touch
          </a>
          <a
            href="/Antonina-Morello-CV.docx"
            download
            className="inline-flex items-center justify-center gap-2 bg-hero-foreground/10 border border-hero-foreground/20 text-hero-foreground px-8 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-hero-foreground/15 active:scale-[0.97]"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>

      <div className="section-container mt-20 pt-8 border-t border-hero-foreground/10 text-center">
        <p className="text-xs text-hero-foreground/30">
          © {new Date().getFullYear()} Antonina Morello. All rights reserved.
        </p>
      </div>
    </section>
  );
}
