/* ===================================
   DEVFOLIO-INSPIRED PORTFOLIO - JAVASCRIPT
   Features: Custom Cursor, GSAP Animations,
   Soundbar, Theme Toggle, Menu, Typed Effect
   ================================ */

// ===================================
// Check if GSAP loaded
// ===================================
console.log('🎬 GSAP Status:', typeof gsap !== 'undefined' ? 'LOADED ✅' : 'FAILED ❌');
if (typeof gsap !== 'undefined') {
    console.log('📦 GSAP Version:', gsap.version);
    gsap.registerPlugin(ScrollTrigger);
    console.log('🔌 ScrollTrigger:', typeof ScrollTrigger !== 'undefined' ? 'REGISTERED ✅' : 'FAILED ❌');
} else {
    console.error('❌ GSAP NOT LOADED! Check assets/js/gsap.min.js');
}

// ===================================
// Custom Cursor
// ===================================
class CustomCursor {
    constructor() {
        this.cursor = document.querySelector('.cursor');
        this.follower = document.querySelector('.cursor-follower');
        this.links = document.querySelectorAll('.link');

        this.init();
    }

    init() {
        if (window.innerWidth <= 768) return; // Disable on mobile

        // Move cursor
        document.addEventListener('mousemove', (e) => {
            gsap.to(this.cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'none'
            });

            gsap.to(this.follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: 'none'
            });
        });

        // Hover effects on links
        this.links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                this.cursor.classList.add('hover');
                this.follower.classList.add('hover');
            });

            link.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('hover');
                this.follower.classList.remove('hover');
            });
        });
    }
}

// ===================================
// Progress Bar
// ===================================
class ProgressBar {
    constructor() {
        this.progressBar = document.querySelector('.progress-bar');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercentage = (scrollTop / scrollHeight);

            gsap.to(this.progressBar, {
                scaleX: scrollPercentage,
                duration: 0.1,
                ease: 'none'
            });
        });
    }
}

// ===================================
// Menu Toggle
// ===================================
class Menu {
    constructor() {
        this.menuCheckbox = document.getElementById('menu-toggle');
        this.menuLinks = document.querySelectorAll('.menu-link');
        this.menuContent = document.querySelector('.menu-content');

        console.log('🍔 Menu initialized');
        console.log('   - Checkbox:', this.menuCheckbox ? '✅' : '❌');
        console.log('   - Menu links:', this.menuLinks.length);
        console.log('   - Menu content:', this.menuContent ? '✅' : '❌');

        this.init();
    }

    init() {
        if (!this.menuCheckbox || !this.menuContent) {
            console.error('❌ Menu elements not found!');
            return;
        }

        // Animate menu content on open/close
        this.menuCheckbox.addEventListener('change', () => {
            console.log('🍔 Menu toggled:', this.menuCheckbox.checked ? 'OPEN' : 'CLOSED');

            if (this.menuCheckbox.checked) {
                // Check if GSAP is available
                if (typeof gsap === 'undefined') {
                    console.error('❌ GSAP not available for menu animation!');
                    return;
                }

                console.log('🎬 Playing menu animation...');

                // Menu opening - POP animation
                gsap.fromTo(this.menuContent,
                    {
                        scale: 0,
                        opacity: 0,
                        rotation: -10
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        rotation: 0,
                        duration: 0.5,
                        ease: 'back.out(1.7)',
                        onComplete: () => console.log('✅ Menu animation complete!')
                    }
                );

                // Stagger animate menu items
                gsap.from('.menu-link', {
                    opacity: 0,
                    y: 30,
                    duration: 0.4,
                    stagger: 0.1,
                    delay: 0.2,
                    ease: 'power2.out'
                });
            }
        });

        // Close menu when clicking on a link
        this.menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                console.log('🔗 Menu link clicked:', link.textContent);
                this.menuCheckbox.checked = false;
            });
        });

        // Close menu on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.menuCheckbox.checked) {
                console.log('⌨️ ESC pressed - closing menu');
                this.menuCheckbox.checked = false;
            }
        });

        console.log('✅ Menu event listeners attached');
    }
}

// ===================================
// Theme Toggle
// ===================================
class ThemeToggle {
    constructor() {
        this.themeToggle = document.querySelector('.theme-toggle');
        this.body = document.body;
        this.init();
    }

    init() {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            this.body.classList.add('light-theme');
        }

        // Toggle theme
        this.themeToggle.addEventListener('click', () => {
            this.body.classList.toggle('light-theme');

            // Save preference
            if (this.body.classList.contains('light-theme')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });
    }
}

// ===================================
// Soundbar
// ===================================
class Soundbar {
    constructor() {
        this.soundbar = document.querySelector('.soundbar');
        this.audio = document.getElementById('background-music');
        this.isPlaying = false;
        this.init();
    }

    init() {
        if (!this.audio || !this.soundbar) return;

        this.soundbar.addEventListener('click', () => {
            if (this.isPlaying) {
                this.audio.pause();
                this.soundbar.classList.remove('playing');
            } else {
                this.audio.play();
                this.soundbar.classList.add('playing');
            }
            this.isPlaying = !this.isPlaying;
        });
    }
}

// ===================================
// Typed Text Effect
// ===================================
class TypedText {
    constructor() {
        this.element = document.querySelector('.typed-text');
        this.strings = [
            'Programmer',
            'Mobile Developer',
            'Web Developer',
            'Freelancer',
            'Problem Solver'
        ];
        this.currentStringIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.typingSpeed = 100;
        this.deletingSpeed = 50;
        this.pauseTime = 2000;

        this.init();
    }

    init() {
        if (!this.element) return;
        this.type();
    }

    type() {
        const currentString = this.strings[this.currentStringIndex];

        if (this.isDeleting) {
            this.element.textContent = currentString.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
        } else {
            this.element.textContent = currentString.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
        }

        let timeout = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

        if (!this.isDeleting && this.currentCharIndex === currentString.length) {
            timeout = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentStringIndex = (this.currentStringIndex + 1) % this.strings.length;
        }

        setTimeout(() => this.type(), timeout);
    }
}

// ===================================
// Accordion Functionality
// ===================================
class Accordion {
    constructor() {
        this.accordionButtons = document.querySelectorAll('.accordion-button');
        console.log('📋 Accordion initialized - Found', this.accordionButtons.length, 'buttons');
        this.init();
    }

    init() {
        this.accordionButtons.forEach((button, index) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();  // Prevent event from bubbling up

                const accordionItem = button.parentElement;
                const wasActive = accordionItem.classList.contains('active');

                // Toggle the clicked item only (allow multiple items open)
                accordionItem.classList.toggle('active');

                console.log(`📋 Accordion item ${index + 1}: ${wasActive ? 'CLOSED' : 'OPENED'}`);
            });
        });
        console.log('✅ Accordion event listeners attached');
    }
}

// ===================================
// GSAP Scroll Animations
// ===================================
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Fade in sections
        gsap.utils.toArray('.section').forEach(section => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: 1
                }
            });
        });

        // Section headers animation
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.from(header, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                scrollTrigger: {
                    trigger: header,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        // Skills cards stagger animation - DISABLED TO FIX VISIBILITY
        // Skills will be visible immediately without animation
        /* const skillCards = gsap.utils.toArray('.skill-card');
        if (skillCards.length > 0) {
            gsap.from(skillCards, {
                opacity: 0,
                y: 50,
                scale: 0.9,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.skills-grid',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            });
        } */

        // About info items animation
        const infoItems = gsap.utils.toArray('.info-item');
        if (infoItems.length > 0) {
            gsap.from(infoItems, {
                opacity: 0,
                x: -50,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: '.about-info',
                    start: 'top 75%',
                    toggleActions: 'play none none reverse'
                }
            });
        }

        // Project cards hover animation with GSAP
        this.initProjectCards();

        // Collaboration section animations
        this.initCollaborationAnimation();

        // Contact form animation
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            gsap.from(contactForm, {
                opacity: 0,
                x: -50,
                duration: 1,
                scrollTrigger: {
                    trigger: contactForm,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        }

        const contactInfo = document.querySelector('.contact-info');
        if (contactInfo) {
            gsap.from(contactInfo, {
                opacity: 0,
                x: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: contactInfo,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        }

        // Footer animation
        const footer = document.querySelector('.footer');
        if (footer) {
            gsap.from(footer, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: footer,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    }

    initProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');

        projectCards.forEach((card, index) => {
            // Set gradient background
            const gradient = card.getAttribute('data-gradient');
            if (gradient) {
                card.style.background = gradient;
            }

            // Initial animation on scroll
            gsap.from(card, {
                opacity: 0,
                y: 100,
                rotation: -5,
                duration: 0.8,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                delay: index * 0.1
            });

            // Hover animation using GSAP
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.02,
                    boxShadow: '0 20px 60px rgba(139, 49, 255, 0.4)',
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });
        });
    }

    initCollaborationAnimation() {
        const collaborationTitle = document.querySelector('.collaboration-title');

        if (collaborationTitle) {
            // Animate the gradient text
            const textGradient = collaborationTitle.querySelector('.text-gradient-animated');

            if (textGradient) {
                gsap.from(textGradient, {
                    backgroundPosition: '0% 0%',
                    duration: 2,
                    scrollTrigger: {
                        trigger: collaborationTitle,
                        start: 'top 70%',
                        end: 'center center',
                        scrub: 1
                    }
                });
            }

            // Slide animations for background text
            const textTop = document.querySelector('.collaboration-text-top');
            const textBottom = document.querySelector('.collaboration-text-bottom');

            if (textTop && textBottom) {
                gsap.to(textTop, {
                    xPercent: -150,
                    scrollTrigger: {
                        trigger: '.collaboration',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1
                    }
                });

                gsap.from(textBottom, {
                    xPercent: -150,
                    scrollTrigger: {
                        trigger: '.collaboration',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1
                    }
                });
            }
        }
    }
}

// ===================================
// Contact Form Handler
// ===================================
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            // Form will submit to Web3Forms
            // You can add custom validation here if needed
        });
    }
}

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
class SmoothScroll {
    constructor() {
        this.links = document.querySelectorAll('a[href^="#"]');
        this.init();
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');

                if (href === '#' || href === '#home') {
                    e.preventDefault();
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    return;
                }

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 100;

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// ===================================
// Header Scroll Effect
// ===================================
class HeaderScroll {
    constructor() {
        this.header = document.querySelector('.header');
        this.init();
    }

    init() {
        if (!this.header) return;

        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                this.header.style.background = 'rgba(0, 0, 0, 0.95)';
                this.header.style.backdropFilter = 'blur(20px)';
                this.header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            } else {
                this.header.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent)';
                this.header.style.backdropFilter = 'blur(10px)';
                this.header.style.boxShadow = 'none';
            }

            lastScroll = currentScroll;
        });
    }
}

// ===================================
// Parallax Effect for Hero Section - DISABLED
// ===================================
// Removed to prevent gap between hero and about sections

// ===================================
// Initialize Everything
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new CustomCursor();
    new ProgressBar();
    new Menu();
    new ThemeToggle();
    new Soundbar();
    new TypedText();
    new Accordion();
    new ScrollAnimations();
    new ContactForm();
    new SmoothScroll();
    new HeaderScroll();
    // ParallaxEffect removed to prevent gap between sections

    // Initial page load animation
    gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.from('.social-links a', {
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.8,
        ease: 'power2.out'
    });

    // Loading animation complete
    console.log('Portfolio loaded successfully! ✨');
});

// ===================================
// Add resize listener to update animations
// ===================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});
