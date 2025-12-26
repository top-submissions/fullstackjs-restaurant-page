import "./styles/styles.css";
import createHomePage from "./modules/home.js";
import createMenuPage from "./modules/menu.js";
import createContactPage from "./modules/contact.js";

console.log("Restaurant page loaded successfully!");

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

function loadHomePage() {
  clearContent();
  const content = document.getElementById("content");
  content.appendChild(createHomePage());
}

function loadMenuPage() {
  clearContent();
  const content = document.getElementById("content");
  content.appendChild(createMenuPage());
}

function loadContactPage() {
  clearContent();
  const content = document.getElementById("content");
  content.appendChild(createContactPage());
}

// Initialize with home page
document.addEventListener("DOMContentLoaded", () => {
  loadHomePage();

  // Add event listeners to buttons
  document.getElementById("home-btn").addEventListener("click", loadHomePage);
  document.getElementById("menu-btn").addEventListener("click", loadMenuPage);
  document
    .getElementById("contact-btn")
    .addEventListener("click", loadContactPage);
});

// For development server hot reload
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
