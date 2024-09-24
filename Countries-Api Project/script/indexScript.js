// Nav Theme Switcher
// Dark Theme

const nav_button_switcher = document.querySelector("nav button .circle");

let nav_switcher = true;

function theme_switcher() {
  if (nav_switcher == false) {
    nav_switcher = true;
    nav_button_switcher.style.left = "0px";
  } else {
    nav_switcher = false;
    nav_button_switcher.style.left = "20px";
  }
}

// Filtering

const Africa_region = document.querySelectorAll(".Africa_region");
const Europe_region = document.querySelectorAll(".Europe_region");
const Americas_region = document.querySelectorAll(".Americas_region");
const Asia_region = document.querySelectorAll(".Asia_region");

document
  .querySelector(".Africa_filter_h1_class")
  .addEventListener("click", Africa_event);

function Africa_event() {
  Africa_region.forEach((region) => {
    region.style.display = "flex";
  });

  Europe_region.forEach((region) => {
    region.style.display = "none";
  });

  Americas_region.forEach((region) => {
    region.style.display = "none";
  });

  Asia_region.forEach((region) => {
    region.style.display = "none";
  });
}

document
  .querySelector(".Europe_filter_h1_class")
  .addEventListener("click", Europe_event);

function Europe_event() {
  Africa_region.forEach((region) => {
    region.style.display = "none";
  });

  Europe_region.forEach((region) => {
    region.style.display = "flex";
  });

  Americas_region.forEach((region) => {
    region.style.display = "none";
  });

  Asia_region.forEach((region) => {
    region.style.display = "none";
  });
}

document
  .querySelector(".Americas_filter_h1_class")
  .addEventListener("click", Americas_event);

function Americas_event() {
  Africa_region.forEach((region) => {
    region.style.display = "none";
  });

  Europe_region.forEach((region) => {
    region.style.display = "none";
  });

  Americas_region.forEach((region) => {
    region.style.display = "flex";
  });

  Asia_region.forEach((region) => {
    region.style.display = "none";
  });
}

document
  .querySelector(".Asia_filter_h1_class")
  .addEventListener("click", Asia_event);

function Asia_event() {
  Africa_region.forEach((region) => {
    region.style.display = "none";
  });

  Europe_region.forEach((region) => {
    region.style.display = "none";
  });

  Americas_region.forEach((region) => {
    region.style.display = "none";
  });

  Asia_region.forEach((region) => {
    region.style.display = "flex";
  });
}
