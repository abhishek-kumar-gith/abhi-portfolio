# Quick Start Guide ⚡

## 30 Seconds to Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment
```bash
cp .env.example .env.local
# Edit .env.local with your EmailJS credentials
```

### 3. Start Server
```bash
npm run dev
```

**👉 Open: http://localhost:5173**

---

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code quality |
| `npm run lint:fix` | Auto-fix linting issues |

---

## Quick Customization

### Change Your Name
**File:** `src/components/Hero.jsx` (Line 90)
```jsx
<span className="bg-gradient-to-r...">Abhishek Kumar</span>
```

### Add New Project
**File:** `src/components/Projects.jsx` (Line 50)
```jsx
{
  title: 'Your Project',
  description: 'Description',
  tags: ['React', 'Node.js'],
  github: 'https://github.com/...',
  demo: 'https://...',
  featured: true,
}
```

### Update Skills
**File:** `src/components/Skills.jsx` (Line 95)
```jsx
{ icon: '⚛️', name: 'React', level: 'Advanced' }
```

### Set Social Links
**File:** `.env.local`
```env
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourusername
```

---

## EmailJS Setup (5 minutes)

1. **Sign up:** https://www.emailjs.com
2. **Create Service:** Connect Gmail/Outlook
3. **Create Template:** With variables `{{name}}`, `{{email}}`, `{{message}}`
4. **Copy credentials to `.env.local`:**
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY=key_xxxxx
   ```

---

## Deploy in 2 Minutes

### Vercel (Best)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## File Structure Quick Reference

```
📁 portfolio/
├── 📄 package.json          ← Dependencies
├── 📄 vite.config.js        ← Build config
├── 📄 tailwind.config.js    ← Theme config
├── 📄 index.html            ← SEO meta tags here
├── 📁 src/
│   ├── 📄 App.jsx           ← Main component
│   ├── 📄 index.jsx         ← Entry point
│   ├── 📁 components/       ← All sections here
│   │   ├── Hero.jsx         ← Home section
│   │   ├── About.jsx        ← About section
│   │   ├── Skills.jsx       ← Skills section
│   │   ├── Projects.jsx     ← Projects section
│   │   ├── Contact.jsx      ← Contact form
│   │   └── Footer.jsx       ← Footer
│   ├── 📁 context/          ← Dark mode context
│   └── 📁 utils/            ← Helper functions
├── 📁 public/               ← Static assets & resume.pdf
└── README.md                ← Full documentation
```

---

## Browser Testing

```bash
# Development
npm run dev          # http://localhost:5173

# Production
npm run build        # Creates dist/
npm run preview      # Preview dist/
```

---

## Common Customizations

### Add Dark Mode Trigger
Already included! Use the toggle button in navbar.

### Change Primary Color (Blue to Purple)
**File:** `tailwind.config.js` (Line 12)
```js
from: 'purple-500'  // Change from blue-500
to: 'purple-600'    // Change from cyan-500
```

### Disable Animations
**File:** `vite.config.js`
Remove Framer Motion library and replace with CSS animations.

### Add Multiple Languages
Integrate `i18n-js` or `react-i18next` library.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 5173 in use | `npm run dev -- --port 3000` |
| npm install fails | `npm cache clean --force` then retry |
| EmailJS not working | Check credentials in .env.local |
| Styles missing | Clear cache: `Ctrl+Shift+R` |

---

## Next Steps

1. ✅ Run `npm install`
2. ✅ Update `.env.local`
3. ✅ Customize content (Name, links, projects)
4. ✅ Test with `npm run dev`
5. ✅ Build with `npm run build`
6. ✅ Deploy to Vercel/Netlify

---

## Resources

- **Tailwind Docs:** https://tailwindcss.com/docs
- **React Guide:** https://react.dev
- **Vite Docs:** https://vitejs.dev
- **Framer Motion:** https://www.framer.com/motion
- **EmailJS:** https://www.emailjs.com

---

**Happy coding! 🚀 Questions? Check README.md or SETUP_GUIDE.md**
