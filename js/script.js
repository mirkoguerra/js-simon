// mettendo tutto qui dentro, sono certo che verrà fatto tutto quando il DOM è già stato caricato
$(document).ready(function(){

  // funzione che genera un numero random intero compreso fra min e max
  function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function playerNumbersPush() {

    // ciclo che inserirà nell'array playerNumbers i numeri che vengono inseriti dal giocatore
    for (var i=0; i<5; i++) {
      playerNumbers.push(parseInt(prompt()));
    }

    // ciclo che confronta e inserisce gli elementi matchati nell'array
    for (var i=0; i<5; i++) {
      if (askedNumbers[i] == playerNumbers[i]) {
        matchedNumbers.push(playerNumbers[i]);
      }
    }

    // variabile che darà il risultato
    var risultato = document.getElementById("risultato");

    // gestione dell'output
    if (matchedNumbers.length==0){
      risultato.innerHTML = ("Non hai ricordato nessun numero");
    } else {
      risultato.innerHTML = ("Ti sei ricordato " + matchedNumbers.length + " numeri nell'ordine corretto, ossia " + matchedNumbers);
    }
  }

  // inizializzo l'array che conterrà i 5 numeri casuali, l'array che sarà composto dai numeri che il giocatore inserirà e quello di confronto
  var askedNumbers = new Array();
  var playerNumbers = new Array();
  var matchedNumbers = new Array();

  // uso un ciclo for per riempire l'array e per far visualizzare i numeri negli alert
  for (var i=0; i<5; i++) {
    askedNumbers.push(getRndInt(1, 10));
    alert(askedNumbers[i]);
  }

  // ritardo l'esecuzione della funzione che inserirà nell'array playerNumbers i numeri che vengono inseriti dal giocatore
  setTimeout(playerNumbersPush, 3000);

});
