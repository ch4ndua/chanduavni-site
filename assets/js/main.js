/* Show Menu */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Show Menu */
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Hidden Menu */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* Remove Mobile Menu */
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/* Shadow Header */
const shadowHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/* Show Scroll Up */
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/* Scroll Sections Active Link */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/* Dark Light Theme */
// get current theme of browser
const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
const themeButton = document.getElementById("theme-button");

const darkTheme = () => {
  // Add or remove the dark / icon theme
  document.body.classList.add("dark-theme");
  themeButton.classList.add("ri-moon-line");
  themeButton.classList.remove("ri-sun-line");
};

const lightTheme = () => {
  // Add or remove the dark / icon theme
  document.body.classList.remove("dark-theme");
  themeButton.classList.remove("ri-moon-line");
  themeButton.classList.add("ri-sun-line");
};

isDarkTheme.matches ? darkTheme() : lightTheme();

// Detect the dark mode
isDarkTheme.addEventListener("change", () => {
  isDarkTheme.matches ? darkTheme() : lightTheme();
});

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle("dark-theme");
  themeButton.classList.toggle("ri-moon-line");
  themeButton.classList.toggle("ri-sun-line");
});
/* Show Reveal Animation */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  // reset: true, // to repeat animation
});

sr.reveal(
  ".home__headshot, .about__image",
  { origin: "right" }
);
sr.reveal(
  ".home__name, .home__info, .about__container, .section__title-1, .about__info",
  { origin: "left" }
);
sr.reveal(".mywork__card, .section__title-2", { interval: 100 });
