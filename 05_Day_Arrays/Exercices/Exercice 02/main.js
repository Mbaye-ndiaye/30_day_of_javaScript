/* 
Supprimez d’abord toutes les ponctuations, 
remplacez la chaîne par un tableau et 
comptez le nombre de mots dans le tableau.
*/

// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// text.replace(/\p{P}/gu, '');

// console.log(text);


//Dans le panier suivant, ajoutez, supprimez, modifiez des articles

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//ajoutez « Viande » au début de votre panier si cela n'a pas déjà été ajouté
shoppingCart.unshift('Viande');
console.log(shoppingCart);
//ajoutez du sucre à la fin de votre panier s'il n'a pas déjà été ajouté
shoppingCart.push('Miel');
console.log(shoppingCart);
//supprimez « Miel » si vous êtes allergique au miel
shoppingCart.pop()
console.log(shoppingCart);
//modifier Thé en « Thé vert »
shoppingCart[3] = 'Thé vert';
console.log(shoppingCart);
/*Concaténez les deux variables suivantes et 
stockez-les dans une variable fullStack.*/

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack);
