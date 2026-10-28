const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "Close" : "Menu";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "Menu";
  });
});

const video = document.querySelector("video");
if (video && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  video.removeAttribute("autoplay");
  video.pause();
}

const form = document.querySelector("#estimate");
const thanks = document.querySelector("#thanks");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  form.hidden = true;
  thanks.hidden = false;
  thanks.scrollIntoView({ behavior: "smooth", block: "center" });
});
