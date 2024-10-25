document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
  
    function toggleMenu() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
    }
  
    hamburger.addEventListener('click', toggleMenu);
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (hamburger.classList.contains('active')) {
          toggleMenu();
        }
      });
    });
  
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For now, we'll just log it to the console
        const formData = new FormData(contactForm);
        console.log('Form submitted with data:', Object.fromEntries(formData));
        alert('Thank you for your message! We\'ll get back to you soon.');
        contactForm.reset();
      });
    }
  
    // Scroll-based animations
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }
  
    function handleScrollAnimations() {
      const sections = document.querySelectorAll('#about, #portfolio, #contact');
      sections.forEach(section => {
        console.log(`Checking section: ${section.id}`);
        console.log(`Section top: ${section.getBoundingClientRect().top}`);
        console.log(`Window height: ${window.innerHeight}`);
        if (isElementInViewport(section)) {
          console.log(`Adding visible class to ${section.id}`);
          section.classList.add('visible');
        }
      });
    }
  
    // Navbar background change on scroll
    function handleNavbarBackground() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  
    // Add active class to nav links on scroll
    function updateActiveNavLink() {
      let current = '';
      const sections = document.querySelectorAll('main > section');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
          link.classList.add('active');
        }
      });
    }
  
    // Combine scroll event listeners
    window.addEventListener('scroll', () => {
      handleScrollAnimations();
      handleNavbarBackground();
      updateActiveNavLink();
    });
  
    // Initial call to set correct state on page load
    handleScrollAnimations();
    handleNavbarBackground();
    updateActiveNavLink();
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = ['about', 'portfolio', 'contact'];
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            console.log(`${sectionId} section exists`);
            console.log(`${sectionId} section display:`, window.getComputedStyle(section).display);
        } else {
            console.log(`${sectionId} section does not exist`);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navbarToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll to contact section
  const getInTouchButton = document.getElementById('get-in-touch');
  const contactSection = document.getElementById('contact');

  getInTouchButton.addEventListener('click', function(e) {
    e.preventDefault();
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
});
