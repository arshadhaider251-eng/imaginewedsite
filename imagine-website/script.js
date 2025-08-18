// Typewriter Effect
const typewriter = document.getElementById("typewriter");
const text = "I design and build creative websites.";
let index = 0;

function type() {
  if (index < text.length) {
    typewriter.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
type();

// Fade-in Animation on Scroll
const fadeEls = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach((el) => observer.observe(el));

// Form submission status
const form = document.getElementById("contactForm");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      status.textContent = "Message sent successfully!";
      status.style.color = "green";
      form.reset();
    } else {
      status.textContent = "Oops! There was a problem sending your message.";
      status.style.color = "red";
    }
  } catch (error) {
    status.textContent = "Network error. Please try again later.";
    status.style.color = "red";
  }
});
