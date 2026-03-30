export interface Job {
  id: string
  title: string
  company: string
  period: string
  description: string
  highlights: string[]
  tech: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  tech: string[]
  link?: string
  featured: boolean
}

export interface Skill {
  category: string
  items: string[]
}

export interface Education {
  degree: string
  school: string
  year: string
  gpa?: string
}

export const profile = {
  name: 'Alex Rivera',
  title: 'Full-Stack Engineer & Product Builder',
  location: 'San Francisco, CA',
  email: 'alex@example.dev',
  github: 'github.com/alexrivera',
  linkedin: 'linkedin.com/in/alexrivera',
  bio: 'I build fast, reliable, and beautiful software. Passionate about developer experience, performance engineering, and shipping products that users love. Over 8 years turning ideas into production systems.',
  avatar: null as null | string,
}

export const jobs: Job[] = [
  {
    id: 'job-1',
    title: 'Senior Software Engineer',
    company: 'Veritas Labs',
    period: '2022 – Present',
    description:
      'Lead engineer on a real-time data platform serving 4M+ daily active users. Own the architecture for our event ingestion pipeline and developer-facing SDK.',
    highlights: [
      'Reduced p99 API latency by 68% through query optimization and caching strategy',
      'Designed and shipped a public TypeScript SDK used by 1,200+ developers',
      'Led migration from monolith to microservices; zero downtime across 6 months',
    ],
    tech: ['TypeScript', 'Node.js', 'Kafka', 'PostgreSQL', 'Redis', 'AWS'],
  },
  {
    id: 'job-2',
    title: 'Software Engineer II',
    company: 'Moonshot AI',
    period: '2020 – 2022',
    description:
      'Built core infrastructure for an AI-powered writing assistant. Scaled the product from private beta to 200K monthly active users.',
    highlights: [
      'Architected a streaming inference pipeline cutting time-to-first-token by 45%',
      'Shipped collaborative editing features used by 80% of active accounts',
      'Mentored 3 junior engineers; two promoted within 12 months',
    ],
    tech: ['Python', 'React', 'FastAPI', 'Celery', 'GCP', 'Kubernetes'],
  },
  {
    id: 'job-3',
    title: 'Frontend Engineer',
    company: 'Trove Commerce',
    period: '2018 – 2020',
    description:
      'Core frontend team for a B2B e-commerce platform. Owned checkout, payments, and merchant dashboard surfaces.',
    highlights: [
      'Rebuilt checkout flow in React; improved conversion rate by 22%',
      'Implemented design system used across 5 product teams',
      'Reduced bundle size by 40% via code-splitting and tree-shaking audit',
    ],
    tech: ['React', 'TypeScript', 'GraphQL', 'Stripe', 'Storybook'],
  },
]

export const projects: Project[] = [
  {
    id: 'proj-1',
    name: 'Codestream',
    description:
      'Open-source CLI tool that streams code diffs to a shareable live URL — like "share your screen" but for terminal sessions. 2.4k GitHub stars.',
    tech: ['Go', 'WebSockets', 'Cloudflare Workers'],
    featured: true,
  },
  {
    id: 'proj-2',
    name: 'Bench',
    description:
      'Automated API benchmarking tool that runs on every PR and comments latency regression reports. Integrates with GitHub Actions.',
    tech: ['TypeScript', 'Node.js', 'SQLite', 'GitHub API'],
    featured: true,
  },
  {
    id: 'proj-3',
    name: 'Palette AI',
    description:
      'Generate accessible color palettes from a text prompt. Built as a weekend project, now has 8k monthly visitors.',
    tech: ['Next.js', 'OpenAI API', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: 'proj-4',
    name: 'devlog',
    description:
      'Minimalist structured journaling tool for engineers. Tracks what you shipped, what was hard, and what you learned.',
    tech: ['SvelteKit', 'SQLite', 'Tauri'],
    featured: false,
  },
]

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'Python', 'Go', 'SQL', 'Rust (learning)'],
  },
  {
    category: 'Frontend',
    items: ['React', 'TanStack Router', 'Next.js', 'SvelteKit', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Kafka', 'GraphQL'],
  },
  {
    category: 'Infrastructure',
    items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Netlify'],
  },
]

export const education: Education[] = [
  {
    degree: 'B.S. Computer Science',
    school: 'University of Texas at Austin',
    year: '2018',
    gpa: '3.8',
  },
]

export const aiContext = `
You are an AI assistant for Alex Rivera's portfolio website. You help visitors learn about Alex's background, skills, experience, and projects. Be warm, professional, and concise.

Here is Alex's information:

Name: ${profile.name}
Title: ${profile.title}
Location: ${profile.location}
Email: ${profile.email}
Bio: ${profile.bio}

Work Experience:
${jobs.map((j) => `- ${j.title} at ${j.company} (${j.period}): ${j.description} Key achievements: ${j.highlights.join('; ')}`).join('\n')}

Projects:
${projects.map((p) => `- ${p.name}: ${p.description} Tech: ${p.tech.join(', ')}`).join('\n')}

Skills: ${skills.map((s) => `${s.category}: ${s.items.join(', ')}`).join(' | ')}

Education: ${education[0].degree} from ${education[0].school} (${education[0].year})

Keep answers concise (2-4 sentences). If asked something you don't know, say so honestly. Suggest relevant questions visitors might want to ask. Do not make up information not listed above.
`
