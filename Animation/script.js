document.addEventListener("DOMContentLoaded", function() {
  // 8. Expanding Accordion Menu
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach(header => {
    header.addEventListener("click", function() {
      const activeContent = document.querySelector(".accordion-content.show");
      if (activeContent && activeContent !== this.nextElementSibling) {
        activeContent.classList.remove("show");
        activeContent.style.maxHeight = 0;
      }

      const content = this.nextElementSibling;
      content.classList.toggle("show");
      content.style.maxHeight = content.classList.contains("show") ? content.scrollHeight + "px" : 0;
    });
  });

  // 10. Animated Navigation Menu
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  navToggle.addEventListener("click", function() {
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      navMenu.style.animation = "slideOut 0.3s forwards";
    } else {
      navMenu.classList.add("active");
      navMenu.style.animation = "slideIn 0.3s forwards";
    }
  });
});
