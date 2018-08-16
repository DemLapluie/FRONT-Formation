/*

OBJECTIF : A partir d'une liste de contacts, être en mesure de récupérer un contact et d'afficher le détail de ses informations.

CONSIGNE :

	// Un internaute doit pouvoir rechercher un contact sur la base de son Username, Email, Phone ou Name
	// Le résultat des membres correspondant s'affiche ensuite dans une liste en dessous du champ de recherche.

    ETAPE 1. Mettre en Place le HTML et le CSS nécessaire pour rechercher un contact.
        Ex. Un champ input-text, et/ou un bouton pour lancer la recherche.
        
    ETAPE 2. Récupérer le Flux JSON : https://jsonplaceholder.typicode.com/users et être en mesure de récupérer la fiche d'un utilisateur par rapport a son username ou son email, ou son téléphone ou son Name. 
	
	BONUS : Trouver une solution grâce au Regex permettant de rechercher tous les utilisateurs correspondant.
    
    ETAPE 3. Afficher en HTML et CSS uniquement les informations de base : Nom, Prénom, Email, Téléphone.
    
    
*/

$.ajax('https://jsonplaceholder.typicode.com/users')
.done(function(utilisateurs){
    // console.log(utilisateurs);

    for (let i; i<utilisateurs.length; i++){
    console.log(utilisateurs[i].email)
    };
})



$(function(){

        $('#search').on('change',function() {
        let search =  $(this).val();
        
        $.ajax('https://jsonplaceholder.typicode.com/users')
            .done(function(utilisateurs){
                console.log(utilisateurs)

                for (let i = 0; i<utilisateurs.length; i++){
                    let username = utilisateurs[i].username;
                    let email = utilisateurs[i].email;
                    let phone = utilisateurs[i].phone;
                    let name = utilisateurs[i].name;
                                
                    if(search===username || search===name || search===phone || search===email ){
                        $(`
                            <div class="membre">
                            <div class="membre_informations">
                                <p>Nom Complet :${name} </p>
                                <p>Username : ${username}</p>
                                <p>Email : ${email}</p>
                                <p>Téléphone : ${phone}</p>
                            </div>
                            </div>
                            `).appendTo('.resultat'); 
                            
                        }else break
                                
                };              
            });
    });
})


// $(function(){
//                 $.ajax('https://jsonplaceholder.typicode.com/users')
//                 .done(function(utilisateurs) {
                
//                     console.log(utilisateurs);
//                     var recherche = $('#search').on('input',function() {
//                     let search =  $(this).val();
//                      });
                    
//                     for (let i; i<utilisateurs.length; i++){
//                         if(recherche = true){
//                             $(`
//                             <div class="membre">
//                             <div class="membre_informations">
//                                 <p>Nom Complet :</p>
//                                 <p>Username :</p>
//                                 <p>Email :</p>
//                                 <p>Téléphone :</p>
//                             </div>
//                             </div>
//                             `).appendTo('.resultat');    
//                         }else break
//                     }  
//                 });
//     })






