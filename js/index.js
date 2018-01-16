var series = [
    {
        "id": 1,
        "title": "attack on titan",
        "description": "En este mundo, la población humana vive concentrada dentro de tres enormes muros (María, Rose y Sina) para protegerse de la aparición de seres gigantescos que devoran personas: los titanes. Un día, el distrito Shiganshina, ubicado en el primer muro denominado María, es atacado por un titán, más grande que los demás, abriendo el paso al resto de los titanes logrando así invadir la ciudad, incidente durante el cual la madre de Eren es devorada por un titán",
        "images": "img/series/titans.jpg",
        "images_big": "img/series/titans_big.jpg",
        "videos": ["vid1", "vid2", "vid3"],
        "numtemp": 2
    },
    {
        "id": 2,
        "title": "Dragon ball",
        "description": "Su trama describe las aventuras de Gokū, un guerrero saiyajin, cuyo fin es proteger a la Tierra de otros seres que quieren conquistarla y exterminar a la humanidad",
        "images": "img/series/dragon_ball.jpg",
        "videos": ["vid1", "vid2", "vid3"],
        "numtemp": 4
    },
    {
        "id": 3,
        "title": "Overlord",
        "description": "En el año 2138, se decide descontinuar el DMMORPG Yggdrasil un juego que ha sido el más popular los últimos doce años pero ha caído en desuso el ultimo tiempo. El día que debían cerrarse los servidores del juego, Momonga; líder del gremio Ainz Ooal Gown, decide quedarse hasta que cierren, quedando atrapado en este nuevo mundo.",
        "images": "img/series/overlord.jpg",
        "videos": ["vid1", "vid2", "vid3"],
        "numtemp": 2
    },
    {
        "id": 4,
        "title": "Blood lad",
        "description": "Blood Lad cuenta la historia de Staz, un vampiro jefe de un distrito del surrealista \"Mundo de los Demonios\", el cual está encantado por la cultura del mundo humano (principalmente Japón). y Fuyumi, una chica normal que termina por accidente en el mundo de los demonios a través de un portal.",
        "images": "img/series/blood_lad.jpg",
        "videos": ["vid1", "vid2", "vid3"],
        "numtemp": 1
    },
    {
        "id": 5,
        "title": "Another",
        "description": "La historia se centra en Kōichi Sakakibara, un joven de noveno año que tras trasladarse a la escuela secundaria Yomiyama del Norte y conocer a la excéntrica Mei Misaki, se encuentra con un misterio girando alrededor de los estudiantes y personas relacionadas con su clase, quienes son víctimas de horribles muertes inexplicables.",
        "images": "img/series/another.jpg",
        "videos": ["vid1", "vid2", "vid3"],
        "numtemp": 1
    },
    {
        "id": 6,
        "title": "Mahoutsukai no yome",
        "description": "Chise Hatori ha llevado una vida de abusos y de desprecio en la que no ha conocido nunca el amor. Sin el calor de una familia, su actitud ante la vida siempre ha sido derrotista. Cuando ya no tenía esperanza y la van a vender como esclava, aparece un hombre con cabeza de bestia y misteriosos poderes que la compra para ofrecerle convertirla en su aprendiz... y en su futura esposa.",
        "images": "img/series/mahoumo.jpg",
        "videos": ["vid1", "vid2", "vid3"],
        "numtemp": 1
    },
    {
        "id": 7,
        "title": "Fairy Tail",
        "description": "Fairy Tail cuenta la historia de un joven mago llamado Natsu en la búsqueda de su maestro y padre adoptivo Igneel que resulta ser un dragón. Por ello se unió a Fairy Tail, un gremio de magos que es famoso por los destrozos y daños que provocan en diversas ciudades (lo cual no debería ser así).",
        "images": "img/series/fairy.jpg",
        "videos": ["vid1", "vid2", "vid3"],
        "numtemp": 1
    },
    {
        "id": 8,
        "title": "Braviest Warriors",
        "description": "Situado en el año 3085, la serie narra las aventuras de cuatro héroes a sueldo adolescentes, que viajan a través del universo salvando a extraterrestres adorables y a sus mundos con el poder de sus emociones.",
        "images": "img/series/warriors.png",
        "videos": ["vid1", "vid2", "vid3"],
        "numtemp": 1
    },
    {
        "id": 9,
        "title": "Caballeros del zodiaco",
        "description": "La serie se centra en un grupo de jóvenes guerreros denominados «caballeros» (o «santos»), cuyo protagonista principal es Seiya (caballero que porta la armadura de Pegaso). Estos guerreros luchan del lado de la diosa griega Athena reencarnada en la humana Saori Kido para proteger a la humanidad de las fuerzas del mal que quieren dominar la Tierra.",
        "images": "img/series/zodiaco.jpg",
        "videos": ["vid1", "vid2", "vid3"],
        "numtemp": 1
    }
];

function cargarContenido() {
    for (var i = 0; i < series.length; i++) {
        var serie = series[i];
        var contenidoSerie = '<div data-image="' + serie.imagen + '" class="item item1"><span class="episodio">' + series[i].numtemp + '</span><h3>' + series[i].title + '</h3></div>';
        var serieElement = $(contenidoSerie).css('background-image', 'url("' + series[i].images + '")');
        serieElement.click(function () {
            cambiaVideo(this);
        });
        $('#contenedor-series').append(serieElement);
    }
    /**
     <div class="item item1" data-image="img/series/another.jpg" style="background-image:url(img/series/another.jpg)" onclick="cambiaVideo('taue8pzlNHQ', 'another-big.jpg')">
     <span class="episodio"> Episodio Nº 1 (Sub)</span>
     <h3>Another</h3>
     </div>
     <div class="item item2" data-image="img/series/dragon_ball.jpg" style="background-image:url(img/series/dragon_ball.jpg)" onclick="cambiaVideo('3pbw5ftKQ18', 'dragon_ball-big.jpg')">
     <span class="episodio">Episodio Nº 1 </span>
     <h3>Dragon Ball</h3>
     </div>
     <div class="item item3" data-image="img/series/overlord.jpg" style="background-image:url(img/series/overlord.jpg)" onclick="cambiaVideo('Pw90FhKPwx8', 'overlord-big.jpg')">
     <span class="episodio">Maraton (ep 1 - 4)</span>
     <h3>Overlord</h3>
     </div>
     <div class="item item4" data-image="img/series/blood_lad.jpg" style="background-image:url(img/series/blood_lad.jpg)" onclick="cambiaVideo('cNhv75d3Zzc', 'blood_lad-big.jpg')">
     <span class="episodio">Episodio Nº 1</span>
     <h3>Blood Lad</h3>
     </div>
     <div class="item item5" data-image="img/series/titans.jpg" style="background-image:url(img/series/titans.jpg)" onclick="cambiaVideo('UyAPHISrhOE', 'titans-big.jpg')">
     <span class="episodio">Episodio Nº 1</span>
     <h3>Attack on Titans</h3>
     </div>
     <div class="item item6" data-image="img/series/mahoumo.jpg" style="background-image:url(img/series/mahoumo.jpg)" onclick="cambiaVideo('juV8lD5KbRk', 'mahoumo-big.jpg')">
     <span class="episodio">Episodio Nº 1</span>
     <h3>Mahoutsukai no yome</h3>
     </div>
     <div class="item item7" data-image="img/series/fairy.jpg" style="background-image:url(img/series/fairy.jpg)" onclick="cambiaVideo('E0TZW52OvFk', 'fairy-big.jpg')">
     <span class="episodio">Episodio Nº 1</span>
     <h3>Fairy Tail</h3>
     </div>
     <div class="item item8" data-image="img/series/warriors.png" style="background-image:url(img/series/warriors.png)" onclick="cambiaVideo('4AZt4S82uAk', 'warriors-big.jpg')">
     <span class="episodio">Episodio Nº 1</span>
     <h3>Braviest Warriors</h3>
     </div>
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
