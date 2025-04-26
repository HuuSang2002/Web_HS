// Initialize Typed.js
new Typed("#typed", {
    strings: ['Developer', 'Photographer', 'Designer', 'Editor', 'Technician'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    showCursor: true,
    cursorChar: '|'
  });
  
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Dark Mode Toggle Functionality
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  
  // Check for saved user preference
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'light-mode') {
      darkModeToggle.checked = true;
    }
  }
  
  // Toggle dark/light mode
  darkModeToggle.addEventListener('change', function() {
    if (this.checked) {
      body.classList.replace('dark-mode', 'light-mode');
      localStorage.setItem('theme', 'light-mode');
    } else {
      body.classList.replace('light-mode', 'dark-mode');
      localStorage.setItem('theme', 'dark-mode');
    }
  });
  
  // Initialize theme on load
  if (!currentTheme) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  }

  // Initialize Typed.js
new Typed("#typed", {
    strings: ['Developer', 'Photographer', 'Designer', 'Editor', 'Technician'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    showCursor: true,
    cursorChar: '|'
  });
  
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Animate skills when they come into view
  const animateSkills = () => {
    const skillCategories = document.querySelectorAll('.skill-category');
    const skillItems = document.querySelectorAll('.skill-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__fadeInUp');
          
          // Animate progress bars
          if (entry.target.classList.contains('skill-item')) {
            const percent = entry.target.getAttribute('data-percent');
            const progressBar = entry.target.querySelector('.progress-bar');
            progressBar.style.width = `${percent}%`;
          }
        }
      });
    }, {
      threshold: 0.1
    });
    
    skillCategories.forEach(category => observer.observe(category));
    skillItems.forEach(item => observer.observe(item));
  };
  
  // Initialize skills animation when page loads
  document.addEventListener('DOMContentLoaded', animateSkills);
  
  // Smooth scrolling for navigation links
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
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });
  
  // Set active nav link based on scroll position
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;
    
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });


//   ---------------------

