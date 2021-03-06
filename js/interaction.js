// theme
const theme_toggle = document.querySelector("#theme-toggle");
const saved_theme = JSON.parse(localStorage.getItem("sng_theme"));
let current_theme = "";
let dark_mode = false;

if (saved_theme) {
  document.querySelector("body").classList.add(saved_theme);
  theme_toggle.classList.toggle("toggler__btn-active");
  current_theme = saved_theme;
  if (current_theme === "dark-mode") dark_mode = true;
}

theme_toggle.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark-mode");
  dark_mode = !dark_mode;
  theme_toggle.classList.toggle("toggler__btn-active");
  current_theme = !dark_mode ? "" : "dark-mode";
  localStorage.setItem("sng_theme", JSON.stringify(current_theme));
  // TODO: Add Path for Production
  const url = "https://suparthghimire.github.io/portfolio-new/sounds/tick.mp3";
  const path = url;
  const audio = new Audio(path);
  audio.play();
});

// nav
const nav_toggle = document.querySelector("#mobile-nav-btn");
const nav_toggle_icon = document.querySelector("#mobile-nav-icon");
const header_nav = document.querySelector("#header-nav");
nav_toggle.addEventListener("click", () => {
  nav_toggle_icon.classList.toggle("nav-toggler__icon-active");
  header_nav.classList.toggle("header__nav-active");
  // if (header_nav.classList.contains("header__nav-active")) {
  //   document.querySelector("body").style.overflowY = "hidden";
  // } else {
  //   document.querySelector("body").style.overflowY = "auto";
  // }
});
const menu_items = document.querySelectorAll(".nav-list__nav-link");
menu_items.forEach((item) => {
  item.addEventListener("click", () => {
    header_nav.classList.remove("header__nav-active");
    nav_toggle_icon.classList.remove("nav-toggler__icon-active");
  });
});

document.addEventListener("scroll", (e) => {});
