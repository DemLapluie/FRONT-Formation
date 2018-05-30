
// -- Déclarer un Tableau Indexé (avec des indices numériques).

var monTableau = [];
var myArray = new Array;

monTableau[0] = "Hugo"
monTableau[1] = "Demmy"
monTableau[2] = "Charlotte"

console.log(monTableau); //-- Afficche tte les valeurs du tableau
console.log(monTableau[1]); // -- Affiche Demmy
console.log(monTableau[2]); // -- Affiche Charlotte

var NosPrenoms = [ "Sylvain", "Wahib","Marine", "Robin", "Julien", "Nicolas" ];
console.log(NosPrenoms);

// -- Déclarer et Affecter des valeurs à un Objet ( association de chaines de caractères (strings) avec des valeurs)

var Coordonnee = {
    prenom :"Demmy",
    nom : "ONDEE",
    age : 28
};

console.clear();

console.log(Coordonnee);
console.log(Coordonnee['prenom']);
console.log(Coordonnee.nom);

// -- Archiver les coordonnées de plusieurs personnes

/** tableau indexé */

var AnnuaireDesApprenants = [
    "Hugo",
    "Charlotte",
    "Robin"
]

console.log(AnnuaireDesApprenants)

/** tableaux imbriqués avec indexs et objets * C'est le format JSON **/

var AnnuaireDesApprenants = [
    ["Demmy", "ONDEE", "xx xx xx xx xx"],
    "Charlotte" ,
    {prenom: "Robin", nom:"TOURNIER", tel: "xx xx xx xx 89"},
    {prenom: "Nicolas", nom:"STAUDRE", tel: "xx xx xx xx 12"}
]

console.log(AnnuaireDesApprenants)

AnnuaireDesApprenants[0][0]
AnnuaireDesApprenants [0][0]
AnnuaireDesApprenants [3].prenom.nom.tel,
AnnuaireDesApprenants [4].prenom.nom.tel,;

/** EXEMPLE */

/** Exemple avec un tableau 3D **/

var Contacts = [
    {
        prenom: "Hugo",
        nom: "LIEGEARD",
        coordonnees: {
            email: "wf3@hl-media.fr",
            adresse: {
                ville : "Ducos",
                cp: 97224,
                region: "Martinique",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            },
            tel: {
                fixe: "+ 596 596 108 328",
                fax: "+596 596 108 632",
                port: "+33 783 97 15 15"
            }
        }
    },
    {
        prenom: "Rodrigue",
        nom: "NOUEL",
        coordonnees: {
            email: "wellcommunication@gmail.com",
            adresse: {
                ville : "Fort-de-France",
                cp: 97200,
                region: "Martinique",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            },
            tel: {
                fixe: "+ 596 596 XX XX XX",
                fax: "",
                port: "+596 696 07 04 34"
            }
        }
    },
    {
        prenom: "Robin",
        nom: "TOURNIER",
        coordonnees: {
            email: "robin.tournier@gmail.com",
            adresse: {
                ville : "Paris",
                cp: 75016,
                region: "Ile-de-France",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            },
            tel: {
                fixe: "",
                fax: "",
                port: "+33 XX XX XX XX"
            }
        }
    },
];

console.log(Contacts);
console.log(Contacts[0].coordonnees.adresse.pays.nom);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
|             AJOUTER UN ELEMENT
                DANS UN TABLEAU            |
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    var Couleurs = [ "Rouge", "Jaune", "Verte"];

    // -- Si je souhaite ajouter un élément dans mon tableau
    // -- Je fais appel à la fonction push
    
console.clear();
console.log(Couleurs);
Couleurs.push("Orange");
Couleurs.push("Bleu");
console.log(Couleurs);

// -- NB : La fonction unshift() permet d'ajouter un ou plusieurs éléments en début de tableau

Couleurs.unshift("Bleu")

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
|             RECUPERER ET SORTIR 
             LE DERNIER ELEMENT          |
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/**
 * La Fontion pop() me permet de supprimer un ou plusieurs éléments (situer à al fin du tableau) de mon tableau et d'en récupérer la valeur. je peux accessoirement récu^pérer cette valeur dans une variable.
*/

var MonDernierElement = Couleurs.pop();
console.log(Couleurs)
console.log(monDernierElement)

/**
 * La même chose est possible avec le premier élément en utilisant shift()
 * La fonction splice() vous permet de faire sortir un ou plusieurs éléments.
 */

 document.write(
     DebutDePhrase + DateDuJour.getDate()/ '/' + (DateDuJour.getMonth() + 1) + '/' + DateDuJour.getFullYear()
    )

