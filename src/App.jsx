const projects = [
  {
    title: "E-commerce Website",
    meta: "University project",
    description:
      "Designed and developed a responsive e-commerce website with structured navigation, product listings, interactive components, input validation, and secure development considerations.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI", "Secure coding"],
    link: "https://u25s2207.iedev.org/",
  },
  {
    title: "Python Automation Scripts",
    meta: "Automation and workflow project",
    description:
      "Built scripts for file organisation and data handling, using conditional logic and structured problem solving to reduce repetitive manual work.",
    stack: ["Python", "Scripting", "File handling", "Debugging"],
  },
]

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "Java", "JavaScript", "HTML", "CSS", "C"],
  },
  {
    title: "Cybersecurity & Networking",
    skills: [
      "Penetration testing fundamentals",
      "Network protocols",
      "Vulnerability awareness",
      "Secure coding concepts",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "Version control", "VS Code", "Database basics", "Debugging"],
  },
]

function App() {
  return (
    <main className="min-h-screen bg-[#101214] text-[#f7f3e8]">
      <section className="border-b border-white/10 bg-[#171a1f]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.3fr_0.7fr] md:items-end md:py-24">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#66d9c2]">
              Final Year IT Student - Cybersecurity Major
            </p>
            <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Robin Dhaliwal
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#d9d2c3]">
              Cybersecurity-focused Bachelor of Information Technology student at Monash University with hands-on experience in programming, networking, secure system concepts, and responsive web development.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-lg bg-[#66d9c2] px-5 py-3 font-semibold text-[#101214] transition hover:bg-[#8be8d6]" href="#projects">
                View Projects
              </a>
              <a className="rounded-lg border border-[#d7a84f]/70 px-5 py-3 font-semibold text-[#f7f3e8] transition hover:border-[#f0c66a] hover:text-[#f0c66a]" href={`${import.meta.env.BASE_URL}resume.pdf`}>
                Download Resume
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#20252b] p-5">
            <p className="text-sm uppercase tracking-widest text-[#d7a84f]">Seeking</p>
            <p className="mt-3 text-2xl font-semibold">Internship or graduate roles</p>
            <p className="mt-4 leading-7 text-[#d9d2c3]">
              Cybersecurity, software development, or general IT roles where I can apply secure thinking, reliable execution, and practical problem solving.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#66d9c2]">Education</p>
            <h2 className="mt-3 text-3xl font-bold">Monash University</h2>
            <p className="mt-3 text-[#d9d2c3]">Bachelor of Information Technology, Major in Cybersecurity</p>
            <p className="mt-1 text-[#d9d2c3]">2023 - Present</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Cybersecurity fundamentals",
              "Penetration testing",
              "Networking",
              "Secure software development",
              "Database systems",
              "System vulnerabilities",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-[#171a1f] px-4 py-3 text-[#eee8dc]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-white/10 bg-[#171a1f]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold">Featured Projects</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-lg border border-white/10 bg-[#20252b] p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#d7a84f]">{project.meta}</p>
                <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 leading-7 text-[#d9d2c3]">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((skill) => (
                    <span key={skill} className="rounded-lg bg-[#101214] px-3 py-2 text-sm text-[#cfd7d3]">
                      {skill}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a className="mt-6 inline-block font-semibold text-[#66d9c2] hover:text-[#8be8d6]" href={project.link} target="_blank" rel="noreferrer">
                    View project demo
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold">Technical Skills</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <section key={group.title} className="rounded-lg border border-white/10 bg-[#171a1f] p-5">
              <h3 className="text-xl font-semibold text-[#f0c66a]">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-lg bg-[#20252b] px-3 py-2 text-sm text-[#eee8dc]">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#171a1f]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Experience</h2>
            <div className="mt-6 rounded-lg border border-white/10 bg-[#20252b] p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#d7a84f]">Jan 2023 - Present</p>
              <h3 className="mt-3 text-2xl font-semibold">Crew Member - McDonald's, Braeside VIC</h3>
              <p className="mt-4 leading-7 text-[#d9d2c3]">
                Worked in high-pressure team environments, followed structured procedures and quality standards, handled transactions accurately, and demonstrated reliability, attendance, and adaptability.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Contact</h2>
            <div className="mt-6 rounded-lg border border-white/10 bg-[#20252b] p-6">
              <p className="text-[#d9d2c3]">Melbourne, VIC</p>
              <p className="mt-3 text-[#d9d2c3]">
                Email: <a className="font-semibold text-[#66d9c2] hover:text-[#8be8d6]" href="mailto:dhaliwal.robin04@gmail.com">dhaliwal.robin04@gmail.com</a>
              </p>
              <p className="mt-3 text-[#d9d2c3]">
                Project demo: <a className="font-semibold text-[#66d9c2] hover:text-[#8be8d6]" href="https://u25s2207.iedev.org/" target="_blank" rel="noreferrer">u25s2207.iedev.org</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
