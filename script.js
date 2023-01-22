const displayNav = document.querySelector(".navbar__nav");
const toggleBtn = document.querySelector(".navbar__toggler");
const hero = document.querySelector(".hero");
const links = document.querySelectorAll(".nav__list--link");

const up = document.querySelector(".up");
const down = document.querySelector(".down");
console.log(links);
toggleBtn.addEventListener("click", () => {
  displayNav.classList.add("slide-in-blurred-right");
  toggleBtn.classList.toggle("toggle");
  if (!toggleBtn.classList.contains("toggle")) {
    displayNav.classList.remove("slide-in-blurred-right");
    displayNav.classList.add("slide-out-blurred-right");
  }
  if (toggleBtn.classList.contains("toggle")) {
    displayNav.classList.remove("slide-out-blurred-right");
  }

  hero.addEventListener("click", () => {
    displayNav.classList.remove("slide-in-blurred-right");
    toggleBtn.classList.remove("toggle");
  });
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 576) {
    displayNav.classList.remove("slide-out-blurred-right");
  }
});
