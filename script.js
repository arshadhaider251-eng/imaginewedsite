// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const nav = document.getElementById("nav");

mobileMenuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  mobileMenuBtn.innerHTML = nav.classList.contains("active") 
    ? '<i class="fas fa-times"></i>' 
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  
  // Save preference to localStorage
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Check for saved dark mode preference
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  toggle.textContent = "☀️";
}

// Testimonials Slider
const slides = document.querySelectorAll(".testimonial");
let current = 0;

document.getElementById("next").addEventListener("click", () => {
  changeSlide(1);
});

document.getElementById("prev").addEventListener("click", () => {
  changeSlide(-1);
});

function changeSlide(direction) {
  slides[current].classList.remove("active");
  current = (current + direction + slides.length) % slides.length;
  slides[current].classList.add("active");
}

// Auto slide every 5 seconds
setInterval(() => {
  changeSlide(1);
}, 5000);

// Portfolio Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");
    
    const filterValue = button.getAttribute("data-filter");
    
    portfolioItems.forEach(item => {
      if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Back-to-Top Button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
  
  // Header scroll effect
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Form submission
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! We'll get back to you soon.");
  contactForm.reset();
});