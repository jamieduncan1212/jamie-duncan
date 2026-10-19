// This is the JavaScript code for my personal website

// JavaScript code for the personal interest slideshow
let slideIndex = 1;

function plusSlides(step) {
   showSlides(slideIndex += step);
}

function showSlides(index) {
   const slides = document.getElementsByClassName('mySlides');
   if (index > slides.length) slideIndex = 1;
   if (index < 1) slideIndex = slides.length;
   for (const slide of slides) {
      slide.style.display = 'none';
   }
   slides[slideIndex - 1].style.display = 'block';
}

// A function that controls the light and dark mode feature
//Creating a main event listener for the entire DOM once the content loads
document.addEventListener('DOMContentLoaded', function() {
   showSlides(slideIndex);

   //The function runs when the content loads, which is itself another event listener, this time for when the object with id 'switch' is clicked
   document.getElementById('switch').addEventListener('click', function() {
    // Using the toggle method to toggle between the light and dark themes for the body.
    // If the website is currently showing the light theme, it is hidden, otherwise it is shown. This process is the same for the dark theme.
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
   });
});