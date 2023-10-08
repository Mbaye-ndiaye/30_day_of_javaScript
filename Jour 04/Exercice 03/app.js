let month = prompt('Entrez un mois')
let nombDay = month.toLowerCase();

switch (nombDay) {
   case 'january':
       console.log('January has 31 days.');
       break;
       case 'february':
       console.log('February has 28 days.');

       break;
   default:
       console.log('is not a month');
}