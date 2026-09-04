export const BLOG_CATEGORIES = [
  'Frontend',
  'Backend',
  'Database',
  'Knowledge Sharing',
  'Resources',
] as const

export type BlogCategory = (typeof BLOG_CATEGORIES)[number]

export interface BlogPost {
  id: string
  category: BlogCategory
  title: string
  description: string
  dateLabel: string
  readTime: string
  image: string
  imageAlt: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'fe-1',
    category: 'Frontend',
    title: 'Building Accessible Vue Interfaces That Still Feel Fast',
    description:
      'Learn how to structure Vue 3 components, focus states, and CSS tokens so a marketing site stays keyboard-friendly without losing the cyan glow of the original design.',
    dateLabel: '01 JAN 2024',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Developer working on frontend code at a laptop',
  },
  {
    id: 'fe-2',
    category: 'Frontend',
    title: 'CSS Variables for Themeable Vue Landing Pages',
    description:
      'A practical walkthrough of mapping a dark navy UI to a light theme with one token sheet, including borders, editor chrome, and hero gradients.',
    dateLabel: '18 FEB 2024',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Close-up of HTML and CSS on a monitor',
  },
  {
    id: 'fe-3',
    category: 'Frontend',
    title: 'Responsive Hero Layouts Without Horizontal Scroll',
    description:
      'Grid, minmax, and overflow rules that keep a two-column developer hero intact from 1180px down to a single-column phone layout.',
    dateLabel: '04 MAR 2024',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Frontend workshop with laptops and UI sketches',
  },
  {
    id: 'be-1',
    category: 'Backend',
    title: 'Designing a Clean API Layer for Learning Platforms',
    description:
      'Model courses, roadmaps, and blog posts with typed endpoints so the Vue client stays thin and the backend remains the source of truth.',
    dateLabel: '12 JAN 2024',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Server racks in a data center',
  },
  {
    id: 'be-2',
    category: 'Backend',
    title: 'Auth Sessions, Rate Limits, and Safe File Uploads',
    description:
      'Patterns for protecting student accounts and content uploads without dragging a full framework into a Vite frontend.',
    dateLabel: '27 FEB 2024',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Circuit board representing backend systems',
  },
  {
    id: 'be-3',
    category: 'Backend',
    title: 'From Mock Data to Production Services',
    description:
      'How to replace static TypeScript arrays with real services while keeping the same Vue views and category filters.',
    dateLabel: '09 APR 2024',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Engineer reviewing backend logs on dual monitors',
  },
  {
    id: 'db-1',
    category: 'Database',
    title: 'Modeling Courses, Tags, and Blog Categories',
    description:
      'Relational shapes for a developer school: posts, categories, authors, and read-time metadata that map cleanly to Vue lists.',
    dateLabel: '08 JAN 2024',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Database books and notes on a desk',
  },
  {
    id: 'db-2',
    category: 'Database',
    title: 'Indexes That Make Category Filters Instant',
    description:
      'Why category and published-at indexes matter once the blog grows past a handful of seed posts.',
    dateLabel: '22 MAR 2024',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Analytics dashboard with data visualizations',
  },
  {
    id: 'db-3',
    category: 'Database',
    title: 'SQL vs Document Stores for Roadmap Content',
    description:
      'A clear comparison of storing nested learning paths as rows versus documents, and how that choice leaks into the UI.',
    dateLabel: '16 MAY 2024',
    readTime: '9 min read',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Planning documents and data tables',
  },
  {
    id: 'ks-1',
    category: 'Knowledge Sharing',
    title: 'Writing Dev Logs Students Will Actually Finish',
    description:
      'Tone, length, and structure for knowledge-sharing posts that sit next to a code editor mock and still feel human.',
    dateLabel: '15 JAN 2024',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Team collaborating around laptops',
  },
  {
    id: 'ks-2',
    category: 'Knowledge Sharing',
    title: 'Pairing, Mentorship, and Public Learning Notes',
    description:
      'How to turn classroom walkthroughs into reusable articles without stripping the original teaching voice.',
    dateLabel: '03 MAR 2024',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Workshop session with a presenter and students',
  },
  {
    id: 'ks-3',
    category: 'Knowledge Sharing',
    title: 'A Weekly Cadence for Shipping Technical Stories',
    description:
      'A lightweight editorial loop: outline, screenshot, review, publish — built for a small teaching team.',
    dateLabel: '21 APR 2024',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'People discussing ideas at a meetup',
  },
  {
    id: 're-1',
    category: 'Resources',
    title: 'Starter Kits, Cheatsheets, and Vue Tooling',
    description:
      'A curated set of Vite, TypeScript, and CSS resources that match this project’s stack without extra UI libraries.',
    dateLabel: '05 JAN 2024',
    readTime: '3 min read',
    image:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Open books and study resources',
  },
  {
    id: 're-2',
    category: 'Resources',
    title: 'Checklists for Shipping a Themed Vue Site',
    description:
      'Accessibility, localStorage theme restore, and mobile overflow checks you can run before every release.',
    dateLabel: '14 FEB 2024',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Laptop with learning resources on screen',
  },
  {
    id: 're-3',
    category: 'Resources',
    title: 'Reference Links for CSS, TypeScript, and Vue 3',
    description:
      'Official docs and short references that stay useful after the landing page grows into courses and blogs.',
    dateLabel: '30 MAR 2024',
    readTime: '3 min read',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Notebook and laptop used for writing resources',
  },
]

export function postsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}
