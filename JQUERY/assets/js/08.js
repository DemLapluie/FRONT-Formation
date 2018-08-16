// -- Initialisation de jQuery (DOM READY)
$(function() {
    
    // -- Déclaration de Variables
    var CollectionDeContacts = [];

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    // -- Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
    function ajouterContact(UnContact) {}

        // -- Ajouter un contact dabs le tableau de Contacts (CollectionDeContacts)

        // -- Mettre à jour le tableau HTML

        // -- Réinitialiser le formulaire

        // -- Afficher une notification

    // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0 !
    function reinitialisationDuFormulaire() {}

    // -- Affichage d'une Notification
    function afficheUneNotification() {}

    // -- Vérification de la présence d'un Contact dans Contacts
    function estCeQunContactEstPresent(UnEmail) {}

    // -- Vérification de la validité d'un Email
    // : https://paulund.co.uk/regular-expression-to-validate-email-address
    function validateEmail(email){}

    /* --------------------------------------------------------------
                        TRAITEMENT DE MON FORMULAIRE
    -------------------------------------------------------------- */

    // -- Détection de la soumission de mon Formulaire
    $('#contact').on('submit', function(e) {
    
        // -- Voir le contenu de l'évènement
        console.log(e);
        // -- Stopper la redirection de la page
        e.preventDefault();
        // -- Récupération des champs à vérifier
        let prenom, nom, email, tel;

        let nom     = $('#nom');
        let prenom  = $('#prenom');
        let email   = $('#email');
        let tel     = $('#tel');

        // -- Vérification des informations...
        let mesInformationsSontValides = true;

        var validateTel = tel => {
            var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
            return telReg.test(tel);
        }
        
        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        function estCeQunContactEstPresent() {
            let estPresent = false ;

            for (let i = 0; i< CollectiondeCollectionDeContacts.length;i++){
            if(UnEmail === CollectionDeContacts[i].email) {
                            estPresent = true;
                            break;                   
            } }
        

        // -- Vérification du Prénom

        if (prenom.val().length === 0 ) {
            // -- Le champ est incorrect, car il n'a pas été rempli...
            mesInformationsSontValides = false;
        }

        // -- Vérification du Nom

        if (nom.val().length === 0 ) {
            // -- Le champ est incorrect, car il n'a pas été rempli...
            mesInformationsSontValides = false;
        }

        // -- Vérification du Tel
        if(!validateTel (tel.val())){
            mesInformationsSontValides = false;
        }

        // -- Vérification du Mail
        if(!validateEmail (email.val())){
            mesInformationsSontValides = false;
        }

        // -- Tous est correct, Préparation du Contact
        if(mesInformationsSontValides) {
                    let Contact = {
                        nom     : nom.val(),
                        prenom  : prenom.val(),
                        email   : email.val(),
                        tel     : tel.val()
                    };
  
                }
        // -- Observons dans la console
            console.log(Contact);

        // -- Vérification avec EstCeQunContactEstPresent
        if(!estCeQunContactEstPresent(Email.val())){


//         }
                
//         // -- Ajout du Contact
//             ajouterContact(Contact);

//             } else {                    
//         // -- Alert si contact présent

//             } else {
//         // -- Alert si erreur dans l'un des champs
//         }       

//     );

// }); // -- Fin de jQuery READY !
        }}}},),