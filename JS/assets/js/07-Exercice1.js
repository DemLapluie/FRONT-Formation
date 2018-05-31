/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */

function Prenom(année,message,message2){
    ObjetDate = new Date();
    année = ObjetDate.getFullYear();
    message = prompt("What's your name ?","<Saisir votre Prénom>");
    alert('Hello, '+ message + '. How old are you ?',"<Saisir votre âge>");
    message2 = parseInt(prompt('Saisir son âge'));
    alert('Tu es donc né(e) en ' + (année-message2) + ".");
    document.write('<p>Bonjour ' + message + ', tu as ' + message2 + ' ans !</p>');
};

Prenom()

// Prendre l'habitude de faire un 
// console.log(prenom)
// console.log(typeof prenom)
