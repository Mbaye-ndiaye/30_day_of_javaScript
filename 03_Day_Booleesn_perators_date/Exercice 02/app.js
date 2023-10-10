// calculer air du triangle

// let base = prompt('Entrez un nombre de base');
// let hauteur = prompt('Entrez un nombre d\'hauteur')

// let aire = (base * hauteur) / 2;

// document.write(`l'aire du triangle est de : ${aire}`)

// primetre du triangle

let a = prompt('Saisir primetre du A')
let b = prompt('Saisir primetre du B')
let c = prompt('Saisir primetre du C')
let primetre =( a + b) + c;
console.log(`Le primetre du triange egal a ${primetre}`);

// aire et primetre du rectangle

let  longueur = 5;
let largeur = 4;

let aireRectangle = longueur * (largeur)

console.log(aireRectangle);

// aire du cercle

let r = 6;
let PI = 3.14
let aireRayon = PI * r * r;
console.log(aireRayon); 


// salaire d'n person par Hours

let hours = prompt('Entrez le nombre d\'heurs');
let ratePerHour = prompt('Saisir la somme par heurs' ); 

let totalSomme = hours * ratePerHour

console.log(` Votre revenu hebdomadaire est ${totalSomme}`);

let nom = 'Mbaye'
if(nom > 7) {
    console.log('Votre nom est long');
} else {
    console.log('votre nom est court');
}

let firstName = 'Babacar';
let lastName = 'Ndiaye';

if(firstName.length > lastName.length) {
    console.log('Ton prénom, Babacar est plus long que ton nom de famille, Ndiaye');
} else {
    console.log('faux');
}

let myAge = 250;
let yourAge = 25;

console.log(`J'ai ${myAge} ans de plus que toi`);
// annee de naissance
let birthDay = prompt('Entrez ton annees de naissance')

const now = new Date()
const year = now.getFullYear() ;

let annee =  year - birthDay;
if(annee >= 18) {
    console.log(`tu a ${annee}  You are old enough to drive`);

} else {
    console.log(`tu as ${annee}  You will be allowed to drive after 3 years.`);
}

// let nombAnnes = prompt('saisir un nombre d\'annees');
//  const ann = Date.now()
// const Seconde = ann.;
  
// const allSecond = nombAnnes * Seconde

// console.log(allSecond);

const heur = new Date();
const years = heur.getFullYear();
const months = heur.getMonth();
const day = heur.getDay();
const hour = heur.getHours();
const minutes = heur.getMinutes();
console.log(years, months, day, hour, minutes);



