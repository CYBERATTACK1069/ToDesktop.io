let dropDownMenu = document.querySelector(".fixed");
let crossIcon = document.querySelector(".cross_icon");
let menuIcon = document.querySelector(".drop_down");

menuIcon.addEventListener("click", dropMenu);
crossIcon.addEventListener("click", closeMenu);

function dropMenu() {
  menuIcon.classList.add("hidden");
  menuIcon.classList.add("flex");
  crossIcon.classList.add("flex");
  crossIcon.classList.remove("hidden");
  dropDownMenu.classList.remove("invisible");
  dropDownMenu.classList.add("opacity-100");
}

function closeMenu() {
  menuIcon.classList.remove("hidden");
  crossIcon.classList.add("hidden");
  menuIcon.classList.add("flex");
  crossIcon.classList.add("flex");
  dropDownMenu.classList.add("invisible");
  dropDownMenu.classList.remove("opacity-100");
}
