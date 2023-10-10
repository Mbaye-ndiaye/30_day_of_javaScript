const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];

   const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
//Déclarez un tableau vide ;
  const arr = [];
  //Déclarez un tableau avec plus de 5 éléments
  const tab1 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  //Trouvez la longueur de votre tableau

  console.log(tab1.length);

 // Récupère le premier élément, l'élément du milieu et le dernier élément du tableau

console.log(tab1[0]);
console.log(tab1[3])
let tab0 = tab1.length - 1;
console.log(tab1[tab0]);

/*
Déclarez un tableau appelé MixedDataTypes , 
placez différents types de données dans le 
tableau et recherchez la longueur du tableau. 
La taille du tableau doit être supérieure à 5
*/

const MixedDataTypes = ['Html', 20, true, 'css', 345, 'false']
console.log(MixedDataTypes.length);
/*
Déclarez une variable de tableau nommée 
itCompanies et attribuez les valeurs 
initiales Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon
*/
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon']
//Imprimez le tableau en utilisant console.log()
console.log(itCompanies);
//Imprimer le nombre d'entreprises dans le tableau
console.log(itCompanies.length);
//Imprimer la première entreprise, la deuxième et la dernière entreprise
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);
//Imprimez chaque entreprise
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

/*
Vérifiez si une certaine entreprise existe 
dans le tableau itCompanies. Si elle existe
 retournez l'entreprise sinon retournez 
 une entreprise introuvable
*/

const entreprise = itCompanies.indexOf('telegram')

if (entreprise === 0) {
    console.log('l\'entreprise existe dans le tableau' );

} else {
    console.log('l\'entrprise est introuvable');
}
   
// Filtrez les entreprises qui ont plus d'un « o » sans la méthode de filtrage


//Trier le tableau à l'aide de la méthode sort()

// itCompanies.sort()
// console.log(itCompanies);

//Inversez le tableau en utilisant la méthode reverse()
// itCompanies.reverse();
// console.log(itCompanies);

//Séparez les 3 premières entreprises du tableau
console.log(itCompanies.join(' '));

//Séparez les 3 dernières entreprises du tableau
//Éliminez la ou les sociétés informatiques intermédiaires du tableau.
// console.log(itCompanies.splice(1, 2));
// console.log(itCompanies);

//Supprimez la première société informatique du tableau
// console.log(itCompanies.splice(1,1));


//Supprimer la dernière société informatique du tableau
// console.log(itCompanies.splice(2,1));

//Supprimer toutes les sociétés informatiques
console.log(itCompanies.splice(1,2));