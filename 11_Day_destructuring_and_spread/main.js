//Destruction de tableaux
  //const numbers = [1, 2, 3]
  //let [numOne, numTwo, numThree] = numbers

  console.log(numOne, numTwo, numThree)
  //1 2 3
  const nam = ['Asabeneh', 'Brook', 'David', 'John']
  //let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

  console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)
//Asabeneh Brook David John
  const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
  let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

  console.log(e,pi,gravity, bodyTemp, boilingTemp)
//2.72 3.14 9.81 37 100
const fullStacks = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
//const [frontEnd, backEnd] = fullStack

console.log(frontEnd)
console.log(backEnd)
["HTML", "CSS", "JS", "React"]
["Node", "Express", "MongoDB"]

  const numbers = [1, 2, 3]
  let [numOne, , numThree] = numbers //2 is omitted

  console.log(numOne, numThree)
//1 3
  const name = ['Asabeneh', 'Brook', 'David', 'John']
 // let [, secondPerson, , fourthPerson] = names // first and third person is omitted

  console.log(secondPerson, fourthPerson)
//Brook John

const names = [undefined, 'Brook', 'David']
let [
  firstPerson = 'Asabeneh',
  secondPerson,
  thirdPerson,
  fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)  
//Asabeneh Brook David John

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)
//1 2 3
//[4, 5, 6, 7, 8, 9, 10]

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log(country, city)
}
//Finland Helsinki
//Sweden Stockholm
//Norway Oslo
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for(const [first, second, third] of fullStack) {
console.log(first, second, third)
}
//HTML CSS JS
//Node Express MongoDB

const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)
//20 10 200 undefined
const rectanglees = {
  width: 20,
  height: 10,
  area: 200
}
let { width: w, height: h, area: a, perimeter: p } = rectangle

console.log(w, h, a, p)
//20 10 200 undefined
//Si la clé n'est pas trouvée dans l'objet, la variable sera affectée à undefined. Parfois, la clé peut ne pas être dans l'objet, dans ce cas nous pouvons donner une valeur par défaut lors de la déclaration. Voir l'exemple.

const rectangles = {
  width: 20,
  height: 10,
  area: 200
}
//let { width, height, area, perimeter = 60 } = rectangle

console.log(width, height, area, perimeter) //20 10 200 60
//Let us modify the object:width to 30 and perimeter to 80
const rectangls = {
  width: 30,
  height: 10,
  area: 200,
  perimeter: 80
}
//let { width, height, area, perimeter = 60 } = rectangle
console.log(width, height, area, perimeter) //30 10 200 80


// Without destructuring
const rect = {
  width: 20,
  height: 10
}
const calculatePerimeter = rectangle => {
  return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect)) // 60
//with destructuring
//Another Example
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// Let us create a function which give information about the person object without destructuring

const getPersonInfo = obj => {
  const skills = obj.skills
  const formattedSkills = skills.slice(0, -1).join(', ')
  const languages = obj.languages
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
    obj.age
  } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}

console.log(getPersonInfo(person))


const calculatePerimeters = ({ width, height }) => {
  return 2 * (width + height)
}

console.log(calculatePerimeter(rect)) // 60
// Let us create a function which give information about the person object with destructuring
const getPersonInfos = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages
}) => {
  const formattedSkills = skills.slice(0, -1).join(', ')
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}
console.log(getPersonInfo(person))
/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/

const todoList = [
{
  task:'Prepare JS Test',
  time:'4/1/2020 8:30',
  completed:true
},
{
  task:'Give JS Test',
  time:'4/1/2020 10:00',
  completed:false
},
{
  task:'Assess Test Result',
  time:'4/1/2020 1:00',
  completed:false
}
]

for (const {task, time, completed} of todoList){
  console.log(task, time, completed)
}
//Prepare JS Test 4/1/2020 8:30 true
//Give JS Test 4/1/2020 10:00 false
//Assess Test Result 4/1/2020 1:00 false

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//let [num1, num2, num3, ...rest] = nums
​
console.log(num1, num2, num3)
console.log(rest)
//1 2 3
[4, 5, 6, 7, 8, 9, 10]
const countriess = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries

console.log(gem)
console.log(fra)
console.log(nordicCountries)
Germany
France
["Finland", "Sweden", "Norway", "Denmark", "Iceland"]
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)
[0, 2, 4, 6, 8, 10]
[1, 3, 5, 7, 9]
[0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]
const frontEnd = ['HTML', 'CSS', 'JS', 'React']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStackk = [...frontEnd, ...backEnd]

console.log(fullStackk)
["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"]


const user = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

const copiedUser = {...user}
console.log(copiedUser)
//{name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}


const users = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

const copiedUsers = {...user, title:'instructor'}
console.log(copiedUser)
//{name: "Asabeneh", title: "instructor", country: "Finland", city: "Helsinki"}

const sumAllNums = (...args) => {
  console.log(args)
}

sumAllNums(1, 2, 3, 4, 5)
[1, 2, 3, 4, 5]
const sumAllNum = (...args) => {
  let sum = 0
  for (const num of args){
    sum += num
  }
  return sum
  
}

console.log(sumAllNums(1, 2, 3, 4, 5))
//15