import { createFileRoute } from '@tanstack/react-router'
import { profile, jobs, projects, skills, education } from '@/data/resume'
import { AIAssistant } from '@/components/AIAssistant'

export const Route = createFileRoute('/')({
  component: Portfolio,
})

function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-indigo-800/60 rounded-full px-4 py-1.5 text-indigo-200 text-sm mb-6 border border-indigo-700">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to new opportunities
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              {profile.name}
            </h1>
            <p className="text-indigo-200 text-xl md:text-2xl font-light mb-6">
              {profile.title}
            </p>
            <p className="text-indigo-300 text-lg leading-relaxed mb-8 max-w-xl">
              {profile.bio}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 bg-white text-indigo-900 hover:bg-indigo-50 font-semibold px-5 py-2.5 rounded-full transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in touch
              </a>
              <a
                href={`https://${profile.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-800/60 hover:bg-indigo-800 border border-indigo-600 text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-800/60 hover:bg-indigo-800 border border-indigo-600 text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '8+', label: 'Years experience' },
            { value: '3', label: 'Companies' },
            { value: '4M+', label: 'Users reached' },
            { value: '4', label: 'Open-source projects' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-indigo-700">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <SectionLabel>Experience</SectionLabel>
        <div className="space-y-10 mt-6">
          {jobs.map((job) => (
            <div key={job.id} className="relative pl-8 border-l-2 border-gray-100">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-2 border-white ring-2 ring-indigo-200" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <span className="text-indigo-600 font-medium text-sm">{job.company}</span>
                </div>
                <span className="text-sm text-gray-400 shrink-0">{job.period}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{job.description}</p>
              <ul className="space-y-1.5">
                {job.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm">
                    <span className="text-indigo-400 mt-0.5 shrink-0">→</span>
                    <span className="text-gray-700">{h}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {job.tech.map((t) => (
                  <TechBadge key={t}>{t}</TechBadge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>Projects</SectionLabel>
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            {projects.filter((p) => p.featured).map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-base mb-2">{project.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <TechBadge key={t}>{t}</TechBadge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <SectionLabel>Skills</SectionLabel>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                {group.category}
              </h3>
              <div className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <div key={item} className="text-sm text-gray-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>Education</SectionLabel>
          <div className="mt-6 flex flex-col gap-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-white rounded-2xl p-6 border border-gray-100 flex items-center justify-between"
              >
                <div>
                  <div className="font-semibold">{edu.degree}</div>
                  <div className="text-indigo-600 text-sm">{edu.school}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">{edu.year}</div>
                  {edu.gpa && (
                    <div className="text-sm font-medium text-gray-700">GPA {edu.gpa}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-gray-400 text-sm">© 2025 {profile.name} · {profile.location}</span>
          <a href={`mailto:${profile.email}`} className="text-sm text-gray-400 hover:text-indigo-600 transition-colors">
            {profile.email}
          </a>
        </div>
      </footer>

      <AIAssistant />
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <h2 className="text-2xl font-bold">{children}</h2>
      <div className="flex-1 h-px bg-gray-100" />
    </div>
  )
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs bg-indigo-50 text-indigo-700 rounded-md px-2 py-0.5 font-medium">
      {children}
    </span>
  )
}
