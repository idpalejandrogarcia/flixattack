var bdser = [
  {id: 1, title: 'attack on titan', description: 'En este mundo, la población humana vive concentrada dentro de tres enormes muros (María, Rose y Sina) para protegerse de la aparición de seres gigantescos que devoran personas: los titanes. Un día, el distrito Shiganshina, ubicado en una de las partes externas al sur del primer muro denominado María, es atacado por un titán, más grande que los demás, causando una brecha y abriendo el paso al resto de los titanes logrando así invadir la ciudad, incidente durante el cual la madre de Eren es devorada por un titán', images: ['img1', 'img2', 'img3'], videos: ['vid1', 'vid2', 'vid3'], numtemp: 2},
  {id: 2, title: 'Dragon ball', description: 'Su trama describe las aventuras de Gokū, un guerrero saiyajin, cuyo fin es proteger a la Tierra de otros seres que quieren conquistarla y exterminar a la humanidad', images: ['img1', 'img2', 'img3'], videos:['vid1', 'vid2', 'vid3'], numtemp: 4},
  {id: 3, title: 'Overlord', description: 'En el año 2138, se decide descontinuar el DMMORPG Yggdrasil un juego que ha sido el más popular los últimos doce años pero ha caído en desuso el ultimo tiempo. El día que debían cerrarse los servidores del juego, Momonga; líder del gremio Ainz Ooal Gown, decide quedarse hasta que cierren, quedando atrapado en este nuevo mundo.', images: ['img1', 'img2', 'img3'], videos:['vid1', 'vid2', 'vid3'], numtemp: 2},
  {id: 4, title: 'Blood lad', description: 'Blood Lad cuenta la historia de Staz, un vampiro jefe de un distrito del surrealista "Mundo de los Demonios", el cual está encantado por la cultura del mundo humano (principalmente Japón). y Fuyumi, una chica normal que termina por accidente en el mundo de los demonios a través de un portal.', images: ['img1', 'img2', 'img3'], videos:['vid1', 'vid2', 'vid3'], numtemp: 1},
  {id: 5, title: 'Another', description: 'La historia se centra en Kōichi Sakakibara, un joven de noveno año que tras trasladarse a la escuela secundaria Yomiyama del Norte y conocer a la excéntrica Mei Misaki, se encuentra con un misterio girando alrededor de los estudiantes y personas relacionadas con su clase, quienes son víctimas de horribles muertes inexplicables.', images: ['img1', 'img2', 'img3'], videos:['vid1', 'vid2', 'vid3'], numtemp: 1},
  {id: 6, title: 'Mahoutsukai no yome', description: '.', images: ['img1', 'img2', 'img3'], videos:['vid1', 'vid2', 'vid3'], numtemp: 1},
  {id: 7, title: 'Fairy Tail', description: '.', images: ['img1', 'img2', 'img3'], videos:['vid1', 'vid2', 'vid3'], numtemp: 1},
  {id: 8, title: 'Braviest Warriors', description: '.', images: ['img1', 'img2', 'img3'], videos:['vid1', 'vid2', 'vid3'], numtemp: 1},
  {id: 9, title: 'Caballeros del zodiaco', description: '.', images: ['img1', 'img2', 'img3'], videos:['vid1', 'vid2', 'vid3'], numtemp: 1},
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
