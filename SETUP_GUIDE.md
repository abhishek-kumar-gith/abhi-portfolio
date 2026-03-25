# Portfolio Setup Instructions

## 🎯 Quick Start Guide

### Step 1: Prerequisites
Make sure you have:
- **Node.js 16+** → [Download](https://nodejs.org/)
- **Git** → [Download](https://git-scm.com/)
- **Code Editor** → VS Code recommended → [Download](https://code.visualstudio.com/)

### Step 2: Installation
```bash
# Navigate to project directory
cd portfolio

# Install dependencies
npm install
```

### Step 3: Setup Environment Variables
```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local with your actual values
```

### Step 4: Start Development Server
```bash
npm run dev
```

The site will be available at: **http://localhost:5173**

---

## 🛠️ Customization Guide

### 1️⃣ Personal Information

#### Update Your Name & Basic Info
File: `src/components/Navbar.jsx` (Line 14)
```jsx
const logo = "AK"  // Change to your initials
```

#### Hero Section
File: `src/components/Hero.jsx` (Lines 80-100)
```jsx
<span>Abhishek Kumar</span>  // Your name
"Full Stack Developer • UI/UX Enthusiast • Problem Solver"  // Your tagline
```

#### About Section
File: `src/components/About.jsx` (Lines 50-70)
Update:
- Your biography
- Your journey/experience
- Profile image placeholder

#### Social Links
File: `.env.local`
```env
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourusername
VITE_TWITTER_URL=https://twitter.com/yourusername
```

### 2️⃣ Add Your Projects

File: `src/components/Projects.jsx` (Lines 50-100)

Example project object:
```jsx
{
  title: 'Your Project Name',
  description: 'What your project does...',
  tags: ['React', 'Node.js', 'MongoDB'],
  github: 'https://github.com/yourusername/project',
  demo: 'https://your-demo-url.com',
  featured: true  // Show on grid
}
```

### 3️⃣ Update Skills

File: `src/components/Skills.jsx` (Lines 95-140)

Add new skill:
```jsx
{
  icon: '⚛️',        // Use emoji or icon
  name: 'React.js',  // Skill name
  level: 'Advanced'  // Proficiency level
}
```

### 4️⃣ Add Your Resume

1. Save your resume as `resume.pdf`
2. Place in the `public/` folder
3. The download button will automatically work

### 5️⃣ Setup Contact Form (EmailJS)

#### Option A: Free EmailJS Setup (Recommended)

**Step 1:** Sign up at [EmailJS.com](https://www.emailjs.com)

**Step 2:** Create Email Service
- Go to Dashboard → Email Services
- Click "Connect new service"
- Choose Gmail or Outlook
- Follow the setup steps

**Step 3:** Create Email Template
- Go to Dashboard → Email Templates
- Click "Create New Template"
- Use these variables:
  ```
  From: {{email}}
  Name: {{name}}
  Message: {{message}}
  ```
- Note your Template ID

**Step 4:** Get Your Public Key
- Go to Dashboard → Account
- Copy your Public Key

**Step 5:** Update .env.local
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

#### Option B: Backend Setup (Advanced)

If you want to use your own backend:
1. Create a Node.js/Express server
2. Setup email service (Nodemailer, SendGrid, etc.)
3. Update `Contact.jsx` to call your API instead

```jsx
// Update handleSubmit function in Contact.jsx
const response = await fetch('your-backend-url/api/contact', {
  method: 'POST',
  body: JSON.stringify({ name, email, message });
});
```

---

## 🎨 Theme Customization

### Colors

File: `tailwind.config.js` (Lines 10-30)

```js
colors: {
  primary: {
    500: '#0ea5e9',  // Main blue
    600: '#0284c7',
    // ... more shades
  },
  dark: {
    bg: '#0f172a',       // Dark background
    card: '#1e293b',     // Dark card background
    border: '#334155',   // Dark borders
  }
}
```

### Fonts

File: `tailwind.config.js` (Line 35)
```js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],  // Change font here
}
```

### Dark Mode

The dark mode is automatically detected from:
1. User's system preference
2. LocalStorage (if previously set)
3. Manual toggle via button

---

## 🚀 Build & Deploy

### Local Build
```bash
npm run build
```

### Preview Built Site
```bash
npm run preview
```

### Deploy to Vercel (Free)
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify (Free)
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## 🔧 Common Issues

### Issue: npm install fails
**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Port 5173 already in use
**Solution:**
```bash
npm run dev -- --port 3000  # Use different port
```

### Issue: EmailJS not working
**Checklist:**
- [ ] .env.local has correct credentials
- [ ] EmailJS account is active
- [ ] Email service is connected
- [ ] Template is created with correct variables
- [ ] Public key is correct

### Issue: Images not loading
**Solution:**
- Place images in `public/` folder
- Reference as `/image-name.jpg` in code

---

## 📋 Content Checklist

Before deploying, make sure you've updated:

- [ ] Hero section with your name and tagline
- [ ] About section with your bio
- [ ] Skills list (add your actual skills)
- [ ] Projects (add min 3-4 real projects)
- [ ] Contact email and phone
- [ ] Social media links (GitHub, LinkedIn)
- [ ] Resume.pdf in public folder
- [ ] EmailJS setup with credentials
- [ ] Favicon and site title
- [ ] SEO meta tags in index.html

---

## 💡 Pro Tips

1. **Add custom favicon:**
   - Create favicon.png
   - Place in public/ folder
   - It will auto-generate

2. **Optimize images:**
   - Use WebP format
   - Compress with TinyPNG
   - Use progressive JPEG

3. **Add analytics:**
   - Google Analytics (free)
   - Plausible Analytics (privacy-friendly)

4. **Test responsiveness:**
   - Use Chrome DevTools
   - Test on actual devices
   - Use mobile-first approach

5. **SEO optimization:**
   - Update meta tags in index.html
   - Add schema.org structured data
   - Use semantic HTML

---

## 📚 Useful Resources

- **Tailwind CSS Docs:** https://tailwindcss.com
- **React Documentation:** https://react.dev
- **Framer Motion:** https://www.framer.com/motion
- **EmailJS Docs:** https://www.emailjs.com
- **Vite Guide:** https://vitejs.dev
- **Vercel Deploy:** https://vercel.com
- **Netlify Deploy:** https://netlify.com

---

## 🎓 Learning Resources

Expand your skills:
- **React Patterns:** https://react-patterns.com
- **Design Systems:** https://www.designsystems.com
- **Web Performance:** https://web.dev/performance
- **Accessibility:** https://www.a11y-101.com

---

## 🤔 FAQ

**Q: Can I use this template commercially?**
A: Yes! It's MIT licensed. All yours to use.

**Q: How do I add a blog section?**
A: Create a new component `Blog.jsx` in `src/components/` following the existing pattern.

**Q: Can I use a different animation library?**
A: Yes! Replace Framer Motion with your preferred library (Animate.css, AOS, etc.)

**Q: How often should I update the portfolio?**
A: Update projects and skills every 2-3 months. Update bio/links as needed.

---

**Happy coding! 🚀** 

Need help? Check the main README.md or reach out! 💬
