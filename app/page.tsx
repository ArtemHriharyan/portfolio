import type { ReactNode } from "react";

const LINKEDIN = "https://www.linkedin.com/in/artem-grigoryan-analytics/";
const GITHUB = "https://github.com/ArtemHriharyan";
const EMAIL = "artemhriharyan@gmail.com";

const NAV = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
  { label: "CV", href: "/cv.pdf" },
];

const STACK = [
  "SQL",
  "PostgreSQL",
  "Power BI",
  "Excel",
  "AI tools",
  "Dashboarding",
  "KPI Reporting",
  "Marketing Analytics",
  "Operational Analytics",
  "Data Validation",
  "Reporting Automation",
];

const PROJECTS = [
  {
    title: "Yandex Metrika Analytics Dashboard",
    description:
      "Reporting dashboard for traffic, conversions, and campaign performance. Built to replace manual checks across several tools.",
    image: "/portfolio/images/overview_dashboard_v2.jpg",
    tags: ["Yandex Metrika", "PostgreSQL", "Power BI"],
    github: GITHUB,
  },
  {
    title: "Multi-Source Website Analytics System",
    description:
      "Structured reporting workflow across channels with KPI consistency checks and data validation.",
    image: "/portfolio/images/grand-pognali.gif",
    tags: ["SQL", "PostgreSQL", "Power BI", "Data validation"],
    github: "https://github.com/ArtemHriharyan/crm-marketing-analytics",
  },
];

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function Button({
  href,
  children,
  variant = "default",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "default" | "primary";
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center h-8 px-3.5 text-sm border transition-colors duration-150";
  const styles =
    variant === "primary"
      ? `${base} border-zinc-800 bg-zinc-800 text-white hover:bg-zinc-700 hover:border-zinc-700`
      : `${base} border-zinc-300 bg-white text-zinc-800 hover:border-zinc-400 hover:bg-zinc-50`;

  if (external) {
    return (
      <ExternalLink href={href} className={styles}>
        {children}
      </ExternalLink>
    );
  }
  return (
    <a href={href} className={styles}>
      {children}
    </a>
  );
}

function SectionHeading({
  headingId,
  title,
  subtitle,
}: {
  headingId?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <h2
        id={headingId}
        className="text-base font-medium tracking-tight text-zinc-900"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-1 text-sm text-zinc-500">{subtitle}</p>
      ) : null}
    </div>
  );
}

function ProjectCard({
  title,
  description,
  image,
  imageAspect = "aspect-[2/1]",
  imagePosition = "center",
  imageClip,
  tags,
  github,
}: {
  title: string;
  description: string;
  image: string;
  imageAspect?: string;
  imagePosition?: string;
  imageClip?: string;
  tags: string[];
  github: string;
}) {
  return (
    <article className="group flex flex-col overflow-hidden border border-zinc-200 bg-white transition-colors duration-150 hover:border-zinc-300">
      <div className="relative h-64 overflow-hidden border-b border-zinc-200 bg-white">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-sm font-medium leading-snug text-zinc-900">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
          {description}
        </p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-sm border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-[11px] text-zinc-600"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <Button href={github} external>
            GitHub
          </Button>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-[#fafafa]/90 backdrop-blur-sm">
        <div className="mx-auto flex h-12 max-w-4xl items-center justify-between gap-4 px-5 sm:px-6">
          <a
            href="#"
            className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
          >
            Artem Grigoryan
          </a>
          <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <section className="py-10 sm:py-12">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Data Analyst
          </p>
          <h1 className="mt-1 text-2xl font-medium tracking-tight text-zinc-900 sm:text-[1.65rem]">
            Artem Grigoryan
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600">
            I work with SQL, reporting, dashboards, and marketing analytics.
            Most of my work is around KPI tracking, campaign performance, and
            making reporting more reliable and easier to use.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="/portfolio/cv.pdf">Download CV</Button>
            <Button href={LINKEDIN} external>
              LinkedIn
            </Button>
            <Button href={GITHUB} external>
              GitHub
            </Button>
          </div>
        </section>

        <div className="border-t border-zinc-200" />

        <section
          id="projects"
          className="scroll-mt-16 py-10 sm:py-12"
          aria-labelledby="projects-heading"
        >
          <SectionHeading
            headingId="projects-heading"
            title="Projects"
            subtitle="Dashboard and reporting work"
          />
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <div className="border-t border-zinc-200" />

        <section id="how-i-work" className="scroll-mt-16 py-10 sm:py-11">
          <SectionHeading title="How I Work" />
          <div className="mt-4 max-w-2xl space-y-3 text-sm leading-relaxed text-zinc-600">
            <p>
              I like working with messy or incomplete data and figuring out what’s still useful inside it.
            </p>
            <p>
              Usually the goal isn’t just to clean reports or fix inconsistencies. It’s to understand what 
              actually affects performance, where money gets wasted, what starts breaking first, or what can be 
              improved before it becomes a bigger problem.
            </p>
            <p>
              Most of the projects I’ve worked on were somewhere between analytics and operations: campaign 
              performance, reporting workflows, KPI tracking, or identifying patterns that helped teams make 
              faster and better decisions.
            </p>
          </div>
        </section>

        <div className="border-t border-zinc-200" />

        <section id="stack" className="scroll-mt-16 py-10 sm:py-11">
          <SectionHeading title="Stack" />
          <ul className="mt-4 flex flex-wrap gap-2">
            {STACK.map((item) => (
              <li
                key={item}
                className="rounded-sm border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="border-t border-zinc-200" />

        <section id="experience" className="scroll-mt-16 py-10 sm:py-11">
          <SectionHeading title="Experience" />
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium text-zinc-900">
                Site Elite Studio
              </h3>
              <p className="mt-0.5 text-xs text-zinc-500">
                Marketing Data Analyst
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-600">
                <li className="flex gap-2">
                  <span className="text-zinc-300">—</span>
                  <span>Built dashboards for campaign and KPI tracking</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-300">—</span>
                  <span>Analyzed CPA, CTR, CR, and traffic performance</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-300">—</span>
                  <span>Prepared recurring reports for clients</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-300">—</span>
                  <span>
                    Worked with reporting workflows and operational analytics
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-900">
                Logistics Operations
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-600">
                <li className="flex gap-2">
                  <span className="text-zinc-300">—</span>
                  <span>
                    Improved operational workflows and reporting processes
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-300">—</span>
                  <span>Coordinated high-volume operational tasks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-300">—</span>
                  <span>
                    Worked with performance tracking and process optimization
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="border-t border-zinc-200" />

        <section id="contact" className="scroll-mt-16 py-10 sm:py-12">
          <SectionHeading title="Contact" />
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-xs text-zinc-500">LinkedIn</dt>
              <dd className="mt-0.5">
                <ExternalLink
                  href={LINKEDIN}
                  className="text-zinc-800 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500"
                >
                  artem-grigoryan-analytics
                </ExternalLink>
              </dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-500">GitHub</dt>
              <dd className="mt-0.5">
                <ExternalLink
                  href={GITHUB}
                  className="text-zinc-800 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500"
                >
                  ArtemHriharyan
                </ExternalLink>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs text-zinc-500">Email</dt>
              <dd className="mt-0.5">
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-zinc-800 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500"
                >
                  {EMAIL}
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-6">
            <Button href="/cv.pdf">Download CV</Button>
          </div>
        </section>

        <footer className="border-t border-zinc-200 py-6 text-xs text-zinc-400">
          Artem Grigoryan — Data Analyst
        </footer>
      </div>
    </>
  );
}
