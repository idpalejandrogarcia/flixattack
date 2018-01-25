var series = [
    {
        "id": 1,
        "title": "Attack on titan",
        "description": "En este mundo, la población humana vive concentrada dentro de tres enormes muros (María, Rose y Sina) para protegerse de la aparición de seres gigantescos que devoran personas: los titanes. Un día, el distrito Shiganshina, ubicado en el primer muro denominado María, es atacado por un titán, más grande que los demás, abriendo el paso al resto de los titanes logrando así invadir la ciudad, incidente durante el cual la madre de Eren es devorada por un titán",
        "images": "img/series/titans.jpg",
        "images_big": "titans-big.jpg",
        "videos": "UyAPHISrhOE",
        "numtemp": 1
    },
    {
        "id": 2,
        "title": "Dragon ball",
        "description": "Su trama describe las aventuras de Gokū, un guerrero saiyajin, cuyo fin es proteger a la Tierra de otros seres que quieren conquistarla y exterminar a la humanidad",
        "images": "img/series/dragon_ball.jpg",
        "images_big": "dragon_ball-big.jpg",
        "videos": "3pbw5ftKQ18",
        "numtemp": 1
    },
    {
        "id": 3,
        "title": "Overlord",
        "description": "En el año 2138, se decide descontinuar el DMMORPG Yggdrasil un juego que ha sido el más popular los últimos doce años pero ha caído en desuso el ultimo tiempo. El día que debían cerrarse los servidores del juego, Momonga; líder del gremio Ainz Ooal Gown, decide quedarse hasta que cierren, quedando atrapado en este nuevo mundo.",
        "images": "img/series/overlord.jpg",
        "images_big": "overlord-big.jpg",
        "videos": "Pw90FhKPwx8",
        "numtemp": "1 al 4"
    },
    {
        "id": 4,
        "title": "Blood lad",
        "description": "Blood Lad cuenta la historia de Staz, un vampiro jefe de un distrito del surrealista \"Mundo de los Demonios\", el cual está encantado por la cultura del mundo humano (principalmente Japón). y Fuyumi, una chica normal que termina por accidente en el mundo de los demonios a través de un portal.",
        "images": "img/series/blood_lad.jpg",
        "images_big": "blood_lad-big.jpg",
        "videos": "cNhv75d3Zzc",
        "numtemp": 1
    },
    {
        "id": 5,
        "title": "Another",
        "description": "La historia se centra en Kōichi Sakakibara, un joven de noveno año que tras trasladarse a la escuela secundaria Yomiyama del Norte y conocer a la excéntrica Mei Misaki, se encuentra con un misterio girando alrededor de los estudiantes y personas relacionadas con su clase, quienes son víctimas de horribles muertes inexplicables.",
        "images": "img/series/another.jpg",
        "images_big": "another-big.jpg",
        "videos": "taue8pzlNHQ",
        "numtemp": 1
    },
    {
        "id": 6,
        "title": "Mahoutsukai no yome",
        "description": "Chise Hatori ha llevado una vida de abusos y de desprecio en la que no ha conocido nunca el amor. Sin el calor de una familia, su actitud ante la vida siempre ha sido derrotista. Cuando ya no tenía esperanza y la van a vender como esclava, aparece un hombre con cabeza de bestia y misteriosos poderes que la compra para ofrecerle convertirla en su aprendiz... y en su futura esposa.",
        "images": "img/series/mahoumo.jpg",
        "images_big": "mahoumo-big.jpg",
        "videos": "juV8lD5KbRk",
        "numtemp": 1
    },
    {
        "id": 7,
        "title": "Fairy Tail",
        "description": "Fairy Tail cuenta la historia de un joven mago llamado Natsu en la búsqueda de su maestro y padre adoptivo Igneel que resulta ser un dragón. Por ello se unió a Fairy Tail, un gremio de magos que es famoso por los destrozos y daños que provocan en diversas ciudades (lo cual no debería ser así).",
        "images": "img/series/fairy.jpg",
        "images_big": "fairy-big.jpg",
        "videos": "E0TZW52OvFk",
        "numtemp": 1
    },
    {
        "id": 8,
        "title": "Braviest Warriors",
        "description": "Situado en el año 3085, la serie narra las aventuras de cuatro héroes a sueldo adolescentes, que viajan a través del universo salvando a extraterrestres adorables y a sus mundos con el poder de sus emociones.",
        "images": "img/series/warriors.png",
        "images_big": "warriors-big.jpg",
        "videos": "4AZt4S82uAk",
        "numtemp": 1
    },
    {
        "id": 9,
        "title": "Caballeros del zodiaco",
        "description": "La serie se centra en un grupo de jóvenes guerreros denominados «caballeros» (o «santos»), cuyo protagonista principal es Seiya (caballero que porta la armadura de Pegaso). Estos guerreros luchan del lado de la diosa griega Athena reencarnada en la humana Saori Kido para proteger a la humanidad de las fuerzas del mal que quieren dominar la Tierra.",
        "images": "img/series/zodiaco.jpg",
        "images_big": "zodiaco-big.png",
        "videos": "LA6f6WW7YjI",
        "numtemp": 1
    }
];

function cargarContenido() {
    for (var i = 0; i < series.length; i++) {
        var serie = series[i];
        var contenidoSerie = '<div data-serie="' + i + '" class="item item1"><span class="episodio"> Episodio Nº ' + series[i].numtemp + '</span><h3>' + series[i].title + '</h3></div>';
        var serieElement = $(contenidoSerie).css('background-image', 'url("' + series[i].images + '")');
        serieElement.click(function () {
            var posicionSerie = Number($(this).attr('data-serie'));
            cambiaVideo(posicionSerie);
        });
        $('#contenedor-series').append(serieElement);
    }
    /**
    Ejemplo de lso divs del slick
     <div class="item item9" data-image="img/series/zodiaco.jpg" style="background-image:url(img/series/zodiaco.jpg)" onclick="cambiaVideo('LA6f6WW7YjI', 'zodiaco-big.png')">
     <span class="episodio">Episodio Nº 1</span>
     <h3>Caballeros del zodiaco</h3>
     </div>
     */
}

$(document).ready(function () {
    cargarContenido();
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

function cambiaVideo(posicionSerie) {
    var id = series[posicionSerie].videos;
    var urlImage = series[posicionSerie].images_big;
    var descrip = series[posicionSerie].description;
    iframe.src = 'https://www.youtube.com/embed/' + id;
    // var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
    // if (requestFullScreen) {
    //   requestFullScreen.bind(iframe)();
    // }
    imagen.style = 'background-image:url(img/series/' + urlImage + ')';
    descripcion.innerHTML = descrip;
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
        method: function(value, item) {
          return "<img src='" + item.images + "'> <span>" + value + "</span>";
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
        onClickEvent: function() {
          var sel = $('.easy-autocomplete-container .selected').text().trim();
          console.log('->', sel, '<-')
          irVideo(sel);
		    }
    }

};

// Función para buscar una serie por su título (devuelve id)
function irVideo(title) {
  series.forEach(function(e) {
    //console.log(e.title);

    if (title == e.title) {
      cambiaVideo(e.id -1);
    }
  })
}

$(".buscador .box input").easyAutocomplete(options);
