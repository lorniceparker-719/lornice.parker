# Customization Guide - Lornice Parker's CV Website

This guide will walk you through customizing every aspect of your CV website to perfectly reflect your academic profile.

## 📋 Table of Contents

1. [Content Updates](#content-updates)
2. [Visual Customization](#visual-customization)
3. [Adding Your Photo & CV](#adding-your-photo--cv)
4. [Color Customization](#color-customization)
5. [Advanced Customization](#advanced-customization)

---

## Content Updates

### Hero Section (First Things First!)

**File**: `index.html` - Lines 45-55

Replace these placeholder values:

```html
<!-- BEFORE -->
<h1>Lornice Parker</h1>
<p class="subtitle">Doctoral Student in [Your Field]</p>
<p class="institution">University of Central Florida</p>

<!-- AFTER -->
<h1>Lornice Parker</h1>
<p class="subtitle">Doctoral Student in Computer Science</p>
<p class="institution">University of Central Florida</p>
```

### Education Section

**File**: `index.html` - Lines 66-90

```html
<!-- Current Placeholder -->
<div class="education-item">
    <div class="education-header">
        <h3>Doctor of Philosophy (Ph.D.)</h3>
        <span class="degree-date">Expected [Graduation Year]</span>
    </div>
    <p class="institution-name">University of Central Florida</p>
    <p class="program-details">Department of [Your Department] • Advisor: [Advisor Name]</p>
    <p class="research-focus">Research Focus: [Your Research Topic]</p>
</div>

<!-- EXAMPLE - Fill In Your Info -->
<div class="education-item">
    <div class="education-header">
        <h3>Doctor of Philosophy (Ph.D.)</h3>
        <span class="degree-date">Expected May 2027</span>
    </div>
    <p class="institution-name">University of Central Florida</p>
    <p class="program-details">Department of Computer Science • Advisor: Dr. Jane Smith</p>
    <p class="research-focus">Research Focus: Machine Learning in Healthcare Applications</p>
</div>
```

### Research Section

**File**: `index.html` - Lines 97-120

The research section has two parts:

**Part 1: Research Cards** (The 3-column grid)
```html
<div class="research-card">
    <h3>Primary Research Topic</h3>
    <p>Brief description of your main research area and its significance in your field.</p>
</div>
```

**Part 2: Detailed Research** (Full description)
```html
<div class="research-detail">
    <h3>Dissertation Research</h3>
    <p>
        Provide a detailed description of your dissertation research. Include your research questions, 
        methodology, expected contributions to the field, and any preliminary findings.
    </p>
</div>
```

**Replace with your actual research:**
```html
<div class="research-card">
    <h3>Deep Learning in Medical Imaging</h3>
    <p>Developing convolutional neural networks to improve diagnostic accuracy in radiology, with focus on early detection of anomalies.</p>
</div>
```

### Experience Section

**File**: `index.html` - Lines 128-160

```html
<!-- Template -->
<div class="experience-item">
    <div class="experience-header">
        <h3>Your Position Title</h3>
        <span class="exp-date">Start Date - End Date</span>
    </div>
    <p class="institution-name">Organization Name</p>
    <ul class="responsibilities">
        <li>Key achievement or responsibility</li>
        <li>Another accomplishment</li>
        <li>Impact or skills developed</li>
    </ul>
</div>

<!-- Example -->
<div class="experience-item">
    <div class="experience-header">
        <h3>Graduate Research Assistant</h3>
        <span class="exp-date">August 2023 - Present</span>
    </div>
    <p class="institution-name">University of Central Florida - Department of Computer Science</p>
    <ul class="responsibilities">
        <li>Developed Python-based ML pipeline processing 100k+ medical images monthly</li>
        <li>Collaborated with medical team to validate model accuracy (92% improvement)</li>
        <li>Published 2 peer-reviewed papers in top-tier conferences</li>
    </ul>
</div>
```

### Skills Section

**File**: `index.html` - Lines 170-205

```html
<!-- Template -->
<div class="skill-category">
    <h3>Category Name</h3>
    <ul class="skill-list">
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
    </ul>
</div>

<!-- Example: Research Methods -->
<div class="skill-category">
    <h3>Research Methods</h3>
    <ul class="skill-list">
        <li>Experimental Design</li>
        <li>Statistical Analysis (SPSS, R)</li>
        <li>Qualitative Coding</li>
        <li>Meta-Analysis</li>
    </ul>
</div>

<!-- Example: Technical Skills -->
<div class="skill-category">
    <h3>Technical Skills</h3>
    <ul class="skill-list">
        <li>Python, TensorFlow, PyTorch</li>
        <li>Data Visualization (Matplotlib, Tableau)</li>
        <li>Machine Learning</li>
        <li>SQL & Database Management</li>
    </ul>
</div>
```

### Publications Section

**File**: `index.html` - Lines 213-240

**Format for journal articles:**
```html
<h3 class="pub-category">Peer-Reviewed Publications</h3>
<div class="publication-item">
    <p class="pub-citation">
        Parker, L., Smith, J., & Johnson, K. (2026). "Deep Learning Applications in Medical Imaging." 
        <em>IEEE Transactions on Medical Imaging</em>, 45(3), 234-248. 
        <a href="https://doi.org/10.1109/TMI.2026.1234567" target="_blank">DOI: 10.1109/TMI.2026.1234567</a>
    </p>
</div>
```

**Format for conference presentations:**
```html
<h3 class="pub-category">Conference Presentations</h3>
<div class="publication-item">
    <p class="pub-citation">
        Parker, L. (2026). "Improving CNN Robustness in Medical Imaging." 
        Paper presented at the International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI), 
        Barcelona, Spain. October 2026.
    </p>
</div>
```

### Contact Section

**File**: `index.html` - Lines 245-270

Replace your contact information:
```html
<div class="contact-info">
    <p><strong>Email:</strong> <a href="mailto:your.email@ucf.edu">your.email@ucf.edu</a></p>
    <p><strong>Phone:</strong> <a href="tel:+1234567890">(123) 456-7890</a></p>
    <p><strong>Location:</strong> Orlando, Florida, USA</p>
    <p><strong>Office:</strong> [Building], Room [Number], University of Central Florida</p>
</div>
```

Replace with actual information:
```html
<div class="contact-info">
    <p><strong>Email:</strong> <a href="mailto:lornice.parker@knights.ucf.edu">lornice.parker@knights.ucf.edu</a></p>
    <p><strong>Phone:</strong> <a href="tel:+14075551234">(407) 555-1234</a></p>
    <p><strong>Location:</strong> Orlando, Florida, USA</p>
    <p><strong>Office:</strong> Harris Engineering Center, Room 202, University of Central Florida</p>
</div>
```

Update social links:
```html
<div class="social-links">
    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="https://orcid.org/0000-0000-0000-0000" target="_blank" rel="noopener noreferrer">ORCID</a>
    <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">Twitter/X</a>
</div>
```

---

## Adding Your Photo & CV

### Step 1: Create Assets Folder

Create a folder named `assets` in your repository root:

```
lornice.parker/
├── index.html
├── styles.css
├── script.js
├── README.md
├── CUSTOMIZATION_GUIDE.md
└── assets/          ← Create this folder
    ├── profile.jpg
    └── cv.pdf
```

### Step 2: Add Your Profile Photo

1. Prepare your photo:
   - **Recommended size**: 400x400 pixels (will be displayed as 200x200)
   - **Format**: JPG, PNG, or WebP
   - **Style**: Professional headshot
   - **Aspect ratio**: Square (1:1)

2. Save as `assets/profile.jpg`

3. In `index.html`, the image is referenced as:
```html
<img src="assets/profile.jpg" alt="Lornice Parker" class="profile-image">
```

**No changes needed** - it will automatically use your new photo!

### Step 3: Add Your CV PDF

1. Save your CV as PDF
2. Name it `cv.pdf`
3. Place in `assets/` folder
4. The download button will work automatically:
```html
<a href="assets/cv.pdf" class="btn btn-secondary" download>Download CV</a>
```

### Step 4: Update in HTML (If Different Filenames)

If you use different filenames, update these lines in `index.html`:

```html
<!-- Line ~48 -->
<img src="assets/your-filename.jpg" alt="Lornice Parker" class="profile-image">

<!-- Line ~54 -->
<a href="assets/your-filename.pdf" class="btn btn-secondary" download>Download CV</a>
```

---

## Visual Customization

### Color Customization

**File**: `styles.css` - Lines 7-18

Find the `:root` section and modify colors:

```css
:root {
    --primary-color: #1e3a8a;      /* Main headers, navigation */
    --secondary-color: #0ea5e9;    /* Links, borders, highlights */
    --accent-color: #f97316;       /* Call-to-action buttons */
    --text-dark: #1f2937;          /* Main text */
    --text-light: #6b7280;         /* Secondary text */
    --bg-light: #f9fafb;           /* Light backgrounds */
    --bg-white: #ffffff;           /* White backgrounds */
    --border-color: #e5e7eb;       /* Borders */
}
```

**Recommended Color Schemes**:

**Professional Blue** (Default):
```css
--primary-color: #1e3a8a;
--secondary-color: #0ea5e9;
--accent-color: #f97316;
```

**Modern Purple**:
```css
--primary-color: #6366f1;
--secondary-color: #8b5cf6;
--accent-color: #ec4899;
```

**Academic Green**:
```css
--primary-color: #065f46;
--secondary-color: #059669;
--accent-color: #f59e0b;
```

**Dark Slate**:
```css
--primary-color: #0f172a;
--secondary-color: #64748b;
--accent-color: #0ea5e9;
```

### Font Customization

**File**: `styles.css` - Lines 19-20

Current fonts:
```css
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
--font-serif: 'Georgia', serif;
```

To use Google Fonts:

1. Go to [Google Fonts](https://fonts.google.com)
2. Find your font (e.g., "Poppins", "Inter", "Playfair Display")
3. Copy the import code
4. Add to top of `styles.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

:root {
    --font-sans: 'Poppins', sans-serif;
    --font-serif: 'Georgia', serif;
}
```

### Spacing Customization

**File**: `styles.css` - Line 21

```css
--spacing-unit: 1rem;  /* Base spacing unit */
```

Change this to adjust all spacing throughout the site.

### Border Radius Customization

Current borders are set to `0.5rem`. To change:

**File**: `styles.css` - Search for `border-radius: 0.5rem`

Replace all instances with your preferred value:
- `0` = sharp corners
- `0.25rem` = subtle
- `0.5rem` = moderate (default)
- `1rem` = rounded

---

## Advanced Customization

### Change Header Font Sizes

**File**: `styles.css` - Lines 25-50

```css
h1 {
    font-size: 3rem;      /* Change this */
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--primary-color);
}

h2 {
    font-size: 2.25rem;   /* And this */
    font-weight: 700;
    /* ... */
}

h3 {
    font-size: 1.5rem;    /* And this */
    font-weight: 600;
    /* ... */
}
```

### Modify Card Styles

**File**: `styles.css` - Search for `.education-item`, `.research-card`, etc.

Example - Change education card:
```css
.education-item {
    margin-bottom: 2.5rem;
    padding: 1.5rem;                    /* Change padding */
    background-color: var(--bg-white);
    border-left: 4px solid var(--secondary-color);  /* Change border */
    box-shadow: var(--shadow);
    border-radius: 0.25rem;             /* Change border-radius */
}
```

### Add New Sections

1. Add HTML in `index.html`:
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

3. Style in CSS if needed (or use existing card styles)

### Modify Hero Section

**File**: `index.html` & `styles.css`

The hero section uses a gradient background. To change:

**File**: `styles.css` - Line 245

```css
.hero {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    /* ... */
}
```

Options:
```css
/* Single color */
background: var(--primary-color);

/* Different gradient */
background: linear-gradient(45deg, #1e3a8a, #0ea5e9);

/* Radial gradient */
background: radial-gradient(circle, #1e3a8a 0%, #0ea5e9 100%);

/* With background image */
background: linear-gradient(rgba(30, 58, 138, 0.8), rgba(14, 165, 233, 0.8)), 
            url('path/to/image.jpg');
```

### Add Animations

Existing animations are in `script.js` - Lines 57-75.

To add more, modify the Intersection Observer:

```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';  // Change this
        }
    });
}, observerOptions);
```

Alternative transform values:
```javascript
entry.target.style.transform = 'scale(1)';           // Zoom in
entry.target.style.transform = 'rotateX(0deg)';      // Rotate
entry.target.style.transform = 'translateX(0)';      // From left
```

---

## Quick Reference

### Most Common Changes

| Need | File | Location |
|------|------|----------|
| Change name/title | index.html | Hero section (lines 45-50) |
| Update education | index.html | Education section (lines 66-90) |
| Add research | index.html | Research section (lines 97-120) |
| Change colors | styles.css | :root (lines 7-18) |
| Update contact | index.html | Contact section (lines 245-270) |
| Add your photo | assets/ | profile.jpg |
| Add your CV | assets/ | cv.pdf |

### Frequently Asked Questions

**Q: How do I add another degree?**
A: Copy the entire `<div class="education-item">` block and paste below, then update the content.

**Q: How do I change the main color?**
A: In `styles.css`, change `--primary-color` in the `:root` section.

**Q: Can I remove the hero section?**
A: Yes, but it's recommended to keep it. You can hide it with: `display: none;` in CSS.

**Q: How do I make the website wider/narrower?**
A: In `styles.css`, change the `.container` max-width (currently 1000px).

---

## Final Checklist

- [ ] Updated all placeholder text with your information
- [ ] Added your profile photo (`assets/profile.jpg`)
- [ ] Added your CV PDF (`assets/cv.pdf`)
- [ ] Updated contact email
- [ ] Updated social media links
- [ ] Customized colors (optional)
- [ ] Added your research description
- [ ] Listed your publications
- [ ] Added your skills
- [ ] Tested on mobile device
- [ ] Deployed or set up hosting

---

**Need more help?** Check the README.md file for deployment and troubleshooting tips!
