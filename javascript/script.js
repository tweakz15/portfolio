const menuItems = document.querySelector('.menu-items input');
const nav = document.querySelector('nav ul')

menuItems.addEventListener('click', function() { 
  nav.classList.toggle('slider');
});

$('.scroll').on('click', function(e){

  var href = $(this).attr('href');

  var smooth = $(href);

  $('html').animate({
    scrollTop: smooth.offset().top - 90
  }, 600);

  e.preventDefault();

});