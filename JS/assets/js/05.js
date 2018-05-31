/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
|    INCREMENTATION & DECREMENTATION   |
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var nb1 = 1;

// ### ~ Incrémentation ~ ### //
nb1 = nb1 + 1;
    // -- Ecriture Simplifiée pour incrméneter de 1 systématiquement:
    nb1++; // Raccourci de nb1 = nb1 + 1 --> Par pas de 1

// ### ~ Décrémentation ~ ### //
nb1 = nb1 - 1;
    // -- Ecriture Simplifiée pour décrméneter de 1 systématiquement:
    nb1--; // Raccourci de nb1 = nb1 - 1 --> Par pas de 1

// ### ~ Subtilité ~ ### //

nb1 = 0;
console.log(nb1++); // Le calcul se fait mais se s'affiche pas
console.log(nb1)

nb1 = 0;
console.log(++nb1); // au lieu d'écrier deux comme dans l'exemple d'avant on écrit une!

nb1 = 5;
console.log(nb1++);
console.log(nb1);

nb1 = 5;
console.log(++nb1);