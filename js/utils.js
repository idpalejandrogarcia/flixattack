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

function buscaSeriesPorIds(ids) {
    var resultado = [];
    for (var i = 0; i < series.length; i++) {
        if (ids.indexOf(series[i].id.toString()) >= 0) {
            resultado.push(series[i]);
        }
    }
    return resultado;
}

function buscaSeriePorId(idSerie) {
    for (var i = 0; i < series.length; i++) {
        if (series[i].id === idSerie) {
            return series[i];
        }
    }
    return null;
}

function seleccionaSeriePorId(idSerie) {
    var serieASeleccionar = buscaSeriePorId(idSerie);
    if (serieASeleccionar) {
        seleccionaSerie(serieASeleccionar);
    }
}

function actualizarCookiesDeFavoritos() {
    var idsSeriesFavoritas = [];
    for (var i = 0; i < favoritos.length; i++) {
        idsSeriesFavoritas.push(favoritos[i].id);
    }
    // Guardamos la cookie
    guardarCookie('favoritos', idsSeriesFavoritas.join(','));
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
    // Actualizamos las cookies de favoritos por si el usuario sale de la web
    actualizarCookiesDeFavoritos();
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

function guardarCookie(nombre, valor) {
    var d = new Date();
    d.setTime(d.getTime() + (1000 * 24 * 60 * 60 * 1000)); // mil días de cookies
    var expires = "expires=" + d.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expires + ";path=/";
}

function leerCookie(nombre) {
    var name = nombre + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

function cargarDatosCookies() {
    // Vemos si tenemos favoritos guardadas en las cookies
    var cookieFavoritos = leerCookie('favoritos');
    if (cookieFavoritos) {
        // Sacamos el listado de los ids de los favoritos
        var idSeriesFavoritas = cookieFavoritos.split(',');
        if (idSeriesFavoritas.length > 0) {
            favoritos = buscaSeriesPorIds(idSeriesFavoritas);
        }
    }
}
