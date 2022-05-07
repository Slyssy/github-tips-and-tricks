const pageNavbar = document.querySelector('.page-navbar');
const pageLinks = document.querySelector('.page-links');
const stickyClose = document.querySelector('.close-icon');

//% Sticky Navbar
window.addEventListener('scroll', () => {
  pageNavbar.classList.toggle('sticky', window.scrollY > 0);
});

stickyClose.addEventListener('click', (e) => {
  pageNavbar.classList.remove('sticky');
});

//% Smooth Scroll

const navLinks = document.querySelector('.nav__links');
//? 1. Add an event listener to common parent element.
pageLinks.addEventListener('click', function (e) {
  e.preventDefault();
  //? 2. Determine what element originated the event.
  // console.log(e.target);
  // $ Matching Strategy: This makes it so only the links in the nav__links
  // $ container are selected and not the nav_links container itself.
  if (e.target.classList.contains('page-link')) {
    const pageNavId = e.target.getAttribute('href');
    console.log(pageNavId);
    document.querySelector(pageNavId).scrollIntoView({ behavior: 'smooth' });
    pageNavbar.classList.remove('sticky');
  }
});
