# HWX Website - Setup & Deployment Guide

## 📦 Complete Project Files

Your complete HWX website project is ready to push to GitHub. Here's what's included:

### File Structure
```
hwx-website/
├── public/
│   └── index.html              # HTML entry point
├── src/
│   ├── App.js                  # Complete React app (all pages, 1000+ lines)
│   ├── index.js                # React root
│   └── index.css               # Tailwind CSS + custom styles
├── package.json                # Dependencies & scripts
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS setup
├── .gitignore                  # Git ignore rules
├── README.md                   # Full documentation
└── SETUP.md                    # This file
```

## 🚀 Quick Start (5 Minutes)

### Step 1: Setup
```bash
# Navigate to project
cd hwx-website

# Install dependencies
npm install

# Start development server
npm start
```
Site opens at http://localhost:3000

### Step 2: Customize
Edit `src/App.js` to:
- Change company name/details
- Update contact information
- Modify colors (search for emerald-700)
- Add real images (replace ImagePlaceholder components)

### Step 3: Build
```bash
npm run build
```
Creates optimized `build/` folder for deployment

## 📤 Push to GitHub

### Step 1: Initialize Git
```bash
cd hwx-website
git init
git add .
git commit -m "Initial HWX website commit"
```

### Step 2: Create GitHub Repository
1. Go to github.com/new
2. Create repo: `hwx-website`
3. Don't initialize with README (we have one)

### Step 3: Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/hwx-website.git
git branch -M main
git push -u origin main
```

### View on GitHub
https://github.com/YOUR_USERNAME/hwx-website

## 🌐 Deploy to Live Server

### Option 1: Vercel (EASIEST - Recommended)

1. **Connect GitHub**
   - Go to vercel.com
   - Click "New Project"
   - Import your GitHub repo

2. **Configure**
   - Framework: React
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: build

3. **Deploy**
   - Click "Deploy"
   - Your site is live!

**Your URL**: `hwx-website.vercel.app` (or custom domain)

### Option 2: Netlify

1. **Connect GitHub**
   - Go to netlify.com
   - Click "New site from Git"
   - Select GitHub repo

2. **Configure**
   - Build Command: `npm run build`
   - Publish Directory: `build`

3. **Deploy**
   - Netlify auto-deploys on git push

### Option 3: GitHub Pages (Free)

1. **Update package.json**
   - Change version to 2.0.0
   - Add: `"homepage": "https://YOUR_USERNAME.github.io/hwx-website"`

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update package.json scripts**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
     ...
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable in GitHub**
   - Go to Settings > Pages
   - Source: gh-pages branch
   - Your URL: `YOUR_USERNAME.github.io/hwx-website`

## ✅ Pre-Launch Checklist

- [ ] Update all contact information (email, phone)
- [ ] Add real images (replace 📷 placeholders)
- [ ] Test contact form backend integration
- [ ] Update company mission/about section
- [ ] Add team photos
- [ ] Customize colors if needed
- [ ] Test on mobile/tablet
- [ ] Set up custom domain (optional)
- [ ] Add Google Analytics (optional)
- [ ] Set up email notifications for form submissions

## 🔗 Key Contact/CTA Points to Update

In `src/App.js`, update:

1. **Contact Information** (appears in multiple places)
   ```
   Email: 19.abhinavyadav@gmail.com
   Phone: +91-7898289395
   Location: Uttarakhand, India
   ```

2. **Form Submission** (handleFormSubmit function)
   - Add backend API call for form data
   - Set up email notifications
   - Add database storage

3. **Founder Information** (About page)
   - Add real headshot images
   - Update credentials if needed

## 📊 Analytics & Tracking

### Add Google Analytics
Add to `public/index.html` in `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Track Form Submissions
Update form submission handler to send events to analytics

## 🆘 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000
# On Mac/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Showing
- Check image paths in App.js
- Ensure images are in public/ folder
- Use relative paths like `/images/photo.jpg`

## 📞 Support

For issues or customization:
1. Check README.md for full documentation
2. Review comments in src/App.js
3. Check Tailwind docs: tailwindcss.com
4. React docs: react.dev

## 🎉 You're Ready!

Your complete, production-ready HWX website is ready to:
1. Push to GitHub
2. Deploy live
3. Start capturing corporate wellness retreat leads!

---

**Next Steps:**
1. ✅ Add real images (replace 📷 placeholders)
2. ✅ Connect form to backend
3. ✅ Deploy to Vercel/Netlify
4. ✅ Set up custom domain
5. ✅ Add analytics

Good luck! 🚀
