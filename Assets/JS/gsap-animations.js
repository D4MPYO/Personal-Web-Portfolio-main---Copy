// ========================================
// GSAP ANIMATIONS FOR PORTFOLIO
// ========================================

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ========================================
// 1. PAGE LOAD - HERO SECTION ANIMATION
// ========================================

window.addEventListener('load', () => {
    // Main timeline for hero section
    const heroTL = gsap.timeline({
        defaults: { ease: "power2.out" }
    });

    heroTL
        // Header slides down
        .from("header", {
            y: -100,
            opacity: 0,
            duration: 0.8
        })

        // Profile image scales up with elastic bounce
        .from(".home-img img", {
            scale: 0,
            opacity: 0,
            ease: "elastic.out(1, 0.5)",
            duration: 1.2
        }, "-=0.5")

        // Text elements stagger in from left
        .from(".home-text span", {
            x: -100,
            opacity: 0,
            duration: 0.8
        }, "-=0.8")

        .from(".home-text h1", {
            x: -100,
            opacity: 0,
            duration: 0.8
        }, "-=0.6")

        .from(".home-text h2", {
            x: -100,
            opacity: 0,
            duration: 0.8
        }, "-=0.6")

        .from(".home-text p", {
            x: -100,
            opacity: 0,
            duration: 0.8
        }, "-=0.6")

        // Buttons appear from bottom with stagger
        .from(".home-text .btn, .home-text .btn-pink", {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6
        }, "-=0.4")

        // Social icons slide in from left with stagger
        .from(".social a", {
            x: -50,
            opacity: 0,
            stagger: 0.15,
            duration: 0.5
        }, "-=0.6")

        // Faded background text subtle fade
        .from(".faded-text", {
            opacity: 0,
            duration: 1
        }, "-=0.8");
});

// ========================================
// 2. FLOATING PROFILE IMAGE ANIMATION
// ========================================

gsap.to(".home-img img", {
    y: -20,
    duration: 2,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
});

// ========================================
// 3. SCROLL PROGRESS INDICATOR
// ========================================

// Create progress bar element
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress-bar';
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, #033a80, #4e45d5, #e84949);
    width: 0%;
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.prepend(progressBar);

// Update progress bar on scroll
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercentage + '%';
});

// ========================================
// 4. ABOUT SECTION ANIMATIONS
// ========================================

gsap.from(".about-img img", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".about-text p", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
});

gsap.from(".info-box", {
    scrollTrigger: {
        trigger: ".information",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "back.out(1.4)"
});

// ========================================
// 5. ACADEMIC ACHIEVEMENTS ACCORDION ANIMATION
// ========================================

gsap.from(".card-item", {
    scrollTrigger: {
        trigger: "#card",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
});

// ========================================
// 6. TIMELINE ANIMATION
// ========================================

gsap.from(".timeline li", {
    scrollTrigger: {
        trigger: ".timeline",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    x: -100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    ease: "power2.out"
});

// ========================================
// 7. SKILLS SECTION ANIMATIONS
// ========================================

gsap.from(".skill", {
    scrollTrigger: {
        trigger: ".tech-stack-container",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    y: 50,
    opacity: 0,
    rotation: 360,
    duration: 0.8,
    stagger: {
        amount: 1,
        from: "start",
        grid: "auto"
    },
    ease: "back.out(1.4)"
});

// Add hover effect for skills using GSAP
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        gsap.to(skill, {
            scale: 1.1,
            y: -10,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    skill.addEventListener('mouseleave', () => {
        gsap.to(skill, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// ========================================
// 8. PROJECTS SECTION ANIMATIONS
// ========================================

// Heading animation
gsap.from(".Projects .heading", {
    scrollTrigger: {
        trigger: ".Projects",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    y: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
});

// Project cards stagger with alternating directions
gsap.from(".card", {
    scrollTrigger: {
        trigger: ".project-cards-container",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    y: 100,
    opacity: 0,
    stagger: {
        amount: 0.8,
        from: "start"
    },
    duration: 0.8,
    ease: "back.out(1.2)"
});

// Enhanced hover effect for project cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    const img = card.querySelector('.card-preview-img');

    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -15,
            duration: 0.3,
            ease: "power2.out"
        });

        gsap.to(img, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });

        gsap.to(img, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// ========================================
// 9. CONTACT SECTION ANIMATIONS
// ========================================

gsap.from(".contact .heading", {
    scrollTrigger: {
        trigger: ".contact",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    y: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
});

gsap.from(".container-left", {
    scrollTrigger: {
        trigger: ".contact-box",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".container-right", {
    scrollTrigger: {
        trigger: ".contact-box",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

// Form inputs stagger animation
gsap.from(".input-group, textarea, .contact-form button", {
    scrollTrigger: {
        trigger: ".contact-box",
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
});

// ========================================
// 10. FOOTER ANIMATION
// ========================================

gsap.from(".footer__content", {
    scrollTrigger: {
        trigger: ".footer",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
});

// ========================================
// 11. SECTION HEADINGS ANIMATION
// ========================================

gsap.utils.toArray(".heading").forEach(heading => {
    gsap.from(heading, {
        scrollTrigger: {
            trigger: heading,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse"
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.4)"
    });
});

// ========================================
// 12. SMOOTH SCROLL FOR NAVIGATION LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Only prevent default and smooth scroll if it's an internal link
        if (href && href.startsWith('#') && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                // Close mobile menu if open
                const navbar = document.querySelector('.navbar');
                if (navbar) {
                    navbar.classList.remove('active');
                }

                // Smooth scroll to target
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========================================
// 13. BUTTON HOVER ANIMATIONS
// ========================================

const actionButtons = document.querySelectorAll('.btn, .btn-pink, .live-preview-btn');
actionButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// ========================================
// 14. PARALLAX EFFECT ON SCROLL
// ========================================

gsap.to(".home-img img", {
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom top",
        scrub: 1
    },
    y: 100,
    ease: "none"
});

gsap.to(".faded-text", {
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom top",
        scrub: 1
    },
    y: 50,
    opacity: 0.3,
    ease: "none"
});

// ========================================
// 15. PERFORMANCE OPTIMIZATION
// ========================================

// Disable animations on mobile devices for better performance
const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (isMobile) {
    // Reduce animation complexity on mobile
    ScrollTrigger.config({
        limitCallbacks: true,
        syncInterval: 200
    });
}

// Refresh ScrollTrigger after page load
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});

// Console log for debugging
console.log('🎬 GSAP Animations Loaded Successfully!');
console.log('📱 Mobile Device:', isMobile);
console.log('✨ ScrollTrigger instances:', ScrollTrigger.getAll().length);
