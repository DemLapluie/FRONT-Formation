            /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            |             LES EVENEMENTS              |
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/**
 * Les Evenements vont me permettre de déclencher une fonctions, c'est à dire une série d'instructions; suite à une action de mon utilisation.
 * 
 * Objectif: Être en mesure de capture ces évènements afin d'exécuter une fonction.
 */

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
|         Les types évènements           |
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/** 
 * ==> MOUSE (Souris)
 *  click      : Au clic sur un élément
 *  mouseenter : La souris passe au dessus de la zone d'un =élement
 *  mouseleave : la souris sors de cette zone. 
 * 
 * ==> KEYBOARD (clavier)
 *  keyup   : une touche du clavier a été relachée
 *  keydown : une touche est enfoncée
 * 
 * ==> window (fenetre)
 *  scroll : défilement de la fenetre
 *  resize : redimentionnement de la fenetre
 * 
 * ==> form (formulaire)
 *  change : pour les éléments <input>, <select> et <textarea>
 *  submit : à l'envoi (soumission) du formulaire
 *  input : pour capter la saisie d'un utilisateur sur un champ <input>
 * 
 */

 /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
|         Les écouteurs évènements         |
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


/**
 * 
 * Pour attacher un évènement à un élément, ou autrement dit, pour déclarer un écouteur d'évènement qui se chargera de déclencher une foncton, je vias utiliser la syntaxe suivante: 
 * 
 */

 var p = document.getElementById('MonParagraphe')

 //-- je souhaite que mon paragraphe soit rouge au clic de la souris.

 function changerLaCouleurEnRouge () {
     p.style.color = "red";
 }
 function retourALaCouleur() {
     p.style.color = "grey"
 }

 p.addEventListener('click',changerLaCouleurEnRouge);
 p.addEventListener('mouseleave',retourALaCouleur);

 /* ------------------------------------------------\
                  Exercice Pratique
A l'aide de javascript créer un champ "input" type texte avec un ID unique. 
Affichez ensuite dans une alerte, la saise de l'user.*/

var inputText = document.createElement('input');
inputText.id = "usertext";
inputText.type = "text";
inputText.placeholder = "Saisir votre contenu";

console.log(inputText)

document.body.appendChild(inputText);

function Alert (){
    alert(inputText.value);};

inputText.addEventListener('change',Alert);

