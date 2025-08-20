// ============================
// Fade-in לפסקאות ותמונות
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".posts article, .post-content article p, .post-content article img, .post-content article h2, .post-content article li");

  fadeElements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transition = `opacity 0.8s ease ${(index + 1) * 0.2}s`;
    // השורה el.style.transform = "translateY(20px)"; נמחקה כדי למנוע קפיצה
  });

  setTimeout(() => {
    fadeElements.forEach(el => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    });
  }, 100);
});

// ============================
// Scroll Reveal
// ============================
const posts = document.querySelectorAll(".posts article");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  posts.forEach(post => {
    const postTop = post.getBoundingClientRect().top;
    if (postTop < windowHeight - 50) {
      post.style.opacity = 1;
      post.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// ============================
// Hover effects לכפתורים
// ============================
const buttons = document.querySelectorAll(".btn, .read-more, .back-to-top");
buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => btn.style.transform = "scale(1.05)");
  btn.addEventListener("mouseleave", () => btn.style.transform = "scale(1)");
});

// ============================
// Back to top button
// ============================
const backToTopBtn = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});