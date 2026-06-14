/**
 * BioBalance Website - Interactive Features
 * Smooth animations, navigation, and form handling
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initNavigation();
    initScrollAnimations();
    initCounterAnimations();
    initSmoothScroll();
    initParallaxOrbs();
});

/**
 * Navigation - Scroll effects and mobile toggle
 */
function initNavigation() {
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    // Scroll effect
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add scrolled class for background
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // Mobile toggle
    navToggle?.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        document.documentElement.classList.toggle('menu-open');
    });

    // Helper to close mobile menu
    function closeMobileMenu() {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
        document.documentElement.classList.remove('menu-open');
    }

    // Close mobile nav on link click (except dropdown toggles)
    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if this is a dropdown toggle on mobile
            const isDropdownToggle = link.parentElement.classList.contains('nav-dropdown') &&
                                     link === link.parentElement.querySelector(':scope > a');

            if (isDropdownToggle && window.innerWidth <= 768) {
                e.preventDefault();
                link.parentElement.classList.toggle('open');
            } else if (!link.closest('.dropdown-menu')) {
                closeMobileMenu();
            }
        });
    });

    // Close dropdown on mobile when clicking a dropdown menu item
    navLinks?.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Expose close function for Escape key handler
    window.closeMobileMenu = closeMobileMenu;
}

/**
 * Scroll Animations - Intersection Observer for reveal effects
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Counter Animations - Animate numbers on scroll
 */
function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-count]');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    };

    requestAnimationFrame(updateCounter);
}

/**
 * Smooth Scroll - Enhanced anchor navigation
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const navHeight = document.getElementById('nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Parallax effect for gradient orbs
 */
function initParallaxOrbs() {
    const orbs = document.querySelectorAll('.gradient-orb');

    if (orbs.length === 0) return;

    let rafId = null;
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

        if (!rafId) {
            rafId = requestAnimationFrame(updateOrbs);
        }
    }, { passive: true });

    function updateOrbs() {
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 10;
            const x = mouseX * speed;
            const y = mouseY * speed;

            orb.style.transform = `translate(${x}px, ${y}px)`;
        });

        rafId = null;
    }
}

/**
 * Add CSS for spinner animation
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    .spinner {
        width: 20px;
        height: 20px;
    }

    .form-group.focused input,
    .form-group.focused select {
        border-color: var(--color-primary);
    }
`;
document.head.appendChild(style);

/**
 * Preloader (optional - adds polish)
 */
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Trigger initial animations
    setTimeout(() => {
        document.querySelectorAll('.hero [data-animate]').forEach(el => {
            el.classList.add('animated');
        });
    }, 100);
});

/**
 * Handle reduced motion preference
 */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--transition-base', '0ms');
    document.documentElement.style.setProperty('--transition-slow', '0ms');

    // Immediately show all animated elements
    document.querySelectorAll('[data-animate]').forEach(el => {
        el.classList.add('animated');
    });
}

/**
 * Keyboard navigation enhancements
 */
document.addEventListener('keydown', (e) => {
    // Escape closes mobile nav
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
        window.closeMobileMenu?.();
    }
});

/**
 * Active navigation link highlighting
 */
function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observerOptions = {
        rootMargin: '-50% 0px -50% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

// Initialize active nav highlighting
initActiveNavHighlight();
