document.addEventListener('DOMContentLoaded', function() {
    // Initialize Particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#00a8ff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#00a8ff",
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });

    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        gsap.to(cursorFollower, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.5,
            ease: "power2.out"
        });
    });
    
    // Cursor effects on hover
    const hoverElements = document.querySelectorAll('a, button, .tool-item, .project-card');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorFollower.classList.add('cursor-follower-hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorFollower.classList.remove('cursor-follower-hover');
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    const heroTitleWords = document.querySelectorAll('.title-word');
    
    heroTitleWords.forEach((word, index) => {
        gsap.from(word, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out"
        });
    });
    
    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
    });
    
    gsap.from('.hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.7,
        ease: "power3.out"
    });
    
    // Section animations
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out"
        });
    });
    
    // Skill bars animation
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        
        ScrollTrigger.create({
            trigger: bar,
            start: "top 80%",
            onEnter: () => {
                gsap.to(bar, {
                    width: width,
                    duration: 1.5,
                    ease: "power3.out"
                });
            }
        });
    });
    
    // Project card animations
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out"
        });
    });
    
    // Timeline animations
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            x: item.classList.contains('timeline-item-even') ? 50 : -50,
            duration: 0.8,
            ease: "power3.out"
        });
    });
    
    // Contact form animations
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach((group, index) => {
        gsap.from(group, {
            scrollTrigger: {
                trigger: group,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 30,
            duration: 0.5,
            delay: index * 0.1,
            ease: "power3.out"
        });
    });
    
    // Footer animation
    gsap.from('.footer', {
        scrollTrigger: {
            trigger: '.footer',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
    });
    
    // Animate elements when they come into view
    const animateOnScroll = (elements, animation) => {
        elements.forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                ...animation
            });
        });
    };
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const submitButton = this.querySelector('button[type="submit"]');
            
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            // Simulate form submission (replace with actual AJAX call)
            setTimeout(() => {
                submitButton.textContent = 'Message Sent!';
                this.reset();
                
                setTimeout(() => {
                    submitButton.textContent = 'Send Message';
                    submitButton.disabled = false;
                }, 2000);
            }, 1500);
        });
    }
    
    // Initialize tooltips
    const toolItems = document.querySelectorAll('.tool-item');
    
    toolItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.className = 'custom-tooltip';
            tooltip.textContent = item.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = item.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2}px`;
            tooltip.style.top = `${rect.bottom + 5}px`;
            tooltip.style.transform = 'translateX(-50%)';
            
            gsap.from(tooltip, {
                opacity: 0,
                y: -10,
                duration: 0.3
            });
            
            item.tooltip = tooltip;
        });
        
        item.addEventListener('mouseleave', () => {
            if (item.tooltip) {
                item.tooltip.remove();
                item.tooltip = null;
            }
        });
    });
    
    // Add active class to current section in navbar
    const navItems = document.querySelectorAll('.nav-link');
    
    function highlightNavItem() {
        let fromTop = window.scrollY + 100;
        
        navItems.forEach(item => {
            const section = document.querySelector(item.getAttribute('href'));
            
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavItem);
    highlightNavItem();
    
    // Preloader (optional)
    window.addEventListener('load', function() {
        const preloader = document.createElement('div');
        preloader.className = 'preloader';
        preloader.innerHTML = `
            <div class="preloader-content">
                <div class="preloader-spinner"></div>
                <div class="preloader-text">Loading Portfolio</div>
            </div>
        `;
        document.body.appendChild(preloader);
        
        gsap.to('.preloader', {
            opacity: 0,
            duration: 0.5,
            delay: 1,
            onComplete: () => {
                preloader.remove();
            }
        });
    });
    
    // Add some console art for fun
    console.log('%c⚡ Welcome to My Electrical Engineering Portfolio! ⚡', 'color: #00a8ff; font-size: 16px; font-weight: bold;');
    console.log('%cFeel free to explore the code and get in touch if you have any questions!', 'color: #e6f1ff; font-size: 14px;');
});

// CV Modal functionality
const cvModal = document.getElementById('cvModal');
const cvButtons = document.querySelectorAll('[data-action="preview-cv"]');
const closeModalButtons = document.querySelectorAll('.close-modal, .close-modal-btn');

// Update your original CV button to include the preview option
document.querySelector('.btn-cv').setAttribute('data-action', 'preview-cv');

// Modal toggle function
function toggleModal(show) {
    if (show) {
        cvModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        gsap.from('.modal-content', {
            opacity: 0,
            y: 20,
            duration: 0.3
        });
    } else {
        cvModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Event listeners
cvButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (!button.hasAttribute('download')) {
            e.preventDefault();
            toggleModal(true);
        }
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => toggleModal(false));
});

// Close modal when clicking outside content
cvModal.addEventListener('click', (e) => {
    if (e.target === cvModal) {
        toggleModal(false);
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cvModal.classList.contains('show')) {
        toggleModal(false);
    }
});

// Add this to your existing JavaScript file
const cvButton = document.querySelector('.btn-cv');

if (cvButton) {
    // Pulse animation every 8 seconds to draw attention
    setInterval(() => {
        gsap.to(cvButton, {
            scale: 1.05,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut"
        });
    }, 8000);
    
    // Click animation
    cvButton.addEventListener('click', () => {
        gsap.to(cvButton, {
            scale: 0.95,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut"
        });
        
        // Analytics event (optional)
        console.log('CV download initiated');
    });
}