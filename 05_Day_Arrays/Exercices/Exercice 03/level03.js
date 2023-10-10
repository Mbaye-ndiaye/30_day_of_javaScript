//Voici un tableau de 10 âges d’élèves :

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort();
console.log(ages);
console.log(Math.min(...ages));
console.log(Math.max(...ages));
 let ageMin = ages.indexOf(19);
 let ageMax = ages.indexOf(26)
 console.log(ageMin);
 console.log(ageMax);

// var milieu1 = '';
// // var milieu2 = '';
// console.log(ages.length / 2);

/*Trouvez l'âge médian 
(un élément du milieu ou deux éléments 
    du milieu divisés par deux)*/

    const initialValue = 0;
    const sumWithInitial = ages.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    
    console.log(sumWithInitial);
    console.log(ages.length);

const moyenn = sumWithInitial / 10;
console.log(moyenn);