import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import ThemeToggle from "@/components/ThemeToggle";
import { sendContactEmail } from "@/actions/contact";

// ---------------------------------------------------------------------------
// Data — edit these to personalize
// ---------------------------------------------------------------------------
const WORK = [
  {
    tag: "Brand Identity",
    title: "Lumina Studio",
    subtitle: "Visual identity for a lighting design studio",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  },
  {
    tag: "Web Design",
    title: "Atelier Maison",
    subtitle: "E-commerce experience for a Parisian furniture brand",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  },
  {
    tag: "Packaging",
    title: "Verdant",
    subtitle: "Sustainable skincare packaging system",
    image:
      "https://images.unsplash.com/photo-1601132359319-5c6283173e6f?w=800&q=80",
  },
  {
    tag: "Motion",
    title: "Pulse Festival",
    subtitle: "Live visuals and motion branding",
    image:
      "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=800&q=80",
  },
  {
    tag: "Branding",
    title: "North & Co.",
    subtitle: "From-strategy-to-shelf identity for a coffee roaster",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
  },
  {
    tag: "UI Design",
    title: "Orbit Dashboard",
    subtitle: "Data-dense interface for a fintech platform",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
];

const SKILLS = [
  { name: "Brand Identity", level: 95 },
  { name: "UI / Product Design", level: 92 },
  { name: "Motion & Animation", level: 88 },
  { name: "Art Direction", level: 90 },
  { name: "Design Systems", level: 85 },
  { name: "Prototyping", level: 90 },
];

const TESTIMONIALS = [
  {
    quote:
      "Working together was effortless. They turned a vague brief into a brand our customers immediately connected with.",
    author: "Elena Marchetti",
    role: "Founder, Lumina Studio",
  },
  {
    quote:
      "The level of craft and attention to detail set them apart from every other designer we've worked with.",
    author: "David Okafor",
    role: "Creative Director, Atelier Maison",
  },
  {
    quote:
      "A rare combination of strategic thinking and beautiful execution. Our conversion rate climbed 40% after the redesign.",
    author: "Samir Patel",
    role: "CEO, Orbit Fintech",
  },
];

const STATS = [
  { value: "8+", label: "Years of practice" },
  { value: "120+", label: "Projects delivered" },
  { value: "40+", label: "Happy clients" },
];

// ---------------------------------------------------------------------------
// Components
// ---------------------------------------------------------------------------

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 h-20 bg-bg-elev/70 backdrop-blur-md border-b border-default">
      <span className="font-display text-xl tracking-tight">YourName.</span>
      <div className="flex items-center gap-6 text-sm text-white-muted">
        <Link href="#work" className="transition-colors hover:text-white">
          Work
        </Link>
        <Link href="#about" className="transition-colors hover:text-white">
          About
        </Link>
        <Link href="#contact" className="transition-colors hover:text-white">
          Contact
        </Link>
        <a
          href="mailto:hello@yourname.com"
          className="rounded-full border border-default px-4 py-2 text-white-muted transition-colors hover:border-hover hover:text-white"
        >
          Let&apos;s talk
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] hero-grid"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-white/5 blur-[120px] pointer-events-none hero-glow" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* eyebrow */}
        <Reveal>
          <p className="font-display text-[0.75rem] uppercase tracking-[0.3em] text-white-dim mb-8 animate-pulse">
            Available for select projects
          </p>
        </Reveal>

        {/* headline */}
        <Reveal>
          <h1
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-10"
          >
            <span className="inline-block">I craft</span>
            <br />
            <span className="gradient-text inline-block">brands</span>
            <br />
            <span className="inline-block">that</span>
            <br />
            <span className="inline-block">people</span>
            <br />
            <span className="inline-block">feel.</span>
          </h1>
        </Reveal>

        <Reveal delay={150} className="max-w-2xl mx-auto mb-12">
          <p
            className="text-lg md:text-xl text-white-muted leading-relaxed font-sans"
          >
            I&apos;m a designer and creative director specializing in brand identity,
            product design, and visual storytelling for forward-thinking companies.
          </p>
        </Reveal>

        <Reveal delay={300} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#work"
            className="group relative flex items-center gap-2 rounded-full bg-elev border border-default px-8 py-4 text-white font-display text-base transition-all hover:border-hover hover:bg-elev/80"
          >
            See my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full border border-default px-8 py-4 text-white-muted font-display text-base transition-all hover:border-hover hover:text-white"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white-faint text-xs tracking-widest uppercase animate-pulse">
        <span>Scroll</span>
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function Marquee() {
  // duplicate for seamless loop
  const repeated = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="py-16 border-t border-default overflow-hidden bg-bg-elev/30">
      <div className="font-display text-xs md:text-sm tracking-[0.25em] uppercase text-white-dim text-center mb-8">
        Trusted by
      </div>
      <div className="flex gap-16 whitespace-nowrap marquee-track">
        {repeated.map((t, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-3"
          >
            {/* avatar placeholder */}
            <div className="h-8 w-8 rounded-full bg-elev border border-default flex-shrink-0" />
            <span className="font-sans text-white-muted">{t.author}</span>
            <span className="text-white-dim">·</span>
            <span className="text-white-dim">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <section
      id="work"
      className="py-32 px-6 max-w-7xl mx-auto scroll-mt-24"
    >
      <Reveal className="mb-20">
      <div className="mb-20">
        <span className="font-display text-[0.7rem] uppercase tracking-[0.3em] text-white-dim">
          Selected work
        </span>
        <h2 className="font-display text-4xl md:text-5xl mt-4 tracking-tight">
          Projects I&apos;m proud of
        </h2>
      </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {WORK.map((item, i) => (
          <Reveal key={i} delay={i * 80}>
          <article
            className="group relative rounded-2xl overflow-hidden bg-bg-elev/20 border border-default transition-transform duration-500 hover:scale-[1.02]"
          >              <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/40 to-transparent" />
            </div>

            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="font-display text-[0.7rem] uppercase tracking-[0.2em] text-white-dim">
                {item.tag}
              </span>
              <h3 className="font-display text-2xl tracking-tight mt-1">
                {item.title}
              </h3>
              <p className="text-white-muted text-sm mt-1 leading-relaxed">
                {item.subtitle}
              </p>
              <div className="mt-4 flex items-center gap-2 text-white-dim text-xs group-hover:text-white transition-colors">
                <span>Case study</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-12 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-white-muted hover:text-white transition-colors text-sm font-display tracking-wide"
        >
          Have a project in mind?
          <ArrowRight className="h-4 w-4" />
        </a>
      </Reveal>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="py-32 px-6 max-w-6xl mx-auto scroll-mt-24"
    >
      <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* left: image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-bg-elev/30">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="Portrait"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          {/* floating stat cards */}
          <div className="absolute -bottom-4 -right-4 bg-bg-elev border border-default rounded-xl p-5 shadow-2xl float-slow hidden md:block">
            <div className="text-3xl font-display font-bold">
              8+
            </div>
            <div className="text-xs text-white-dim mt-1 tracking-wide">
              Years of practice
            </div>
          </div>
          <div className="absolute -top-4 -left-4 bg-bg-elev border border-default rounded-xl p-5 shadow-2xl float-medium hidden md:block" style={{ animationDelay: "2s" }}>
            <div className="text-3xl font-display font-bold">
              120+
            </div>
            <div className="text-xs text-white-dim mt-1 tracking-wide">
              Projects delivered
            </div>
          </div>
        </div>

        {/* right: bio */}
        <div>
          <span className="font-display text-[0.7rem] uppercase tracking-[0.3em] text-white-dim">
            About me
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 tracking-tight mb-8 leading-tight">
            Design with{" "}
            <span className="gradient-text">purpose</span>{" "}
            and craft.
          </h2>

          <div className="space-y-5 text-white-muted text-base leading-relaxed font-sans">
            <p>
              I&apos;m a multidisciplinary designer based in the heart of the
              creative scene — working at the intersection of brand, product, and
              motion design. Over the past 8+ years I&apos;ve helped startups,
              agencies, and established brands find their visual voice.
            </p>
            <p>
              My approach is rooted in strategy first, aesthetics second. Every
              color, typographic choice, and motion curve is intentional —
              designed to communicate, connect, and convert.
            </p>
            <p>
              When I&apos;m not designing, you&apos;ll find me shooting film
              photography, writing, or hunting down the best espresso in town.
            </p>
          </div>

          {/* stats row */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-default pt-10">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl">{s.value}</div>
                <div className="text-xs text-white-dim mt-1 tracking-wide uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6 max-w-5xl mx-auto scroll-mt-24">
      <Reveal className="mb-20">
      <div className="mb-20">
        <span className="font-display text-[0.7rem] uppercase tracking-[0.3em] text-white-dim">
          Expertise
        </span>
        <h2 className="font-display text-4xl md:text-5xl mt-4 tracking-tight">
          What I bring to the table
        </h2>
      </div>
      </Reveal>

      <Reveal className="space-y-8">
      <div className="space-y-8">
        {SKILLS.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-3">
              <span className="font-display text-base tracking-wide">
                {skill.name}
              </span>
              <span className="font-mono text-sm text-white-dim">{skill.level}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-bg-elev/50 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-white/40 to-white/80 transition-all duration-1000 ease-out"
                style={{
                  width: `${skill.level}%`,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      </Reveal>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto scroll-mt-24">
      <Reveal className="mb-16 text-center">
      <div className="mb-16 text-center">
        <span className="font-display text-[0.7rem] uppercase tracking-[0.3em] text-white-dim">
          Kind words
        </span>
        <h2 className="font-display text-4xl md:text-5xl mt-4 tracking-tight">
          What clients say
        </h2>
      </div>
      </Reveal>

      <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <blockquote
            key={i}
            className="relative p-8 rounded-2xl bg-bg-elev/20 border border-default h-full flex flex-col justify-center"
          >
            {/* quote mark */}
            <span className="absolute top-6 right-8 text-7xl font-serif text-white-dim/10 select-none">
              &ldquo;
            </span>

            <p className="font-sans text-white-muted leading-relaxed relative z-10 mb-8">
              {t.quote}
            </p>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-bg-elev border border-default flex-shrink-0" />
              <div>
                <div className="text-sm font-display font-medium">
                  {t.author}
                </div>
                <div className="text-xs text-white-dim mt-0.5">{t.role}</div>
              </div>
            </div>
          </blockquote>
        ))}
      </div>
      </Reveal>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 px-6 relative overflow-hidden scroll-mt-24"
    >
      {/* background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-[100px] pointer-events-none contact-glow" />

      <div className="max-w-4xl mx-auto relative z-10">
        <Reveal className="mb-16 text-center">
          <div className="mb-16 text-center">
            <span className="font-display text-[0.7rem] uppercase tracking-[0.3em] text-white/30">
              Get in touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 tracking-tight">
              Let&apos;s make something <span className="gradient-text">remarkable</span>
            </h2>
            <p className="text-white-dim mt-4 max-w-lg mx-auto">
              Have a project, a collaboration, or just want to say hi? I&apos;d love
              to hear from you.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* contact info */}
          <Reveal>
            <div className="space-y-8">
              {[
                {
                  icon: <Mail className="h-4 w-4" />,
                  label: "Email",
                  value: "hello@yourname.com",
                },
                {
                  icon: <MapPin className="h-4 w-4" />,
                  label: "Location",
                  value: "New York, NY / Remote",
                },
                {
                  icon: <Phone className="h-4 w-4" />,
                  label: "Phone",
                  value: "+1 (555) 000-0000",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-bg-elev/60 p-2.5 border border-default">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-white-dim uppercase tracking-wide mb-1">
                      {item.label}
                    </div>
                    <div className="text-white font-display">{item.value}</div>
                  </div>
                </div>
              ))}

              {/* socials */}
              <div className="pt-6 border-t border-default">
                <div className="text-xs text-white-dim uppercase tracking-wide mb-4">
                  Find me online
                </div>
                <div className="flex gap-3">
                {[
                  {
                    href: "#",
                    label: "GitHub",
                    svg: (
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    ),
                  },
                  {
                    href: "#",
                    label: "LinkedIn",
                    svg: (
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="rounded-full border border-default p-3 text-white-dim transition-colors hover:border-hover hover:text-white"
                  >
                    {s.svg}
                  </a>
                ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-default py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl tracking-tight">YourName.</span>
          <span className="text-white-dim text-sm" suppressHydrationWarning>© 2026</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-white-dim">
          <Link href="#work" className="transition-colors hover:text-white">
            Work
          </Link>
          <Link href="#about" className="transition-colors hover:text-white">
            About
          </Link>
          <Link href="#contact" className="transition-colors hover:text-white">
            Contact
          </Link>
          <a
            href="mailto:hello@yourname.com"
            className="transition-colors hover:text-white"
          >
            hello@yourname.com
          </a>
        </div>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function Home() {
  return (
    <div className="noise">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WorkSection />
        <AboutSection />
        <TestimonialsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
