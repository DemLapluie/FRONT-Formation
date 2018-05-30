alert('Hello, Tu es sur la page de Demmy')
alert('Bienvenue à toi!')

// 2 slash pour faire un commentaire uniligne

/* Ici, je peux faire un commentaire sur plusieurs ligne */

// -- 1 : DECLARER UNE VARIABLE JS

var Prenom; 

// -- 2 : AFFECTER UNE VALEUR

Prenom ="Demmy";

// -- 3 : AFFICHER LA VALEUR DE MA VARIABLE DANS LA CONSOLE

console.log(Prenom);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
|      LES TYPES DE VARIABLES           |
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/   

//-- Ici, type of me permet de connaitre le type de la variable.
console.log(typeof Prenom);

//-- Déclaration et Affection d'un NB.
var Age = 24

//-- Afficher dans la console.
console.log(Age)

//-- Afficher dans la console le type de la variable.
console.log(typeof Age);

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    |      LA PORTEE DES VARIABLES           |
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
    Les variables déclarées/paramétrées directement à la racine du fichiers js sont appelées variables GLOBALES. 
    --> Elles sont disponibles dans l'ensemble de votre document, y compris dans les fonctions.

    Les variables déclarées à l'intérieur d'une foncton sont appelées variables LOCALES.
    --> Elles sont disonibles UNIQUEMENT dans le scope de la fonction.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// -- Les variables de type FLOAT
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale)

// -- Les Booléens (TRUE or FALSE)

var unBooleen = false; // ou TRUE
console.log(typeof unBooleen);

// -- Les Constantes

/**
 * La déclaration CONST  (opposée à var) permet de créer une constante accessible uniquement en lecture.
 * Sa valeur ne pourra pas être modifée par des réaffections ultérieures.
 * Une constante ne peut pas être déclarée à nouveau.
 * 
 * Généralement par convention, les contantes sont en MAJUSCULE
 */

 const HOST = "localhost";
 const USER = "root";
 const PASSWORD = "mysql";

// USER ="Demmy"; // --> Ce n'est pas compréhensible pour la console! : Uncaught TypeError: Assignment to constant variable.
 
     /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    |             LA MINUTE INFO             |
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
    Au fur et à mesure que l'on affecte ou ré-affecte des valeurs à une variable, celle-ci prend la nouvelle valeur et le nouveau type!
    
    En JavaScript (ECMA5 Script) ; Les variables sont auto-typées.

    Pour convertir une variable de type NUMBER en STRING  et inversement, je peux utiliser les fonctions natives de JavaScript.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

var unNombre ="24";
console.log(unNombre);
console.log(typeof unNombre);

/**
 * La fonction parseInt() pour retourner un Entier à partir d'une chaine de caractère.
 */

 unNombre = parseInt(unNombre)

 // -- je ré-affecte une valeur à ma variable

 unNombre = "12.55"
 console.log(unNombre);
 console.log(typeof unNombre)

 unNombre = "12.55"
 console.log(unNombre);
 unNombre = parseFloat(unNombre)

// -- Conversion d'un Nombre en string avec toString()

unNombre = 10;
var monNombreDeTypeString = unNombre.toString()
console.log(typeof unNombre);
console.log(typeof monNombreDeTypeString);