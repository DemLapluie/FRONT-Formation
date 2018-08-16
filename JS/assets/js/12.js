/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
|                  LE DOM                 |
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* 
Le DOM est une interface de développement en JS pour HTML. 
Grâce au DOM, je vais être en mesure d'accéder ou modifier mon HTML.

L'objet "document": c'est le point d'entrée vers mon contenu HTML.

Chaque page chargée dans mon navigateur à un objet "document"
*/

/*
 * Comment faire pour récupérer les différentes informations de ma page HTML ? 
 */

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

        /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        |        document.getElementById          |
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        /* document.get ElementById() est une fonction qui va permettre de récupérer un élément HTML à partir de son identifiant unique : ID */

var bonjour = document.getElementById('bonjour');

        /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        |     document.getElementByClassName      |
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        /* document.getElementByClassName() est une fonction qui va permettre de récupérer un élément (ex: une liste)HTML à partir de leur classe. */

var contenu = document.getElementsByClassName('contenu');

        /* Renvoie un tableau JS avec mes éléments HTML (on parle de "Collection" HTML)

         /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        |     document.getElementByTzgName      |
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        /* document.getElementByClassName() est une fonction qui va permettre de récupérer un élément (ex: une liste)HTML à partir de leur * nom de balise. */
    
var span = document.getElementsByTagName("span");
console.log(span);
