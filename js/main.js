// Add real URLs here. Empty values are shown as intentionally disabled placeholders.
const profileLinks = {
  email: "",
  linkedin: "",
  github: "https://github.com/devinder33",
  upwork: "",
  resume: ""
};

document.querySelectorAll("[data-profile]").forEach((link) => {
  const key = link.dataset.profile;
  const url = profileLinks[key];

  if (url) {
    link.href = key === "email" && !url.startsWith("mailto:") ? `mailto:${url}` : url;
    link.removeAttribute("aria-disabled");
    if (!["email", "resume"].includes(key)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    if (key === "resume") link.download = "Devinder-Singh-Jhinjer-Resume.pdf";
  } else {
    link.addEventListener("click", (event) => event.preventDefault());
    link.title = `${key.charAt(0).toUpperCase() + key.slice(1)} link coming soon`;
  }
});

const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const closeMenu = () => {
  menuButton.setAttribute("aria-expanded", "false");
  nav.classList.remove("open");
  document.body.classList.remove("nav-open");
};

menuButton.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  nav.classList.toggle("open", willOpen);
  document.body.classList.toggle("nav-open", willOpen);
});

nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });

const header = document.querySelector("[data-header]");
const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 12);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reducedMotion || !("IntersectionObserver" in window)) {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

document.querySelector("[data-year]").textContent = new Date().getFullYear();
