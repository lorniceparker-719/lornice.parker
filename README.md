# Lornice Parker - Doctoral Student CV Website

A professional, responsive CV website tailored for doctoral students at the University of Central Florida.

## 📋 Features

✅ **Professional Design** - Clean, academic-focused layout  
✅ **Fully Responsive** - Perfect on desktop, tablet, and mobile devices  
✅ **Easy to Customize** - Clear placeholders with examples  
✅ **Fast Performance** - Lightweight, no external dependencies  
✅ **Accessible** - WCAG 2.1 compliant  
✅ **SEO Friendly** - Proper semantic HTML structure  
✅ **Print Ready** - Optimized for PDF export  
✅ **Mobile Menu** - Hamburger navigation on small screens  
✅ **Smooth Animations** - Elegant scroll effects  

## 📁 File Structure

```
lornice.parker/
├── index.html              # Main HTML file
├── styles.css              # Styling and responsive design
├── script.js               # JavaScript interactions
├── README.md               # This file
├── CUSTOMIZATION_GUIDE.md  # Detailed customization instructions
└── assets/                 # Media files (create this folder)
    ├── profile.jpg         # Your profile photo (400x400px recommended)
    └── cv.pdf              # Your CV document
```

## 🚀 Quick Start

### 1. Create Assets Folder

Create a new folder named `assets` in your repository:

```bash
mkdir assets
```

### 2. Add Your Media Files

- Save your profile photo as `assets/profile.jpg` (recommended: 400x400px)
- Save your CV as `assets/cv.pdf`

### 3. Customize Content

Edit `index.html` to replace:
- Your name (already set as "Lornice Parker")
- Field of study
- Education details
- Research information
- Professional experience
- Skills
- Publications
- Contact information

See **CUSTOMIZATION_GUIDE.md** for detailed instructions with examples.

### 4. Customize Colors (Optional)

Edit the CSS variables in `styles.css` (lines 7-18) to change:
- Primary color (blue)
- Secondary color (light blue)
- Accent color (orange)
- And more!

### 5. Deploy Your Website

#### Option A: GitHub Pages (Recommended - Free!)

1. Go to your repository Settings
2. Scroll to "Pages" section
3. Under "Build and deployment"
4. Select branch: `main`
5. Save

Your site will be live at: `https://lorniceparker-719.github.io/lornice.parker`

#### Option B: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Deploy!

Your site will get a unique URL like: `https://your-site-name.netlify.app`

#### Option C: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Import your repository
4. Deploy!

#### Option D: Local Preview

Simple Python server:
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

Using Node.js:
```bash
npm install -g http-server
http-server
```

## 🎨 Color Schemes

Preset color combinations you can use:

### Professional Blue (Default)
```css
--primary-color: #1e3a8a;
--secondary-color: #0ea5e9;
--accent-color: #f97316;
```

### Modern Purple
```css
--primary-color: #6366f1;
--secondary-color: #8b5cf6;
--accent-color: #ec4899;
```

### Academic Green
```css
--primary-color: #065f46;
--secondary-color: #059669;
--accent-color: #f59e0b;
```

### Dark Slate
```css
--primary-color: #0f172a;
--secondary-color: #64748b;
--accent-color: #0ea5e9;
```

See **CUSTOMIZATION_GUIDE.md** for more color options and how to change them.

## 📱 Responsive Breakpoints

- **Desktop**: 1000px and above
- **Tablet**: 769px - 999px
- **Mobile**: Below 768px

## 🔧 Customization Examples

### Add a New Section

1. Add HTML:
```html
<section id="awards" class="section alternate-bg">
    <div class="container">
        <h2>Awards & Honors</h2>
        <!-- Your content -->
    </div>
</section>
```

2. Add navigation link:
```html
<li><a href="#awards" class="nav-link">Awards</a></li>
```

### Change Header Colors

Edit `styles.css`:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
}
```

### Modify Hero Section

Edit the background in `styles.css` (line ~245):
```css
.hero {
    background: linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 100%);
}
```

See **CUSTOMIZATION_GUIDE.md** for detailed examples.

## 🌐 SEO Optimization

Update metadata in `index.html` head:
```html
<meta name="description" content="Your description here">
<meta name="keywords" content="your, keywords, here">
<title>Your Name - Doctoral Student | UCF</title>
```

## ♿ Accessibility

This site includes:
- Semantic HTML5 structure
- ARIA labels where needed
- Sufficient color contrast
- Keyboard navigation support
- Screen reader friendly

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🐛 Troubleshooting

### Images not showing?
- Check that `assets/` folder exists
- Verify filenames match exactly: `profile.jpg` and `cv.pdf`
- Ensure files are in the `assets/` folder

### Styling looks broken?
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check that `styles.css` is in the root directory
- Verify no CSS file name typos

### Navigation not working?
- Check that section IDs in HTML match navigation links
- Ensure `script.js` is loading (check browser console)

### GitHub Pages not updating?
- Wait 1-2 minutes for deployment
- Check "Actions" tab for build status
- Ensure main branch is selected in Pages settings

## 📝 Best Practices

1. **Update regularly** - Keep your CV and information current
2. **Use professional photos** - Headshots work best
3. **Keep it concise** - Visitors scan, not read deeply
4. **Mobile first** - Test on phone before publishing
5. **Backup your content** - Keep a local copy

## 🎓 Academic Focus

This template is specifically designed for:
- Doctoral students
- University research positions
- Academic careers
- Research-focused roles
- Graduate programs

## 📄 License

Free to use and modify for personal use. Attribution appreciated but not required.

## 🤝 Support

For detailed customization help, see **CUSTOMIZATION_GUIDE.md**

---

**Happy presenting your academic profile! 🎓**

For questions or issues, consult CUSTOMIZATION_GUIDE.md or check your GitHub repository.