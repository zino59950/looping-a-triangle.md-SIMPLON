// Boucle pour afficher le triangle
for (let i = 1; i <= 7; i++) {
    let line = ''; // Crée une chaîne vide pour stocker la ligne actuelle du triangle
    for (let j = 1; j <= i; j++) {
        line += '#'; // Ajoute un '#' à la ligne à chaque itération
    }
    console.log(line); // Affiche la ligne dans la console
}

// Trouver la longueur d'une chaîne
const abc = 'abc';
console.log(abc.length); // Résultat : 3 (car la chaîne 'abc' a 3 caractères)
