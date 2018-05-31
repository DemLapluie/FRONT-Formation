
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
|            LES FONCTIONS              |
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/**
 * Déclarer une fonction
 * NB: Cette fonction ne retourne acune valeur et neprend pas de paramètre ou arguments
 */
function Bonjour () {
    /**
     * Lorsq de l'appel de cette fonction, les instructions ci-dessous seront executées..
     */
    alert( 'Bonjour !');
}

/** Je vais  appeler ma fonction "Bonjour" et déclencher ses instructions. */
Bonjour();  // Function NOmDeMaFonction (Argument1, Argument2, Argumentn){ les instructions...}

/** Déclarer une fontction qui prend una rgument (un argument) */

function ditBonjour(Prenom,Nom){
    document.write("<p>Bonjour <strong>" + Prenom + " " + Nom + "</strong> ! </p>")
}

// Appeler/ Utiliser une fonction avec des arguments
ditBonjour("Demmy","ONDEE");

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
EXERCICE:
Créez une fonction permettant d'effectuer l'addition de deux nombres (nb1 et nb2) passés en paramètre.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/**1 */
function Addition(nb1,nb2){
    var resultat;
    résultat = nb1+nb2;
    document.write(
    "<p>Exemple de la fonction addition <br> nb1 + nb2 = " + résultat +" </p>")
}
Addition(5,5);
/**2 */
function addition(nb1,nb2){
    return nb1+nb2;
}
document.write(
    "<p>Exemple de la fonction addition <br> nb1 + nb2 = " + addition(5,6) +" </p>")