
$(function() {

       
       $('#MonFormulaire').on('submit', function(e) {
        e.preventDefault();

        $(this).replaceWith(' <p><h1>Bonjour, voici les données enregistrées : </h1><br><br>  ' + 'Nom et Prénom: ' + $('#fullname').val() + '<br>' + 
        'Email : ' + $('#email').val()  + '<br>'+
        'Tél. : ' + $('#tel').val() + '<br>'+
        'Objet : ' + $('#sujet').val() +'<br>'+
        'Votre Message : ' +$('#message').val() + '</p>' );
        });
    
});