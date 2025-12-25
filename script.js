// Course Data - Simulating dynamic content
const courses = [
    {
        id: 1,
        title: "Full Stack Development",
        description: "Master front-end and back-end technologies to build complete web applications.",
        category: "technical",
        duration: "6 Months",
        mode: "Live Online",
        price1: "₹9000",
        price3: "₹2,000",
        price6: "₹6,000",
        overview: "This comprehensive Full Stack Development course covers both front-end and back-end technologies. You'll learn to build complete web applications from scratch using modern frameworks and tools.",
        curriculum: "<ul><li>HTML5, CSS3, JavaScript ES6+</li><li>React.js & Redux</li><li>Node.js & Express.js</li><li>MongoDB & MySQL</li><li>REST APIs & GraphQL</li><li>Deployment & DevOps Basics</li></ul>",
        projects: ["E-commerce Platform", "Social Media App", "Task Management System", "Real-time Chat Application"],
        certification: "Pulsecrafts Full Stack Developer Certification upon successful completion",
        placement: "Candidates must complete all projects, pass final assessment, and maintain 80% attendance"
    },
    {
        id: 2,
        title: "Data Science & Analytics",
        description: "Learn data analysis, visualization, and machine learning techniques.",
        category: "technical",
        duration: "6 Months",
        mode: "Live Online",
        price1: "₹1,000",
        price3: "₹4,000",
        price6: "₹7,000",
        overview: "This Data Science course equips you with skills to analyze, visualize, and extract insights from data using Python, statistics, and machine learning algorithms.",
        curriculum: "<ul><li>Python for Data Science</li><li>Statistics & Probability</li><li>Data Visualization with Tableau</li><li>Machine Learning Algorithms</li><li>Big Data Fundamentals</li><li>Project Deployment</li></ul>",
        projects: ["Sales Prediction Model", "Customer Segmentation Analysis", "Sentiment Analysis Tool", "Real-time Dashboard"],
        certification: "Pulsecrafts Data Science Professional Certification",
        placement: "Candidates must complete capstone project with 85% score and pass technical interview"
    },
    {
        id: 3,
        title: "Digital Marketing",
        description: "Master SEO, social media marketing, content strategy, and analytics.",
        category: "non-technical",
        duration: "3 Months",
        mode: "Live Online",
        price1: "₹1,000",
        price3: "₹2,000",
        price6: "₹4,000",
        overview: "Comprehensive Digital Marketing course covering all aspects of online marketing including SEO, social media, content marketing, and analytics.",
        curriculum: "<ul><li>SEO & SEM Strategies</li><li>Social Media Marketing</li><li>Content Marketing & Strategy</li><li>Email Marketing Automation</li><li>Google Analytics & Ads</li><li>Marketing Funnels</li></ul>",
        projects: ["SEO Audit Report", "Social Media Campaign", "Content Calendar", "PPC Campaign Setup"],
        certification: "Pulsecrafts Certified Digital Marketing Specialist",
        placement: "Candidates must develop a complete marketing plan and achieve campaign KPIs"
    },
    {
        id: 4,
        title: "UI/UX Design",
        description: "Learn user interface and experience design principles and tools.",
        category: "technical",
        duration: "3 Months",
        mode: "Live Online",
        price1: "₹1,000",
        price3: "₹2,000",
        price6: "₹5,000",
        overview: "UI/UX Design course focusing on creating intuitive and visually appealing digital interfaces using design thinking and modern tools.",
        curriculum: "<ul><li>Design Principles & Psychology</li><li>Wireframing & Prototyping</li><li>Figma & Adobe XD</li><li>User Research Methods</li><li>Interaction Design</li><li>Portfolio Development</li></ul>",
        projects: ["Mobile App Redesign", "E-commerce Website UI", "Dashboard Design", "Design System"],
        certification: "Pulsecrafts UI/UX Design Professional Certification",
        placement: "Candidates must complete portfolio with 4+ projects and pass design critique"
    },
    {
        id: 5,
        title: "Cybersecurity",
        description: "Learn network security, ethical hacking, and threat protection.",
        category: "technical",
        duration: "6 Months",
        mode: "Live Online",
        price1: "₹2,000",
        price3: "₹4,000",
        price6: "₹7,000",
        overview: "Cybersecurity course covering network security, ethical hacking, threat analysis, and security best practices for protecting digital assets.",
        curriculum: "<ul><li>Network Security Fundamentals</li><li>Ethical Hacking Techniques</li><li>Cryptography</li><li>Security Auditing</li><li>Incident Response</li><li>Compliance & Regulations</li></ul>",
        projects: ["Vulnerability Assessment", "Penetration Testing Report", "Security Policy Development", "Incident Response Plan"],
        certification: "Pulsecrafts Cybersecurity Specialist Certification",
        placement: "Candidates must pass practical security assessment and demonstrate ethical hacking skills"
    },
    {
        id: 6,
        title: "Business Analysis",
        description: "Master requirements gathering, process modeling, and stakeholder management.",
        category: "non-technical",
        duration: "3 Months",
        mode: "Live Online",
        price1: "₹1,000",
        price3: "₹3,000",
        price6: "₹5,000",
        overview: "Business Analysis course teaching techniques for requirements gathering, process improvement, and stakeholder management in agile and waterfall environments.",
        curriculum: "<ul><li>Requirements Elicitation</li><li>Process Modeling with BPMN</li><li>Agile & Scrum Methodology</li><li>Stakeholder Management</li><li>Data Analysis & Visualization</li><li>Business Case Development</li></ul>",
        projects: ["Requirements Documentation", "Process Improvement Plan", "Stakeholder Analysis", "Business Case Study"],
        certification: "Pulsecrafts Certified Business Analysis Professional",
        placement: "Candidates must complete real-world case study and present solution to panel"
    }
];

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');
const coursesGrid = document.getElementById('coursesGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const formTabs = document.querySelectorAll('.form-tab');
const enquiryForms = document.querySelectorAll('.enquiry-form');
const studentForm = document.getElementById('studentForm');
const counsellorForm = document.getElementById('counsellorForm');
const demoForm = document.getElementById('demoForm');
const courseModal = document.getElementById('courseModal');
const modalClose = document.getElementById('modalClose');
const closeModalBtn = document.getElementById('closeModalBtn');
const successToast = document.getElementById('successToast');
const toastMessage = document.getElementById('toastMessage');
const backToTopBtn = document.createElement('button');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize courses
    renderCourses(courses);
    
    // Initialize event listeners
    initEventListeners();
    
    // Create back to top button
    createBackToTopButton();
    
    // Set current year in footer
    document.querySelector('.footer-bottom p').textContent = `© ${new Date().getFullYear()} Mygurukul by Pulsecrafts. All rights reserved.`;
    
    // Add animation to elements on scroll
    initScrollAnimations();
});

// Initialize all event listeners
function initEventListeners() {
    // Mobile menu toggle
    menuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Course filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', filterCourses);
    });
    
    // Form tabs
    formTabs.forEach(tab => {
        tab.addEventListener('click', switchFormTab);
    });
    
    // Form submissions
    studentForm.addEventListener('submit', handleFormSubmit);
    counsellorForm.addEventListener('submit', handleFormSubmit);
    demoForm.addEventListener('submit', handleFormSubmit);
    
    // Modal close buttons
    modalClose.addEventListener('click', closeModal);
    closeModalBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === courseModal) {
            closeModal();
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                // Close mobile menu if open
                closeMobileMenu();
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active nav link on scroll
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // Back to top button
    window.addEventListener('scroll', toggleBackToTop);
    
    // Form input animations
    initFormAnimations();
}

// Create back to top button
function createBackToTopButton() {
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    document.body.appendChild(backToTopBtn);
}

// Toggle back to top button visibility
function toggleBackToTop() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    menuToggle.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
}

// Close mobile menu
function closeMobileMenu() {
    navMenu.classList.remove('active');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
}

// Render courses to the grid
function renderCourses(coursesToRender) {
    coursesGrid.innerHTML = '';
    
    coursesToRender.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.setAttribute('data-category', course.category);
        courseCard.setAttribute('data-duration', course.duration);
        
        // Determine duration filter class
        let durationClass = '';
        if (course.duration === '6 Months') durationClass = '6-month';
        else if (course.duration === '3 Months') durationClass = '3-month';
        else durationClass = '1-month';
        
        courseCard.innerHTML = `
            <div class="course-header">
                <span class="course-category">${course.category === 'technical' ? 'Technical' : 'Non-Technical'}</span>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-desc">${course.description}</p>
                <div class="course-meta">
                    <div class="course-duration">
                        <i class="far fa-clock"></i>
                        <span>${course.duration}</span>
                    </div>
                    <span class="course-mode">${course.mode}</span>
                </div>
            </div>
            <div class="course-body">
                <div class="duration-options">
                    <div class="duration-option">
                        <span class="duration-label">1 Month - Foundation</span>
                        <span class="duration-price">${course.price1}</span>
                    </div>
                    <div class="duration-option">
                        <span class="duration-label">3 Months - Core</span>
                        <span class="duration-price">${course.price3}</span>
                    </div>
                    <div class="duration-option">
                        <span class="duration-label">6 Months - Complete</span>
                        <span class="duration-price">${course.price6}</span>
                    </div>
                </div>
                <div class="course-features">
                    <div class="course-feature">
                        <i class="fas fa-check-circle"></i>
                        <span>Live Interactive Classes</span>
                    </div>
                    <div class="course-feature">
                        <i class="fas fa-check-circle"></i>
                        <span>Hands-on Projects</span>
                    </div>
                    <div class="course-feature">
                        <i class="fas fa-check-circle"></i>
                        <span>Placement Assistance</span>
                    </div>
                </div>
            </div>
            <div class="course-footer">
                <button class="btn btn-primary btn-block view-details" data-id="${course.id}">
                    <i class="fas fa-eye"></i> View Details
                </button>
            </div>
        `;
        
        coursesGrid.appendChild(courseCard);
    });
    
    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
            const courseId = parseInt(this.getAttribute('data-id'));
            openCourseModal(courseId);
        });
    });
}

// Filter courses based on selected filter
function filterCourses() {
    // Remove active class from all filter buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    this.classList.add('active');
    
    const filter = this.getAttribute('data-filter');
    const courseCards = document.querySelectorAll('.course-card');
    
    let visibleCount = 0;
    
    courseCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const duration = card.getAttribute('data-duration');
        
        // Determine duration filter class
        let durationClass = '';
        if (duration === '6 Months') durationClass = '6-month';
        else if (duration === '3 Months') durationClass = '3-month';
        else durationClass = '1-month';
        
        if (filter === 'all' || 
            filter === category || 
            filter === durationClass ||
            (filter === 'technical' && category === 'technical') ||
            (filter === 'non-technical' && category === 'non-technical')) {
            card.style.display = 'block';
            visibleCount++;
            
            // Add animation
            card.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
    
    // If no courses match the filter, show a message
    if (visibleCount === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <div style="text-align: center; padding: 60px 20px;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--gray); margin-bottom: 20px;"></i>
                <h3 style="color: var(--dark); margin-bottom: 10px;">No courses found</h3>
                <p style="color: var(--gray);">Try selecting a different filter</p>
            </div>
        `;
        coursesGrid.appendChild(noResults);
    }
}

// Switch between form tabs
function switchFormTab() {
    const formType = this.getAttribute('data-form');
    
    // Remove active class from all tabs and forms
    formTabs.forEach(tab => tab.classList.remove('active'));
    enquiryForms.forEach(form => form.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding form
    this.classList.add('active');
    document.getElementById(`${formType}Form`).classList.add('active');
}

// Handle form submissions
function handleFormSubmit(e) {
    e.preventDefault();
    
    let message = '';
    let formData = {};
    
    if (this.id === 'studentForm') {
        message = 'Your student enquiry has been submitted successfully! We will contact you within 24 hours.';
        formData = {
            name: document.getElementById('studentName').value,
            email: document.getElementById('studentEmail').value,
            phone: document.getElementById('studentPhone').value,
            course: document.getElementById('studentCourse').value,
            duration: document.getElementById('studentDuration').value,
            background: document.getElementById('studentBackground').value
        };
    } else if (this.id === 'counsellorForm') {
        message = 'Your partnership request has been submitted! Our team will reach out to discuss opportunities.';
        formData = {
            name: document.getElementById('counsellorName').value,
            email: document.getElementById('counsellorEmail').value,
            phone: document.getElementById('counsellorPhone').value,
            organization: document.getElementById('counsellorOrg').value,
            experience: document.getElementById('counsellorExperience').value,
            message: document.getElementById('counsellorMessage').value
        };
    } else if (this.id === 'demoForm') {
        message = 'Demo session booked successfully! You will receive confirmation details via email.';
        formData = {
            name: document.getElementById('demoName').value,
            email: document.getElementById('demoEmail').value,
            phone: document.getElementById('demoPhone').value,
            course: document.getElementById('demoCourse').value,
            date: document.getElementById('demoDate').value,
            time: document.getElementById('demoTime').value
        };
    }
    
    // In a real application, you would send formData to a server here
    console.log('Form submitted:', formData);
    
    // Show success toast
    showToast(message);
    
    // Reset form
    this.reset();
}

// Open course modal with details
function openCourseModal(courseId) {
    const course = courses.find(c => c.id === courseId);
    
    if (!course) return;
    
    // Populate modal with course data
    document.getElementById('modalCourseTitle').textContent = course.title;
    document.getElementById('modalDuration').textContent = course.duration;
    document.getElementById('modalMode').textContent = course.mode;
    document.getElementById('modalCategory').textContent = course.category === 'technical' ? 'Technical' : 'Non-Technical';
    document.getElementById('modalOverview').textContent = course.overview;
    document.getElementById('modalCurriculum').innerHTML = course.curriculum;
    
    // Populate projects list
    const projectsList = document.getElementById('modalProjects');
    projectsList.innerHTML = '';
    course.projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = project;
        li.style.padding = '10px 0';
        li.style.borderBottom = '1px solid var(--light-gray)';
        li.style.listStyle = 'none';
        li.style.paddingLeft = '25px';
        li.style.position = 'relative';
        li.innerHTML = `<i class="fas fa-check" style="position: absolute; left: 0; color: var(--accent);"></i> ${project}`;
        projectsList.appendChild(li);
    });
    
    document.getElementById('modalCertification').textContent = course.certification;
    document.getElementById('modalPlacement').textContent = course.placement;
    
    // Show modal
    courseModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close course modal
function closeModal() {
    courseModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Show toast notification
function showToast(message) {
    toastMessage.textContent = message;
    successToast.classList.add('active');
    
    // Hide toast after 5 seconds
    setTimeout(() => {
        successToast.classList.remove('active');
    }, 5000);
}

// Highlight active nav link on scroll
function highlightNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Initialize form animations
function initFormAnimations() {
    const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
}

// Initialize scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.model-step, .course-card, .timeline-item, .workflow-step, .info-card, .stat-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add active class to nav links when clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Mobile menu toggle for touch devices
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeMobileMenu();
    }
});