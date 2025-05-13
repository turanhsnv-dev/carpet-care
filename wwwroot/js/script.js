const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 250) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero-bg");

  const img = new Image();
  img.src = "wwwroot/images/bg-hero/Group 82.png";

  img.onload = function () {
    hero.classList.add("loaded");

    setTimeout(() => {
      const placeholder = document.querySelector(".hero-bg::before");
      if (placeholder) placeholder.style.display = "none";
    }, 500);
  };

  img.onerror = function () {
    hero.style.background =
      "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), #333";
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".close-btn");
  const overlay = document.querySelector(".overlay");

  hamburger.addEventListener("click", function () {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", function () {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  document.querySelectorAll(".sidebar-menu li a").forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".mobile-nav-main");
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
