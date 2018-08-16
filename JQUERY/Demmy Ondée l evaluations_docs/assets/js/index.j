// Le formulaire contiendra deux champs :

// 1. Un menu déroulant reprenant les prénoms des chats
// 2. Une zone de texte permettant d’expliquer les raisons d’adoptions

// Lors de la validation du formulaire, l’internaute aura obligatoirement sélectionné le nom d’un chat pour que celui-ci soit validé. La zone de texte quant à elle devra contenir au minimum

// 15 caractères.
// En cas de non-validation des champs, les bordures de ceux-ci deviennent rouge. Par
// ailleurs, lorsqu’un champ change, sa bordure reprendra sa couleur par défaut.
// Bonus :
// Remplacer le formulaire par un message de confirmation si les champs sont valides.


        /* -------------------------------------------------
     

        // /**
        //  * Valider Choix du Chat
        // /**Valider la zone de texte
        //  * 
        //  */
        // var validateTel = tel => {
        //     var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
        //     return telReg.test(tel);
        // }

        $(function() {
            
            $("#contact").submit(function(event) {

                $('#contact .invalid-feedback').removeClass('invalid-feedback');
                $('#contact .alert-danger').remove();
                // $('#contact .invalid-feedback').remove();

                let nomduchat   = $('#nomduchat');
                let raison  = $('#raisonadoption');

                // -- Validation de la raison d'adoption
                if(raison.val().length < 15  ) {
                    raison.addClass('invalid-feedback');
                }

                // -- Validation du Nom du Chat
                if( !validateTel( tel.val() ) ) {
                    tel.addClass('invalid-feedback');
                }

                if( $(this).find('.is-invalid').length === 15 ) {

                    $(this).replaceWith(`
                        <div class="alert alert-success" role="alert">
                            Votre contact à bien été transmis !
                            Nous vous répondrons dans les meilleurs délais.
                        </div>
                    `);

                } else {

                    $(this).prepend(`
                        <div class="alert alert-danger" role="alert">
                            Nous n'avons pas été en mesure de valider votre contact. 
                            Vérifiez vos informations.
                        </div>
                    `);

                }

            });

        });
