const companies = new Set()
console.log(companies)

//Créer un ensemble vide

//Set(0) {}

const language = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages)
  console.log(setOfLanguages)

  //et(4) {"English", "Finnish", "French", "Spanish"}

  //Set est un objet itérable et nous pouvons parcourir chaque élément.

  const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguage = new Set(language)
  
  for (const language of setOfLanguages) {
    console.log(language)
  }

//   English
//   Finnish
//   French
//   Spanish

//Ajouter un élément à un ensemble


const companie = new Set() // creating an empty set
console.log(companies.size) // 0

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 elements in the set
console.log(companies)

const companiess = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}

const compani = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}


//Supprimer un élément d'un ensemble

console.log(companies.delete('Google'))
console.log(companies.size) // 4 elements left in the set

//Vérifier un élément dans l'ensemble

console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true

//Effacer l'ensemble
//Il supprime tous les éléments d'un ensemble.

companies.clear()
console.log(companies)

const languag = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  const langSet = new Set(languages)
  console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
  console.log(langSet.size) // 4
  
  const counts = []
  const count = {}
  
  for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang) // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length })
  }
  console.log(counts)

  [
    { lang: 'English', count: 3 },
    { lang: 'Finnish', count: 1 },
    { lang: 'French', count: 2 },
    { lang: 'Spanish', count: 1 },
  ]

  const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers)

//Union d'ensembles

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let c = [...a, ...b]

// let A = new Set(a)
// let B = new Set(b)
// let C = new Set(c)

console.log(C)

//Intersection d'ensembles

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]

// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter((num) => B.has(num))
// let C = new Set(c)

// console.log(C)

//Différence d'ensembles

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => !B.has(num))
let C = new Set(c)

console.log(C)

//Créer une carte vide

const map = new Map()
console.log(map)

//Création d'une carte à partir d'un tableau

countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map = new Map(countries)
  console.log(map)
  console.log(map.size)

  //Ajouter des valeurs à la carte

  const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)

//Obtenir une valeur de Map

console.log(countriesMap.get('Finland'))

//Vérification de la clé dans la carte

/*Vérifiez si une clé existe dans une carte en utilisant la méthode has . 
Il renvoie true ou false .*/

for (const country of countriesMap) {
    console.log(country)
  }

//   (2) ["Finland", "Helsinki"]
// (2) ["Sweden", "Stockholm"]
// (2) ["Norway", "Oslo"]

for (const [country, city] of countriesMap){
    console.log(country, city)
   }