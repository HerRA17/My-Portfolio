const hamburger = document.querySelector(".Hamburger-menu");
const navigationMenu = document.querySelector(".navigation-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navigationMenu.classList.toggle("active");
})

document.querySelector(".navigation-list_item").forEach(n => n.addEventListnere("click", () => {
  hamburger.classList.remove("active");
  navigationMenu.classList.remove("active");
}))