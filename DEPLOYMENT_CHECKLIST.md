# Portfolio Deployment Checklist

## Pre-Deployment

### Code Quality
- [ ] Run `npm run lint` - no errors
- [ ] Test all links and forms
- [ ] Check responsive design on mobile
- [ ] Test dark mode toggle
- [ ] Verify all images load
- [ ] Check favicon displays

### Content
- [ ] Name and title updated
- [ ] About section completed
- [ ] All projects added with descriptions
- [ ] Skills list is accurate
- [ ] Contact information correct
- [ ] Social links working
- [ ] Resume.pdf uploaded

### Configuration
- [ ] .env.local has all credentials
- [ ] EmailJS is properly configured
- [ ] Google meta tags are set
- [ ] Favicon is in place
- [ ] SEO meta tags in index.html

### Performance
- [ ] Run `npm run build` successively
- [ ] Check bundle size (target: <200KB)
- [ ] Test Core Web Vitals
- [ ] Images optimized
- [ ] No console errors

---

## Deployment

### Choose Your Platform

#### Option 1: Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```
**Pros:**
- Free tier includes unlimited deployments
- Automatic HTTPS
- CDN included
- Git integration
- Zero-config deployment

#### Option 2: Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```
**Pros:**
- Free tier with good limits
- Easy form handling
- Great analytics
- Instant cache invalidation

#### Option 3: GitHub Pages
1. Push to GitHub
2. Go to Repo Settings → Pages
3. Select `gh-pages` branch
4. Site will be live

#### Option 4: Traditional Hosting
```bash
# Build for production
npm run build

# Upload dist/ folder to your hosting
# (FTP, cPanel, etc.)
```

---

## Post-Deployment

### Verification
- [ ] Site loads without errors
- [ ] All pages accessible
- [ ] Links working (internal & external)
- [ ] Forms submitting
- [ ] Dark mode working
- [ ] Images loading
- [ ] Mobile responsive

### SEO
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Create sitemap
- [ ] Add robots.txt
- [ ] Monitor search console

### Analytics
- [ ] Google Analytics installed
- [ ] Track page views
- [ ] Monitor user behavior
- [ ] Check bounce rate
- [ ] Analyze traffic sources

### Monitoring
- [ ] Setup uptime monitoring
- [ ] Monitor error logs
- [ ] Check performance metrics
- [ ] Monitor form submissions
- [ ] Email delivery working

---

## Custom Domain Setup

### If using Vercel
1. Buy domain (Namecheap, GoDaddy, etc.)
2. In Vercel → Project Settings → Domains
3. Add your domain
4. Update DNS settings
5. Wait for verification (24-48 hours)

### If using Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records
4. SSL certificate auto-generates

---

## Performance Optimization

### Before Going Live
- [ ] Minify CSS/JS (Vite handles this)
- [ ] Optimize images
- [ ] Remove unused dependencies
- [ ] Code splitting implemented
- [ ] Lazy load components

### Monitoring Performance
- [ ] Google PageSpeed Insights
- [ ] Lighthouse Score
- [ ] GTmetrix
- [ ] WebPageTest
- [ ] Core Web Vitals

**Target Metrics:**
- Lighthouse Score: 90+
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

---

## Maintenance

### Regular Tasks
- [ ] Update content quarterly
- [ ] Add new projects
- [ ] Update skills
- [ ] Monitor analytics
- [ ] Check for broken links
- [ ] Update dependencies regularly

### Monthly
- [ ] Review analytics
- [ ] Check for errors in console
- [ ] Test contact form
- [ ] Update projects/achievements

### Quarterly
- [ ] Update React and packages
- [ ] Review and optimize performance
- [ ] Check SEO rankings
- [ ] Analyze user behavior

---

## Troubleshooting

### Site not loading
- [ ] Check DNS settings
- [ ] Clear browser cache
- [ ] Check deployment logs
- [ ] Verify build was successful

### Forms not working
- [ ] Check EmailJS credentials
- [ ] Verify API keys
- [ ] Check browser console for errors
- [ ] Test in incognito mode

### Images not loading
- [ ] Check image paths
- [ ] Verify files in public/ folder
- [ ] Check file permissions
- [ ] Test with different formats

### Performance issues
- [ ] Check network tab in DevTools
- [ ] Optimize large images
- [ ] Remove unused dependencies
- [ ] Enable compression

---

## Useful Post-Deployment Tools

- **Google Analytics**: https://analytics.google.com
- **Google Search Console**: https://search.google.com/search-console
- **Lighthouse**: https://developers.google.com/web/tools/lighthouse
- **GTmetrix**: https://gtmetrix.com
- **WebPageTest**: https://www.webpagetest.org
- **Uptime Robot**: https://uptimerobot.com (Free monitoring)

---

## Domain & Email (Optional)

### Setup Professional Email
- **Option 1:** Gmail with custom domain
  - Use Google Workspace ($6/month)
  - Professional email: name@yourdomain.com

- **Option 2:** Catch-all email
  - Forward all emails to your Gmail
  - Cheaper option

### DNS Records to Add
```
MX Record: mail.yourdomain.com
TXT Record: v=spf1 include:google.com ~all
```

---

## Final Checklist Before Launch

- [ ] All personal information updated
- [ ] Project descriptions finalized
- [ ] Resume uploaded
- [ ] Contact form tested
- [ ] EmailJS configured
- [ ] Social links verified
- [ ] Mobile responsive confirmed
- [ ] Dark mode tested
- [ ] All animations smooth
- [ ] SEO tags set
- [ ] Build succeeds without warnings
- [ ] Performance acceptable
- [ ] Domain purchased/configured
- [ ] Analytics installed
- [ ] Monitoring setup
- [ ] Backup of source code
- [ ] Git repository created

---

**You're all set! 🚀 Time to share your portfolio with the world!**
