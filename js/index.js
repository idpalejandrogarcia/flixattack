function cargarContenido() {
    for (var i = 0; i < series.length; i++) {
        var serie = series[i];
        var contenidoSerie = '<div data-serie="' + serie.id + '" class="item item1"><span class="episodio"> Episodio Nº ' + series[i].numtemp + '</span><h3>' + series[i].title + '</h3></div>';
        var serieElement = $(contenidoSerie).css('background-image', 'url("' + series[i].images + '")');
        serieElement.click(function () {
            var idSerie = Number($(this).attr('data-serie'));
            seleccionaSeriePorId(idSerie);
        });
        $('#contenedor-series').append(serieElement);
    }
    /**
     Ejemplo de los divs del slick
     <div class="item item9" data-image="img/series/zodiaco.jpg" style="background-image:url(img/series/zodiaco.jpg)" onclick="cambiaVideo('LA6f6WW7YjI', 'zodiaco-big.png')">
     <span class="episodio">Episodio Nº 1</span>
     <h3>Caballeros del zodiaco</h3>
     </div>
     */
}

$(document).ready(function () {
    $('#button-favorito').hide();
    $('#button-no-favorito').hide();
    cargarDatosCookies();
    cargarContenido();
    actualizarFavoritos();
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
var descripcion = document.querySelector('#contenedor-descripcion');
var detform = document.querySelector('#detform');

function abrirformulario (){
  detform.open="open";
}

var options = {
    url: "js/series.json",
    getValue: "title",
    cssClasses: "item-name",
    template: {
        // type: "iconLeft",
        // fields: {
        //     iconSrc: "images"
        // }
        type: "custom",
        method: function (value, item) {
            return '<img data-id="' + item.id + '" src="' + item.images + '"> <span>' + value + '</span>';
        }
    },

    list: {
        match: {
            enabled: true
        },
        showAnimation: {
            type: "slide"
        },
        // hideAnimation: {
        //     type: "slide"
        // },
        onClickEvent: function () {
            var idSerieSeleccionada = Number($('.easy-autocomplete-container .selected').find('img').attr('data-id'));
            seleccionaSeriePorId(idSerieSeleccionada);
        }
    }

};

$(".buscador .box input").easyAutocomplete(options);
