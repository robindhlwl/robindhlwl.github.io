function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-widest text-blue-300">
          Final Year IT Student - Cybersecurity - Full Stack Development
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          Hi, I'm Robin Dhaliwal.
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-slate-300">
          I build secure and practical web applications, with experience in
          CakePHP, MySQL, JavaScript, Stripe payments, admin systems, and hosted
          deployment environments.
        </p>

        <div className="flex gap-4">
          <a className="rounded-xl bg-blue-500 px-5 py-3 font-medium text-white" href="#projects">
            View Projects
          </a>
          <a className="rounded-xl border border-slate-600 px-5 py-3 font-medium" href={`${import.meta.env.BASE_URL}resume.pdf`}>
            Download Resume
          </a>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">Featured Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-900 p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Sportwise Ecommerce System</h3>
            <p className="mb-4 text-slate-300">
              Built a secure ecommerce platform with CakePHP, MySQL, Stripe payment verification,
              admin product management, order emails, stock handling, and cPanel deployment.
            </p>
            <p className="text-sm text-blue-300">CakePHP - MySQL - Stripe - JavaScript - cPanel</p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Sticker Shop</h3>
            <p className="mb-4 text-slate-300">
              Developed a product store with AJAX cart updates, stock validation,
              responsive UI, admin management, and improved checkout UX.
            </p>
            <p className="text-sm text-blue-300">PHP - MySQL - JavaScript - Tailwind - Git</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">Technical Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "PHP", "CakePHP", "MySQL", "JavaScript", "React", "Tailwind",
            "Git", "Stripe", "cPanel", "Wireshark", "Nmap", "Burp Suite"
          ].map((skill) => (
            <span key={skill} className="rounded-full bg-slate-800 px-4 py-2 text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold">Contact</h2>
        <p className="text-slate-300">
          Email: <a className="text-blue-300" href="mailto:orinogrant@gmail.com">orinogrant@gmail.com</a>
        </p>
      </section>
    </main>
  )
}

export default App
