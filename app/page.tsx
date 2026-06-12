import type { ReactNode } from "react";

const LINKEDIN = "https://www.linkedin.com/in/artem-grigoryan-analytics/";
const GITHUB = "https://github.com/ArtemHriharyan";
const EMAIL = "artemhriharyan@gmail.com";

const NAV = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
  { label: "CV", href: "/portfolio/cv.pdf" },
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
      "Real-world web analytics pipeline built around Yandex Metrika data. Includes ETL processing, SQL modeling, and dashboard development.",
    image: "/portfolio/images/overview_dashboard_v2.jpg",
    tags: ["Yandex Metrika", "PostgreSQL", "Power BI"],
    github: "https://github.com/ArtemHriharyan/Yandex_metrika-analytics",
  },
  {
    title: "Marketing Analytics and Attribution System",
    description:
      "Marketing analytics system combining CRM, web analytics, SEO, and advertising data in PostgreSQL and Power BI. Built to estimate channel performance, acquisition costs, and revenue contribution when direct attribution was missing.",
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
            View Repository
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

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <article className="border border-zinc-200 bg-white p-4 transition-colors duration-150 hover:border-zinc-300">
              <p className="font-mono text-xs text-zinc-400">01</p>
              <h3 className="mt-3 text-sm font-medium text-zinc-900">
                Investigate
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Most datasets are incomplete in one way or another. Missing fields,
                broken tracking, inconsistent reporting. I start by figuring out what
                can be trusted and what cannot.
              </p>
            </article>

            <article className="border border-zinc-200 bg-white p-4 transition-colors duration-150 hover:border-zinc-300">
              <p className="font-mono text-xs text-zinc-400">02</p>
              <h3 className="mt-3 text-sm font-medium text-zinc-900">
                I look for bottlenecks
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Where does performance drop? Where is budget wasted? What breaks first
                when things start going wrong? Those questions are usually more useful
                than another KPI.
              </p>
            </article>

            <article className="border border-zinc-200 bg-white p-4 transition-colors duration-150 hover:border-zinc-300">
              <p className="font-mono text-xs text-zinc-400">03</p>
              <h3 className="mt-3 text-sm font-medium text-zinc-900">
                Analysis should change decisions
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                A report is not the final result. The final result is a better
                decision, a faster process, or a clearer understanding of what's
                happening.
              </p>
            </article>
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
                Marketing Data Analyst
              </h3>
              <p className="mt-0.5 text-xs text-zinc-500">
                Site Elite Studio
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-600">
                <li className="flex gap-2">
                  <span className="text-zinc-300">—</span>
                  <span>
                    Worked with marketing and web analytics data across 50+ client projects
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-zinc-300">—</span>
                  <span>
                    Built Power BI dashboards for KPI tracking, campaign reporting, and performance analysis
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-zinc-300">—</span>
                  <span>
                    Analyzed campaign performance using CTR, CR, CPA, ROI, conversion funnels, and traffic quality metrics
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-zinc-300">—</span>
                  <span>
                    Investigated user behavior and acquisition channels using Yandex Metrika, Wordstat, and Webmaster
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-zinc-300">—</span>
                  <span>
                    Supported marketing teams with reporting, performance analysis, and campaign optimization recommendations
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-900">
                Logistics Operations
              </h3>
              <p className="mt-0.5 text-xs text-zinc-500">
                Jenty
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-600">
                <li className="flex gap-2">
                  <span className="text-zinc-300">—</span>
                  <span>
                    Analyzed operational workflows and helped improve vehicle registration processes
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-zinc-300">—</span>
                  <span>
                    Reduced operational costs from approximately $200–300 to $10–15 per vehicle through process optimization
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-zinc-300">—</span>
                  <span>
                    Worked with operational reporting, performance tracking, and workflow coordination
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-zinc-300">—</span>
                  <span>
                    Coordinated communication with international clients and partners, including Chinese and German companies
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-zinc-300">—</span>
                  <span>
                    Led a team of 8 employees during high-volume operational periods
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
            <Button href="/portfolio/cv.pdf">Download CV</Button>
          </div>
        </section>

        <footer className="border-t border-zinc-200 py-6 text-xs text-zinc-400">
          Artem Grigoryan — Data Analyst
        </footer>
      </div>
    </>
  );
}
