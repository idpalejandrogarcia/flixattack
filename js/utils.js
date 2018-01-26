var favoritos = [];
var serieSeleccionada = null;

function serieEsFavorita(serie) {
    for (var i = 0; i < favoritos.length; i++) {
        if (favoritos[i].id === serie.id) {
            return true;
        }
    }
    return false;
}

function actualizarDOMSerie(serie) {
    var id = serie.videos;
    var urlImage = serie.images_big;
    var descrip = serie.description;
    iframe.src = 'https://www.youtube.com/embed/' + id;
    // function expandir(){
    //   var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
    //   if (requestFullScreen) {
    //     requestFullScreen.bind(iframe)();
    //   }
    // }
    imagen.style = 'background-image:url(img/series/' + urlImage + ')';
    descripcion.innerHTML = descrip;
    // Si la serie es favorita mostramos el botón de quitar favoritos
    if (serieEsFavorita(serie)) {
        $('#button-favorito').hide();
        $('#button-no-favorito').show();
    } else {
        $('#button-favorito').show();
        $('#button-no-favorito').hide();
    }
}

function seleccionaSerie(serie) {
    serieSeleccionada = serie;
    actualizarDOMSerie(serie);
}

function seleccionaSeriePorId(idSerie) {
    for (var i = 0; i < series.length; i++) {
        if (series[i].id === idSerie) {
            seleccionaSerie(series[i]);
        }
    }
    return null;
}


function cargarDatosCookies() {

}

function actualizarFavoritos() {
    var listadoFavoritos = $('#listado-favoritos');
    // Borramos el DOM de favoritos
    listadoFavoritos.empty();
    // Miramos si tenemos o no favoritos
    if (favoritos.length > 0) {
        for (var i = 0; i < favoritos.length; i++) {
            listadoFavoritos.append('<li><a href="#" onclick="seleccionaSeriePorId(' + favoritos[i].id + ')">' + favoritos[i].title + '</a></li>');
        }
    } else {
        // Mostramos un indicador diciendo que no tienes favoritos.
        listadoFavoritos.append('<li><a>No tienes favoritos</a></li>');
    }
}

function marcarFavorito() {
    // Metemos la serie en el listado de favoritos
    favoritos.push(serieSeleccionada);
    actualizarFavoritos();
    seleccionaSerie(serieSeleccionada);
}

function buscarFavoritoPorId(idSerie) {
    for (var i = 0; i < favoritos.length; i++) {
        if (favoritos[i].id === idSerie) {
            return i;
        }
    }
    return null;
}

function desmarcarFavorito() {
    var posicionFavorito = buscarFavoritoPorId(serieSeleccionada.id);
    favoritos.splice(posicionFavorito, 1);
    actualizarFavoritos();
    seleccionaSerie(serieSeleccionada);
}