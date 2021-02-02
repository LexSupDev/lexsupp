let menuWrapEl = document.querySelector(".menu__wrapper");
let menuToggle = document.querySelector(".menu__toggle");

menuToggle.addEventListener("click", function(event) {
  menuWrapEl.classList.toggle("menu__wrapper--active")
});
