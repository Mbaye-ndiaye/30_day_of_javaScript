//syntax
localStorage.setItem('key', 'value')
//Stockage de la chaîne dans un localStorage
localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
console.log(localStorage)
//Storage {firstName: 'Asabeneh', length: 1}
//Stockage du numéro dans un stockage local
localStorage.setItem('age', 200)
console.log(localStorage)
 //Storage {age: '200', firstName: 'Asabeneh', length: 2}
//Stockage d'un tableau dans un localStorage. Si nous stockons un tableau, un objet ou un tableau d'objets, nous devons d'abord chaîner l'objet. Voir l'exemple ci-dessous.
//const skills = ['HTML', 'CSS', 'JS', 'React']
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)
//Storage {age: '200', firstName: 'Asabeneh', skills: 'HTML,CSS,JS,React', length: 3}
// let skills = [
//   { tech: 'HTML', level: 10 },
//   { tech: 'CSS', level: 9 },
//   { tech: 'JS', level: 8 },
//   { tech: 'React', level: 9 },
//   { tech: 'Redux', level: 10 },
//   { tech: 'Node', level: 8 },
//   { tech: 'MongoDB', level: 8 }
// ]

let skillJSON = JSON.stringify(skills)
localStorage.setItem('skills', skillJSON)
//Stocker un objet dans un localStorage. Avant de stocker des objets dans un localStorage, l'objet doit être chaîne.
const user = {
  firstName: 'Asabeneh',
  age: 250,
  skills: ['HTML', 'CSS', 'JS', 'React']
}

const userText = JSON.stringify(user, undefined, 4)
localStorage.setItem('user', userText)

//syntax
localStorage.getItem('key')
let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skills = localStorage.getItem('skills')
console.log(firstName, age, skills)
 //'Asabeneh', '200', '['HTML','CSS','JS','React']'

let skillss = localStorage.getItem('skills')
let skillsObj = JSON.parse(skills, undefined, 4)
console.log(skillsObj)
['HTML','CSS','JS','React']
// Effacer le stockage local
// La méthode clear effacera tout ce qui est stocké dans le stockage local

localStorage.clear()