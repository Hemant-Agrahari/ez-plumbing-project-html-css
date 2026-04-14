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
});
