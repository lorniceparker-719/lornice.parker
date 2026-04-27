// ============================================
// MOBILE MENU TOGGLE
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ============================================
// SMOOTH SCROLLING & ACTIVE NAV LINK
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Create mailto link (simple solution without backend)
        // For production, you'd want to set up a backend service or use a service like FormSubmit
        const mailtoLink = `mailto:your.email@ucf.edu?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;

        // Alternative: Log the message (in production, send to backend)
        console.log('Form submitted:', { name, email, message });

        // Show success message
        const originalButtonText = contactForm.querySelector('button').textContent;
        contactForm.querySelector('button').textContent = 'Message sent! 📬';
        contactForm.querySelector('button').style.backgroundColor = '#10b981';

        // Reset form after 2 seconds
        setTimeout(() => {
            contactForm.reset();
            contactForm.querySelector('button').textContent = originalButtonText;
            contactForm.querySelector('button').style.backgroundColor = '';
        }, 2000);
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe education, experience, and research cards
document.querySelectorAll('.education-item, .experience-item, .research-card, .skill-category, .publication-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// ACTIVE NAV LINK STYLING
// ============================================

const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--secondary-color);
        border-bottom: 2px solid var(--secondary-color);
        padding-bottom: 0.25rem;
    }
`;
document.head.appendChild(style);

// ============================================
// PRINT OPTIMIZATION
// ============================================

// Add print styles dynamically
const printStyle = document.createElement('style');
printStyle.textContent = `
    @media print {
        .navbar,
        .hero .cta-buttons,
        .contact-form,
        .footer {
            display: none;
        }

        body {
            background-color: white;
        }

        .hero {
            background: white;
            color: var(--text-dark);
            min-height: auto;
            padding: 2rem 0;
        }

        .hero h1,
        .hero p {
            color: var(--text-dark);
        }

        section {
            page-break-inside: avoid;
            padding: 2rem 0;
        }

        .section {
            background-color: white !important;
        }
    }
`;
document.head.appendChild(printStyle);

// ============================================
// DARK MODE TOGGLE (Optional Feature)
// ============================================

// Uncomment and customize if you want to add dark mode

/*
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '🌙';
darkModeToggle.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    z-index: 999;
    transition: var(--transition);
`;

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '☀️';
}
*/

// ============================================
// CONSOLE GREETING
// ============================================

console.log('%cWelcome to Lornice Parker\'s CV Website', 'font-size: 20px; font-weight: bold; color: #1e3a8a;');
console.log('%cFor inquiries, please contact via the website\'s contact form.', 'font-size: 14px; color: #6b7280;');
