const mobileNav = document.querySelector(".mobileNav");
let lastScrollPosition = 0;

function showNav() {
  mobileNav.style.transform = "translateY(0)";
}

function hideNav() {
  mobileNav.style.transform = "translateY(100%)";
}

function onScroll() {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition < lastScrollPosition) {
    showNav();
  } else {
    hideNav();
  }

  lastScrollPosition = currentScrollPosition;
}

window.addEventListener("scroll", () => {
  onScroll();
});
