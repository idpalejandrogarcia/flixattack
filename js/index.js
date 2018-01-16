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
var options = {
   url: "js/series.json",
   getValue: "title",
   cssClasses: "item-name",
   template: {
     type: "iconLeft",
     fields: {
       iconSrc: "images"
     }
   },

   list: {
     match: {
       enabled: true
     },
     showAnimation: {
       type: "slide"
     },
     hideAnimation: {
       type: "slide"
     }
   }

};

$(".buscador").easyAutocomplete(options);
