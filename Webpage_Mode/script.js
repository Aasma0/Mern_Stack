document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.querySelector(".theme-toggle");
    const themeIcon = document.getElementById("themeIcon");
    const body = document.body;

    // Check for saved user preference, if any, on load of the website
    const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    body.setAttribute("data-theme", savedTheme);

    // Update the button icon based on the current theme
    updateToggleButton(savedTheme);

    // Theme toggle button event listener
    themeToggleButton.addEventListener("click", () => {
        let currentTheme = body.getAttribute("data-theme");
        let newTheme = currentTheme === "light" ? "dark" : "light";
        body.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateToggleButton(newTheme);
    });

    function updateToggleButton(theme) {
        themeIcon.className = theme === "light" ? "ri-moon-line" : "ri-sun-line";
    }
    
    // Carousel functionality
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    });
});

function toggleMenu() {
    let menuList = document.getElementById("menuList");
    let menuIcon = document.getElementById("menuIcon");
    if (menuList.style.maxHeight === "0px" || menuList.style.maxHeight === "") {
        menuList.style.maxHeight = "300px";
        menuIcon.classList.remove("ri-menu-line");
        menuIcon.classList.add("ri-arrow-down-double-line");
    } else {
        menuList.style.maxHeight = "0px";
        menuIcon.classList.remove("ri-arrow-down-double-line");
        menuIcon.classList.add("ri-menu-line");
    }
}
