/*------------------------
 LES SELECTYEURS jQUERY
 -----------------------*/

// -- Format : $('selecteur');
// -- En jQuery, tous les selecteurs CSS sont disponibles ...

$(function() {
    // -- DOM READY !
    l = e => console.log(e)

    // -- Sélectionner toutes les balises SPAN ! 

    //  En JS
    l( document.getElementsByTagName('span'));

    // En JQ
    l( $('span'));

    // -- Selection Menu grâce à son ID

       //  En JS
       l( document.getElementsById('menu'));

       // En JQ
       l( $('#menu'));

    // -- Selection Menu grâce à sa class

       //  En JS
       l( document.getElementsByClassName('MaClasse'));

       // En JQ
       l( $('.MaClasse'));

    // --Sélectionner un Attribut

    l($('[href="https://www.google.fr"]'))

});