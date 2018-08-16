/* ~ LA DISPONIBILITE DU DOM ~ 


A partir du moment ou mon DOM,c'est à dire l'ensemble 
de l'arborescence de ma page HTML est complétement 
chargé ; je peux commencer à utilise jQuery.

Je vais mettre l'ensemble de mon code dans une fonction,
cette fonction sera appelée AUTOMATIQUEMENT!!!  par jQuery
lorsque le DOM sera entièrement défini. *
__________________________________________________________*/

jQuery(document).ready(function() {
    // -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS !
    // ...
    // ...
    // ...
})

// -- 2e possibilité:

$(document).ready(function() {
    //  -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS !
    // ...
    // ...
    // ...
})

// -- 3e possibilité:
$(function() {
    // -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS !
})

// -- 4e possibilité:
$( () =>{
    alert('Bienvenue dans ce cours JQUERY !')
})

//  -- En JS : 

document.getElementByID('TexteEnJquery').innerHTML = "<strong>Mon texte en JS </strong>";

// -- En JQ :
$('"TexteEnJquery').html('Montexte en JQ');

