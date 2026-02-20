# Himalayan Wellness Exchange (HWX) Website

A modern, responsive React-based website for Himalayan Wellness Exchange - Corporate Wellness Retreats Platform in Uttarakhand, India.

## 🎯 Overview

HWX connects India's leading companies with vetted yoga, meditation, Ayurveda, and nature retreat centers across Uttarakhand. This website showcases:

- Corporate wellness retreat programs
- End-to-end retreat planning services
- Destination guides (Rishikesh, Mussoorie, Nainital, Chopta)
- Quality assurance framework
- Team/founder information
- Lead capture contact form

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/hwx-website.git
   cd hwx-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The site will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
hwx-website/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── App.js              # Main React component (all pages)
│   ├── index.js            # React entry point
│   └── index.css           # Global styles (Tailwind CSS)
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🛠 Tech Stack

- **React** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Scripts** - Create React App tooling

## 📄 Pages

### 1. **Home** (Landing Page)
- Hero section with CTA
- What we deliver (4 key services)
- Corporate program types
- Why Uttarakhand section
- Final CTA banner

### 2. **For Corporates**
- Target audiences (HR, CXOs, People teams)
- Detailed program descriptions
- Key differentiators
- Call-to-action to contact

### 3. **Destinations**
- Rishikesh - Yoga Capital
- Mussoorie & Dehradun - Hill Station
- Nainital - Lake Serenity
- Chopta & Munsiyari - Off-Grid Wellness

Each destination includes:
- Description
- Ideal program types
- Key features
- Image placeholder

### 4. **Approach**
- Quality framework details
- Facility standards
- Program quality metrics
- Environmental compliance
- Community benefit
- HWX Quality Mark explanation

### 5. **About**
- Founder profiles
- Team backgrounds
- Company mission

### 6. **Contact**
- Contact form with fields:
  - Full Name
  - Company Name
  - Work Email
  - Phone Number
  - Team Size
  - Program Type
  - Preferred Month
  - Message
- Contact information
- Success message on submission

## 🎨 Design Features

- **Clean, Professional Layout** - B2B-focused, corporate aesthetic
- **Responsive Design** - Mobile-first, works on all devices
- **Emerald Green Color Scheme** - Brand-aligned emerald (#059669) with professional grays
- **Typography** - Merriweather (serif) for headings, Poppins (sans-serif) for body
- **Image Placeholders** - Clear dashed placeholders showing where images should be inserted
- **Smooth Interactions** - Hover effects, transitions, and CTAs

## 🖼 Image Placeholders

The site includes clear image placeholders (📷 icon with labels) in:
- Hero section (Himalayan Mountains)
- Why Uttarakhand section (Mountain landscape)
- Each destination page (4 destination images)
- Founder profiles (2 founder portraits)

To add real images:
1. Replace the `ImagePlaceholder` component usage with actual `<img>` tags
2. Add image paths to your assets
3. Update image alt text and captions as needed

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Tailwind CSS
Customize colors, fonts, and spacing in `tailwind.config.js`

### Contact Information
Update contact details in:
- Contact page
- Footer
- App.js (footer section)

Current contact:
- Email: 19.abhinavyadav@gmail.com
- Phone: +91-7898289395
- Location: Uttarakhand, India

## 📝 Form Submission

The contact form currently logs data to the browser console. To implement backend functionality:

1. Update `handleFormSubmit` in `src/App.js`
2. Add API endpoint call (e.g., to your backend or email service)
3. Example with fetch:
   ```javascript
   const response = await fetch('https://your-api.com/submit-form', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData)
   });
   ```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
1. Add to `package.json`: `"homepage": "https://yourusername.github.io/hwx-website"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy: `npm run deploy`

## 🎯 SEO Optimization

- Meta description in `public/index.html`
- Semantic HTML structure
- Proper heading hierarchy
- Alt text ready for images
- Mobile-friendly responsive design

Suggested keywords:
- Corporate wellness retreats India
- Leadership retreats Uttarakhand
- Team offsites Himalayan region
- Executive wellness programs
- Yoga retreats Rishikesh corporate

## 📞 Support & Customization

To customize the site:
1. Update company name/branding in `src/App.js`
2. Modify colors in `tailwind.config.js`
3. Update content in individual page components
4. Add real images by replacing `ImagePlaceholder` components
5. Connect form to backend service

## 📜 License

This project is private and proprietary to Himalayan Wellness Exchange.

## 👥 Contributors

- Abhinav Yadav (Founder & CEO)
- Aayush Paul (Co-Founder & CTO)

---

**Built with ❤️ for HWX - Himalayan Wellness Exchange**
