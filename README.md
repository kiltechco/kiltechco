# Kiltech - Company Website

A modern, beautiful static SPA built with Astro, showcasing your company intro and app portfolio.

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:4321` to see your site!

### Build for Production
```bash
npm run build
```
This creates a `dist/` folder with static files ready to deploy.

### Preview Production Build
```bash
npm run preview
```

## 📦 Deploy

This site can be deployed to:
- **Vercel**: `vercel deploy`
- **Netlify**: `netlify deploy`
- **Cloudflare Pages**: Connect your repo
- **GitHub Pages**: Deploy the `dist/` folder
- Any static host!

## 🎨 Features

✅ Modern, gradient-based design  
✅ Fully responsive (mobile-first)  
✅ CSS animations (zero JS for effects)  
✅ App showcase with portfolio cards  
✅ Ready for advanced animations (Framer Motion, GSAP, etc.)  
✅ Optimized for performance  
✅ SEO-friendly  

## 🎪 Adding More Animations

Want to add Framer Motion or other animation libraries?

```bash
npm install framer-motion
```

Then create React components with `client:load` directive:

```astro
---
import AnimatedComponent from '../components/AnimatedComponent';
---

<AnimatedComponent client:load />
```

## 📝 Customization

- **Apps**: Edit `src/components/AppShowcase.astro` - update the `apps` array
- **Hero Text**: Edit `src/components/Hero.astro`
- **Colors**: Edit `tailwind.config.mjs` - change the color palette
- **Footer**: Edit `src/components/Footer.astro`

## 📚 Tech Stack

- **Astro** - Static site framework
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **React** (optional) - For interactive components

Enjoy! 🎉

