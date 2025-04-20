// 1 for toggling hamburger
const hamburger = document.querySelector(".hamburger");

// 2 for mobile menu
const mobileMenu = document.querySelector(".nav-list ul");

// 3 menu items navigation
const menuItem = document.querySelectorAll(".nav-list ul li a");

// 4 header background color on scroll
const header = document.querySelector(".header");

// 1, 2
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); // for toggling hamburger
  mobileMenu.classList.toggle("active"); // for mobile menu
});

// 3
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});

// 4
document.addEventListener("scroll",() => {
    var scoll_position = window.scrollY;
    if (scoll_position > 250){
        header.style.backgroundColor ="black";
    } else {
        header.backgroundColor = "transparent"
    }
})