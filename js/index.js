$(document).ready(function() {
  $('.slider-nav').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true
  });

});

var iframe = document.querySelector('.player');
var imagen = document.querySelector('.slider-top');
function cambiaVideo(id, bigImagename) {
  iframe.src = 'https://www.youtube.com/embed/' + id;
  imagen.style = 'background-image:url(img/series/' + bigImagename + ')';
}
