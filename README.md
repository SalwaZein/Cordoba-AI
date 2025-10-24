# Cordoba AI Website

> From Al-Andalus to AI — Turning knowledge into outcomes.

A premium, elegant AI company website that merges Andalusian heritage with modern AI capabilities. Built with Next.js, Tailwind CSS, and Framer Motion.

## Project Vision

**Brand:** Cordoba AI
**Tagline:** From Al-Andalus to AI — Turning knowledge into outcomes.
**Core Idea:** Intelligent design rooted in heritage. We build products fast using AI.

## Design Concept - "The Living Intelligence"

A visual fusion between Andalusian geometry and modern AI networks. The website features:

- Elegant, futuristic, and serene aesthetics
- Animated logo with AI network visualizations
- Smooth transitions and calm motion design
- Premium minimal luxury feel

## Color Palette

- **Midnight Navy:** `#0A0F1F` (Background)
- **Verdigris Mint:** `#34D1BF` (Primary Accent)
- **Soft Brass:** `#C6A770` (Secondary Accent)
- **Alabaster Cream:** `#E9DCC9` (Text/Neutral)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Cordoba-AI
```

2. Install dependencies:
```bash
npm install
```

3. **Add your logo:** Place "Final Logo.png" in the `/public/assets/` directory
   - The logo should be a high-resolution PNG with transparent background
   - Recommended size: 512x512px or larger

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Website Structure

The website consists of 9 main sections:

1. **Hero Section** - Animated logo with CTAs
2. **About** - Heritage meets intelligence
3. **Core Service** - AI-Powered Product Acceleration
4. **How It Works** - 3-step process (Think, Build, Deliver)
5. **The Cordoba Mindset** - Philosophy section
6. **Showcase** - Gallery of AI-built products
7. **Quote** - Technology as art
8. **CTA** - Call to action
9. **Footer** - Links and social media

## Key Features

- ✨ Smooth scroll animations with Framer Motion
- 🎨 Custom Andalusian-inspired geometric patterns
- 🌟 Interactive particle effects
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Optimized performance (<2s load time)
- 🔍 SEO-ready with meta tags and Open Graph
- ♿ Accessible and semantic HTML

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Fonts:** Inter (Google Fonts)

## Customization

### Adding Your Logo

1. Replace the placeholder text in `components/HeroSection.tsx`:
```typescript
// Find this section (around line 65-70):
<div className="text-verdigris text-6xl md:text-8xl font-bold gradient-text">
  CORDOBA
  <div className="text-2xl md:text-3xl mt-2 text-brass">AI</div>
</div>

// Replace with:
<Image
  src="/assets/Final Logo.png"
  alt="Cordoba AI Logo"
  width={256}
  height={256}
  className="object-contain"
/>
```

### Updating Content

All section content can be edited in their respective component files:
- `/components/HeroSection.tsx`
- `/components/AboutSection.tsx`
- `/components/CoreServiceSection.tsx`
- etc.

### Modifying Colors

Edit the Tailwind config in `tailwind.config.ts`:
```typescript
colors: {
  midnight: "#0A0F1F",
  verdigris: "#34D1BF",
  brass: "#C6A770",
  alabaster: "#E9DCC9",
}
```

## Performance Optimization

- Images are optimized with Next.js Image component
- Animations use GPU-accelerated transforms
- Code splitting for optimal bundle size
- Lazy loading for below-the-fold content

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the static export:
```bash
npm run build
```

Deploy the `.next` folder to your hosting platform.

## Project Structure

```
Cordoba-AI/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page
├── components/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── CoreServiceSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── MindsetSection.tsx
│   ├── ShowcaseSection.tsx
│   ├── QuoteSection.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
├── public/
│   └── assets/           # Place your logo here
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## License

All rights reserved © 2024 Cordoba AI

## Support

For questions or issues, please contact the development team.

---

**Built with intelligence, crafted with heritage.**
