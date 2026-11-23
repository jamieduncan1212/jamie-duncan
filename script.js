// This is the JavaScript code for my personal website

// JavaScript code for the personal interest slideshows
const slideshowIndexes = {};

function plusSlides(step, slideshowName) {
   slideshowIndexes[slideshowName] = (slideshowIndexes[slideshowName] || 1) + step;
   showSlides(slideshowName);
}

function showSlides(slideshowName) {
   const slideshow = document.querySelector(`[data-slideshow="${slideshowName}"]`);
   const slides = slideshow ? slideshow.getElementsByClassName('mySlides') : [];
   if (!slides.length) return;

   const currentIndex = slideshowIndexes[slideshowName] || 1;
   if (currentIndex > slides.length) slideshowIndexes[slideshowName] = 1;
   if (currentIndex < 1) slideshowIndexes[slideshowName] = slides.length;

   for (const slide of slides) {
      slide.style.display = 'none';
   }
   slides[slideshowIndexes[slideshowName] - 1].style.display = 'block';
}

// A function that controls the light and dark mode feature
//Creating a main event listener for the entire DOM once the content loads
document.addEventListener('DOMContentLoaded', function() {
   document.querySelectorAll('[data-slideshow]').forEach((slideshow) => {
      slideshowIndexes[slideshow.dataset.slideshow] = 1;
      showSlides(slideshow.dataset.slideshow);
   });

   // JavaScript code for the hamburger menu on phones and tablets
   const hamburgerButton = document.getElementById('hamburger-btn');
   const navbar = document.getElementById('navbar');
   const compactNavigation = window.matchMedia('(max-width: 1024px)');

   function closeNavigation() {
      navbar.classList.remove('open');
      hamburgerButton.setAttribute('aria-expanded', 'false');
   }

   function updateNavigation() {
      if (!compactNavigation.matches) {
         closeNavigation();
      }
   }

   if (hamburgerButton && navbar) {
      hamburgerButton.addEventListener('click', function() {
         const isOpen = navbar.classList.toggle('open');
         hamburgerButton.setAttribute('aria-expanded', String(isOpen));
      });

      navbar.querySelectorAll('a[href^="#"]').forEach((link) => {
         link.addEventListener('click', closeNavigation);
      });

      compactNavigation.addEventListener('change', updateNavigation);
      updateNavigation();
   }

   //The function runs when the content loads, which is itself another event listener, this time for when the object with id 'switch' is clicked
   document.getElementById('switch').addEventListener('click', function() {
    // Using the toggle method to toggle between the light and dark themes for the body.
    // If the website is currently showing the light theme, it is hidden, otherwise it is shown. This process is the same for the dark theme.
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
   });
});