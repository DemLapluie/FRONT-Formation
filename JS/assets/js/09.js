
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
|               LES BOUCLES               |
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// -- Pour i = 0 ; Tant que i est strictement inférieur ou égale à 10 ; alors; j'incrémente i de 1.
for ( let i = 0 ; i<= 10 ; i++) {
    document.write('<p>Instruction executée : <strong>' + i + '</strong> </p>')
}

document.write('<hr>');

 var j = 1 // -- La variable ne peut être déclaré dans le while car la valeur de j est réinitialisée à 1 après chaque incrémentation et comme ça n'atteindra jamais 10 c'est une boucle sans fin!
while(j<=10) {
    document.write('<p>Instruction executée : <strong>' + j + '</strong> </p>');
    j++;
}

document.write('<hr>');

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
|                 EXO 1                   |
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/**
* CONSIGNE : Grace à une boucle FOR , affichez la liste des prénoms
* du tableau ci -dessus dans la console, ou sur votre page.
 */
var prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Hugo', 'Jacques'];

console.log(prenoms)
let nb = prenoms.length // en nommant la variable avant c'est + rapide/performant
for( let i = 0 ; i <= nb ; i++) {
    console.log(prenoms[i]);
}
console.log('------');

var j = 0
while(j < prenoms.length){
    console.log(prenoms[j]);
    j++;
}
console.log('------');

    //-- Avec la boucle forEach
    // --> Attention à la performance de lecture par le navigateur
    prenoms.forEach(AfficheUnPrenom);
    function AfficheUnPrenom(valeur,i) {
        console.log(i + ' ' + prenoms);
    }


