/*-------------------------------
 LES SELECTEURS D'ENFANTS jQUERY
--------------------------------*/


$(function() {
    l = e => console.log(e);

    // Je souhaite sélectionner toutes les divs de ma page
    l($('div'));
    
    // Je souhaite sélectionne la balise nav de ma page
    l($('nav'));

    // Je souhaite sélectionner tous les élements descendants directs (enfants)qui sont dans "nav
    l($('#menu').children());

    //  Parmi ces descendants, je veux uniquement l'élément ul
    l($('#menu').children('ul'));

    // Je souhaite récupérer tout les éléments li
    l($('#menu').children('ul').children());
    l($('#menu').children('ul').find('li'));

    //  Je souhaite récupérer uniquement le 2e élémenrts de mes li
    l($('#menu')).fin('li').eq(2)

    //  Je souhaite connaitre le voisin immediat de mon "menu"
    l($('#menu').next());
    l($('#menu').next().next()); // Le voisin du voisin
    l($('#menu').prev()); // Le voisin d'avant

    // LES PARENTS
    l($('#menu').parent());



});
