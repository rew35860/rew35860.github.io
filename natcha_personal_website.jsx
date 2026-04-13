export default function NatchaPersonalWebsite() {
  const news = [
    "Apr 2026 — Building a research portfolio at the intersection of reinforcement learning, generative models, and robotics.",
    "Mar([nakamotoo.github.io](https://nakamotoo.github.io/)) Robotics Club HACK2026 for a humanoid manipulation and locomotion project.",
    "Dec 2025 — Completed a semester project on reproducibility in RL-based ramp metering at ETH Zürich.",
  ];

  const projects = [
    {
      title: "Imitation Learning for Humanoid Robot G1 Manipulation",
      meta: "ETH Robotics Club HACK2026 · Mar 2026",
      bullets: [
        "Built a humanoid manipulation pipeline using teleoperation, LeRobot, and an ACT policy under a 48-hour hackathon constraint.",
        "Configured and adapted NVIDIA GR00T Whole-Body Control for humanoid locomotion.",
        "Collected about 1.5 hours of data (~200 episodes) and trained a grasping policy within hours.",
        "Demonstrated generalization from a single training object to objects with different sizes and appearances.",
      ],
    },
    {
      title: "High-Frequency Trajectory Tracking for Franka Emika Panda",
      meta: "Personal Project · Feb 2026",
      bullets: [
        "Developed an RL pipeline in MuJoCo using PPO for tracking figure-8 trajectories with a 7-DoF Franka arm.",
        "Reduced generalization error to around 2 cm across varied trajectory settings, with 1.79 cm average error on specialized tasks.",
        "Analyzed mechanical limits and identified a safety-critical operating envelope around large-amplitude motions.",
      ],
    },
    {
      title: "Reproducibility Study of RL-Based Ramp Metering",
      meta: "Semester Project at ETH Zürich · Oct 2025 – Dec 2025",
      bullets: [
        "Implemented ACTM and METANET traffic simulators from scratch in Python and integrated them with Q-learning, MPC, and actor-critic baselines.",
        "Ran training up to 600,000 episodes and achieved a 30.4% reduction in network-wide total time spent.",
        "Prepared two replication studies focused on transparent and reproducible research pipelines.",
      ],
    },
    {
      title: "Bayesian Model Averaging with SWAG",
      meta: "Probabilistic AI Course Project · Nov 2024",
      bullets: [
        "Built a Bayesian neural network for land-use classification.",
        "Implemented SWA-Gaussian for scalable posterior approximation and evaluated calibration with reliability diagnostics.",
      ],
    },
  ];

  const experience = [
    {
      title: "Associate iOS Developer",
      org: "Cercacor · Irvine, CA",
      time: "Sep 2021 – May 2023",
      desc: "Worked on health and nutrition applications in Swift using MVVM, REST APIs, and cloud-backed synchronization.",
    },
    {
      title: "Operations Co-Manager",
      org: "Wellness Retail · Southern California, USA",
      time: "Mar 2018 – Present",
      desc: "Managed remote operations, payroll, and process digitization across multiple retail locations.",
    },
  ];

  const awards = [
    "1st Place, ETH Robotics Club HACK2026",
    "Cum Laude, Top 10% of the Class of 2022, UC Irvine",
    "Dean’s Honors List (9 quarters), UC Irvine",
  ];

  const links = [
    { label: "Email", href: "mailto:njengjirapas@ethz.ch" },
    { label: "GitHub", href: "https://github.com/rew35860" },
    { label: "LinkedIn", href: "https://linkedin.com/in/njengjir" },
    { label: "CV", href: "#" },
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-16">
        <section className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-start">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Natcha Jengjirapas</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700 md:text-lg">
              I am a Master’s student in Computer Science at ETH Zürich, specializing in
              Machine Intelligence with a minor in Data Management. My interests lie at the
              intersection of reinforcement learning, generative models, and robotics, with a
              particular focus on building embodied systems that are both expressive and stable.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700 md:text-lg">
              Before ETH, I completed my B.S. in Computer Science at the University of
              California, Irvine, with a specialization in Information. I am currently building
              research experience in humanoid control, imitation learning, and learning-based
              motion generation, and I hope to pursue research that leads to publications in the future.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-700">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-zinc-300 px-4 py-2 transition hover:border-zinc-500 hover:bg-zinc-50"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs">
            <div className="aspect-[4/5] w-full rounded-3xl border border-zinc-200 bg-zinc-100 shadow-sm" />
            <p className="mt-3 text-center text-sm text-zinc-500">Profile photo placeholder</p>
          </div>
        </section>

        <section className="mt-16 grid gap-12 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">News</h2>
            <div className="mt-5 space-y-3 text-sm leading-6 text-zinc-700">
              {news.map((item) => (
                <div key={item} className="rounded-2xl border border-zinc-200 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">About</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
              <p>
                My current interests include reinforcement learning, diffusion and generative
                models for motion, imitation learning, and robust control for embodied agents.
                I enjoy projects where machine learning has to work together with structure,
                stability, and real physical constraints.
              </p>
              <p>
                More broadly, I am interested in how learned systems can produce coordinated,
                adaptive behavior in robotics. I am especially drawn to research questions that
                connect motion generation, control, and generalization.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">Selected Projects</h2>
            <p className="text-sm text-zinc-500">Research and technical work</p>
          </div>

          <div className="mt-6 grid gap-6">
            {projects.map((project) => (
              <article key={project.title} className="rounded-3xl border border-zinc-200 p-6 shadow-sm">
                <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{project.meta}</p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700 md:text-base">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Publications</h2>
            <div className="mt-5 rounded-3xl border border-dashed border-zinc-300 p-6 text-sm leading-7 text-zinc-600">
              I do not have publications yet, but I am actively building toward research output.
              This section can later be expanded with papers, preprints, posters, or project pages.
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Awards</h2>
            <div className="mt-5 space-y-3 text-sm leading-6 text-zinc-700">
              {awards.map((award) => (
                <div key={award} className="rounded-2xl border border-zinc-200 px-4 py-3">
                  {award}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <div className="mt-6 grid gap-4">
            {experience.map((item) => (
              <article key={item.title} className="rounded-3xl border border-zinc-200 p-6 shadow-sm">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-zinc-500">{item.org}</p>
                  </div>
                  <p className="text-sm text-zinc-500">{item.time}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-zinc-700 md:text-base">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-700 md:text-base">
            I’m interested in research collaborations and opportunities related to robotics,
            reinforcement learning, and generative models.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-zinc-700">
            <a href="mailto:njengjirapas@ethz.ch" className="rounded-full border border-zinc-300 px-4 py-2 hover:bg-zinc-50">
              njengjirapas@ethz.ch
            </a>
            <a href="https://github.com/rew35860" className="rounded-full border border-zinc-300 px-4 py-2 hover:bg-zinc-50">
              github.com/rew35860
            </a>
            <a href="https://linkedin.com/in/njengjir" className="rounded-full border border-zinc-300 px-4 py-2 hover:bg-zinc-50">
              linkedin.com/in/njengjir
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
