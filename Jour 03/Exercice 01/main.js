// declaration des variables

let firstName = 'Alkaly';
let lastName = 'Badji';
let country = 'senegal';
let city = 'dakar';
let age = 25;
let isMarried = false;
//verifier les types de donnees
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);


let num = '10';
let num2 = 10;
console.log('10' === 10);
console.log('10' == 10);

console.log(parseInt('9.8') == 10);

let number = 6;
let number2 = 3;
// valeur veridique
console.log(6 > 3 );
console.log(3 <  6);
console.log(6 !== 3 );

// valeur fausse
console.log(3 > 6);
console.log(3 < 6 && 6 > 3);
console.log(3 == 6);

console.log(4 < 3);       // false
console.log(4 >= 3 );    // true
console.log(4 <= 3);      // false
console.log(4 == 4);      // true
console.log(4 === 4);     // true
console.log(4 != 4);      // false
console.log(4 !== 4);     // false
console.log(4 != '4');    // false
console.log(4 == '4');    // true
console.log(4 === '4');   // false

// longueur des lettres 
let py = 'python';
let jar = 'jargon';
console.log(py.length);
console.log(jar.length);
console.log(jar > py);


console.log(4 > 3 && 10 < 12 );  // true
console.log(4 > 3 && 10 > 12);    // false
console.log(4 > 3 || 10 < 12);    // true
console.log(4 > 3 || 10 > 12);    //true
console.log(!(4 > 3) );           // false
console.log(!(4 < 3));            // true
//  console.log(!(FAUX));             // false
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4'));        // true

let nom = 'Python'
let num3 = 'Dragon'
console.log(nom.includes('on'));
console.log(num3.includes('on'));

const an = new Date();
const year = an.getFullYear();
const month = an.getMonth() + 1;
const anneeActuel = an.getDate();
const day = an.getDay();
const hours = an.getHours();
const minutes = an.getMinutes();
const allSecond = Date.now()
console.log(year, month, anneeActuel, day, hours, minutes, allSecond);