import { useEffect, useState } from "react"

const ecommerceProject = {
  title: "E-commerce Website",
  meta: "University project",
  description:
    "Designed and developed a responsive e-commerce website with structured navigation, product listings, interactive components, input validation, and secure development considerations.",
  stack: ["HTML", "CSS", "JavaScript", "Responsive UI", "Secure coding"],
  link: "https://u25s2207.iedev.org/",
  screenshots: [
    {
      title: "Storefront",
      description: "Responsive product browsing experience for desktop and mobile users.",
    },
    {
      title: "Product Listings",
      description: "Structured catalogue layout with clear navigation and interactive components.",
    },
    {
      title: "Validation Flow",
      description: "Input handling and secure development considerations applied to user forms.",
    },
  ],
  contributions: [
    "Built responsive layouts compatible with desktop and mobile devices.",
    "Implemented structured navigation, product listing sections, and interactive front-end components.",
    "Applied input validation and secure coding concepts to reduce avoidable user input issues.",
    "Managed iterative improvements with version control and regular testing.",
  ],
}

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

function useHashRoute() {
  const [route, setRoute] = useState(window.location.hash || "#home")

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash || "#home")

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return route
}

function Navbar() {
  const links = [
    ["About", "#home"],
    ["Education", "#education"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ]

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#101214]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a className="text-lg font-bold text-[#f7f3e8]" href="#home">
          Robin Dhaliwal
        </a>

        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#d9d2c3]">
          {links.map(([label, href]) => (
            <a key={label} className="rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-[#66d9c2]" href={href}>
              {label}
            </a>
          ))}
          <a className="rounded-lg border border-[#d7a84f]/70 px-3 py-2 text-[#f7f3e8] transition hover:border-[#f0c66a] hover:text-[#f0c66a]" href={`${import.meta.env.BASE_URL}resume.pdf`}>
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}

function ScreenshotPlaceholder({ screenshot }) {
  return (
    <article className="overflow-hidden rounded-lg border border-white/10 bg-[#20252b]">
      <div className="border-b border-white/10 bg-[#101214] px-4 py-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#e86161]" />
          <span className="h-3 w-3 rounded-full bg-[#f0c66a]" />
          <span className="h-3 w-3 rounded-full bg-[#66d9c2]" />
        </div>
      </div>
      <div className="grid aspect-[16/10] place-items-center bg-[linear-gradient(135deg,#171a1f,#26313a)] p-5">
        <div className="w-full max-w-sm">
          <div className="mb-4 h-5 w-32 rounded bg-[#66d9c2]/70" />
          <div className="mb-3 h-3 w-full rounded bg-white/20" />
          <div className="mb-3 h-3 w-5/6 rounded bg-white/15" />
          <div className="grid grid-cols-3 gap-3 pt-4">
            <div className="h-16 rounded bg-[#d7a84f]/50" />
            <div className="h-16 rounded bg-white/15" />
            <div className="h-16 rounded bg-[#66d9c2]/40" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold">{screenshot.title}</h3>
        <p className="mt-2 leading-7 text-[#d9d2c3]">{screenshot.description}</p>
      </div>
    </article>
  )
}

function HomePage() {
  return (
    <>
      <section id="home" className="border-b border-white/10 bg-[#171a1f]">
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

      <section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-14">
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

      <section id="projects" className="scroll-mt-24 border-y border-white/10 bg-[#171a1f]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold">Featured Project</h2>

          <article className="mt-8 rounded-lg border border-white/10 bg-[#20252b] p-6 md:max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#d7a84f]">{ecommerceProject.meta}</p>
            <h3 className="mt-3 text-2xl font-semibold">{ecommerceProject.title}</h3>
            <p className="mt-4 leading-7 text-[#d9d2c3]">{ecommerceProject.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {ecommerceProject.stack.map((skill) => (
                <span key={skill} className="rounded-lg bg-[#101214] px-3 py-2 text-sm text-[#cfd7d3]">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="rounded-lg bg-[#66d9c2] px-4 py-3 font-semibold text-[#101214] transition hover:bg-[#8be8d6]" href="#/projects/ecommerce">
                View case study
              </a>
              <a className="rounded-lg border border-[#d7a84f]/70 px-4 py-3 font-semibold text-[#f7f3e8] transition hover:border-[#f0c66a] hover:text-[#f0c66a]" href={ecommerceProject.link} target="_blank" rel="noreferrer">
                Open live project
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-14">
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

      <section id="experience" className="scroll-mt-24 border-t border-white/10 bg-[#171a1f]">
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

          <div id="contact" className="scroll-mt-24">
            <h2 className="text-3xl font-bold">Contact</h2>
            <div className="mt-6 rounded-lg border border-white/10 bg-[#20252b] p-6">
              <p className="text-[#d9d2c3]">Melbourne, VIC</p>
              <p className="mt-3 text-[#d9d2c3]">
                Email: <a className="font-semibold text-[#66d9c2] hover:text-[#8be8d6]" href="mailto:dhaliwal.robin04@gmail.com">dhaliwal.robin04@gmail.com</a>
              </p>
              <p className="mt-3 text-[#d9d2c3]">
                Project demo: <a className="font-semibold text-[#66d9c2] hover:text-[#8be8d6]" href={ecommerceProject.link} target="_blank" rel="noreferrer">u25s2207.iedev.org</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function EcommerceProjectPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#171a1f]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <a className="font-semibold text-[#66d9c2] hover:text-[#8be8d6]" href="#projects">
            Back to projects
          </a>
          <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-[#d7a84f]">{ecommerceProject.meta}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">{ecommerceProject.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d9d2c3]">{ecommerceProject.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="rounded-lg bg-[#66d9c2] px-5 py-3 font-semibold text-[#101214] transition hover:bg-[#8be8d6]" href={ecommerceProject.link} target="_blank" rel="noreferrer">
              Open live project
            </a>
            <a className="rounded-lg border border-[#d7a84f]/70 px-5 py-3 font-semibold text-[#f7f3e8] transition hover:border-[#f0c66a] hover:text-[#f0c66a]" href="#contact">
              Contact me
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold">Screenshots</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {ecommerceProject.screenshots.map((screenshot) => (
            <ScreenshotPlaceholder key={screenshot.title} screenshot={screenshot} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#171a1f]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#66d9c2]">Contributions</p>
            <h2 className="mt-3 text-3xl font-bold">What I built</h2>
            <p className="mt-4 leading-7 text-[#d9d2c3]">
              This project let me apply front-end development, secure coding awareness, and practical testing in a complete university website build.
            </p>
          </div>

          <div className="space-y-3">
            {ecommerceProject.contributions.map((contribution) => (
              <div key={contribution} className="rounded-lg border border-white/10 bg-[#20252b] p-4 text-[#eee8dc]">
                {contribution}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-14">
        <div className="rounded-lg border border-white/10 bg-[#20252b] p-6">
          <h2 className="text-3xl font-bold">Project Links</h2>
          <p className="mt-4 leading-7 text-[#d9d2c3]">
            View the deployed university project or get in touch if you want to discuss the build.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="rounded-lg bg-[#66d9c2] px-5 py-3 font-semibold text-[#101214] transition hover:bg-[#8be8d6]" href={ecommerceProject.link} target="_blank" rel="noreferrer">
              Open live project
            </a>
            <a className="rounded-lg border border-[#d7a84f]/70 px-5 py-3 font-semibold text-[#f7f3e8] transition hover:border-[#f0c66a] hover:text-[#f0c66a]" href="mailto:dhaliwal.robin04@gmail.com">
              Email me
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function App() {
  const route = useHashRoute()
  const isProjectPage = route.startsWith("#/projects/ecommerce")

  return (
    <main className="min-h-screen bg-[#101214] text-[#f7f3e8]">
      <Navbar />
      {isProjectPage ? <EcommerceProjectPage /> : <HomePage />}
    </main>
  )
}

export default App
