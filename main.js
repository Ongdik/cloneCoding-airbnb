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

// const leftBtn = document.querySelector(".leftBtn");
// const rightBtn = document.querySelector(".rightBtn");

// function leftScroll() {

// }

// function rightScroll()

document.addEventListener("DOMContentLoaded", function () {
  const iconNav = document.querySelector(".iconNav");
  const leftBtn = iconNav.querySelector(".leftBtn");
  const rightBtn = iconNav.querySelector(".rightBtn");
  const iconsList = iconNav.querySelector(".icons");

  leftBtn.addEventListener("click", function () {
    iconsList.scrollLeft -= 100; // 이동할 스크롤 양을 조절
    updateButtonVisibility();
  });

  rightBtn.addEventListener("click", function () {
    iconsList.scrollLeft += 100; // 이동할 스크롤 양을 조절
    updateButtonVisibility();
  });

  function updateButtonVisibility() {
    if (iconsList.scrollLeft === 0) {
      leftBtn.style.display = "none";
    } else {
      leftBtn.style.display = "block";
    }

    if (
      Math.ceil(iconsList.scrollLeft + iconNav.offsetWidth) >=
      iconsList.scrollWidth
    ) {
      rightBtn.style.display = "none";
    } else {
      rightBtn.style.display = "block";
    }
  }

  updateButtonVisibility();

  window.addEventListener("resize", updateButtonVisibility);
});
