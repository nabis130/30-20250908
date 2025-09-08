'Use strict'

/**
 * Navbar Toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
const navLinks = document.querySelectorAll('[data-navbar-link]');

navToggleBtn.addEventListener('click', function () {
  this.classList.toggle('active');
  header.classList.toggle('nav-active');
  
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    header.classList.toggle('nav-active');
    navToggleBtn.classList.toggle('active');
  });
};



/**
 * Header scroll active state & Go to top
 */

// Go to top
const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', function () {
  
  if (this.window.scrollY >= 100) {
    header.classList.add('active');

    // Go to top
    goTopBtn.classList.add('active');
  } else {
    header.classList.remove('active');

    // Go to top
    goTopBtn.classList.remove('active');
  }; 
});















