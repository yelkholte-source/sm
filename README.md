# Portfolio - Yasmine El Kholte

A modern, professional portfolio website built with Astro and deployed on Vercel. This portfolio showcases Yasmine El Kholte's skills, experience, education, and projects as a Software Engineer.

## 🌐 Live Demo

**[Portfolio Live](https://portfolio-yasmine-flax.vercel.app)**

## 📋 Features

- ✅ **Modern Design** - Clean, professional interface with glassmorphism effects
- ✅ **Dark/Light Theme** - Automatic theme switching with localStorage persistence
- ✅ **Responsive Layout** - Fully responsive design for mobile, tablet, and desktop
- ✅ **Dynamic Sections** - Sections only render if content exists (Easy to customize)
- ✅ **Smooth Animations** - Scroll reveal animations and hover effects
- ✅ **Resume Export** - Download resume as PDF or Word document
- ✅ **Contact Form** - Integrated contact form with formsubmit.co backend
- ✅ **SEO Optimized** - Proper meta tags and semantic HTML
- ✅ **Analytics** - Vercel Web Analytics integration
- ✅ **Performance** - Static site generation with zero JavaScript overhead

## 🛠️ Tech Stack

- **Framework**: [Astro 6.0](https://astro.build) - Static Site Generation
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: CSS with Custom Properties and Glassmorphism effects
- **Deployment**: [Vercel](https://vercel.com) with @astrojs/vercel adapter
- **Export**: [jsPDF](https://github.com/parallax/jsPDF) + [docx](https://github.com/dolanmiu/docx) for PDF/Word generation
- **Forms**: [formsubmit.co](https://formsubmit.co) for contact form backend
- **Analytics**: [Vercel Web Analytics](https://vercel.com/analytics)

## 📁 Project Structure

```
src/
├── components/          # Astro components
│   ├── Header.astro           # Navigation with theme toggle
│   ├── Hero.astro             # Hero section with profile
│   ├── About.astro            # About section with intro cards
│   ├── Skills.astro           # Technical and soft skills
│   ├── Education.astro        # Education timeline
│   ├── Experience.astro       # Work experience
│   ├── Projects.astro         # Project showcase
│   ├── Contact.astro          # Contact form + info
│   ├── Footer.astro           # Footer with links
│   ├── BackToTop.astro        # Scroll-to-top button
│   └── ResumeExport.astro     # Modal for PDF/DOCX export
├── data/
│   └── portfolio.ts           # Central data source (Edit this!)
├── layouts/
│   └── BaseLayout.astro       # Main layout wrapper
├── pages/
│   └── index.astro            # Home page
└── styles/
    └── global.css             # Global styles + theme system
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ ([Download](https://nodejs.org))
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/yelkholte-source/sm.git
cd sm

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## 📝 Customizing Your Portfolio

### 1. **Update Portfolio Content**
Edit `src/data/portfolio.ts` to update:
- Personal information (name, title, location)
- About section
- Skills (technical and soft)
- Education
- Experience
- Projects
- Contact information

```typescript
// Example: src/data/portfolio.ts
export const portfolioData = {
  personal: {
    firstName: "Yasmine",
    lastName: "El Kholte",
    title: "Software Engineer",
    location: "Maroc",
    // ... more fields
  },
  // ... other sections
};
```

### 2. **Modify Styling**
- Update colors: Edit CSS custom properties in `src/styles/global.css`
- Change fonts: Modify `--font-sans` and `--font-mono` in global CSS
- Adjust animations: Modify `@keyframes` definitions

### 3. **Add/Remove Sections**
- Sections render dynamically based on data availability
- To hide a section, remove its data from `src/data/portfolio.ts`
- To customize section rendering, edit `src/pages/index.astro`

## 🧞 Available Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel --prod

# TypeScript type checking
astro check
```

## 📊 Build & Deployment

### Local Build
```bash
npm run build
# Output: .vercel/output/
```

### Deploy to Vercel

The project is configured for automatic deployment via Vercel:

```bash
# Install Vercel CLI
npm install -g vercel

# Authenticate
vercel login

# Deploy to production
vercel --prod
```

### Environment Setup
- Production URL: https://portfolio-yasmine-flax.vercel.app
- GitHub Repository: https://github.com/yelkholte-source/sm
- Vercel Dashboard: https://vercel.com/yelkholte-sources-projects

## 🎨 Theme System

The portfolio includes a built-in dark/light theme:

- **Toggle**: Click the sun/moon icon in the header
- **Persistence**: Theme preference saved to localStorage
- **Default**: Dark theme
- **Colors**: Customizable via CSS custom properties

### Changing Theme Colors

Edit `src/styles/global.css`:

```css
:root {
  --color-bg: #0a0f1e;        /* Dark background */
  --color-text: #e5e7eb;      /* Light text */
  --color-primary: #3b82f6;   /* Primary accent */
  /* ... */
}

html[data-theme="light"] {
  --color-bg: #f8fafc;        /* Light background */
  --color-text: #0f172a;      /* Dark text */
  /* ... */
}
```

## 📧 Contact Form Setup

The contact form uses [formsubmit.co](https://formsubmit.co):

1. Form data is POSTed to: `https://formsubmit.co/yelkholte@example.com`
2. Includes spam protection with honeypot field
3. Shows success/error toast notifications
4. Emails sent automatically to configured address

To change email, update in `src/components/Contact.astro`:
```astro
// Find fetch URL and change email
const formSubmitEndpoint = "https://formsubmit.co/YOUR_EMAIL_HERE";
```

## 🎁 Resume Export

Users can download resume in two formats:

1. **PDF** - Using jsPDF, optimized for ATS systems
2. **Word (DOCX)** - Using docx library, formatted for editing

Exported documents include:
- Professional summary
- Skills (Technical & Soft)
- Education
- Experience
- Projects

## 🔍 SEO & Meta Tags

The portfolio includes optimized meta tags for:
- Title and description
- Open Graph (OG) tags for social sharing
- Theme color specification
- Responsive viewport settings

Edit meta tags in `src/layouts/BaseLayout.astro`

## 📈 Analytics

Vercel Web Analytics automatically tracks:
- Page views
- User interactions
- Web vitals (CLS, FCP, LCP)

View analytics at: https://vercel.com/dashboard

## 🤝 Contributing

To make changes:

1. Create a branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m "feat: your message"`
3. Push to GitHub: `git push origin feature/your-feature`
4. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support & Resources

- [Astro Documentation](https://docs.astro.build)
- [Vercel Documentation](https://vercel.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com) - For CSS reference

---

**Built with ❤️ using Astro and Vercel**

Portfolio deployed: **[https://portfolio-yasmine-flax.vercel.app](https://portfolio-yasmine-flax.vercel.app)**

Last updated: 2024
