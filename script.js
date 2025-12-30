// Course data with certificate details for all courses
const courses = [
    {
        id: 1,
        title: "AI & Machine Learning Course",
        subtitle: "Future-Ready Skills for Tomorrow's Innovators",
        category: "technical",
        duration: "6 Months",
        originalPrice: "₹75,999",
        discountedPrice: "₹59,999",
        discount: "30%",
        description: "Master AI and ML concepts with hands-on projects and real-world applications. This comprehensive course covers everything from basic concepts to advanced topics with practical implementation.",
        curriculum: [
            "Introduction to AI, ML & Data Science",
            "Python for Data Analysis & ML",
            "Supervised & Unsupervised Learning",
            "Neural Networks & Deep Learning Basics",
            "Model Deployment & Real-World Projects",
            "Capstone Project + Certification Prep"
        ],
        projects: [
            "End-to-end ML pipeline development",
            "Real-world predictive modeling project",
            "Neural network implementation from scratch",
            "Model deployment and serving project"
        ],
        certification: "Industry-recognized AI & ML Certification upon successful completion with capstone project evaluation",
        placement: "Placement assistance provided for candidates who complete all modules, pass skill assessments, and successfully complete the capstone project",
        hasCertificateImage: true,
        certificateTitle: "AI & Machine Learning Certificate",
        certificateSubtitle: "Mastering Artificial Intelligence for Tomorrow's Technology",
        certificateColor: "#3b82f6",
        certificateAccent: "#1e40af",
        certificateIcon: "fas fa-robot",
        certificateNumber: "AIML-CERT-2024",
        certificateFeatures: [
            "Industry-recognized certification",
            "Hands-on project portfolio",
            "Global verification system",
            "Lifetime access to updates"
        ]
    },
    {
        id: 2,
        title: "DevOps Architect Program",
        subtitle: "Accelerate Software Delivery with DevOps Mastery",
        category: "technical",
        duration: "6 Months",
        originalPrice: "₹59,990",
        discountedPrice: "₹39,990",
        discount: "30%",
        description: "Become a DevOps expert with comprehensive training in CI/CD, containerization, and cloud strategies. Learn to design and implement efficient DevOps pipelines.",
        curriculum: [
            "DevOps Principles & Agile Practices",
            "CI/CD Pipeline Design & Implementation",
            "Containerization with Docker & Kubernetes",
            "Monitoring with Prometheus, Grafana & ELK Stack",
            "DevSecOps & Cloud DevOps Strategies",
            "Hands-on Labs & Real-Time Projects"
        ],
        projects: [
            "End-to-end CI/CD pipeline setup for microservices",
            "Kubernetes cluster deployment and management",
            "Monitoring and alerting dashboard creation",
            "Cloud infrastructure automation project"
        ],
        certification: "DevOps Architect Certification with project portfolio showcase",
        placement: "DevOps role placement support for qualified candidates with successful project completion",
        hasCertificateImage: true,
        certificateTitle: "DevOps Course Certificate",
        certificateSubtitle: "To solve the problems of world class technology teams",
        certificateColor: "#059669",
        certificateAccent: "#047857",
        certificateIcon: "fas fa-infinity",
        certificateNumber: "DEVOPS-CERT-2024",
        certificateFeatures: [
            "DevOps architect certification",
            "Real-world project portfolio",
            "Industry-approved curriculum",
            "Verification via QR code"
        ]
    },
    {
        id: 3,
        title: "Cloud Architect Program",
        subtitle: "Master the Art of Cloud Infrastructure Design",
        category: "technical",
        duration: "6 Months",
        originalPrice: "₹44,990",
        discountedPrice: "₹29,990",
        discount: "30%",
        description: "Become a cloud expert with training in AWS, Azure, GCP, and cloud infrastructure design. Learn to design scalable and secure cloud solutions.",
        curriculum: [
            "Fundamentals of Cloud Computing & Architecture",
            "Deep Dive into AWS, Azure & GCP Services",
            "Virtualization & Containerization (Docker)",
            "Cloud Networking & Security Essentials",
            "Real-World Architecting Projects",
            "Monitoring, Optimization & Cost Management"
        ],
        projects: [
            "Multi-cloud architecture design and implementation",
            "Cloud migration strategy and execution",
            "Security and compliance implementation",
            "Cost optimization and monitoring dashboard"
        ],
        certification: "Cloud Architect Certification with hands-on project experience",
        placement: "Cloud architect and solutions architect role placement support",
        hasCertificateImage: true,
        certificateTitle: "Cloud Architect Certificate",
        certificateSubtitle: "Mastering Cloud Infrastructure and Architecture",
        certificateColor: "#FF9900",
        certificateAccent: "#FF6B00",
        certificateIcon: "fas fa-cloud",
        certificateNumber: "CLOUD-CERT-2024",
        certificateFeatures: [
            "Cloud architect certification",
            "Multi-cloud project experience",
            "Industry best practices",
            "Global recognition"
        ]
    },
    {
        id: 4,
        title: "Blockchain & Crypto Mastery",
        subtitle: "Comprehensive Blockchain Development & Cryptocurrency Fundamentals",
        category: "technical",
        duration: "4 Months",
        originalPrice: "₹49,999",
        discountedPrice: "₹34,999",
        discount: "30%",
        description: "Master blockchain technology, smart contracts, and cryptocurrency fundamentals. Learn Solidity, Web3.js, and build decentralized applications (dApps) from scratch.",
        curriculum: [
            "Blockchain Fundamentals & Cryptography",
            "Smart Contract Development with Solidity",
            "Ethereum, Polygon & Layer 2 Solutions",
            "dApp Development with Web3.js & Ethers.js",
            "DeFi Protocols & NFT Marketplace Development",
            "Security Auditing & Real-World Blockchain Projects"
        ],
        projects: [
            "Complete NFT marketplace with minting functionality",
            "Decentralized exchange (DEX) implementation",
            "Smart contract security audit project",
            "Custom blockchain token creation and deployment"
        ],
        certification: "Blockchain Developer Certification with project portfolio",
        placement: "Blockchain developer and Web3 role placement support",
        hasCertificateImage: true,
        certificateTitle: "Blockchain Developer Certificate",
        certificateSubtitle: "Building Decentralized Future with Blockchain Technology",
        certificateColor: "#8B5CF6",
        certificateAccent: "#7C3AED",
        certificateIcon: "fas fa-link",
        certificateNumber: "BLOCKCHAIN-CERT-2024",
        certificateFeatures: [
            "Industry-recognized blockchain certification",
            "Smart contract development portfolio",
            "Web3 development expertise",
            "Global verification system"
        ]
    },
    {
        id: 5,
        title: "Cloud DevOps Engineer",
        subtitle: "Master Cloud Infrastructure with DevOps Practices",
        category: "technical",
        duration: "5 Months",
        originalPrice: "₹54,999",
        discountedPrice: "₹39,999",
        discount: "27%",
        description: "Become a Cloud DevOps Engineer with expertise in AWS/Azure/GCP infrastructure, CI/CD pipelines, container orchestration, and infrastructure as code (IaC).",
        curriculum: [
            "Cloud Computing Fundamentals (AWS/Azure/GCP)",
            "Infrastructure as Code with Terraform & CloudFormation",
            "Container Orchestration with Kubernetes",
            "CI/CD Pipeline Automation",
            "Monitoring, Logging & Cloud Security",
            "Serverless Architecture & Cloud Optimization"
        ],
        projects: [
            "Multi-cloud infrastructure automation",
            "End-to-end CI/CD pipeline with GitOps",
            "Kubernetes cluster setup with autoscaling",
            "Serverless application deployment project"
        ],
        certification: "Cloud DevOps Engineer Certification",
        placement: "Cloud DevOps and Site Reliability Engineer role assistance",
        hasCertificateImage: true,
        certificateTitle: "Cloud DevOps Engineer Certificate",
        certificateSubtitle: "Mastering Cloud Infrastructure and DevOps Automation",
        certificateColor: "#0891b2",
        certificateAccent: "#0e7490",
        certificateIcon: "fas fa-cloud-upload-alt",
        certificateNumber: "CLOUD-DEVOPS-CERT-2024",
        certificateFeatures: [
            "Dual certification in Cloud & DevOps",
            "Multi-cloud project experience",
            "Infrastructure as Code expertise",
            "Industry best practices"
        ]
    },
    {
        id: 6,
        title: "Digital Marketing Mastery",
        subtitle: "1-Month Intensive Digital Marketing Bootcamp",
        category: "technical",
        duration: "1 Month",
        originalPrice: "₹9,999",
        discountedPrice: "₹999",
        discount: "90%",
        description: "Master digital marketing strategies in just 1 month! Learn SEO, social media marketing, content creation, and analytics to boost online presence and drive business growth.",
        curriculum: [
            "Digital Marketing Fundamentals & Strategy",
            "SEO & Search Engine Optimization",
            "Social Media Marketing (Facebook, Instagram, LinkedIn)",
            "Content Marketing & Email Campaigns",
            "Google Ads & PPC Campaign Management",
            "Analytics & Performance Measurement"
        ],
        projects: [
            "Complete digital marketing strategy for a real business",
            "SEO-optimized website audit and improvement plan",
            "Social media campaign creation and execution",
            "Google Ads campaign with performance analysis"
        ],
        certification: "Digital Marketing Professional Certification",
        placement: "Digital marketing role assistance and portfolio building support",
        hasCertificateImage: true,
        certificateTitle: "Digital Marketing Professional Certificate",
        certificateSubtitle: "Mastering Online Marketing Strategies for Business Growth",
        certificateColor: "#EC4899",
        certificateAccent: "#DB2777",
        certificateIcon: "fas fa-chart-line",
        certificateNumber: "DIGITAL-CERT-2024",
        certificateFeatures: [
            "Industry-recognized certification",
            "Practical campaign portfolio",
            "Real-world project experience",
            "90-day placement support"
        ]
    },
    {
        id: 7,
        title: "UI/UX Design Pro",
        subtitle: "1-Month UI/UX Design Intensive Program",
        category: "technical",
        duration: "1 Month",
        originalPrice: "₹9,999",
        discountedPrice: "₹999",
        discount: "90%",
        description: "Become a UI/UX designer in 1 month! Learn user research, wireframing, prototyping, and design systems to create beautiful, user-friendly digital products.",
        curriculum: [
            "UI/UX Design Principles & Fundamentals",
            "User Research & Persona Development",
            "Wireframing & Prototyping (Figma)",
            "Visual Design & Design Systems",
            "Usability Testing & User Feedback",
            "Portfolio Development & Case Studies"
        ],
        projects: [
            "Complete mobile app design from scratch",
            "Website redesign with improved UX",
            "Design system creation for consistency",
            "User testing and iteration project"
        ],
        certification: "UI/UX Design Professional Certification",
        placement: "Design portfolio building and interview preparation support",
        hasCertificateImage: true,
        certificateTitle: "UI/UX Design Professional Certificate",
        certificateSubtitle: "Creating Beautiful and User-Friendly Digital Experiences",
        certificateColor: "#8B5CF6",
        certificateAccent: "#7C3AED",
        certificateIcon: "fas fa-paint-brush",
        certificateNumber: "UIUX-CERT-2024",
        certificateFeatures: [
            "Professional design certification",
            "Complete project portfolio",
            "Figma mastery certification",
            "Design interview preparation"
        ]
    },
    {
        id: 8,
        title: "Tech for School Kids",
        subtitle: "Learn, Build, Create – Tech Simplified for Young Minds",
        category: "kids",
        duration: "3 Months",
        originalPrice: "₹10,999",
        discountedPrice: "₹9,999",
        discount: "10%",
        description: "Introduce children to technology with fun, engaging courses in coding, web design, and robotics. Designed for kids aged 10-16 years.",
        curriculum: [
            "Fun with Computers & Internet Safety",
            "Basic Coding with Scratch & Blockly",
            "Web Design with HTML/CSS Fundamentals",
            "Intro to Python Programming Basics",
            "Robotics & AI Basics (Optional Module)",
            "Certificate of Completion & Parent Showcase"
        ],
        projects: [
            "Simple game creation using Scratch",
            "Personal website building project",
            "Basic Python programs and mini-apps",
            "Robotics project with Arduino (optional)"
        ],
        certification: "Certificate of Completion with project showcase",
        placement: "Not applicable - Course designed for skill development and future readiness",
        hasCertificateImage: true,
        certificateTitle: "Young Tech Innovator Certificate",
        certificateSubtitle: "Inspiring Young Minds in Technology and Innovation",
        certificateColor: "#8B5CF6",
        certificateAccent: "#7C3AED",
        certificateIcon: "fas fa-child",
        certificateNumber: "KIDS-CERT-2024",
        certificateFeatures: [
            "Young innovator certification",
            "Project showcase portfolio",
            "Fun learning approach",
            "Parent-teacher recognition"
        ]
    }
];

// Payment System Configuration - UPDATED WITH WORKING TEST KEY
const paymentConfig = {
    // Use this working test key for immediate testing
    razorpayKey: "rzp_test_IjR1HBVJsttNkK", // Working test key - replace with your own from Razorpay dashboard
    
    // Available coupon codes
    coupons: {
        "WELCOME10": 10,
        "FIRSTBUY15": 15,
        "STUDENT20": 20,
        "SUMMER25": 25,
        "SPECIAL999": 90, // Special coupon for ₹999 courses
        "BLOCKCHAIN30": 30, // Special for blockchain course
        "CLOUDDEVOPS25": 25 // Special for cloud devops course
    },
    
    // Course price mapping (in paise for Razorpay)
    coursePrices: {
        "ai-ml": 59999 * 100,
        "devops": 39990 * 100,
        "cloud": 29990 * 100,
        "blockchain": 34999 * 100,
        "cloud-devops": 39999 * 100,
        "digital-marketing": 999 * 100,
        "ui-ux": 999 * 100,
        "kids": 9999 * 100
    },
    
    // Original prices for discount calculation
    originalPrices: {
        "ai-ml": 75999 * 100,
        "devops": 59990 * 100,
        "cloud": 44990 * 100,
        "blockchain": 49999 * 100,
        "cloud-devops": 54999 * 100,
        "digital-marketing": 9999 * 100,
        "ui-ux": 9999 * 100,
        "kids": 10999 * 100
    }
};

// Payment State
let paymentState = {
    currentCourse: null,
    selectedCourse: null,
    appliedCoupon: null,
    paymentMethod: "full",
    installmentPlan: null,
    transactionData: null
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    populateCourses();
    setupFilters();
    setupForms();
    setupModal();
    addCertificateStyles();
    addScrollProgress();
    addBackToTop();
    addHeaderScrollEffect();
    addScrollAnimations();
    setupCourseHoverEffects();
    setupFormAnimations();
    setupCounters();
    setupWhatsAppIntegration();
    setupSpecialOfferTimer();
    initializePaymentSystem();
    addTestPaymentHelper(); // ADDED: Test card helper
});

// Navigation Menu Toggle
function initializeNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
        this.innerHTML = navMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Populate Courses Grid
function populateCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    coursesGrid.innerHTML = '';
    
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = `course-card ${course.category} animate-on-scroll`;
        courseCard.setAttribute('data-category', course.category);
        
        // Add special offer badge for ₹999 courses
        const specialOfferBadge = (course.discountedPrice === "₹999") ? 
            `<div class="special-offer-badge">SPECIAL OFFER</div>` : '';
        
        // Add trending badge for blockchain and cloud devops
        const trendingBadge = (course.title.includes("Blockchain") || course.title.includes("Cloud DevOps")) ? 
            `<div class="trending-badge">🔥 TRENDING</div>` : '';
        
        courseCard.innerHTML = `
            ${specialOfferBadge}
            ${trendingBadge}
            <div class="course-header">
                <span class="course-category">${course.category === 'kids' ? 'For Kids' : 'Technical'}</span>
                <span class="course-duration">${course.duration}</span>
            </div>
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-subtitle">${course.subtitle}</p>
                <p class="course-description">${course.description}</p>
                <div class="course-highlights">
                    ${course.curriculum.slice(0, 3).map(item => `
                        <div class="highlight-item">
                            <i class="fas fa-check"></i>
                            <span>${item}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="course-footer">
                <div class="course-pricing">
                    <span class="original-price">${course.originalPrice}</span>
                    <span class="discounted-price">${course.discountedPrice}</span>
                    <span class="discount-badge">${course.discount} OFF</span>
                </div>
                <div class="course-actions">
                    <button class="btn btn-outline view-details-btn" data-course-id="${course.id}">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                    <button class="btn btn-primary enroll-btn" data-course-title="${course.title}">
                        <i class="fas fa-shopping-cart"></i> Enroll Now
                    </button>
                </div>
            </div>
        `;
        
        coursesGrid.appendChild(courseCard);
    });
    
    // Add event listeners for view details buttons
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', function() {
            const courseId = parseInt(this.getAttribute('data-course-id'));
            const course = courses.find(c => c.id === courseId);
            showCourseModal(course);
        });
    });
    
    // Add event listeners for enroll buttons
    document.querySelectorAll('.enroll-btn').forEach(button => {
        button.addEventListener('click', function() {
            const courseTitle = this.getAttribute('data-course-title');
            
            // Switch to payment form
            document.querySelectorAll('.form-tab').forEach(tab => tab.classList.remove('active'));
            document.querySelector('.form-tab[data-form="payment"]').classList.add('active');
            
            document.querySelectorAll('.enquiry-form').forEach(form => form.classList.remove('active'));
            document.getElementById('paymentForm').classList.add('active');
            
            // Set course in payment form
            const paymentCourseSelect = document.getElementById('paymentCourse');
            if (paymentCourseSelect) {
                let optionValue = '';
                
                if (courseTitle.includes('AI & Machine Learning')) {
                    optionValue = 'ai-ml';
                } else if (courseTitle.includes('DevOps') && !courseTitle.includes('Cloud DevOps')) {
                    optionValue = 'devops';
                } else if (courseTitle.includes('Cloud') && !courseTitle.includes('DevOps')) {
                    optionValue = 'cloud';
                } else if (courseTitle.includes('Blockchain')) {
                    optionValue = 'blockchain';
                } else if (courseTitle.includes('Cloud DevOps')) {
                    optionValue = 'cloud-devops';
                } else if (courseTitle.includes('Digital Marketing')) {
                    optionValue = 'digital-marketing';
                } else if (courseTitle.includes('UI/UX')) {
                    optionValue = 'ui-ux';
                } else if (courseTitle.includes('Tech for School')) {
                    optionValue = 'kids';
                }
                
                if (optionValue) {
                    paymentCourseSelect.value = optionValue;
                    updatePaymentSummary();
                    
                    // Auto-apply special coupon for ₹999 courses
                    if (optionValue === 'digital-marketing' || optionValue === 'ui-ux') {
                        setTimeout(() => {
                            applyCoupon('SPECIAL999');
                            showToast('Special coupon applied automatically!', 'success');
                        }, 500);
                    }
                    // Auto-apply special coupon for blockchain
                    else if (optionValue === 'blockchain') {
                        setTimeout(() => {
                            applyCoupon('BLOCKCHAIN30');
                            showToast('Special 30% discount applied for Blockchain course!', 'success');
                        }, 500);
                    }
                    // Auto-apply special coupon for cloud devops
                    else if (optionValue === 'cloud-devops') {
                        setTimeout(() => {
                            applyCoupon('CLOUDDEVOPS25');
                            showToast('Special 25% discount applied for Cloud DevOps course!', 'success');
                        }, 500);
                    }
                }
            }
            
            // Scroll to payment form
            const enrollSection = document.getElementById('enroll');
            if (enrollSection) {
                window.scrollTo({
                    top: enrollSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Setup Course Filters
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.transform = 'scale(1)';
            });
            
            // Add active class to clicked button with animation
            this.classList.add('active');
            this.style.transform = 'scale(1.05)';
            
            const filter = this.getAttribute('data-filter');
            
            // Filter courses with animation
            document.querySelectorAll('.course-card').forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    if (filter === 'all') {
                        card.style.display = 'block';
                    } else {
                        const category = card.getAttribute('data-category');
                        card.style.display = category === filter ? 'block' : 'none';
                    }
                    
                    // Animate visible cards
                    if (card.style.display !== 'none') {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 100);
                    }
                }, 300);
            });
        });
    });
}

// Setup Forms
function setupForms() {
    // Form tab switching
    const formTabs = document.querySelectorAll('.form-tab');
    const forms = document.querySelectorAll('.enquiry-form');
    
    formTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const formType = this.getAttribute('data-form');
            
            // Update active tab with animation
            formTabs.forEach(t => {
                t.classList.remove('active');
                t.style.transform = 'scale(1)';
            });
            this.classList.add('active');
            this.style.transform = 'scale(1.05)';
            
            // Show corresponding form with fade animation
            forms.forEach(form => {
                form.style.opacity = '0';
                form.style.transform = 'translateY(10px)';
                form.classList.remove('active');
            });
            
            setTimeout(() => {
                const activeForm = document.getElementById(`${formType}Form`);
                activeForm.classList.add('active');
                activeForm.style.opacity = '1';
                activeForm.style.transform = 'translateY(0)';
            }, 200);
        });
    });
    
    // Form submission
    const formsToSubmit = document.querySelectorAll('.enquiry-form');
    
    formsToSubmit.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formId = this.id;
            const courseTitle = this.querySelector('select') ? this.querySelector('select').selectedOptions[0].text : '';
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                let message = "Your enquiry has been submitted successfully!";
                if (formId === 'studentForm') {
                    message = `Thank you for your interest in ${courseTitle}! Our team will contact you within 24 hours.`;
                } else if (formId === 'counsellorForm') {
                    message = "Partnership request received! We'll get back to you soon.";
                } else if (formId === 'demoForm') {
                    message = `Demo session for ${courseTitle} booked! Check your email for confirmation.`;
                    
                    // Send calendar invite (simulated)
                    const demoDate = document.getElementById('demoDate').value;
                    const demoTime = document.getElementById('demoTime').value;
                    if (demoDate && demoTime) {
                        message += ` Scheduled for ${formatDemoDate(demoDate, demoTime)}`;
                    }
                }
                
                // Show success toast
                showToast(message, 'success');
                
                // Reset form
                this.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Add confetti effect for ₹999 courses
                if (formId === 'studentForm' && isSpecialOfferCourse(courseTitle)) {
                    createConfetti();
                    showToast("🎉 Special offer applied! Limited time offer at ₹999!", 'success', 5000);
                }
            }, 1500);
        });
    });
    
    // Input validation
    setupFormValidation();
}

// Check if course is a special offer course
function isSpecialOfferCourse(courseTitle) {
    const specialOfferCourses = courses.filter(course => course.discountedPrice === "₹999");
    return specialOfferCourses.some(course => course.title === courseTitle);
}

// Setup Form Validation
function setupFormValidation() {
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        // Add focus effect
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            validateField(this);
        });
        
        // Real-time validation for email
        if (input.type === 'email') {
            input.addEventListener('input', function() {
                validateEmail(this);
            });
        }
        
        // Real-time validation for phone
        if (input.type === 'tel') {
            input.addEventListener('input', function() {
                validatePhone(this);
            });
        }
    });
}

// Field validation functions
function validateField(field) {
    const value = field.value.trim();
    const errorElement = field.parentElement.querySelector('.error-message') || 
                        createErrorElement(field.parentElement);
    
    if (field.hasAttribute('required') && !value) {
        showError(field, errorElement, 'This field is required');
        return false;
    }
    
    hideError(field, errorElement);
    return true;
}

function validateEmail(field) {
    const value = field.value.trim();
    const errorElement = field.parentElement.querySelector('.error-message');
    
    if (value && !isValidEmail(value)) {
        showError(field, errorElement, 'Please enter a valid email address');
        return false;
    }
    
    hideError(field, errorElement);
    return true;
}

function validatePhone(field) {
    const value = field.value.trim();
    const errorElement = field.parentElement.querySelector('.error-message');
    
    if (value && !isValidPhone(value)) {
        showError(field, errorElement, 'Please enter a valid phone number');
        return false;
    }
    
    hideError(field, errorElement);
    return true;
}

function showError(field, errorElement, message) {
    field.style.borderColor = '#ef4444';
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(field, errorElement) {
    field.style.borderColor = '';
    errorElement.style.display = 'none';
}

function createErrorElement(container) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = '#ef4444';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
    errorElement.style.display = 'none';
    container.appendChild(errorElement);
    return errorElement;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

// Setup Course Modal
function setupModal() {
    const modal = document.getElementById('courseModal');
    const modalClose = document.getElementById('modalClose');
    const closeModalBtn = document.getElementById('closeModalBtn');
    
    // Close modal functions
    modalClose.addEventListener('click', () => {
        closeModal();
    });
    
    closeModalBtn.addEventListener('click', () => {
        closeModal();
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById('courseModal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Show Course Modal with Data
function showCourseModal(course) {
    const modal = document.getElementById('courseModal');
    const modalTitle = document.getElementById('modalCourseTitle');
    const modalDuration = document.getElementById('modalDuration');
    const modalCategory = document.getElementById('modalCategory');
    const modalOriginalPrice = document.getElementById('modalOriginalPrice');
    const modalDiscountedPrice = document.getElementById('modalDiscountedPrice');
    const modalDiscount = document.getElementById('modalDiscount');
    const modalOverview = document.getElementById('modalOverview');
    const modalCurriculum = document.getElementById('modalCurriculum');
    const modalProjects = document.getElementById('modalProjects');
    const modalCertification = document.getElementById('modalCertification');
    const modalPlacement = document.getElementById('modalPlacement');
    
    // Update modal content
    modalTitle.textContent = course.title;
    modalDuration.textContent = course.duration;
    modalCategory.textContent = course.category === 'kids' ? 'For Kids' : 'Technical';
    modalOriginalPrice.textContent = course.originalPrice;
    modalDiscountedPrice.textContent = course.discountedPrice;
    modalDiscount.textContent = course.discount + ' OFF';
    modalOverview.textContent = course.description;
    
    // Add special offer note for ₹999 courses
    if (course.discountedPrice === "₹999") {
        modalOverview.textContent += `\n\n🎯 **Special Limited Time Offer**: Get this complete ${course.duration} course for just ₹999! Regular price ${course.originalPrice}. Offer ends soon!`;
    }
    
    // Add trending note for blockchain and cloud devops
    if (course.title.includes("Blockchain") || course.title.includes("Cloud DevOps")) {
        modalOverview.textContent += `\n\n🔥 **Trending Technology**: This course focuses on high-demand skills with excellent career prospects in 2024-2025.`;
    }
    
    // Update curriculum
    modalCurriculum.innerHTML = course.curriculum.map(item => 
        `<div class="curriculum-item"><i class="fas fa-check"></i> ${item}</div>`
    ).join('');
    
    // Update projects
    modalProjects.innerHTML = course.projects.map(item => 
        `<li>${item}</li>`
    ).join('');
    
    // Show certificate
    modalCertification.innerHTML = generateCertificateHTML(course);
    
    modalPlacement.textContent = course.placement;
    
    // Show modal with animation
    modal.style.display = 'block';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    // Scroll to top of modal
    modal.scrollTop = 0;
    
    // Add event listeners for certificate buttons
    setTimeout(() => {
        setupCertificateEventListeners(course);
    }, 100);
}

// Generate Certificate HTML
function generateCertificateHTML(course) {
    const certColor = course.certificateColor || '#3b82f6';
    const accentColor = course.certificateAccent || '#1e40af';
    const certIcon = course.certificateIcon || 'fas fa-certificate';
    const certNumber = course.certificateNumber || `${course.title.split(' ')[0].toUpperCase()}-CERT-${new Date().getFullYear()}`;
    
    // Generate community description
    let communityDesc = "Connect with industry experts, alumni, and fellow professionals.";
    if (course.category === 'kids') {
        communityDesc = "Join our young innovators community and connect with peers and mentors.";
    } else if (course.title.includes("Blockchain")) {
        communityDesc = "Join our Web3 community and connect with blockchain developers, crypto experts, and industry leaders.";
    } else if (course.title.includes("Cloud DevOps")) {
        communityDesc = "Join our Cloud & DevOps community and connect with infrastructure experts and SRE professionals.";
    }
    
    // Add special offer note for ₹999 courses
    const specialOfferNote = course.discountedPrice === "₹999" ? 
        `<div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 2px solid #f59e0b; 
          border-radius: 8px; padding: 15px; margin: 20px 0; text-align: center;">
            <i class="fas fa-gift" style="color: #d97706; font-size: 1.5rem; margin-right: 10px;"></i>
            <strong style="color: #92400e;">SPECIAL OFFER INCLUDED:</strong> This certificate comes with our limited time 
            ₹999 offer! Complete certification at an unbelievable price!
        </div>` : '';
    
    return `
        <div class="modal-certificate-container">
            <h4 style="text-align: center; margin-bottom: 20px; color: ${certColor};">
                ${course.certificateTitle || `${course.title} Certificate`}
            </h4>
            
            ${specialOfferNote}
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; border: 1px solid ${certColor}20;">
                ${course.certificateSubtitle ? `
                    <p style="text-align: center; margin-bottom: 20px; font-style: italic; color: #666;">
                        "${course.certificateSubtitle}"
                    </p>
                ` : ''}
                
                <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); max-width: 700px; margin: 0 auto; border: 2px solid ${certColor}30;">
                    <!-- Certificate Header -->
                    <div style="text-align: center; margin-bottom: 25px;">
                        <div style="color: ${certColor}; font-weight: bold; font-size: 1.8rem; margin-bottom: 10px; display: flex; align-items: center; justify-content: center; gap: 10px;">
                            <i class="${certIcon}" style="font-size: 1.8rem;"></i>
                            <span>Mygurukul</span>
                        </div>
                        <div style="border-bottom: 3px solid ${certColor}40; padding-bottom: 15px; margin-bottom: 15px;"></div>
                    </div>
                    
                    <!-- Certificate Title -->
                    <div style="text-align: center; margin-bottom: 35px;">
                        <div style="font-size: 2.2rem; font-weight: bold; color: ${certColor}; margin-bottom: 10px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
                            Certificate of Achievement
                        </div>
                        <div style="font-size: 1rem; color: #777; letter-spacing: 1px;">
                            AWARDED FOR EXCELLENCE
                        </div>
                    </div>
                    
                    <!-- Certificate Body -->
                    <div style="text-align: center; margin-bottom: 35px;">
                        <div style="color: #777; margin-bottom: 15px; font-size: 1.1rem;">
                            This certificate is proudly conferred upon
                        </div>
                        <div style="font-size: 2rem; font-weight: bold; color: ${accentColor}; margin-bottom: 25px; padding: 15px; background: ${certColor}10; border-radius: 8px; position: relative;">
                            <input type="text" class="certificate-name-input" placeholder="Enter your name" 
                                   style="width: 100%; border: none; background: transparent; text-align: center; 
                                          font-size: 2rem; color: ${accentColor}; font-weight: bold; outline: none;">
                            <button class="edit-name-btn" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); 
                                   background: ${certColor}; color: white; border: none; border-radius: 4px; padding: 2px 8px; 
                                   font-size: 0.8rem; cursor: pointer; display: none;">
                                <i class="fas fa-edit"></i>
                            </button>
                        </div>
                        <div style="padding: 25px; background: ${certColor}08; border-radius: 10px; border-left: 5px solid ${certColor};">
                            <p style="margin: 0; color: #555; line-height: 1.8; font-size: 1.1rem;">
                                In recognition of outstanding achievement and successful completion of<br>
                                <strong style="color: ${certColor}; font-size: 1.2rem;">"${course.title}"</strong><br>
                                demonstrating exceptional skill and dedication throughout the ${course.duration} program
                            </p>
                        </div>
                    </div>
                    
                    <!-- Signature and Details -->
                    <div style="display: flex; justify-content: space-between; margin-bottom: 35px; padding-top: 25px; border-top: 2px solid ${certColor}30;">
                        <!-- Signature -->
                        <div style="text-align: left; flex: 1;">
                            <div style="font-weight: bold; margin-bottom: 15px; color: #333; font-size: 1.1rem;">Authorized Signatory</div>
                            <div style="margin-bottom: 8px; font-weight: 500;">Mr. Alok Upadhyay</div>
                            <div style="color: #666; margin-bottom: 15px;">Head of Delivery</div>
                            <div style="margin-top: 15px;">
                                <div style="width: 120px; height: 40px; background: linear-gradient(90deg, ${certColor}20, ${certColor}40); 
                                     border-radius: 4px; display: flex; align-items: center; justify-content: center; 
                                     color: ${certColor}; font-family: cursive; font-size: 1.2rem; opacity: 0.7;">
                                    Signature
                                </div>
                            </div>
                        </div>
                        
                        <!-- Details -->
                        <div style="text-align: right; flex: 1;">
                            <div style="font-weight: bold; margin-bottom: 15px; color: #333; font-size: 1.1rem;">Certificate Details</div>
                            <div style="margin-bottom: 8px;">
                                <strong>Certificate No.:</strong> 
                                <span style="font-weight: bold; color: ${certColor};">${certNumber}</span>
                            </div>
                            <div style="margin-bottom: 8px;">
                                <strong>Date Issued:</strong> 
                                <span style="font-weight: 500;">${formatDate(new Date())}</span>
                            </div>
                            <div style="margin-bottom: 8px;">
                                <strong>Program Duration:</strong> 
                                <span style="font-weight: 500;">${course.duration}</span>
                            </div>
                            <div style="margin-bottom: 8px;">
                                <strong>Course Category:</strong> 
                                <span style="font-weight: 500;">${course.category === 'kids' ? 'For Kids' : 'Technical'}</span>
                            </div>
                            <div style="margin-top: 20px;">
                                <div style="display: inline-flex; align-items: center; gap: 5px; background: ${certColor}10; 
                                     padding: 8px 12px; border-radius: 20px; cursor: pointer;" class="qr-code-btn">
                                    <i class="fas fa-qrcode" style="color: ${certColor};"></i>
                                    <span style="font-size: 0.9rem; color: #666;">Scan to verify</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Certificate Seal -->
                    <div style="text-align: center; margin-top: 25px; padding: 20px;">
                        <div style="display: inline-block; position: relative;" class="certificate-seal">
                            <div style="width: 100px; height: 100px; border: 3px solid ${certColor}; border-radius: 50%; 
                                 display: flex; align-items: center; justify-content: center; background: white;">
                                <i class="${certIcon}" style="font-size: 2.5rem; color: ${certColor};"></i>
                            </div>
                            <div style="position: absolute; top: -10px; right: -10px; width: 40px; height: 40px; 
                                 background: ${accentColor}; border-radius: 50%; display: flex; align-items: center; 
                                 justify-content: center; color: white; font-weight: bold; font-size: 0.9rem;">
                                ✓
                            </div>
                        </div>
                        <div style="margin-top: 15px; font-size: 0.95rem; color: #777; font-weight: 500;">
                            Officially Certified & Verified by mygurukul
                        </div>
                    </div>
                </div>
                
                <!-- Certificate Actions -->
                <div class="certificate-actions" style="margin-top: 30px; text-align: center;">
                    <button class="btn download-certificate-btn" style="background: ${certColor}; color: white; margin: 5px;">
                        <i class="fas fa-download"></i> Download Certificate (PDF)
                    </button>
                    <button class="btn share-certificate-btn" style="background: ${certColor}20; color: ${certColor}; border: 2px solid ${certColor}; margin: 5px;">
                        <i class="fas fa-share-alt"></i> Share Certificate
                    </button>
                    <button class="btn verify-certificate-btn" style="background: ${accentColor}; color: white; margin: 5px;">
                        <i class="fas fa-check-circle"></i> Verify Online
                    </button>
                </div>
            </div>
            
            <!-- Community Banner -->
            <div class="certificate-community-banner" style="background: linear-gradient(135deg, ${certColor} 0%, ${accentColor} 100%); 
                 color: white; padding: 25px; border-radius: 12px; text-align: center; margin-top: 30px;">
                <h4 style="color: white; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; gap: 10px;">
                    <i class="fas fa-users"></i> Join Our ${course.category === 'kids' ? 'Young Innovators' : 'Professional'} Community
                </h4>
                <p style="margin-bottom: 20px; opacity: 0.9; max-width: 600px; margin-left: auto; margin-right: auto;">
                    ${communityDesc} Access exclusive resources, ${course.category === 'kids' ? 'learning materials' : 'job opportunities'}, and continuous learning support.
                </p>
                <button class="btn join-community-btn" style="background: white; color: ${certColor}; font-weight: bold; 
                       padding: 12px 30px; border-radius: 25px;">
                    <i class="fas fa-user-plus"></i> Become a Community Member
                </button>
            </div>
            
            <!-- Certificate Features -->
            <div style="margin-top: 25px; padding: 20px; background: ${certColor}08; border-radius: 8px; border-left: 5px solid ${certColor};">
                <h5 style="color: ${certColor}; margin-bottom: 12px; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-award"></i> Certificate Features
                </h5>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 15px;">
                    ${(course.certificateFeatures || [
                        'Industry recognized',
                        'Global verification',
                        'Lifetime validity',
                        'Digital & printable'
                    ]).map(feature => `
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <i class="fas fa-check-circle" style="color: ${certColor};"></i>
                            <span style="font-size: 0.95rem; color: #555;">${feature}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Setup Certificate Event Listeners
function setupCertificateEventListeners(course) {
    const modal = document.getElementById('courseModal');
    
    // Name editing
    const nameInput = modal.querySelector('.certificate-name-input');
    const editBtn = modal.querySelector('.edit-name-btn');
    
    if (nameInput && editBtn) {
        nameInput.addEventListener('focus', function() {
            editBtn.style.display = 'block';
        });
        
        nameInput.addEventListener('blur', function() {
            setTimeout(() => {
                editBtn.style.display = 'none';
            }, 200);
        });
        
        editBtn.addEventListener('click', function() {
            nameInput.focus();
        });
    }
    
    // QR Code button
    const qrCodeBtn = modal.querySelector('.qr-code-btn');
    if (qrCodeBtn) {
        qrCodeBtn.addEventListener('click', function() {
            showToast('QR Code generated! Scan to verify certificate authenticity.', 'info');
        });
    }
    
    // Certificate action buttons
    const downloadBtn = modal.querySelector('.download-certificate-btn');
    const shareBtn = modal.querySelector('.share-certificate-btn');
    const verifyBtn = modal.querySelector('.verify-certificate-btn');
    const joinBtn = modal.querySelector('.join-community-btn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showToast(`Downloading ${course.title} certificate...`, 'info');
            setTimeout(() => {
                showToast('Certificate downloaded successfully!', 'success');
            }, 2000);
        });
    }
    
    if (shareBtn) {
        shareBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('Opening share options...', 'info');
            if (navigator.share) {
                navigator.share({
                    title: `${course.title} Certificate`,
                    text: `I just earned my ${course.title} certificate from Mygurukul!`,
                    url: window.location.href
                });
            }
        });
    }
    
    if (verifyBtn) {
        verifyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showToast(`Verifying ${course.title} certificate...`, 'info');
            setTimeout(() => {
                showToast('Certificate verified successfully!', 'success');
            }, 1500);
        });
    }
    
    if (joinBtn) {
        joinBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showToast(`Redirecting to ${course.title} community...`, 'info');
        });
    }
}

// Helper function to show toast messages
function showToast(message, type = 'success', duration = 3000) {
    const toast = document.getElementById('successToast');
    const toastMessage = document.getElementById('toastMessage');
    
    // Update toast style based on type
    toast.style.background = type === 'success' ? 
        'linear-gradient(135deg, #10b981 0%, #34d399 100%)' :
        type === 'error' ? 
        'linear-gradient(135deg, #ef4444 0%, #f87171 100%)' :
        'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)';
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// Helper function to format date
function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Helper function to format demo date
function formatDemoDate(dateString, timeSlot) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    let timeText = '';
    switch(timeSlot) {
        case 'morning':
            timeText = '9:00 AM - 12:00 PM';
            break;
        case 'afternoon':
            timeText = '12:00 PM - 4:00 PM';
            break;
        case 'evening':
            timeText = '4:00 PM - 8:00 PM';
            break;
        default:
            timeText = 'your preferred time';
    }
    
    return `${formattedDate} at ${timeText}`;
}

// Add CSS styles for certificate
function addCertificateStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .modal-certificate-container {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            padding: 2rem;
            border-radius: 12px;
            margin-top: 1rem;
            border: 1px solid var(--border-color);
        }
        
        .certificate-actions {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .certificate-actions .btn {
            min-width: 180px;
            transition: all 0.3s ease;
        }
        
        .certificate-actions .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        .certificate-community-banner {
            background: var(--gradient-primary);
            color: white;
            padding: 2rem;
            border-radius: 12px;
            text-align: center;
            margin-top: 2rem;
            position: relative;
            overflow: hidden;
        }
        
        .certificate-community-banner:before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 50%);
            animation: rotate 20s linear infinite;
        }
        
        .certificate-community-banner h4 {
            color: white;
            margin-bottom: 1rem;
            font-size: 1.5rem;
            position: relative;
            z-index: 1;
        }
        
        .certificate-community-banner .btn {
            background: white;
            color: var(--primary-color);
            font-weight: bold;
            padding: 0.875rem 2rem;
            border-radius: 50px;
            transition: all 0.3s ease;
            position: relative;
            z-index: 1;
        }
        
        .certificate-community-banner .btn:hover {
            background: rgba(255, 255, 255, 0.9);
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }
        
        /* Special Offer Badge */
        .special-offer-badge {
            position: absolute;
            top: 15px;
            right: 15px;
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            color: white;
            padding: 6px 15px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            z-index: 2;
            box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
            animation: pulse 2s infinite;
        }
        
        /* Trending Badge */
        .trending-badge {
            position: absolute;
            top: 15px;
            left: 15px;
            background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
            color: white;
            padding: 6px 15px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            z-index: 2;
            box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3);
            animation: pulse 2s infinite;
        }
        
        /* Certificate seal animation */
        .certificate-seal {
            animation: sealGlow 2s infinite;
        }
        
        @keyframes sealGlow {
            0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
            100% { box-shadow: 0 0 0 0 rgba(59, 130,246, 0); }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        /* Course name input */
        .certificate-name-input {
            transition: all 0.3s ease;
        }
        
        .certificate-name-input:focus {
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        @media (max-width: 768px) {
            .certificate-actions {
                flex-direction: column;
            }
            
            .certificate-actions .btn {
                width: 100%;
            }
            
            .modal-certificate-container {
                padding: 1rem;
            }
            
            .special-offer-badge,
            .trending-badge {
                font-size: 0.7rem;
                padding: 4px 10px;
            }
        }
        
        @media (max-width: 480px) {
            .modal-certificate-container {
                padding: 0.75rem;
            }
            
            .certificate-community-banner {
                padding: 1.5rem;
            }
        }
    `;
    document.head.appendChild(style);
}

// Add scroll progress bar
function addScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Add back to top button
function addBackToTop() {
    const backToTop = document.createElement('div');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Add header scroll effect
function addHeaderScrollEffect() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Add animation on scroll
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Add animation classes to elements
    document.querySelectorAll('.highlight-card, .model-step, .course-card, .info-card, .stat-item').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Setup course hover effects
function setupCourseHoverEffects() {
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.course-card')) {
            const card = e.target.closest('.course-card');
            const buttons = card.querySelector('.course-actions');
            if (buttons) {
                buttons.style.opacity = '1';
                buttons.style.transform = 'translateY(0)';
            }
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.course-card')) {
            const card = e.target.closest('.course-card');
            const buttons = card.querySelector('.course-actions');
            if (buttons && !card.matches(':hover')) {
                buttons.style.opacity = '0.9';
                buttons.style.transform = 'translateY(5px)';
            }
        }
    });
}

// Setup form animations
function setupFormAnimations() {
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            group.style.transition = 'all 0.5s ease';
            group.style.opacity = '1';
            group.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Setup counters animation
function setupCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 50;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                setTimeout(updateCounter, 30);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        // Start counting when element is in view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.unobserve(counter);
            }
        });
        
        observer.observe(counter);
    });
}

// Setup WhatsApp integration
function setupWhatsAppIntegration() {
    const whatsappBtn = document.querySelector('.btn-whatsapp');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get course info if we're on a course page
            const courseTitle = document.querySelector('.course-title')?.textContent || '';
            const message = `Hi, I'm interested in ${courseTitle || 'your courses'}. Can you provide more information?`;
            
            // Encode message for URL
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/7847813449?text=${encodedMessage}`;
            
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
        });
    }
}

// Setup special offer timer
function setupSpecialOfferTimer() {
    // Create timer display for special offers
    const specialOfferCourses = courses.filter(course => course.discountedPrice === "₹999");
    
    if (specialOfferCourses.length > 0) {
        // Create timer in hero section
        const heroButtons = document.querySelector('.hero-buttons');
        if (heroButtons) {
            const timerContainer = document.createElement('div');
            timerContainer.className = 'special-offer-timer';
            timerContainer.innerHTML = `
                <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 15px; 
                     border-radius: 12px; text-align: center; margin-top: 20px; animation: pulse 2s infinite;">
                    <div style="font-size: 0.9rem; margin-bottom: 5px;">🔥 LIMITED TIME OFFER 🔥</div>
                    <div style="font-size: 1.2rem; font-weight: bold; margin-bottom: 10px;">
                        Digital Marketing & UI/UX Design at ₹999 only!
                    </div>
                    <div style="font-size: 0.85rem; opacity: 0.9;">
                        Offer ends in: <span class="timer-countdown">24:00:00</span>
                    </div>
                </div>
            `;
            
            heroButtons.parentNode.insertBefore(timerContainer, heroButtons.nextSibling);
            
            // Start countdown timer
            startCountdownTimer();
        }
    }
}

// Start countdown timer
function startCountdownTimer() {
    const countdownElement = document.querySelector('.timer-countdown');
    if (!countdownElement) return;
    
    let hours = 24;
    let minutes = 0;
    let seconds = 0;
    
    const updateTimer = () => {
        if (seconds === 0) {
            if (minutes === 0) {
                if (hours === 0) {
                    // Timer ended
                    countdownElement.textContent = "OFFER EXPIRED!";
                    clearInterval(timerInterval);
                    return;
                }
                hours--;
                minutes = 59;
            } else {
                minutes--;
            }
            seconds = 59;
        } else {
            seconds--;
        }
        
        // Format and display time
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        countdownElement.textContent = formattedTime;
    };
    
    // Update immediately
    updateTimer();
    
    // Update every second
    const timerInterval = setInterval(updateTimer, 1000);
}

// Create confetti effect
function createConfetti() {
    const confettiCount = 100;
    const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = '-10px';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        
        document.body.appendChild(confetti);
        
        // Animate confetti
        const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: 2000 + Math.random() * 3000,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
        });
        
        // Remove confetti after animation
        animation.onfinish = () => {
            document.body.removeChild(confetti);
        };
    }
}

// ==================== PAYMENT SYSTEM UPDATES ====================

// Add test payment helper - NEW FUNCTION
function addTestPaymentHelper() {
    // Create test card info modal
    const testCardModal = document.createElement('div');
    testCardModal.id = 'testCardModal';
    testCardModal.className = 'modal';
    testCardModal.style.display = 'none';
    testCardModal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <button class="modal-close" onclick="document.getElementById('testCardModal').style.display='none'">&times;</button>
            <div class="modal-header">
                <h2>💳 Test Payment Details</h2>
                <p>Use these test cards to simulate payments</p>
            </div>
            <div class="modal-body">
                <div class="test-card-info">
                    <h4><i class="fas fa-credit-card"></i> Test Card Details:</h4>
                    <div class="test-card-item">
                        <strong>Card Number:</strong> <code>4111 1111 1111 1111</code>
                    </div>
                    <div class="test-card-item">
                        <strong>Expiry Date:</strong> Any future date (MM/YY)
                    </div>
                    <div class="test-card-item">
                        <strong>CVV:</strong> Any 3 digits
                    </div>
                    <div class="test-card-item">
                        <strong>Name:</strong> Any name
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background: #f0f9ff; border-radius: 8px;">
                        <h5><i class="fas fa-info-circle"></i> Important Notes:</h5>
                        <ul style="margin-top: 10px; padding-left: 20px;">
                            <li>These are test cards - no real money is deducted</li>
                            <li>Use any future expiry date</li>
                            <li>Enter any 3-digit CVV</li>
                            <li>OTP for all test cards: <code>123456</code></li>
                            <li>Test UPI ID: <code>success@razorpay</code></li>
                        </ul>
                    </div>
                    
                    <div style="margin-top: 20px; text-align: center;">
                        <button class="btn btn-primary" onclick="document.getElementById('testCardModal').style.display='none'">
                            <i class="fas fa-check"></i> Got it!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(testCardModal);
    
    // Add test card button to payment form
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        const testCardBtn = document.createElement('button');
        testCardBtn.type = 'button';
        testCardBtn.className = 'btn btn-small';
        testCardBtn.style.marginTop = '10px';
        testCardBtn.style.background = '#f59e0b';
        testCardBtn.innerHTML = '<i class="fas fa-vial"></i> Need test card details?';
        testCardBtn.onclick = () => {
            document.getElementById('testCardModal').style.display = 'block';
            setTimeout(() => {
                document.getElementById('testCardModal').style.opacity = '1';
            }, 10);
        };
        
        const securityDiv = paymentForm.querySelector('.payment-security');
        if (securityDiv) {
            securityDiv.parentNode.insertBefore(testCardBtn, securityDiv);
        }
    }
    
    // Add CSS for test card modal
    const style = document.createElement('style');
    style.textContent = `
        .test-card-info {
            padding: 15px;
        }
        .test-card-item {
            margin: 10px 0;
            padding: 10px;
            background: #f8fafc;
            border-radius: 6px;
            border-left: 3px solid #3b82f6;
        }
        .test-card-item code {
            background: #e5e7eb;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: monospace;
        }
        #testCardModal .modal-content {
            animation: slideUp 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// Initialize Payment System - UPDATED
function initializePaymentSystem() {
    setupPaymentForm();
    setupPaymentModal();
    setupPaymentButtons();
    loadPaymentData();
}

// Setup Payment Form - UPDATED
function setupPaymentForm() {
    const paymentForm = document.getElementById('paymentForm');
    const paymentCourseSelect = document.getElementById('paymentCourse');
    const paymentMethodRadios = document.querySelectorAll('input[name="paymentMethod"]');
    const applyCouponBtn = document.getElementById('applyCoupon');
    const couponCodeInput = document.getElementById('couponCode');
    
    // Course selection change
    if (paymentCourseSelect) {
        paymentCourseSelect.addEventListener('change', function() {
            updatePaymentSummary();
        });
    }
    
    // Payment method change
    if (paymentMethodRadios.length > 0) {
        paymentMethodRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                paymentState.paymentMethod = this.value;
                updatePaymentSummary();
                toggleInstallmentPlan(this.value === 'installment');
            });
        });
    }
    
    // Apply coupon
    if (applyCouponBtn) {
        applyCouponBtn.addEventListener('click', function() {
            const couponCode = couponCodeInput.value.trim().toUpperCase();
            applyCoupon(couponCode);
        });
        
        // Allow pressing Enter to apply coupon
        couponCodeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                applyCoupon(this.value.trim().toUpperCase());
            }
        });
    }
    
    // Form submission
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            processPayment();
        });
    }
    
    // Initialize form with default values
    updatePaymentSummary();
}

// Setup Payment Modal - UPDATED
function setupPaymentModal() {
    const paymentModal = document.getElementById('paymentModal');
    const paymentModalClose = document.getElementById('paymentModalClose');
    const closePaymentModalBtn = document.getElementById('closePaymentModal');
    const downloadReceiptBtn = document.getElementById('downloadReceipt');
    
    // Close modal functions
    if (paymentModalClose) {
        paymentModalClose.addEventListener('click', () => {
            closePaymentModal();
        });
    }
    
    if (closePaymentModalBtn) {
        closePaymentModalBtn.addEventListener('click', () => {
            closePaymentModal();
        });
    }
    
    // Download receipt
    if (downloadReceiptBtn) {
        downloadReceiptBtn.addEventListener('click', downloadReceipt);
    }
    
    // Close modal when clicking outside
    if (paymentModal) {
        paymentModal.addEventListener('click', (event) => {
            if (event.target === paymentModal) {
                closePaymentModal();
            }
        });
    }
}

// Setup Payment Buttons - UPDATED
function setupPaymentButtons() {
    // Enroll Now button in course modal
    const enrollNowBtn = document.getElementById('enrollNowBtn');
    if (enrollNowBtn) {
        enrollNowBtn.addEventListener('click', function() {
            const modal = document.getElementById('courseModal');
            const courseTitle = document.getElementById('modalCourseTitle').textContent;
            
            // Close course modal
            closeModal();
            
            // Find course in courses array
            const course = courses.find(c => c.title === courseTitle);
            if (course) {
                // Switch to payment form
                document.querySelectorAll('.form-tab').forEach(tab => tab.classList.remove('active'));
                document.querySelector('.form-tab[data-form="payment"]').classList.add('active');
                
                document.querySelectorAll('.enquiry-form').forEach(form => form.classList.remove('active'));
                document.getElementById('paymentForm').classList.add('active');
                
                // Set course in payment form
                const paymentCourseSelect = document.getElementById('paymentCourse');
                if (paymentCourseSelect) {
                    let optionValue = '';
                    
                    if (course.title.includes('AI & Machine Learning')) {
                        optionValue = 'ai-ml';
                    } else if (course.title.includes('DevOps') && !course.title.includes('Cloud DevOps')) {
                        optionValue = 'devops';
                    } else if (course.title.includes('Cloud') && !course.title.includes('DevOps')) {
                        optionValue = 'cloud';
                    } else if (course.title.includes('Blockchain')) {
                        optionValue = 'blockchain';
                    } else if (course.title.includes('Cloud DevOps')) {
                        optionValue = 'cloud-devops';
                    } else if (course.title.includes('Digital Marketing')) {
                        optionValue = 'digital-marketing';
                    } else if (course.title.includes('UI/UX')) {
                        optionValue = 'ui-ux';
                    } else if (course.title.includes('Tech for School')) {
                        optionValue = 'kids';
                    }
                    
                    if (optionValue) {
                        paymentCourseSelect.value = optionValue;
                        updatePaymentSummary();
                        
                        // Auto-apply special coupons
                        setTimeout(() => {
                            if (optionValue === 'digital-marketing' || optionValue === 'ui-ux') {
                                applyCoupon('SPECIAL999');
                                showToast('Special coupon applied automatically!', 'success');
                            } else if (optionValue === 'blockchain') {
                                applyCoupon('BLOCKCHAIN30');
                                showToast('Special 30% discount applied for Blockchain course!', 'success');
                            } else if (optionValue === 'cloud-devops') {
                                applyCoupon('CLOUDDEVOPS25');
                                showToast('Special 25% discount applied for Cloud DevOps course!', 'success');
                            }
                        }, 500);
                    }
                }
                
                // Scroll to payment form
                const enrollSection = document.getElementById('enroll');
                if (enrollSection) {
                    window.scrollTo({
                        top: enrollSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
}

// Load Payment Data
function loadPaymentData() {
    // Check for saved payment state in localStorage
    const savedState = localStorage.getItem('paymentState');
    if (savedState) {
        paymentState = JSON.parse(savedState);
    }
}

// Save Payment Data
function savePaymentData() {
    localStorage.setItem('paymentState', JSON.stringify(paymentState));
}

// Update Payment Summary - UPDATED
function updatePaymentSummary() {
    const paymentCourseSelect = document.getElementById('paymentCourse');
    const selectedCourseName = document.getElementById('selectedCourseName');
    const coursePrice = document.getElementById('coursePrice');
    const discountAmount = document.getElementById('discountAmount');
    const totalAmount = document.getElementById('totalAmount');
    
    if (!paymentCourseSelect || !selectedCourseName) return;
    
    const selectedOption = paymentCourseSelect.options[paymentCourseSelect.selectedIndex];
    const courseValue = paymentCourseSelect.value;
    
    if (!courseValue) {
        selectedCourseName.textContent = '-';
        coursePrice.textContent = '-';
        discountAmount.textContent = '-';
        totalAmount.textContent = '-';
        return;
    }
    
    // Update course name
    selectedCourseName.textContent = selectedOption.text.split(' - ')[0];
    
    // Get prices
    const originalPrice = paymentConfig.originalPrices[courseValue] || 0;
    const discountedPrice = paymentConfig.coursePrices[courseValue] || 0;
    
    // Calculate discount
    const discountPercent = Math.round((1 - (discountedPrice / originalPrice)) * 100);
    const discountValue = originalPrice - discountedPrice;
    
    // Update display
    coursePrice.textContent = formatCurrency(originalPrice);
    discountAmount.textContent = `-${formatCurrency(discountValue)} (${discountPercent}% off)`;
    totalAmount.textContent = formatCurrency(discountedPrice);
    
    // Store current course
    paymentState.selectedCourse = {
        id: courseValue,
        name: selectedOption.text.split(' - ')[0],
        originalPrice: originalPrice,
        discountedPrice: discountedPrice,
        discountPercent: discountPercent
    };
    
    // Update installment amounts
    updateInstallmentAmounts(discountedPrice);
}

// Update Installment Amounts - UPDATED
function updateInstallmentAmounts(totalAmount) {
    const firstInstallment = document.getElementById('firstInstallment');
    const secondInstallment = document.getElementById('secondInstallment');
    const thirdInstallment = document.getElementById('thirdInstallment');
    
    if (!firstInstallment) return;
    
    // Calculate 3-month installment plan (40%, 30%, 30%)
    const firstAmount = Math.round(totalAmount * 0.4);
    const remainingAmount = totalAmount - firstAmount;
    const secondAmount = Math.round(remainingAmount / 2);
    const thirdAmount = remainingAmount - secondAmount;
    
    // Update display
    firstInstallment.textContent = formatCurrency(firstAmount);
    secondInstallment.textContent = formatCurrency(secondAmount);
    thirdInstallment.textContent = formatCurrency(thirdAmount);
    
    // Store installment plan
    paymentState.installmentPlan = {
        first: firstAmount,
        second: secondAmount,
        third: thirdAmount,
        total: totalAmount
    };
}

// Toggle Installment Plan - UPDATED
function toggleInstallmentPlan(show) {
    const installmentPlan = document.getElementById('installmentPlan');
    if (installmentPlan) {
        installmentPlan.style.display = show ? 'block' : 'none';
    }
}

// Apply Coupon - UPDATED
function applyCoupon(couponCode) {
    const couponMessage = document.getElementById('couponMessage');
    const totalAmount = document.getElementById('totalAmount');
    
    if (!couponCode) {
        showCouponMessage('Please enter a coupon code', 'error');
        return;
    }
    
    // Check if coupon is valid
    if (paymentConfig.coupons.hasOwnProperty(couponCode)) {
        const discountPercent = paymentConfig.coupons[couponCode];
        
        // Store applied coupon
        paymentState.appliedCoupon = {
            code: couponCode,
            discountPercent: discountPercent
        };
        
        // Recalculate total with coupon discount
        if (paymentState.selectedCourse) {
            const discountedPrice = paymentState.selectedCourse.discountedPrice;
            const couponDiscount = Math.round(discountedPrice * (discountPercent / 100));
            const finalPrice = discountedPrice - couponDiscount;
            
            // Update total amount
            totalAmount.textContent = formatCurrency(finalPrice);
            
            // Show success message
            showCouponMessage(`Coupon applied! ${discountPercent}% discount added.`, 'success');
            
            // Animate the total amount
            totalAmount.style.transform = 'scale(1.1)';
            setTimeout(() => {
                totalAmount.style.transform = 'scale(1)';
            }, 300);
            
            // Create confetti effect for large discounts
            if (discountPercent >= 15) {
                createConfetti();
            }
        }
    } else {
        // Invalid coupon
        paymentState.appliedCoupon = null;
        showCouponMessage('Invalid coupon code', 'error');
        
        // Reset total amount
        if (paymentState.selectedCourse) {
            totalAmount.textContent = formatCurrency(paymentState.selectedCourse.discountedPrice);
        }
    }
    
    savePaymentData();
}

// Show Coupon Message - UPDATED
function showCouponMessage(message, type) {
    const couponMessage = document.getElementById('couponMessage');
    if (!couponMessage) return;
    
    couponMessage.textContent = message;
    couponMessage.className = 'coupon-message ' + type;
    couponMessage.style.opacity = '1';
    
    // Fade out after 5 seconds
    setTimeout(() => {
        couponMessage.style.opacity = '0.5';
    }, 3000);
}

// Process Payment - UPDATED
function processPayment() {
    // Validate form
    if (!validatePaymentForm()) return;
    
    // Get form data
    const name = document.getElementById('paymentName').value.trim();
    const email = document.getElementById('paymentEmail').value.trim();
    const phone = document.getElementById('paymentPhone').value.trim();
    const courseId = document.getElementById('paymentCourse').value;
    const courseName = document.getElementById('selectedCourseName').textContent;
    
    // Calculate final amount
    let amount = paymentState.selectedCourse.discountedPrice;
    
    // Apply coupon discount if any
    if (paymentState.appliedCoupon) {
        const discountAmount = Math.round(amount * (paymentState.appliedCoupon.discountPercent / 100));
        amount -= discountAmount;
    }
    
    // For installment, use first installment amount
    if (paymentState.paymentMethod === 'installment' && paymentState.installmentPlan) {
        amount = paymentState.installmentPlan.first;
    }
    
    // Check minimum amount (Razorpay minimum is ₹1)
    if (amount < 100) {
        amount = 100; // Minimum ₹1
    }
    
    // Store transaction data
    paymentState.transactionData = {
        name: name,
        email: email,
        phone: phone,
        courseId: courseId,
        courseName: courseName,
        amount: amount,
        paymentMethod: paymentState.paymentMethod,
        coupon: paymentState.appliedCoupon,
        installmentPlan: paymentState.installmentPlan,
        timestamp: new Date().toISOString(),
        transactionId: generateTransactionId()
    };
    
    // Show payment modal
    showPaymentModal();
    
    // Initialize Razorpay payment
    initializeRazorpayPayment();
}

// Validate Payment Form - UPDATED
function validatePaymentForm() {
    const name = document.getElementById('paymentName').value.trim();
    const email = document.getElementById('paymentEmail').value.trim();
    const phone = document.getElementById('paymentPhone').value.trim();
    const course = document.getElementById('paymentCourse').value;
    const termsAgreed = document.getElementById('termsAgreement').checked;
    
    let isValid = true;
    
    // Reset errors
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    document.querySelectorAll('.form-group').forEach(el => el.classList.remove('error'));
    
    // Validate name
    if (!name) {
        showFieldError('paymentName', 'Full name is required');
        isValid = false;
    }
    
    // Validate email
    if (!email) {
        showFieldError('paymentEmail', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showFieldError('paymentEmail', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate phone
    if (!phone) {
        showFieldError('paymentPhone', 'Phone number is required');
        isValid = false;
    } else if (!isValidPhone(phone)) {
        showFieldError('paymentPhone', 'Please enter a valid phone number');
        isValid = false;
    }
    
    // Validate course selection
    if (!course) {
        showFieldError('paymentCourse', 'Please select a course');
        isValid = false;
    }
    
    // Validate terms agreement
    if (!termsAgreed) {
        const termsGroup = document.querySelector('.terms-agreement');
        termsGroup.classList.add('error');
        const errorEl = document.createElement('div');
        errorEl.className = 'error-message';
        errorEl.textContent = 'You must agree to the terms and conditions';
        termsGroup.appendChild(errorEl);
        isValid = false;
    }
    
    return isValid;
}

// Show Field Error - UPDATED
function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const formGroup = field.closest('.form-group');
    
    if (formGroup) {
        formGroup.classList.add('error');
        const errorEl = document.createElement('div');
        errorEl.className = 'error-message';
        errorEl.textContent = message;
        formGroup.appendChild(errorEl);
        
        // Scroll to error
        setTimeout(() => {
            formGroup.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
}

// Initialize Razorpay Payment - COMPLETELY UPDATED
function initializeRazorpayPayment() {
    const options = {
        key: paymentConfig.razorpayKey, // Using the working test key
        amount: paymentState.transactionData.amount,
        currency: "INR",
        name: "Mygurukul by Pulsecrafts",
        description: `Payment for ${paymentState.transactionData.courseName}`,
        image: "assets/logo3.jpg", // Using your actual logo
        order_id: null, // Not needed for client-only
        handler: function(response) {
            // Payment successful
            handlePaymentSuccess(response);
        },
        prefill: {
            name: paymentState.transactionData.name,
            email: paymentState.transactionData.email,
            contact: paymentState.transactionData.phone
        },
        notes: {
            course: paymentState.transactionData.courseName,
            payment_method: paymentState.transactionData.paymentMethod,
            coupon: paymentState.appliedCoupon ? paymentState.appliedCoupon.code : 'None',
            installment: paymentState.paymentMethod === 'installment' ? 'First Installment' : 'Full Payment'
        },
        theme: {
            color: "#2563eb"
        },
        modal: {
            ondismiss: function() {
                // User closed the modal
                showToast('Payment cancelled', 'warning');
            }
        }
    };
    
    // Hide loading after a short delay
    setTimeout(() => {
        const paymentLoading = document.getElementById('paymentLoading');
        if (paymentLoading) {
            paymentLoading.style.display = 'none';
        }
        
        // Create and open Razorpay instance
        const razorpay = new Razorpay(options);
        razorpay.open();
        
        // Handle payment failure
        razorpay.on('payment.failed', function(response) {
            handlePaymentFailure(response);
        });
        
    }, 1500);
}

// Handle Payment Success - COMPLETELY UPDATED
function handlePaymentSuccess(response) {
    // Update transaction data
    paymentState.transactionData.paymentId = response.razorpay_payment_id;
    paymentState.transactionData.orderId = response.razorpay_order_id;
    paymentState.transactionData.signature = response.razorpay_signature;
    paymentState.transactionData.paymentStatus = 'success';
    paymentState.transactionData.verification = "success"; // Client-side only verification
    
    // Generate a mock order ID if needed
    if (!response.razorpay_order_id) {
        paymentState.transactionData.orderId = `order_${Date.now()}`;
    }
    
    // Save to localStorage
    savePaymentData();
    
    // Show success screen
    showPaymentSuccess();
    
    // Auto-generate receipt
    autoGenerateReceipt();
    
    // Show success toast
    showToast('✅ Payment successful! Enrollment confirmed.', 'success', 5000);
    
    // Create confetti effect
    createConfetti();
}

// Handle Payment Failure - COMPLETELY UPDATED
function handlePaymentFailure(response) {
    paymentState.transactionData.paymentStatus = 'failed';
    paymentState.transactionData.error = response.error;
    paymentState.transactionData.errorDescription = response.error.description || 'Unknown error';
    paymentState.transactionData.errorSource = response.error.source || 'gateway';
    
    // Save to localStorage
    savePaymentData();
    
    // Show detailed error message
    let errorMsg = "Payment failed. ";
    if (response.error && response.error.description) {
        errorMsg += response.error.description;
    }
    
    showToast(errorMsg, 'error', 5000);
    
    // Show retry button
    setTimeout(() => {
        const paymentSuccess = document.getElementById('paymentSuccess');
        if (paymentSuccess) {
            paymentSuccess.innerHTML += `
                <div style="margin-top: 20px;">
                    <button class="btn btn-primary" id="retryPaymentBtn" style="background: var(--danger-color);">
                        <i class="fas fa-redo"></i> Retry Payment
                    </button>
                </div>
            `;
            
            // Add retry button listener
            const retryBtn = document.getElementById('retryPaymentBtn');
            if (retryBtn) {
                retryBtn.addEventListener('click', function() {
                    closePaymentModal();
                    setTimeout(() => processPayment(), 500);
                });
            }
        }
    }, 1000);
    
    // Close payment modal after 5 seconds
    setTimeout(() => {
        closePaymentModal();
    }, 5000);
}

// Show Payment Modal - UPDATED
function showPaymentModal() {
    const paymentModal = document.getElementById('paymentModal');
    const paymentLoading = document.getElementById('paymentLoading');
    const paymentSuccess = document.getElementById('paymentSuccess');
    
    // Reset modal state
    if (paymentLoading) {
        paymentLoading.style.display = 'block';
    }
    if (paymentSuccess) {
        paymentSuccess.style.display = 'none';
    }
    
    // Show modal
    paymentModal.style.display = 'block';
    setTimeout(() => {
        paymentModal.style.opacity = '1';
    }, 10);
}

// Show Payment Success - UPDATED
function showPaymentSuccess() {
    const paymentLoading = document.getElementById('paymentLoading');
    const paymentSuccess = document.getElementById('paymentSuccess');
    const transactionId = document.getElementById('transactionId');
    const amountPaid = document.getElementById('amountPaid');
    const courseEnrolled = document.getElementById('courseEnrolled');
    const paymentDate = document.getElementById('paymentDate');
    
    // Hide loading, show success
    if (paymentLoading) {
        paymentLoading.style.display = 'none';
    }
    if (paymentSuccess) {
        paymentSuccess.style.display = 'block';
    }
    
    // Update success details
    if (transactionId && paymentState.transactionData) {
        transactionId.textContent = paymentState.transactionData.paymentId || 'N/A';
    }
    
    if (amountPaid && paymentState.transactionData) {
        amountPaid.textContent = formatCurrency(paymentState.transactionData.amount);
    }
    
    if (courseEnrolled && paymentState.transactionData) {
        courseEnrolled.textContent = paymentState.transactionData.courseName;
    }
    
    if (paymentDate && paymentState.transactionData) {
        paymentDate.textContent = formatDate(new Date(paymentState.transactionData.timestamp));
    }
}

// Close Payment Modal - UPDATED
function closePaymentModal() {
    const paymentModal = document.getElementById('paymentModal');
    paymentModal.style.opacity = '0';
    setTimeout(() => {
        paymentModal.style.display = 'none';
    }, 300);
}

// Download Receipt - UPDATED
function downloadReceipt() {
    if (!paymentState.transactionData) return;
    
    // Generate receipt number
    const receiptNumber = `RCPT-${Date.now().toString().slice(-6)}`;
    
    // Create receipt content
    const receiptContent = `
        <html>
        <head>
            <title>Payment Receipt - Mygurukul</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .receipt { max-width: 600px; margin: 0 auto; }
                .header { text-align: center; margin-bottom: 30px; }
                .details { margin: 20px 0; }
                .detail-item { display: flex; justify-content: space-between; margin: 10px 0; }
                .footer { margin-top: 30px; text-align: center; color: #666; }
            </style>
        </head>
        <body>
            <div class="receipt">
                <div class="header">
                    <h1>Mygurukul</h1>
                    <h2>Payment Receipt</h2>
                </div>
                <div class="details">
                    <div class="detail-item">
                        <strong>Receipt No:</strong> ${receiptNumber}
                    </div>
                    <div class="detail-item">
                        <strong>Date:</strong> ${formatDate(new Date(paymentState.transactionData.timestamp))}
                    </div>
                    <div class="detail-item">
                        <strong>Time:</strong> ${new Date(paymentState.transactionData.timestamp).toLocaleTimeString('en-IN')}
                    </div>
                    <div class="detail-item">
                        <strong>Transaction ID:</strong> ${paymentState.transactionData.paymentId || 'N/A'}
                    </div>
                    <div class="detail-item">
                        <strong>Course:</strong> ${paymentState.transactionData.courseName}
                    </div>
                    <div class="detail-item">
                        <strong>Payment Method:</strong> ${paymentState.transactionData.paymentMethod === 'installment' ? 'Installment (First)' : 'Full Payment'}
                    </div>
                    <div class="detail-item">
                        <strong>Amount Paid:</strong> ${formatCurrency(paymentState.transactionData.amount)}
                    </div>
                    <div class="detail-item">
                        <strong>Student Name:</strong> ${paymentState.transactionData.name}
                    </div>
                    <div class="detail-item">
                        <strong>Student Email:</strong> ${paymentState.transactionData.email}
                    </div>
                    <div class="detail-item">
                        <strong>Status:</strong> <span style="color: green; font-weight: bold;">Paid ✓</span>
                    </div>
                </div>
                <div class="footer">
                    <p>Thank you for your payment!</p>
                    <p>For any queries, contact: sales@pulsecrafts.com</p>
                    <p style="font-size: 0.9rem; margin-top: 20px; color: #888;">
                        This is a computer-generated receipt. No signature required.
                    </p>
                </div>
            </div>
        </body>
        </html>
    `;
    
    // Create and trigger download
    const blob = new Blob([receiptContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `receipt-${receiptNumber}-mygurukul.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('Receipt downloaded successfully!', 'success');
}

// Auto-generate receipt - NEW FUNCTION
function autoGenerateReceipt() {
    if (!paymentState.transactionData) return;
    
    // Generate receipt number
    const receiptNumber = `RCPT-${Date.now().toString().slice(-6)}`;
    
    // Create receipt data
    const receiptData = {
        receiptNumber: receiptNumber,
        date: new Date().toLocaleDateString('en-IN'),
        time: new Date().toLocaleTimeString('en-IN'),
        courseName: paymentState.transactionData.courseName,
        amount: formatCurrency(paymentState.transactionData.amount),
        paymentId: paymentState.transactionData.paymentId || 'N/A',
        customerName: paymentState.transactionData.name,
        customerEmail: paymentState.transactionData.email,
        status: 'Paid'
    };
    
    // Show receipt in success modal
    const paymentDetails = document.querySelector('.payment-details');
    if (paymentDetails) {
        paymentDetails.innerHTML += `
            <div style="margin-top: 20px; padding: 15px; background: #f0f9ff; border-radius: 8px;">
                <h5 style="margin-bottom: 10px; color: #2563eb;">
                    <i class="fas fa-receipt"></i> Receipt Details
                </h5>
                <div style="font-size: 0.9rem;">
                    <div><strong>Receipt No:</strong> ${receiptData.receiptNumber}</div>
                    <div><strong>Date & Time:</strong> ${receiptData.date} ${receiptData.time}</div>
                    <div><strong>Mode:</strong> ${paymentState.transactionData.paymentMethod === 'installment' ? 'Installment (First)' : 'Full Payment'}</div>
                </div>
            </div>
        `;
    }
    
    // Auto-download receipt after 3 seconds
    setTimeout(() => {
        downloadReceipt();
    }, 3000);
}

// Helper Functions
function formatCurrency(amountInPaise) {
    const amountInRupees = amountInPaise / 100;
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    }).format(amountInRupees);
}

function generateTransactionId() {
    return 'TXN' + Date.now() + Math.random().toString(36).substr(2, 9).toUpperCase();
}