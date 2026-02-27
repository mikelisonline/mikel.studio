const projects = [
  {
    title: "Project One",
    description: "A brief description of this project and what it does.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "#",
  },
  {
    title: "Project Two",
    description: "A brief description of this project and what it does.",
    tags: ["React", "Node.js", "PostgreSQL"],
    href: "#",
  },
  {
    title: "Project Three",
    description: "A brief description of this project and what it does.",
    tags: ["Swift", "iOS", "Firebase"],
    href: "#",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
        {/* Hero */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Mikel Garcia
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Designer & developer building thoughtful digital experiences.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/mikelisonline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="mailto:hello@mikel.studio"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Email
            </a>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted">
            Projects
          </h2>
          <div className="flex flex-col gap-1">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="group -mx-4 rounded-lg px-4 py-5 transition-colors hover:bg-white/[0.03]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {project.description}
                    </p>
                  </div>
                  <span className="mt-1 text-muted opacity-0 transition-opacity group-hover:opacity-100">
                    &rarr;
                  </span>
                </div>
                <div className="mt-3 flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
