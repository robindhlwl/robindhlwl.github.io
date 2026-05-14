import { useEffect, useState } from "react"

const ecommerceProject = {
  title: "E-commerce Website",
  kicker: "Full stack commerce build",
  description:
    "A full stack e-commerce project focused on structured browsing, product clarity, secure input handling, authentication, authorisation, and reliability across a hosted environment.",
  stack: ["PHP", "CakePHP", "JavaScript", "SQL", "HTML/CSS", "Input validation", "Authentication", "Secure payments"],
  link: "https://u25s2207.iedev.org/",
  screenshots: [
    {
      title: "Storefront",
      label: "01",
      description: "A product-led landing view designed to help users understand the store quickly.",
    },
    {
      title: "Catalogue",
      label: "02",
      description: "Structured product listings with clear spacing, hierarchy, and interaction states.",
    },
    {
      title: "Secure Flows",
      label: "03",
      description: "User input, authentication, authorisation, and payment flows shaped by secure development practices.",
    },
  ],
  contributions: [
    "Designed responsive layouts that adapt cleanly across desktop and mobile screens.",
    "Built structured navigation, product listing sections, interactive front-end components, and full stack application flows.",
    "Applied input validation, authentication, authorisation, and secure payment handling practices.",
    "Troubleshot issues across local and hosted environments while improving reliability, security, and performance.",
  ],
}

const skillGroups = [
  {
    title: "Development",
    skills: ["PHP", "CakePHP", "JavaScript", "SQL", "HTML/CSS", "Python", "Java"],
  },
  {
    title: "Cybersecurity",
    skills: ["Wireshark", "Nmap", "Kali Linux", "Burp Suite", "Metasploit", "Vulnerability assessment"],
  },
  {
    title: "Infrastructure & Workflow",
    skills: ["Networking", "Traffic inspection", "Git", "Hosted environments", "Debugging", "IT troubleshooting"],
  },
]

const navLinks = [
  ["Profile", "#home"],
  ["Education", "#education"],
  ["Project", "#projects"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
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
  return (
    <header className="fixed left-0 right-0 top-0 z-30 border-b border-white/10 bg-[#07090b]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <a className="group flex items-center gap-3" href="#home" aria-label="Go to home">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[#77ffe1]/40 bg-[#77ffe1]/10 text-sm font-black text-[#77ffe1] shadow-[0_0_30px_rgba(119,255,225,0.18)]">
            RD
          </span>
          <span className="hidden text-sm font-bold uppercase tracking-[0.28em] text-[#f7f1df] sm:inline">
            Robin
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
          {navLinks.map(([label, href]) => (
            <a key={label} className="rounded-full px-4 py-2 text-sm font-semibold text-[#c8c0ad] transition hover:bg-white/10 hover:text-[#77ffe1]" href={href}>
              {label}
            </a>
          ))}
        </div>

        <a className="rounded-full border border-[#f5bd50]/50 px-4 py-2 text-sm font-bold text-[#f7f1df] transition hover:border-[#f5bd50] hover:bg-[#f5bd50] hover:text-[#07090b]" href={`${import.meta.env.BASE_URL}resume.pdf`}>
          Resume
        </a>
      </nav>
    </header>
  )
}

function Marquee() {
  const items = ["Cybersecurity", "Networking", "IT Infrastructure", "Technology Consulting", "Full Stack Web", "Secure Development"]

  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#f5bd50] py-3 text-[#07090b]">
      <div className="marquee-track flex w-max gap-10 text-sm font-black uppercase tracking-[0.32em]">
        {[...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  )
}

function HeroVisual() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0e1317] p-5 shadow-2xl shadow-black/40">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(119,255,225,0.16),transparent_34%,rgba(245,189,80,0.12)_72%,transparent)]" />
      <div className="scanline absolute inset-0 opacity-30" />

      <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff6565]" />
          <span className="h-3 w-3 rounded-full bg-[#f5bd50]" />
          <span className="h-3 w-3 rounded-full bg-[#77ffe1]" />
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#77ffe1]">security console</span>
      </div>

      <div className="relative mt-8 grid gap-5">
        {[
          ["status", "available for internship / grad roles"],
          ["focus", "cybersecurity + networking + IT support"],
          ["location", "melbourne, vic"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-black/25 p-4">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#f5bd50]">{label}</p>
            <p className="mt-2 text-lg font-semibold text-[#f7f1df]">{value}</p>
          </div>
        ))}
      </div>

      <div className="relative mt-8 rounded-2xl border border-[#77ffe1]/20 bg-[#77ffe1]/10 p-4 font-mono text-sm leading-7 text-[#a9fff0]">
        <p>$ scan --profile robin</p>
        <p className="text-[#f7f1df]">found: secure thinker, systems builder, troubleshooter</p>
        <p className="text-[#f5bd50]">ready: cybersecurity, support, networking, consulting</p>
      </div>
    </div>
  )
}

function ProjectMockup({ screenshot }) {
  return (
    <article className="group overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#11161a]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0b0e10]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(119,255,225,0.15),transparent_45%,rgba(245,189,80,0.18))]" />
        <div className="absolute left-5 right-5 top-5 rounded-2xl border border-white/10 bg-[#171d22] p-4 transition duration-300 group-hover:-translate-y-1">
          <div className="mb-5 flex items-center justify-between">
            <div className="h-4 w-24 rounded-full bg-[#77ffe1]/70" />
            <div className="flex gap-2">
              <div className="h-3 w-10 rounded-full bg-white/15" />
              <div className="h-3 w-10 rounded-full bg-white/15" />
              <div className="h-3 w-10 rounded-full bg-[#f5bd50]/70" />
            </div>
          </div>
          <div className="grid grid-cols-[1fr_0.7fr] gap-4">
            <div>
              <div className="mb-3 h-6 w-4/5 rounded bg-[#f7f1df]/80" />
              <div className="mb-2 h-3 w-full rounded bg-white/20" />
              <div className="mb-5 h-3 w-3/4 rounded bg-white/15" />
              <div className="h-9 w-28 rounded-full bg-[#77ffe1]" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-[#f5bd50]/60" />
              <div className="rounded-xl bg-white/15" />
              <div className="rounded-xl bg-white/15" />
              <div className="rounded-xl bg-[#77ffe1]/50" />
            </div>
          </div>
        </div>
        <span className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-xs font-black text-[#f7f1df]">
          {screenshot.label}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-black">{screenshot.title}</h3>
        <p className="mt-2 leading-7 text-[#c8c0ad]">{screenshot.description}</p>
      </div>
    </article>
  )
}

function HomePage() {
  return (
    <>
      <section id="home" className="relative overflow-hidden pt-24">
        <div className="site-grid absolute inset-0 opacity-35" />
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative z-10">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.32em] text-[#77ffe1]">
              Final Year IT Student - Cybersecurity Major
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-[#f7f1df] sm:text-7xl lg:text-8xl">
              Building, securing, and troubleshooting real systems.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#c8c0ad]">
              I am Robin Dhaliwal, a final year Information Technology student at Monash University majoring in Cybersecurity, with a strong interest in cybersecurity, networking, IT infrastructure, and technology consulting.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a className="rounded-full bg-[#77ffe1] px-6 py-4 font-black text-[#07090b] transition hover:-translate-y-0.5 hover:bg-[#a9fff0]" href="#projects">
                Explore work
              </a>
              <a className="rounded-full border border-white/15 px-6 py-4 font-black text-[#f7f1df] transition hover:-translate-y-0.5 hover:border-[#f5bd50] hover:text-[#f5bd50]" href="#/projects/ecommerce">
                Case study
              </a>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <Marquee />

      <section id="education" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-[#77ffe1]">Education</p>
            <h2 className="mt-4 text-4xl font-black">Monash University</h2>
            <p className="mt-4 text-xl text-[#c8c0ad]">Bachelor of Information Technology, Major in Cybersecurity</p>
            <p className="mt-2 text-[#c8c0ad]">2023 - Present</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {["Cybersecurity fundamentals", "Penetration testing", "Networking", "Secure software development", "Database systems", "System vulnerabilities"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-lg font-semibold text-[#f7f1df] transition hover:border-[#77ffe1]/40 hover:bg-[#77ffe1]/10">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 border-y border-white/10 bg-[#0d1114]">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.32em] text-[#f5bd50]">Selected project</p>
              <h2 className="mt-4 text-4xl font-black">E-commerce Website</h2>
            </div>
            <a className="w-fit rounded-full border border-[#77ffe1]/40 px-5 py-3 font-black text-[#77ffe1] transition hover:bg-[#77ffe1] hover:text-[#07090b]" href="#/projects/ecommerce">
              View case study
            </a>
          </div>

          <article className="mt-10 grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#151b20] lg:grid-cols-[1fr_0.9fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#77ffe1]">{ecommerceProject.kicker}</p>
              <h3 className="mt-5 max-w-2xl text-4xl font-black leading-tight">A practical full stack web store built with security, reliability, and performance in mind.</h3>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#c8c0ad]">{ecommerceProject.description}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                {ecommerceProject.stack.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-[#07090b] px-4 py-2 text-sm font-bold text-[#e9e0ca]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="min-h-[360px] border-t border-white/10 bg-[#07090b] p-6 lg:border-l lg:border-t-0">
              <ProjectMockup screenshot={ecommerceProject.screenshots[0]} />
            </div>
          </article>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20">
        <p className="text-sm font-black uppercase tracking-[0.32em] text-[#77ffe1]">Capability stack</p>
        <h2 className="mt-4 text-4xl font-black">Skills that connect code, networks, infrastructure, and security.</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <section key={group.title} className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-2xl font-black text-[#f5bd50]">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-[#151b20] px-4 py-2 text-sm font-semibold text-[#f7f1df]">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 border-t border-white/10 bg-[#0d1114]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-[#f5bd50]">Experience</p>
            <h2 className="mt-4 text-4xl font-black">Communication and adaptability under pressure.</h2>
            <div className="mt-8 rounded-[1.4rem] border border-white/10 bg-[#151b20] p-6">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#77ffe1]">Jan 2023 - Present</p>
              <h3 className="mt-4 text-2xl font-black">Crew Member - McDonald's, Braeside VIC</h3>
              <p className="mt-4 leading-8 text-[#c8c0ad]">
                Customer-facing work has helped me build strong communication, teamwork, and adaptability in fast-paced environments while following structured procedures and quality standards.
              </p>
            </div>
          </div>

          <div id="contact" className="scroll-mt-24">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-[#77ffe1]">Contact</p>
            <h2 className="mt-4 text-4xl font-black">Seeking cybersecurity, IT support, networking, infrastructure, and consulting roles.</h2>
            <div className="mt-8 rounded-[1.4rem] border border-white/10 bg-[#151b20] p-6">
              <p className="text-[#c8c0ad]">Melbourne, VIC</p>
              <p className="mt-3 text-[#c8c0ad]">
                Email: <a className="font-black text-[#77ffe1] hover:text-[#a9fff0]" href="mailto:dhaliwal.robin04@gmail.com">dhaliwal.robin04@gmail.com</a>
              </p>
              <p className="mt-3 text-[#c8c0ad]">
                Project demo: <a className="font-black text-[#77ffe1] hover:text-[#a9fff0]" href={ecommerceProject.link} target="_blank" rel="noreferrer">u25s2207.iedev.org</a>
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
      <section className="relative overflow-hidden pt-24">
        <div className="site-grid absolute inset-0 opacity-35" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 md:py-24">
          <a className="font-black text-[#77ffe1] hover:text-[#a9fff0]" href="#projects">
            Back to portfolio
          </a>
          <p className="mt-10 text-sm font-black uppercase tracking-[0.32em] text-[#f5bd50]">{ecommerceProject.kicker}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] md:text-7xl">{ecommerceProject.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#c8c0ad]">{ecommerceProject.description}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a className="rounded-full bg-[#77ffe1] px-6 py-4 font-black text-[#07090b] transition hover:-translate-y-0.5 hover:bg-[#a9fff0]" href={ecommerceProject.link} target="_blank" rel="noreferrer">
              Open live project
            </a>
            <a className="rounded-full border border-white/15 px-6 py-4 font-black text-[#f7f1df] transition hover:-translate-y-0.5 hover:border-[#f5bd50] hover:text-[#f5bd50]" href="mailto:dhaliwal.robin04@gmail.com">
              Email me
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d1114]">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-[#77ffe1]">Screenshots</p>
          <h2 className="mt-4 text-4xl font-black">Interface moments</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {ecommerceProject.screenshots.map((screenshot) => (
              <ProjectMockup key={screenshot.title} screenshot={screenshot} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.32em] text-[#f5bd50]">Contributions</p>
          <h2 className="mt-4 text-4xl font-black">What I contributed</h2>
          <p className="mt-5 leading-8 text-[#c8c0ad]">
            The project connects full stack web development, secure coding practices, hosted environment troubleshooting, and practical testing across a complete university website build.
          </p>
        </div>

        <div className="grid gap-3">
          {ecommerceProject.contributions.map((contribution, index) => (
            <div key={contribution} className="grid grid-cols-[auto_1fr] gap-4 rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-5">
              <span className="text-sm font-black text-[#77ffe1]">0{index + 1}</span>
              <p className="text-lg font-semibold leading-7 text-[#f7f1df]">{contribution}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function App() {
  const route = useHashRoute()
  const isProjectPage = route.startsWith("#/projects/ecommerce")

  return (
    <main className="min-h-screen bg-[#07090b] text-[#f7f1df]">
      <Navbar />
      {isProjectPage ? <EcommerceProjectPage /> : <HomePage />}
    </main>
  )
}

export default App
