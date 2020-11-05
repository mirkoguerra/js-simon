// mettendo tutto qui dentro, sono certo che verrà fatto tutto quando il DOM è già stato caricato
$(document).ready(function(){

  // funzione che genera un numero random intero compreso fra min e max
  function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  // funzione che inserirà nell'array playerNumbers i numeri che vengono inseriti dal giocatore
  function playerNumberspush() {
    for (var i=0; i<5; i++) {
      playerNumbers.push(parseInt(prompt()));
    }
  return playerNumbers;
  }

  // inizializzo l'array che conterrà i 5 numeri casuali e l'array che sarà composto dai numeri che il giocatore inserirà
  var askedNumbers = new Array();
  var playerNumbers = new Array();

  // uso un ciclo for per riempire l'array e per far visualizzare i numeri negli alert
  for (var i=0; i<5; i++) {
    askedNumbers.push(getRndInt(1, 10));
    alert(askedNumbers[i]);
  }

  // ritardo l'esecuzione della funzione che inserirà nell'array playerNumbers i numeri che vengono inseriti dal giocatore
  setTimeout(playerNumberspush, 3000);

  console.log("asked", askedNumbers);
  console.log("player", playerNumbers);

});
