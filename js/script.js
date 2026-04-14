// script.js - Placeholder for future functionality
// script.js - Header and Menu Logic
document.addEventListener("DOMContentLoaded", () => {
  const dayEl = document.getElementById("current-day");
  const timeEl = document.getElementById("current-time");

  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Dynamic Day/Time for Top Bar
  const updateDayTime = () => {
    const now = new Date();
    const days = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];
    const day = days[now.getDay()];
    let hours = now.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutes = now.getMinutes().toString().padStart(2, "0");

    if (dayEl) dayEl.textContent = day;
    if (timeEl) timeEl.textContent = `${hours}:${minutes} ${ampm}`;
  };

  updateDayTime();
  setInterval(updateDayTime, 60000);

  console.log("EZ Plumbing header initialized");

  // FAQ Accordion Logic
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other items
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
        const otherIconImg = otherItem.querySelector(".faq-icon img");
        if (otherIconImg) {
          otherIconImg.src = "assets/images/pluse.png";
          otherIconImg.alt = "+";
        }
      });

      // Toggle current
      if (!isActive) {
        item.classList.add("active");
        const iconImg = item.querySelector(".faq-icon img");
        if (iconImg) {
          iconImg.src = "assets/images/less.png";
          iconImg.alt = "-";
        }
      }
    });
  });

  // Hide sticky bar when footer is visible
  const stickyBar = document.querySelector(".bottom-sticky-bar");
  const siteFooter = document.querySelector(".site-footer");

  if (stickyBar && siteFooter) {
    window.addEventListener("scroll", () => {
      const footerRect = siteFooter.getBoundingClientRect();
      if (footerRect.top < window.innerHeight) {
        stickyBar.classList.add("hidden");
      } else {
        stickyBar.classList.remove("hidden");
      }
    });
  }

  // Testimonials Carousel Logic
  const track = document.querySelector(".testimonials-track");
  const cards = document.querySelectorAll(".testimonial-card");
  const dotsContainer = document.querySelector(".testimonials-dots");

  if (track && cards.length && dotsContainer) {
    let currentSlide = 0;
    const getCardsPerView = () => (window.innerWidth <= 768 ? 1 : 2);

    const getTotalSlides = () => {
      const perView = getCardsPerView();
      return Math.ceil(cards.length / perView);
    };

    const buildDots = () => {
      dotsContainer.innerHTML = "";
      const total = getTotalSlides();
      for (let i = 0; i < total; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === currentSlide) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(i));
        dotsContainer.appendChild(dot);
      }
    };

    const goToSlide = (index) => {
      const perView = getCardsPerView();
      const total = getTotalSlides();
      currentSlide = Math.max(0, Math.min(index, total - 1));

      const cardWidth = cards[0].offsetWidth;
      const gap = 30;
      const offset = currentSlide * perView * (cardWidth + gap);
      track.style.transform = `translateX(-${offset}px)`;

      dotsContainer.querySelectorAll(".dot").forEach((d, i) => {
        d.classList.toggle("active", i === currentSlide);
      });
    };

    buildDots();
    goToSlide(0);

    // Auto-slide every 5 seconds
    setInterval(() => {
      const total = getTotalSlides();
      goToSlide((currentSlide + 1) % total);
    }, 5000);

    // Rebuild on resize
    window.addEventListener("resize", () => {
      buildDots();
      goToSlide(0);
    });
  }
});
