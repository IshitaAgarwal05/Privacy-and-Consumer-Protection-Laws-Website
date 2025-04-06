document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            nav.classList.remove('active');
        });
    });
    
    // Accordion functionality for Laws section
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                this.querySelector('span').textContent = '+';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                this.querySelector('span').textContent = '-';
            }
        });
    });
    
    // Form submission
    const complaintForm = document.getElementById('complaintForm');
    if (complaintForm) {
        complaintForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For this demo, we'll just show an alert
            alert('Thank you for your report. We will review your complaint and get back to you shortly.');
            this.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Tab functionality
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Tab switching logic
    });
});

// Story slider
const storyNext = document.querySelector('.story-next');
storyNext.addEventListener('click', () => {
    // Story navigation logic
});

// Animated stats
const statNumbers = document.querySelectorAll('.stat-number');
statNumbers.forEach(stat => {
    const target = +stat.getAttribute('data-count');
    // Animation logic
});








































// Stories.html
// Comic Swipe Functionality
const comicViewer = document.querySelector('.comic-viewer');
const viewerImage = document.getElementById('viewer-image');
const closeViewer = document.querySelector('.close-viewer');
const prevBtn = document.querySelector('.prev-panel');
const nextBtn = document.querySelector('.next-panel');

let currentStory = 1;
let currentPanel = 1;
const panelsPerStory = 4; // Each story has 4 panels

// Open viewer when panel is clicked
document.querySelectorAll('.comic-panel').forEach(panel => {
    panel.addEventListener('click', function() {
        currentStory = parseInt(this.dataset.story);
        currentPanel = parseInt(this.dataset.panel);
        updateViewerImage();
        comicViewer.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
});

// Close viewer
closeViewer.addEventListener('click', () => {
    comicViewer.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Navigation
prevBtn.addEventListener('click', showPrevPanel);
nextBtn.addEventListener('click', showNextPanel);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (comicViewer.style.display === 'flex') {
        if (e.key === 'ArrowLeft') showPrevPanel();
        if (e.key === 'ArrowRight') showNextPanel();
        if (e.key === 'Escape') {
            comicViewer.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
});

function showPrevPanel() {
    if (currentPanel > 1) {
        currentPanel--;
    } else {
        // Loop to last panel of previous story
        if (currentStory > 1) {
            currentStory--;
            currentPanel = panelsPerStory;
        }
    }
    updateViewerImage();
}

function showNextPanel() {
    if (currentPanel < panelsPerStory) {
        currentPanel++;
    } else {
        // Loop to first panel of next story
        if (currentStory < 3) {
            currentStory++;
            currentPanel = 1;
        }
    }
    updateViewerImage();
}

function updateViewerImage() {
    viewerImage.src = `assets/comic${currentStory}-panel${currentPanel}.jpg`;
    viewerImage.alt = `Story ${currentStory} Panel ${currentPanel}`;
}

// Mobile menu toggle (same as index.html)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

mobileMenuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenuBtn.classList.remove('active');
        nav.classList.remove('active');
    });
});