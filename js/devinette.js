/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

// Définition des constantes
const essaiMax = 6;

// On intialise les variables
let essai = 1;
let victoire = false;

// Boucle des essais
while (essai<=essaiMax) {
	// Invite de saisie de l'essai
	let saisie = Number(prompt("Essai n°"+essai+", entrez un nombre compris entre 1 et 100 :"));
	// Affichage Saisie dans la console
	console.log("Essai n°"+essai+" : "+saisie);
	// Test de condition sur la saisie
	if ((saisie < 1) || (saisie > 100)) {
		// Si la saisie est en dehors de la plage [1,100], on affiche qu'il doit saisir un nombre compris entre 1 et 100 et qu'il a perdu un essai
		console.log(saisie + " n'est pas compris entre 1 et 100, vous avez perdu un essai !");
	}
	else {
		// Sinon la saisie est dans l'intervalle et on compare la saisie avec la solution
		if (saisie == solution) {
			// Si la saisie est la solution, on affiche gagné et on sort de la boucle
			console.log("Gagné, la solution était bien : "+saisie);
			victoire = true;
			break;
		}
		else if (saisie < solution) {
			// Si la saisie est plus petite que la solution, on affiche trop petit
			console.log(saisie+" est trop petit !");
		}
		else {
			// Sinon la saisie est plus grande que la solution, on affiche trop grand
			console.log(saisie+" est trop grand !");
		}
	}
	// On incrémente les essais
	essai+=1;
}
// On regarde si la sortie est victorieuse ou non
if (victoire) {
	// on affiche le nombre d'essai pour gagner	
	// Petit Plus : le test conditionnel permet d'afficher un s en fonction du nombre d'essais
	console.log("Vous avez gagné en "+essai--+((essai == 0) ? " essai." : " essais."));

}
else {
	// on affiche qu'il a fait trop d'essais
	essai-=1;
	console.log("Vous avez eu votre chance avec "+essai+" essais");
	console.log("La solution était : "+solution);
}



