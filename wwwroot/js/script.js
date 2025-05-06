const hamburger = document.querySelector(".hamburger");
const mobileHeader = document.querySelector(".mobile-header");

hamburger.addEventListener("click", () => {
  mobileHeader.classList.toggle("active");
});



const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 250) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Hamar animasiya
  });
});



