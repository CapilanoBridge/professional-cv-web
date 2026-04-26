## Professional CV Website

This repository contains a professional CV website built with Next.js 15, Shadcn UI components, and a dark/light mode toggle. The website is designed to showcase a complete profile, skills, experience, education, projects, and contact information in a polished and responsive layout.

## Features

- Next.js 15 app router project structure
- Shadcn UI component-based design
- Dark/light mode theme toggle via `next-themes`
- Responsive CV page layout with:
  - Profile headshot and bio
  - Skills and technical competencies
  - Work experience and academic research experience
  - Education and certifications
  - Portfolio project highlights
  - Contact information and social links
- Tailwind CSS styling with custom theme variables

## AI Generation Approach

The website structure and content were created using a v0.dev-inspired AI generation process. The generated layout focuses on key CV sections and modern UI patterns for professional presentation.

Screenshots of the AI generation and theme modes are included in `public/screenshots`:

- `public/screenshots/ai-generation.svg`
- `public/screenshots/light-mode.svg`
- `public/screenshots/dark-mode.svg`

## Project Structure

- `src/app/page.tsx` — main CV page content
- `src/app/layout.tsx` — root layout and theme provider
- `src/components/theme-toggle.tsx` — theme selection component
- `src/components/theme-provider.tsx` — `next-themes` provider
- `src/components/ui/*` — Shadcn UI component wrappers
- `src/app/globals.css` — Tailwind and theme styles
- `public/avatar.svg` — profile avatar image

## Running Locally

1. Install dependencies:
	```powershell
	npm install
	```

2. Run the development server:
	```powershell
	npm run dev
	```

3. Open `http://localhost:3000` in your browser.

## Deployment

This app is ready for Vercel deployment. After pushing to GitHub, connect the repository in Vercel and deploy the production site.

## Notes

- The page content is written to reflect professional and academic experience in modern web and AI development.
- The theme toggle works using class-based dark mode and preserves system preferences.
- The layout is responsive for mobile and desktop screens.
