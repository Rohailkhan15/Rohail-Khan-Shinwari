# Rohail Khan Shinwari — Personal Website

A personal portfolio website built with Astro and Sanity CMS, featuring a blog and projects showcase.

## 🚀 Features

- **Blog System**: Powered by Sanity CMS with category-based filtering (Essay, Build Log, Research, Micro-thought)
- **Projects Showcase**: Display of personal projects with detailed information
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modern UI**: Clean, minimalist aesthetic with smooth interactions
- **Type Safety**: Full TypeScript support

## 📁 Project Structure

```text
/
├── public/          # Static assets (images, favicon, robots.txt)
├── sanity/          # Sanity CMS configuration and schemas
│   └── schemas/     # Content models (blogPost, etc.)
├── src/
│   ├── components/  # Reusable Astro components
│   ├── layouts/     # Page layouts
│   ├── lib/         # Utility functions and Sanity client
│   ├── pages/       # Route pages (blog, projects, etc.)
│   └── data/        # Static data (projects)
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npx sanity dev`          | Start Sanity Studio for content management       |

## 🛠️ Tech Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **Language**: TypeScript

## � Content Management

Blog posts and other content are managed through Sanity Studio. Run `npx sanity dev` to start the studio and manage your content.
