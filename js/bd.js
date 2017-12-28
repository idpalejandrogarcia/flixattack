var bdser = [
  {id: 1, title: 'attack on titan', description: 'Bla bla bla', images: ['img1', 'img2', 'img3'], videos: ['vid1', 'vid2', 'vid3'], numtemp: 3},
  {id: 2, title: 'bla bla bla', description: 'Bla bla bla', images: ['img1', 'img2', 'img3'], videos:['vid1', 'vid2', 'vid3'], numtemp: 2},
];

bdser[0].numtemp;
bdser[1].numtemp;
var resultado = [];
for (var i = 0; i < bdser.length; i++) {
  if (bdser[i].numtemp>2) {
    resultado.push(bdser[i])
  }
}

var miperfil = {
  likes: [2,3]
}
resultadolike= [];
for (var i = 0; i < bdser.length; i++) {
  if (likes.include(bdser[i].id)) {
    resultadolike.push(bdser[i])
  }
}
