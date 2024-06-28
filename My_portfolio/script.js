function revealOnScroll( ){
  const image = document.querySelector('.reveal-image');
  const rect = image.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom >= 0){
    image.classList.add('active');

    window.removeEventListener('scroll', revealOnScroll);
  }
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


document.addEventListener("DOMContentLoaded", function(){
  const text = document.querySelector(".main");
  tet.classList.add("visible");
});


document.getElementById('whatsappButton').addEventListener('click', function() {
    var phoneNumber = '27656311745';
    var whatsappURL = 'https://wa.me/' + phoneNumber;
    window.open(whatsappURL, '_blank');
});

$(document).ready(function()
{
  $('.navbar-nav .nav-link').on('click', function(event){
    var target =$(this.getAttribute('href'));

    if (target.length){
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().scrollTop
      }, 1000);
      }
    });

    $('.navbar-collapse').on('show.bs.collapse', function(){
      $('.navbar-collapse').collapse('show');
    });
  });

     if (window.location.pathname !== '/' || window.location.hash)
        {
            window.location.replace('/');
        }