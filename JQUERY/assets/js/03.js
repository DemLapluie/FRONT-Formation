/*-----------------------------------
  LE CHAINAGE DE METHODE EN JjQuery
-----------------------------------*/

$(function(){

    console.log( $('div'));

    //  -- Je souhaite cacher toute les div de ma page HTML
    $('div').hide('slow',function() {
        alert('Fin du hide !');
   

    /**
     * uNz foiq que la méthode hide() est terminé, mon alerte peut s'executer !
     * NB : La fonction s'executera pour l'ensemble des élements du sélecteur.
     * 
     */

    $('div').css('background','yellow');
    $('div').css('color','red');
    $('div').show('show');
    });

});

$('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);
$('p'.hide(1000).css({'color':'green','font-size':'20px'}).delay(2000).show(500));