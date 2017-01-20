var aDesRoues = ['bateau.jpeg', 'avion.jpeg', 'voiture.jpeg'];



aDesRoues.shift();





var screamName = aDesRoues.map(function(element) {

  return element.substring(0, element.length - 5).toUpperCase();

});



console.log(screamName);
