export interface Project {
  title: string
  slug: string
  description: string
  longDescription: string
  tags: string[]
  status: 'live' | 'building'
  github?: string
  demo?: string
  image?: string
  featured: boolean
  date: string
}

export const projects: Project[] = [
  {
    title: 'NexChat Chrome Extension',
    slug: 'nexchat',
    description: 'AI-powered chat assistant for browser productivity',
    longDescription: 'NexChat is a Chrome extension that brings AI-powered assistance directly to your browser. It helps with productivity by providing intelligent suggestions, summarizing content, and assisting with research tasks. Built with modern web technologies and integrated with leading AI models.',
    tags: ['AI', 'Chrome Extension', 'JavaScript'],
    status: 'building',
    github: 'https://github.com/rohail/nexchat',
    demo: 'https://nexchat.dev',
    featured: true,
    date: '2024-01-15',
  },
  {
    title: 'ICMS',
    slug: 'icms',
    description: 'Integrated Criminal Management System for law enforcement',
    longDescription: 'ICMS is a comprehensive system designed for law enforcement agencies to manage criminal records, case files, and investigative data. It streamlines workflows, improves data accuracy, and enhances collaboration between departments. Features include case tracking, evidence management, and reporting tools.',
    tags: ['Python', 'Database', 'Web App'],
    status: 'live',
    github: 'https://github.com/rohail/icms',
    featured: true,
    date: '2023-11-20',
  },
  {
    title: 'Second Brain System',
    slug: 'second-brain',
    description: 'Obsidian + Discord bot + Groq for knowledge management',
    longDescription: 'A personal knowledge management system that combines Obsidian for note-taking, a Discord bot for quick capture and retrieval, and Groq for AI-powered insights. The system helps organize thoughts, connect ideas, and leverage AI to discover patterns in your knowledge base.',
    tags: ['AI', 'Productivity', 'Discord'],
    status: 'building',
    featured: true,
    date: '2024-02-01',
  },
  {
    title: 'Smart Arithmetic Processor',
    slug: 'smart-arithmetic',
    description: 'Digital Logic Design project - advanced arithmetic operations',
    longDescription: 'A hardware-level implementation of advanced arithmetic operations using digital logic design principles. Built as a PBL (Project-Based Learning) assignment, this processor demonstrates understanding of ALU design, carry-lookahead adders, and optimization techniques.',
    tags: ['Hardware', 'Digital Logic', 'Verilog'],
    status: 'live',
    featured: false,
    date: '2023-10-10',
  },
]
